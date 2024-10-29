import { useState } from "react";
import "./carousel.css";

const Carousel = ({ pictures, alt }) => {
    let [index, setIndex] = useState(0);
    const changeSlide = (direction) => {
        setIndex((prevIndex) => 
            (prevIndex + direction + pictures.length) % pictures.length
        );
    };

    return (
        <figure className="carousel">
            <img
                src={pictures[index]}
                alt={`${alt} ($data.carousel} ${index + 1})`}
            />
            {pictures.length > 1 && (
        <>
          {' '}
                <nav>
                    <i className="fa-solid fa-chevron-left" onClick={() => changeSlide(-1)}></i>
                    <i className="fa-solid fa-chevron-right" onClick={() => changeSlide(1)}></i>
                    </nav>
                    <b className='carousel-counter'>
            {index + 1}/{pictures.length}
          </b>
                </>
                
            )}
        </figure>
    );
};
