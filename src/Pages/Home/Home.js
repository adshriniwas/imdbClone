import React, { useEffect, useState } from 'react'
import "./Home.css"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

import { Link } from 'react-router-dom'
import MovieList from '../../Components/MovieList/MovieList';



const Home = () => {

    const [popularMovies, setPopularMovies] = useState([])

    const settings = {
        showArrows: true,
        interval: 3000,
        dynamicHeight: false,
        stopOnHover: false,
        infiniteLoop: true,
        showStatus: false,
        transitionTime: 500,
        showThumbs: false,
        showIndicators: true,
        swipeable: true,
        emulateTouch: true,
        autoPlay: true,
      };

    useEffect(()=> {
        fetch("https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US")
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setPopularMovies(data.results)
        }
        )
    },[])

    

    
  return (
    <>
    
        <div className='poster'>

    
      <Carousel
           {...settings}
            >
            {
                popularMovies.map((movie,index) => (
                    <Link key={index} style={{textDecoration:"none",color:"white"}} to={`/movie/${movie.id}`} >
                        <div className="posterImage">
                            <img alt='' src={`https://image.tmdb.org/t/p/original${movie && movie.backdrop_path}`} />
                        </div>
                        <div className="posterImage__overlay">
                            <div className="posterImage__title">{movie ? movie.original_title: ""}</div>
                            <div className="posterImage__runtime">
                                {movie ? movie.release_date : ""}
                                <span className="posterImage__rating">
                                    {movie ? movie.vote_average :""}
                                    <i className="fas fa-star" />{" "}
                                </span>
                            </div>
                            <div className="posterImage__description">{movie ? movie.overview : ""}</div>
                        </div>
                    </Link>
                ))
            }
      </Carousel>

        <MovieList/>

        
     
      </div>
    </>
  )
}

export default Home
