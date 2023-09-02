import React from "react"
//import "./styles/Section.scss"
import img2 from "./assets/img2.jpg"

const Section = () => {

    return (
        <div className="section">
            <div className="section__container">
                <div className="section__img">
                    <img src={img2} alt="" />
                </div>
            </div>    
            <div className="section__content">
                <h1>Moaz Mohamed</h1>
                <p>Experience in backend development</p>
                <p>NodeJS</p>
                <p>Flask</p>
            </div>
        </div>
    )
}

export default Section;