import {BrowserRouter} from "react-router-dom";

import s from './App.module.css';

import AppRouter from "./AppRouter";

function App() {
  return (
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
  );
}

export default App;
