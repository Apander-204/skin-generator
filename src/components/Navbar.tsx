import type { FC } from "react";
import './Navbar.css';
import OpenMenu from "../icons/open_menu";

interface NavbarProps {
    setMenu: (value: string) => void;
    menu: string;
}

const Navbar:FC<NavbarProps> = ({ setMenu, menu }) => {

    return(
        <div className="menu">
            <div className={menu==="Base" ? "active-menu-item" : "menu-item"} onClick={() => setMenu("Base")}>
                <p>Base</p>
                <OpenMenu />
            </div>
            <div className={menu==="Eyes" ? "active-menu-item" : "menu-item"} onClick={() => setMenu("Eyes")}>
                <p>Eyes</p>
                <OpenMenu />
            </div>
            <div className={menu==="Hair" ? "active-menu-item" : "menu-item"} onClick={() => setMenu("Hair")}>
                <p>Hair</p>
                <OpenMenu />
            </div>
            <div className={menu==="Hat" ? "active-menu-item" : "menu-item"} onClick={() => setMenu("Hat")}>
                <p>Hat</p>
                <OpenMenu />
            </div>
            <div className={menu==="Body" ? "active-menu-item" : "menu-item"} onClick={() => setMenu("Body")}>
                <p>Body</p>
                <OpenMenu />
            </div>
            <div className={menu==="Pants" ? "active-menu-item" : "menu-item"} onClick={() => setMenu("Pants")}>
                <p>Pants</p>
                <OpenMenu />
            </div>
            <div className={menu==="Boots" ? "active-menu-item" : "menu-item"} onClick={() => setMenu("Boots")}>
                <p>Boots</p>
                <OpenMenu />
            </div>
        </div>
    );
}

export default Navbar;