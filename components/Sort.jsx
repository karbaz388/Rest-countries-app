const Sort = ({ setSort }) => {
  return (
    <div
      className="sort"
      onClick={(e) => {
        document.querySelector('.option-container').classList.toggle('open');
      }}
    >
      <div className="filter">
        Filter by region
        <i className="fa-solid fa-angle-down" />
      </div>
      <div
        className="option-container"
        onClick={(e) => {
          e.stopPropagation();
          document.querySelector('.option-container').classList.remove('open');
        }}
      >
        <p
          onClick={(e) => {
            setSort(`${e.target.innerText}`.toLowerCase());
          }}
        >
          Africa
        </p>
        <p
          onClick={(e) => {
            setSort(`${e.target.innerText}`.toLowerCase());
          }}
        >
          America
        </p>
        <p
          onClick={(e) => {
            setSort(`${e.target.innerText}`.toLowerCase());
          }}
        >
          Asia
        </p>
        <p
          onClick={(e) => {
            setSort(`${e.target.innerText}`.toLowerCase());
          }}
        >
          Europe
        </p>
        <p
          onClick={(e) => {
            setSort(`${e.target.innerText}`.toLowerCase());
          }}
        >
          Oceania
        </p>
      </div>
    </div>
  );
};

export default Sort;
