//import logo from './logo.svg';
import About from './About';
import './App.css';
import Home from './Home';
//import Nav from './Nav';
import Eduction from './Eduction';
import Project from './Project';
import Contact from './Contact';

import Navbar from './Navbar';
//import {Route, Switch} from 'react-router-dom'

import {
  createBrowserRouter,
  RouterProvider,
 
} from "react-router-dom";
const router = createBrowserRouter([
  {
    path:'/',
    element:<Navbar/>,
    children: [
      {path:'/',
      element:<Home/>
    },
    {
      path:'about',
      element:<About/>
    },{
      path:'eduction',
      element:<Eduction/>
    },{
      path:'project',
      element:<Project/>
    },{
      path:'contact',
      element:<Contact/>
    }
    ]
  }
])

function App() {
  return (
    //<div className="App">
      //<Nav></Nav>
/*<Home></Home>
      <About></About>
      <Eduction></Eduction>
      <Project></Project>
  <Contact></Contact>
  </div>*/
  <div>
    <RouterProvider router={router}/>
  </div>
    
  );
}

export default App;
