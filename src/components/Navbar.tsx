import type { FC } from "react";
import './Navbar.css';
import OpenMenu from "../icons/open_menu";

interface NavbarProps {
    setMenu: (value: string) => void;
}

const Navbar:FC<NavbarProps> = ({ setMenu }) => {

    return(
        <div className="menu">
            <div className="menu-item" onClick={() => setMenu("Base")}>
                <p>Base</p>
                <OpenMenu />
            </div>
            <div className="menu-item" onClick={() => setMenu("Hat")}>
                <p>Hat</p>
                <OpenMenu />
            </div>
            <div className="menu-item" onClick={() => setMenu("Hair")}>
                <p>Hair</p>
                <OpenMenu />
            </div>
            <div className="menu-item" onClick={() => setMenu("Body")}>
                <p>Body</p>
                <OpenMenu />
            </div>
            <div className="menu-item" onClick={() => setMenu("Pants")}>
                <p>Pants</p>
                <OpenMenu />
            </div>
            <div className="menu-item" onClick={() => setMenu("Boots")}>
                <p>Boots</p>
                <OpenMenu />
            </div>
        </div>
    );
}

export default Navbar;