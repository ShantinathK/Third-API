import searchImages from "./api";
// import { useState } from "react";
// import ImageShow from "./components/ImageShow";
// \import ImageList from "./components/ImageList"
import SearchBar from "./components/SearchBar";


function App(){

    // const [clicks, setClicks] = useState('');

    async function handlesubmit(term){
        // setClicks(term);
        // return 'hello' + term
        const result = await searchImages(term);
        console.log(result);
    }


    return(
        <div>
            <SearchBar onSubmit={handlesubmit} />
            {/* <h1>{clicks}</h1> */}
            
        </div>
    );
}

export default App;