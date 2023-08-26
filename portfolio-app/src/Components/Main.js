import React from "react";
import "./styles/Main.scss";
import { Facebook, Instagram, LinkedIn, Twitter } from "@material-ui/icons";
import moaz from "./assets/moaz.jpg"

const Main = () => {
    return (
        <div className="main">
            <div className="main__container">
                <div className="main__content">
                    <div className="text">
                        <p>Hello Everyone,</p>
                        <h1>
                            I am Moaz
                        </h1>
                        <p>Backend Devloper</p>

                        <div className="icons">
                            <Twitter className="icon"/>
                            <Instagram className="icon"/>
                            <Facebook className="icon"/>
                            <LinkedIn className="icon"/>
                        </div>

                        <div className="buttons">
                            <button>Contact Me</button>
                            <button>Hire Me</button>
                        </div>
                    </div>
                </div>

                <div className="main__img">
                    <img src={moaz} alt=" " />
                </div>
            </div>
        </div>
    )
}

export default Main;