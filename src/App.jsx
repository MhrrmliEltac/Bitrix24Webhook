import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import AddLead from "./components/AddLead";
import DataTable from "./components/Table";
import ReactDOM from "react-dom/client";
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
