import { useParams } from "react-router-dom"

function GalleryView({galleries}){
    const params = useParams();
    console.log(params, "params")
    let gallery;
    galleries.forEach(ele => {
        if (ele.galleryid === parseInt(params.galleryid)){
            gallery = ele
        }
    });
    console.log(gallery, "console log gallery")
    console.log(galleries, "galleries" )
    return( 
    <div>
        <h1>Hello from {params.galleryid}</h1>
        <h2>{gallery.name}</h2>
    </div>
    )
}

export default GalleryView