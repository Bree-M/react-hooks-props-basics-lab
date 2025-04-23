import React from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";
import Links from "./Links";
import user from "../data/user"; // Importing user data


// pass this data down as props to the child component(s) that need it!



function App() {
  return (
    <div>
   <NavBar />
      <Home name={user.name} city={user.city} />
      <About bio={user.bio} github={user.github} linkedin={user.linkedin} />
      <Links github={user.github} linkedin={user.linkedin}/>
      <About 
      github={user.github}
      linkedin={user.linkedin}/> 
      
    </div>
  )
}

export default App;
