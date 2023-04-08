import { useParams, Route } from "react-router-dom"
import ArtImageTile from "../ArtImageTile";

function GalleryView({galleries}){
    const params = useParams();
    let gallery;
    galleries.forEach(ele => {
        if (ele.galleryid === parseInt(params.galleryid)){
            gallery = ele
        }
    });
    <Route path={`/galleries/${params.galleryid}`}>
        {gallery.objects.map((artworks)=>{
        return <ArtImageTile art={artworks} galleryid={gallery.galleryid}/>
        })}
    </Route>
    return( 
    <div>
        <h1>Hello from {params.galleryid}</h1>
        <h2>{gallery.name}</h2>
    </div>
    )
}

export default GalleryView