import "./App.css";
import Intro from "./pages/Intro";
import Guide from "./pages/Guide";
import Calendar from "./pages/Calendar";
import DayList from "./pages/DayList";
import Write from "./pages/Write";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/guide" element={<Guide />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/daylist" element={<DayList />} />
        <Route path="/write" element={<Write />} />
      </Routes>
    </div>
  );
}

export default App;
