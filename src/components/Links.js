import React from "react";

function Links({github, linkedin}){
    return(
        <div>
            <h3>"Links"</h3>
            <a href="https://github.com/liza" target="_blank" rel="noopener noreferrer">
         {github}"https://github.com/liza"
        </a>
        <a href="https://www.linkedin.com/in/liza/" target="_blank" rel="noopener noreferrer">
         {linkedin}"https://www.linkedin.com/in/liza/"
        </a>
        

        </div>
    )
}
 export default Links;