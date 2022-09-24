import { useContext } from "react";
import { ColorMode, ThemeContext } from "../modules/ThemeProvider";


const Header = () => {
    const { colorMode, setColorMode } = useContext(ThemeContext);
    console.log(colorMode)
    return (
      <div className="bg-white dark:bg-black h-10 w-full py-7 px-5 transition-colors duration-500">
        <main className="flex flex-row h-8 justify-between">
            <div className=" dark:text-white transition-all duration-500">Planify</div>
            <div className="flex flex-row h-8 gap-3 transition-all duration-500">
                <img className="w-8 h-8 dark:invert ransition-all duration-500" src="/images/profile.png"/>
                <button className="w-8 h-8 dark:invert transition-all duration-500" onClick={() => {
                    setColorMode(colorMode === ColorMode.dark ? ColorMode.light : ColorMode.dark)
                    }}>{colorMode === ColorMode.dark ? '' : ''}
                    <img src="/images/dark.png"/>
                </button>
            </div>
        </main>
      </div>
    );
  }
  export default Header;