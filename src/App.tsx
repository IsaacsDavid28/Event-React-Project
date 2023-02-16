import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Header } from './components/Header';
import { EventList } from './components/EventList';
import { SearchForm } from './components/SearchForm';

function App() {
  return (
    <div className="App">
        <Header />
        <EventList />
    </div>
  );
}

export default App;
