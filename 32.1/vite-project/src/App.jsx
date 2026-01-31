import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import About from "./components/aboutMe"
import Todo from "./components/todo"
import Swapi from "./components/swapi"
import './App.css'
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

function App() {
  return( 
  <BrowserRouter >
  <header>
  <ButtonGroup variant="outlined" aria-label="Basic button group">
     <Button> <Link to="/">About</Link></Button>
     <Button><Link to="/TODO">TODO</Link></Button>
     <Button><Link to="/swapi">SWAPI</Link></Button>
     </ButtonGroup>
</header>


<Routes>
   
   <Route path="/" element={<About />}/>
   <Route path="/Todo" element={<Todo />} />
   <Route path="/swapi" element={<Swapi />} />
 </Routes>

</BrowserRouter> 
)
 
}

export default App
