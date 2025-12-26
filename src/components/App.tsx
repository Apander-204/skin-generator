import Header from "./Header";
import Navbar from "./Navbar";
import Choice from './Choice';
import Skin from "./Skin";
import Footer from "./Footer";
import { useState } from "react";
import './App.css';

function App() {

  const [menu, setMenu] = useState<string>("Base");
  const [newLayer, setNewLayer] = useState<string | null>(null);

  return (
    <div>
      <Header />
      <div className="center-app">
        <Navbar setMenu={setMenu}/>
        <Choice menu={menu} setNewLayer={setNewLayer}/>
        <Skin newLayer={newLayer} />
      </div>
      <Footer />
    </div>
  )
}

export default App