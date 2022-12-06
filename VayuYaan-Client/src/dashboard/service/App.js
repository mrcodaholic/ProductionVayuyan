import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, createBrowserRouter, Link, Route, RouterProvider, Routes } from "react-router-dom";
import HomePage from "./components/home";
import CreateDronePage from "./components/createDronePage";
import Dronedata from "./components/Page Sakshi/Drone Data-6/drone-data";
import ModelEvaluations from "./components/Page Sakshi/Drone AI-Model Evaluation_7/model-evations";
import Servicehistory from "./components/Page Sakshi/Service-History-8/history";

function App() {

  return (
    <div className="App">
      <BrowserRouter>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/create/drone" element={<CreateDronePage />} />
              <Route path="/drone/information" element={<CreateDronePage />} />
              <Route path="maintenance" element={<HomePage />} />
              <Route path="maintenance/drone/information" element={<CreateDronePage />} />
              <Route path='/droneData'  element={<Dronedata/>}/>
              <Route path="/drone/module" element={<ModelEvaluations/>}/>
              <Route path="/service/history" element={<Servicehistory/>}/>
            </Routes>
          </BrowserRouter>
    </div>
  );
}

export default App;
