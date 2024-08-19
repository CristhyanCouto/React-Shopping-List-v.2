import { MouseEventHandler } from "react";
import CreateItemButton from "./createItemButton";

function NavBar() {

    const navLinks = document.querySelector('.nav-links');
    const onToggleMenu: MouseEventHandler<HTMLButtonElement> = () => {
            navLinks?.classList.toggle('top-[-9%]');
        }

    return(
        <header className="bg-white">
        <nav className="flex justify-between items-center w-[92%] mx-auto">
            <div>
                <img 
                    className="w-50"
                    src="https://i.postimg.cc/0NX4HBQv/logo.png" alt="Logo"
                />
            </div>
            <div className="nav-links duration-500 md:static absolute bg-white md:min-h-fit min-h-[60vh] left-0 top-[-100%] md:w-auto w-full flex items-center px-5">
                <ul className="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8">
                    <button onClick={onToggleMenu} className="md:hidden text-3xl cursor-pointer">x</button>
                    <li>
                        <a className="hover:text-gray-500" href="#">Início</a>
                    </li>
                    <li>
                        <a className="hover:text-gray-500" href="#">Projetos</a>
                    </li>
                    <li>
                        <a className="hover:text-gray-500" href="#">Contato</a>
                    </li>
                    <li>
                        <a className="hover:text-gray-500" href="#">Sobre</a>
                    </li>
                </ul>
            </div>
            <div className="flex items-center gap-6">
                <div 
                className="
                flex justify-center items-center">
                    <CreateItemButton />
                </div>

                <button onClick={onToggleMenu} 
                className="md:hidden text-3xl cursor-pointer
                w-14 h-8 bg-gray-300 hover:bg-gray-400 rounded-full
                flex justify-center items-center">=</button>
            </div>
        </nav>
    </header>
    )
};

export default NavBar;