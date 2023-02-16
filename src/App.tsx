import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Header } from "./components/Header";
import { EventList } from "./components/EventList";
import { BucketListRoute } from "./components/BucketListRoute";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <EventList />
        <Routes>
          <Route path="/menu" element={<BucketListRoute />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
