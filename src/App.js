import "./App.css";
import Intro from "./pages/Intro";
import Guide from "./pages/Guide";
import Calendar from "./pages/Calendar";
import DayList from "./pages/DayList";
import Write from "./pages/Write";
import { Route, Routes } from "react-router";

function App() {
  return (
    <Routes>
      <Route path="/intro" element={<Intro/>}/>
      <Route path="/guide" element={<Guide/>}/>
      <Route path="/calendar" element={<Calendar/>}/>
      <Route path="/daylist" element={<DayList/>}/>
      <Route path="/write" element={<Write/>}/>
    </Routes>

  )
}

export default App;
