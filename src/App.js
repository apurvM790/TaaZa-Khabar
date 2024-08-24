import Header from "./Components/Header";
import Body from "./Components/Body";
import Footter from "./Components/Footter";
import { HashRouter, Routes, Route } from "react-router-dom";
import Entertainment from "./Components/Entertainment";
import Sports from "./Components/Sports";
import Health from "./Components/Health";
import Technology from "./Components/Technology";
import Business from "./Components/Business";
import codeContext from "./utils/codeContext";
import { useEffect, useState } from "react";
const App = ()=>{

      const [countryCode, setCountryCode] = useState("");


  return <HashRouter>
            <codeContext.Provider value={{countryCode:countryCode,setCountryCode}}>
              <Header/>
              <Routes>
                    <Route path="/" element={<Body />}/>
                    <Route path="/entertainment" element={<Entertainment />}/>
                    <Route path="/sports" element={<Sports />}/>
                    <Route path="/health" element={<Health />}/>
                    <Route path="/technology" element={<Technology />}/>
                    <Route path="/business" element={<Business />}/>
              </Routes>
              </codeContext.Provider>
        <Footter/>
      </HashRouter>

}

export default App;