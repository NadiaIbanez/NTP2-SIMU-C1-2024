import Link from 'next/link';
import "./movieCard.css";

export default function Movie (props){
    return(
        <li className='movie-card'>
            <div >
                <Link href={`/movies/${props.ID}`}>

                    <div className='movie-card-image-container'>
                        <img src={props.poster} alt="" className='movie-card-image'/>
                    </div>
                    <div className='movie-card-content'>
                        <h1 className='movie-card-title'>{props.title}</h1>
                        <p className='movie-card-type'>{props.fullplot}</p>
                    </div>
                </Link>      
            </div>
        </li>
    );

}
