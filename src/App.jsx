import { Route, Routes } from "react-router-dom";
import "./App.css";
import FormLayout from "./Components/FormLayout";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<FormLayout />}></Route>
      </Routes>
    </>
  );
}

export default App;
