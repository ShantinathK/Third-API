// import { createElement } from "react";
import "./SearchBar.css";
import { useState } from "react";
import '../../node_modules/bulma/css/bulma.css';


function SearchBar({ onSubmit }){
    const[term, setTerm] = useState('')
    const handleInput = (event) => {
        setTerm(event.target.value);
    }
    const handleClick = (event) => {
        event.preventDefault();
        onSubmit(term);
        console.log("hello");
        
    }   
    return(
        <div className="search-Bar">
            {/* using form which trigger Asubmit event in form */}
            <form className="box" onSubmit={handleClick}>
                <div className="field">
                    <label class="label">Seacrh Image in gallery</label>
                    <div class="control">
                        <input className="input" type="text" placeholder="e.g. Cars" onChange={handleInput} />
                    </div>
                </div>
                <button className="button is-dark" onClick={handleClick}>Search</button>
            </form>
            
        </div>
    );
}



export default SearchBar;