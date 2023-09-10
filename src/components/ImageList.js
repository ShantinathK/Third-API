import ImageShow from "./ImageShow";
import "../../node_modules/bulma/css/bulma.css"

function ImageList({images}){
    const renderedImages = images.map( (image)=>{
        return <ImageShow image={image} />

    });

    return(
        <p className="box">{renderedImages}</p>
    );
}

export default ImageList;