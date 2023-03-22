import React, { useState } from 'react';
import Animations from '../../utilities/Animations';
import { ScreenHeading } from '../../utilities/ScreenHeading/ScreenHeading';
import ScrollService from '../../utilities/ScrollService';
import educationsvg from '../../assets/Resume/education.svg'
import interestssvg from '../../assets/Resume/interests.svg'
import programmingskillssvg from '../../assets/Resume/programming-skills.svg'
import workhistorysvg from '../../assets/Resume/work-history.svg'
import projectssvg from '../../assets/Resume/projects.svg'
import "./resume.css";




export const Resume = ( props ) => {

    const [selectedBulletIndex, setselectedBulletIndex] = useState( 0 );
    const [carouselOffSetStyle, setCarouselOffSetStyle] = useState( {} );

    let fadeInScreenHandler = ( screen ) => {

        if( screen.fadeInScreen !== props.id ) {
          return      
        }
    
        Animations.animations.fadeInScreen( props.id )
      }
    
      const fadeInSubscriptions = ScrollService.currentScreenFadeIn.subscribe( fadeInScreenHandler );

    const ResumeHeading = ( props ) => {
        return(
            <div className='resume-heading' >
                <div className='resume-main-heading' >
                    <div className='heading-bullet' ></div>
                        <span> { props.heading ? props.heading : "" } </span>
                        { props.fromDate && props.toDate                    
                            ? (
                                <div className='heading-date' >
                                    { props.fromDate + "-" + props.toDate }
                                </div>
                              )
                            : ( <div></div> )
                        }
                    </div>
                    <div className='resume-sub-heading' >
                        <span> { props.subHeading ? props.subHeading : "" } </span>
                    </div>
                    <div className='resume-heading-description' >
                        <span> { props.description ? props.description : "" } </span>
                    </div>
                </div>
        )        
    }

    const resumeBullets = [ // SEGURAMENTE TENGO QUE CAMBIAR ESTO Y EN LA CARPETA "assets --> Resume" todos los .svg
        { 
            label: "Education",
            // cambie el logoSrc y quite el punto y - para no necesitar require
            //tambien de logoSrc quite las "" porque ya llamo directo la imagen
            logoSrc: educationsvg 
        },
        {
            label: "Work History",
            logoSrc: workhistorysvg
        },
        {
            label: "Programming Skills",
            logoSrc: programmingskillssvg
        },
        {
            label: "Projects",
            logoSrc: projectssvg
        },
        {
            label: "Interests",
            logoSrc: interestssvg
        },
    ];

    const programmingSkillsDetails = [ // MODIFICAR CON MIS PROPIAS SKILLS
        {
            skill: "JavaScript",
            ratingPercentage: 85,
        },
        {
            skill: "React Js",
            ratingPercentage: 85,
        },
        {
            skill: "React Native",
            ratingPercentage: 85,
        },
        {
            skill: "Express JS",
            ratingPercentage: 89,
        },
        {
            skill: "Node JS",
            ratingPercentage: 89,
        },
        {
            skill: "Mongo Db",
            ratingPercentage: 70,
        },
        {
            skill: "Java",
            ratingPercentage: 80,
        },
        {
            skill: "HTML",
            ratingPercentage: 80,
        },
        {
            skill: "CSS",
            ratingPercentage: 50,
        },
    ];

    const projectDetails = [ // CAMBIAR POR MIS PROYECTOS
        {
            title: "Personal Website",
            duration: { fromDate: "2020", toDate: "2021" },
            description: "A Personal Portfolio website to showcase all my details and projects at one place.",
            subHeading: "Technologies Used: React JS, Bootsrap",
        },
        {
            title: "Mobile E-shop ",
            duration: { fromDate: "2020", toDate: "2021" },
            description: "An ecommerce application designed to sell products online wth payment system integration",
            subHeading: "Technologies Used:  React Native, Mongo DB, Express Js, Node Js, Redux.",
        },
        {
            title: "Ecommerce Website ",
            duration: { fromDate: "2020", toDate: "2021" },
            description: "Online ecommerce website for showcasing and selling products onlne with payment system integration, both Paypal and Stripe",
            subHeading: "Technologies Used: Mongo DB, Epress Js, React Js, Node JS, Redux, Bootstrap.",
        },
    ];

    const resumeDetails = [ //Cambiar por mis datos 
        <div className='resume-screen-container' key="education"  >
            <ResumeHeading 
                heading={"University of Legon Accra, Ghana"}
                subHeading={"BACHELOR OF SCIENCE INFORMATION TECHNOLOGY"}
                fromDate={"2014"}
                toDate={"2018"}
            />
            <ResumeHeading
                heading={"National Youth Service Corps"}
                subHeading={"Ministry Of Science And Technogy. Uyo Akwa Ibom State"}
                fromDate={"2019"}
                toDate={"2020"}
            />
            <ResumeHeading
                heading={"High School "}
                subHeading={"Command Secondary School Mbiri"}
                fromDate={"2007"}
                toDate={"2012"}
            />
        </div>,

        <div className='resume-screen-container' key="work-experience"  >
            <div className='experience-container' >
                <ResumeHeading
                    heading={"Ehizeex Technoloy"}
                    subHeading={"FULL STACK DEVELOPER INTERN"}
                    fromDate={"2021"}
                    toDate={"Present"}
                />
                <div className='experience-description' >
                    <span className='resume-description-text' >
                        Currently working as MERN stack web and mobile developer and also an online instructor on udemy.
                    </span>
                </div>

                <div className='experience-description' >
                    <span className='resume-description-text' >
                        - Developed an ecommerce website for client with the dashboard for managing the products, managing reviews, users, payment etc. .
                    </span>
                    <br />
                    <span className='resume-description-text' >
                        - Integrated the web app with backend services to create new user onboarding application with dynamic form content.
                    </span>
                    <br />
                    <span className='resume-description-text' >
                        - I stretch my mental capacity to develope UI as per the given designs.
                    </span>
                    <br />
                </div>
            </div>
        </div>,

        <div className='resume-screen-container programming-skills-container' key="programming-skills" >

                { 
                programmingSkillsDetails.map( ( skill, index ) => { //seguro quitaré el pocentaje
                    return (
                        <div className='skill-parent' key={index} >
                            <div className='heading-bullet' ></div>
                            <span> { skill.skill } </span>
                            <div className='skill-percentage' >
                                <div style={{ width: skill.ratingPercentage + "%" }} className="active-percentage-bar" >

                                </div>
                            </div>
                        </div>
                        )
                    } ) 
                }
        </div>,
            
        <div className='resume-screen-container' key="projects" >
                {
                    projectDetails.map( ( project, index ) => {
                        return (
                            <ResumeHeading 
                                key={ index }
                                heading={ project.title }
                                subHeading={ project.subHeading }
                                description={ project.description }
                                fromDate={ project.duration.fromDate }
                                toDate={ project.duration.toDate }
                            />
                        )
                    } )
                }
        </div>,
            
        <div className='resume-screen-container' key="interests" > {/* cambiar por mi info */}
                <ResumeHeading
                    heading="Teaching"
                    description="Apart from being a tech enthusiast and a code writer, i also love to teach people what i know simply because i believe in sharing."
                />
                <ResumeHeading
                    heading="Music"
                    description="Listening to soothing music is something i can never compromise with, skimming through Spotify's pop songs charts is at times the best stress reliever that i can get my hands on."
                />
                <ResumeHeading
                    heading="Competitive Gaming"
                    description="I like to challenge my reflexes a lot while competing in football games, pushing the rank and having interactive gaming sessions excites me the most."
                />
        </div>,
    ];     

    const handleCarousel = ( index ) => {
        let offsetHeight = 360;
        let newCarouselOffset = {
            style: {
                transform: "translateY(" + index * offsetHeight *-1 + "px)"
            }
        }

        setCarouselOffSetStyle( newCarouselOffset );
        setselectedBulletIndex( index );
    }

    const getBullets = () => {
        return resumeBullets.map( ( bullet, index ) => {
            return (
                <div 
                    onClick={ () => handleCarousel( index ) }
                    className={ index === selectedBulletIndex ? "bullet selected-bullet" : "bullet" }
                    key={ index } 
                >
                    <img 
                        className='bullet-logo' // Cambiar el require 
                        // src={ require (`../../assets/Resume/${ bullet.logoSrc }`) }
                        src={ bullet.logoSrc } 
                        alt="ooops... no internet connection" 
                    />
                    <span className='bullet-label' > { bullet.label } </span>
                </div>
            )
        } )
    }

    const getResumeScreen = () => {
        return (
            <div
                style={carouselOffSetStyle.style}
                className="resume-details-carousel"
            >
                { resumeDetails.map( ( resumeDetail ) => resumeDetail  ) }
            </div>
        )        
    }


  return (
    //quitar fade-in del classname de abajo 
    <div className='resume-container screen-container' id={ props.id || "" } >
        <div className='resume-content' >
            <ScreenHeading
                title={ 'Resume' }
                subHeading={ 'My Formal Bio Details' }
            />
            <div className='resume-card' >
                <div className='resume-bullets' >
                    <div className='bullet-container' >
                        <div className='bullet-icons' ></div>
                        <div className='bullets' > { getBullets() } </div>
                    </div>
                </div>
                <div className='resume-bullet-details' > { getResumeScreen() } </div>
            </div>
        </div>
    </div>
  )
}
