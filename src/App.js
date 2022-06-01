import './App.css';
import {useState, createContext} from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import FrontPage from "./Pages/FrontPage/FrontPage";
import NavBar from "./Components/NavBar/NavBar";
import GamesPage from "./Pages/GamesPage/GamesPage";
import PacmanLoader from "react-spinners/PacmanLoader";
import React from "react";
import {css} from "@emotion/react";


export const AppContext = createContext();


function App() {

    const [API, setAPI] = useState("");
    const [loading, setLoading] = useState(false);

    const showLoader = () => {
        setLoading(true);
        setTimeout(function() {
            setLoading(false);
        }, 2000);
    };

    const override = css` // css for the loader
      left: 45vw;
      top: 30vh;
`;


    return (
      <AppContext.Provider value={{API, setAPI, loading, showLoader}}>
        <div className="App">
            <PacmanLoader color="green" loading={loading} css={override} height="100" size={50} />
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<> <NavBar /> <FrontPage /> </>} />
            <Route path="/games" element={<> <NavBar /> <GamesPage /> </>} />
        </Routes>
      </BrowserRouter>
        </div>
      </AppContext.Provider>
  );
}

export default App;
