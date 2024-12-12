import "./App.css";
import AddLead from "./components/AddLead";
import DataTable from "./components/Table";
import { BrowserRouter, Routes, Route } from "react-router";
import ShowLead from "./components/showLead";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <BrowserRouter>
      <Toaster position="top-right" />
      <Routes>
        <Route path="/add-lead" element={<AddLead />} />
        <Route path="/show-lead" element={<ShowLead />} />
        <Route path="/" element={<DataTable />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
