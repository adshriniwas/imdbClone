import React, {useEffect, useState} from 'react'
import 'react-loading-skeleton/dist/skeleton.css'
import Skeleton, {SkeletonTheme} from 'react-loading-skeleton'
import "./Card.css"
import { Link } from 'react-router-dom'
import { type } from '@testing-library/user-event/dist/type'

const Card = ({movie, type}) => {

    const [isLoading, setIsLoading] = useState(true)

    useEffect(()=> {
        setIsLoading(true)
        setTimeout(()=>{
            setIsLoading(false)
        },1200)
    },[type])



  return (
    <>
    {
        isLoading?
        <div className='card'>
            <SkeletonTheme color="#202020" highlightColor='#444'>
                <Skeleton height={300} duration={2}/>
            </SkeletonTheme>
        </div>:
        <Link to={`/movie/${movie.id}`} style={{textDecoration:"none", color:"white"}}>
            <div className='card'>
                <img className='card_img' src={`https://image.tmdb.org/t/p/original/${movie?movie.poster_path:""}`} alt={movie?movie.original_title:""}/>
                <div className='card_overlay'>
                    <div className='card_title'>{movie?movie.original_title:""}</div>
                    <div className='card_runtime'>
                        {movie?movie.release_date:""}
                        <span className='card_rating'>{movie?movie.vote_average:""} <i className="fas fa-star" /></span>
                    </div>
                    <div className='card_description'>{movie?movie.overview.slice(0,118) + "...":""}</div>
                </div>
            </div>
        </Link>
    }
    </>
  )
}

export default Card
