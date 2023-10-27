import React, { useEffect } from 'react';
import Animations from '../../utilities/Animations';
import { ScreenHeading } from '../../utilities/ScreenHeading/ScreenHeading';
import ScrollService from '../../utilities/ScrollService';
import './aboutMe.css';


export const AboutMe = ( props ) => {

  let fadeInScreenHandler = ( screen ) => {

    if( screen.fadeInScreen !== props.id ) {
      return      
    }

    Animations.animations.fadeInScreen( props.id )
  }

  const fadeInSubscriptions = ScrollService.currentScreenFadeIn.subscribe( fadeInScreenHandler );

  const SCREEN_CONST = {
    description: "Full stack web and mobile developer with background knowledge of MERN stacks with redux, along with a knack of building applications with utmost efficiency. Strong professional with a BSC willing to be an asset for an organization.",
    highlights: {
      bullets: [
        "Full Stack web and mobile development",
        "Interactive Front End as per the design",
        "React and React Native",
        "Redux for State Mnanagement",
        "Building REST API",
        "Managing database",
      ],
      heading: "Here are a few highlights"
    }
  }

  const renderHighlight = () => {
    return (
      SCREEN_CONST.highlights.bullets.map( ( value, i ) => {
         return (
          <div className='highlight' key={i} >
            <div className='highlight-blob' ></div>
            <span> { value } </span>
          </div>
        )
      } )
    )
  }



  return (

    <div className='about-me-container screen-container fade-in ' id={ props.id || "" } >
      <div className='about-me-parent' >
        
        <ScreenHeading
            title={ 'About Me' }
            subHeading={ 'Why Choose Me?' }
        />

        <div className='about-me-card' >
          <div className='about-me-profile' >  </div>
          <div className='about-me-details' >
            <span className='about-me-description' > 
              { SCREEN_CONST.description } 
            </span>
            <div className='about-me-highlights' >
              <div className='highlight-heading' >
                <span> { SCREEN_CONST.highlights.heading } </span>
              </div>
              { renderHighlight() }
            </div>
            <div className='about-me-options' >
            <button 
              className='btn primary-btn'
              onClick={ () => ScrollService.scrollHandler.scrollToHireMe() } 
            >
                        {""}
                        Hire Me{" "}
                    </button>
                    <a href="JoseBernardoCV.pdf" download="CV - Jose Fernandez.pdf" >
                        <button className='btn highlighted-btn' > Get Resume </button>
                    </a>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  )
}
