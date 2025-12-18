import Header from "./Header";
import Navbar from "./Navbar";
import Choice from './Choice';
import Skin from "./Skin";
import { useState } from "react";

function App() {

  const [menu, setMenu] = useState<string>("Base");
  const [newLayer, setNewLayer] = useState<string | null>(null);

  return (
    <div>
      <Header />
      <Navbar setMenu={setMenu}/>
      <Choice menu={menu} setNewLayer={setNewLayer}/>
      <Skin newLayer={newLayer} />
    </div>
  )
}

export default App