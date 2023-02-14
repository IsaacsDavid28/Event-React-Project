import React from 'react';
import logo from './logo.svg';
import './App.css';
import EventContextProvider from './context/EventContextProvider';
import { EventItem } from './components/EventItem';
import { EventList } from './components/EventList';
import { Header } from './components/Header';
import { Affair } from './models/Events';

function App() {
  return (
    <div className="App">
        <Header />
        <EventList />
    </div>
  );
}

export default App;
