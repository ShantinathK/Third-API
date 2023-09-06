// import { createElement } from "react";

import { useState } from "react";

function SearchBar({ onSubmit }){
    const[term, setTerm] = useState('')
    const handleInput = (event) => {
        setTerm(" "+event.target.value);
    }
    const handleClick = (event) => {
        event.preventDefault();
        onSubmit(term);
        console.log("hello");
        
    }   
    return(
        <div id="ex">
            {/* using form which trigger Asubmit event in form */}
            <form onSubmit={handleClick}>
                <input onChange={handleInput}/>
                <button onClick={handleClick}>Click me</button>
                {/* <h1>{a}</h1> */}
            </form>
        </div>
    );
}



export default SearchBar;