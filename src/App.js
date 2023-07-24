import { Route, Routes } from "react-router-dom";
import Page from "./components/Page";
import "./styles/App.css";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/*" element={<Page />} />
      </Routes>
    </div>
  );
}

export default App;
