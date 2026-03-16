import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

export const useTheme=()=>{
// const [isDark,setDark] = useContext(ThemeContext);
return useContext(ThemeContext)
}