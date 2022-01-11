
import React, {useState} from 'react'
import './skills.scss'
import BtnSlider from './BtnSlider'
import dataSlider from './dataSlider'

export default function Skills() {

    
    const [slideIndex, setSlideIndex] = useState(1)

    const nextSlide = () => {
        if(slideIndex !== dataSlider.length){
            setSlideIndex(slideIndex + 1)
        } 
        else if (slideIndex === dataSlider.length){
            setSlideIndex(1)
        }
    }

    const prevSlide = () => {
        if(slideIndex !== 1){
            setSlideIndex(slideIndex - 1)
        }
        else if (slideIndex === 1){
            setSlideIndex(dataSlider.length)
        }
    }

    const moveDot = index => {
        setSlideIndex(index)
    }

  

    return (
        <div className="container-slider" id="skills">
        
            {dataSlider.map((obj, index) => {
                return (
                  
                    <div
                    key={obj.id}
                    className={slideIndex === index + 1 ? "slide active-anim" : "slide"}
                    >
                      <h1>Programming Skills In</h1>
                        <img 
                        src={process.env.PUBLIC_URL + `/assets/img${index + 1}.png`} 
                        />
                    </div>
                )
            })}
            <BtnSlider moveSlide={nextSlide} direction={"next"} />
            <BtnSlider moveSlide={prevSlide} direction={"prev"}/>

        
        </div>
      
        
    )
}
