import { Link , useParams } from 'react-router-dom';

function ArtImageTile ({art,galleryid}) {
    let firstimage = art.images[0];
    let imagelink = firstimage.baseimageurl;

    <Link  to={`/galleries/${galleryid}/art/${art.id}`}>
    <img src={imagelink}></img>
    </Link>
}

export default ArtImageTile