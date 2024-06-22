
import {Route, Routes } from "react-router-dom";
import Home from "./Routes/Home"
import Contact from "./Routes/Contact"
import Favs from "./Routes/Favs"
import Detail from "./Routes/Detail"
import Layout from "./Layout/Layout";
import { useCardContext } from "./Components/utils/global.context";

function App() {
  const {state} = useCardContext()

  return (
      <div className="App">
        <div className={state.theme}>
            <Routes>
              <Route path="/" element={<Layout/>}> 
                <Route path="/" element={<Home/>}/>
                <Route path="/Contact" element={<Contact/>}/>
                <Route path="/Favs" element={<Favs/>}/>
                <Route path="/Detail/:id" element={<Detail/>}/>
                <Route path="*" element={<h1>Error 404 - Page not found</h1>}/>
              </Route>
            </Routes>
            </div>
      </div>
  );
}

export default App;
