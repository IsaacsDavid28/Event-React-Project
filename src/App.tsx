import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Header } from "./components/Header";
import { EventList } from "./components/EventList";
import { BucketListRoute } from "./components/BucketListRoute";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route, Navigate } from "react-router-dom";
import { DetailsRoute } from "./components/DetailsRoute";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />

        <Routes>
          <Route path="/eventlist" element={<EventList />} />
          <Route path="/bucketlist" element={<BucketListRoute />} />
          <Route path="*" element={<Navigate to={"/eventlist"} />}></Route>
          <Route path="/detailsroute/:id" element={<DetailsRoute/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
