import "../../node_modules/bulma/css/bulma.css";
import "./ImageShow.css"
function ImageShow({image}){
    console.log(image)
    return(
        <div className="imageAlign">
            {/* <div>{image.id}</div> */}
            {/* <img src={image.urls.small} alt="image1" style={{width: "500px", height: "500px",position:"relative", flexDirection: "column"}}/> */}
            <img id="display" className="image is-96X96" src={image.urls.small} alt={image.alt}/>
        </div>
        
    );
}

export default ImageShow;