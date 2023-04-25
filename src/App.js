import './styles/App.css';
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/AppRouter";
import Header from "./components/Header/Header";
import {useEffect} from "react";

function App() {
  return (
      <BrowserRouter>
        <Header/>
        <AppRouter/>
      </BrowserRouter>
  );
}

export default App;
