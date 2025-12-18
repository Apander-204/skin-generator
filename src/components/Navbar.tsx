import type { FC } from "react";

interface NavbarProps {
    setMenu: (value: string) => void;
}

const Navbar:FC<NavbarProps> = ({ setMenu }) => {

    return(
        <>
            <div>
                <button onClick={() => setMenu("Base")}>Base</button>
            </div>
            <div>
                <button onClick={() => setMenu("Hat")}>Hat</button>
            </div>
            <div>
                <button onClick={() => setMenu("Hair")}>Hair</button>
            </div>
            <div>
                <button onClick={() => setMenu("Body")}>Body</button>
            </div>
            <div>
                <button onClick={() => setMenu("Pants")}>Pants</button>
            </div>
            <div>
                <button onClick={() => setMenu("Boots")}>Boots</button>
            </div>
        </>
    );
}

export default Navbar;