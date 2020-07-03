import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component{
    render(){
        return(
           <div>
               <nav class = "navbar navbar-expand-lg navbar-light navbar-bg-light">
                   <Link to ="/" class = "navbar-brand" href="#">
                       <h3>Resume</h3>

                   </Link>
                   <button class = "navbar-toggler" type = "button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle Navigation">
                       <span class = "navbar-toggler-icon"></span>
                   </button>

                   <div class = "collapse navbar-collapse" id="navbarNav">
                       <ul class ="navbar-nav">
                           <li class = "nav-item active">
                               <Link to = "/" class = "nav-link" href="#">
                                   Home<span class= "sr-only">Page</span>
                               </Link>
                           </li>
                           <li class = "nav-item">
                               <Link to = "/about" class = "nav-link" href="#">
                                   About

                               </Link>
                           </li>
                       </ul>
                   </div>
               </nav>
           </div>
        );
    }
}

export default Navbar;