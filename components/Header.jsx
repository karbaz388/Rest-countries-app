import { Link } from 'react-router';
import { useTheme } from '../hooks/useTheme';

const Header = () => {
  const [isDark, setDark] = useTheme()
  // if (isDark) {
  //   document.body.classList.add('dark');
  // } else {
  //   document.body.classList.remove('dark');
  // }
  return (
    <header className={`header-container ${isDark ? 'dark' : ''}`}>
      <div className="header">
        <h2 className="title">
          <Link to={'./'}>Where in the world?</Link>
        </h2>
        <p
          onClick={(e) => {
            setDark(!isDark);
            localStorage.setItem('isDarkMode', !isDark);
          }}
          className="dark-mode"
        >
          <i className={`fa-regular fa-${isDark ? 'sun' : 'moon'}`}></i>&nbsp; {isDark ? 'Light' : 'Dark'} Mode
        </p>
      </div>
    </header>
  );
};

export default Header;
