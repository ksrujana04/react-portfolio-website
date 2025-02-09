import python from "../assets/images/python.png";
import html from "../assets/images/html.png";
import css from "../assets/images/css-removebg-preview.png";
import js from "../assets/images/js.png";
import react from "../assets/images/react.png";
import git from "../assets/images/git.png";
import mongodb from "../assets/images/mongodb.png"
import nodejs from "../assets/images/nodejs (2).png"
import expressjs from "../assets/images/expressjs.png"
import useEmblaCarousel from 'embla-carousel-react';
import AutoScroll from 'embla-carousel-auto-scroll';
import React, { useEffect, useCallback } from "react";

function Skills(){
    const [emblaRef, emblaApi] = useEmblaCarousel({loop:true}, [
        AutoScroll({ playOnInit: true })
      ])
    const arr = [python,html,css,js,mongodb,expressjs,react,nodejs,git]

    // Pause auto-scroll on hover
  const handleMouseEnter = useCallback(() => {
    if (emblaApi) emblaApi.plugins()?.autoScroll?.stop();
  }, [emblaApi]);

  // Resume auto-scroll when mouse leaves
  const handleMouseLeave = useCallback(() => {
    if (emblaApi) emblaApi.plugins()?.autoScroll?.play();
  }, [emblaApi]);

    useEffect(() => {
        if (!emblaApi) return;
        const container = emblaApi.containerNode();
    
        container.addEventListener("mouseenter", handleMouseEnter);
        container.addEventListener("mouseleave", handleMouseLeave);
    
        return () => {
          container.removeEventListener("mouseenter", handleMouseEnter);
          container.removeEventListener("mouseleave", handleMouseLeave);
        };
      }, [emblaApi, handleMouseEnter, handleMouseLeave]);
    

    return <div id="skills" >
        <h1 className="p-3">Skills</h1>
        {/* <ul className="overflow-auto d-flex">
            {Array.from({length:6}).map((_,i)=>(
                <li className="d-flex shrink-0" key={i}>
                    <img src={arr[i]} width="250" height="250"/>
                </li>
            ))}
        </ul>
        <h1>Marquee</h1> */}
        <div className="embla">
            <div className="embla__viewport" ref={emblaRef}>
                <div className="embla__container">
                    {arr.map((index)=>(
                        <div className="embla__slide" key={index}>
                            <img src={index} alt="" />
                        </div>
                    ))}
                </div>
            </div>
        </div>

    </div>

}
export default Skills;