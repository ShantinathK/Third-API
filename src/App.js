import searchImages from "./api";
import { useState } from "react";
// import ImageShow from "./components/ImageShow";
import ImageList from "./components/ImageList"
import SearchBar from "./components/SearchBar";


function App(){

     const [images, setImages] = useState([]);

    async function handlesubmit(term){
        // setClicks(term);
        // return 'hello' + term
        const result = await searchImages(term);
        setImages(result);
    }


    return(
        <div>
            <SearchBar onSubmit={handlesubmit} />
            <ImageList images = {images} />
            
        </div>
    );
}

export default App;