import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom"; // Change the import to use 'Routes' and 'Route'
import Video from "./components/Video";
import { AppProvider } from './components/AppContext';

function App() {
  const [count, setCount] = useState(0);

  return (
    <AppProvider>
      <Routes> 
        <Route path="/" element={<Header />} /> 
        <Route path="/watch" element={<Video />} />
      </Routes>
    </AppProvider>
  );
}

export default App;
