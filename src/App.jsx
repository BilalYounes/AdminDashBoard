import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Lists from "./Pages/Lists/Lists";
import Single from "./Pages/Single/Single";
import New from "./Pages/New/New";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { userInputs } from "./formSource";
import { productInputs } from "./formSource";
import "./style/dark.scss"
import { useContext } from "react";
import { DarkModeContext } from "./DarkModeContex/DarkModeContex";
function App() {
const {darkMode} = useContext(DarkModeContext)
  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path="/">
            <Route index element={<Home/>}/>
            <Route path="login" element={<Login/>}/>
            <Route path="users">
              <Route index element={<Lists type="users"/>}/>
              <Route path=":usersId" element={<Single/>}/>
              <Route path="new" element={<New inputs={userInputs} title="Add New User"/>}/>
            </Route>
            <Route path="products">
              <Route index element={<Lists type="products"/>}/>
              <Route path=":productsId" element={<Single/>}/>
              <Route path="new" element={<New inputs={productInputs} title="Add New Products"/>}/>
            </Route>
            
          </Route>
          {/* <Route path="/">
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="users">
              <Route index element={<Lists />} />
              <Route path=":userId" element={<Single />} />
              <Route
                path="new"
                element={<New/>}
              />
            </Route>
            <Route path="products">
              <Route index element={<Lists />} />
              <Route path=":productId" element={<Single />} />
              <Route
                path="new"
                element={<New/>}
              />
            </Route>
          </Route> */}
        </Routes>
      </BrowserRouter>
      </div>
  );
}

export default App;