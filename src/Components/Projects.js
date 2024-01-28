import React from "react";
import "../App.css";
import { BiLinkExternal } from "react-icons/bi";
import plants from "../Images/plants.jpg";
import leave from "../Images/leave mgnt.jpg";
import gallery from "../Images/gallery.jpg";
import vote from "../Images/vote.jpg";

export default function Projects() {
    return(
        <section className="projects" id="projects">
            <h2 className="heading">Latest Projects</h2>

            <div className="projects-container">
                <div className="projects-box">
                    <img src={plants} alt="Plant-Based" />
                    <div className="projects-layer">
                        <h4>Plant Based</h4>
                        <p>An e-commerce web application that sells plant based food such as cereals, vegetables, fruits and legumes. Plant Based was created using HTML, CSS and PHP</p>
                        <a href="https://weream.github.io/plant_based/Html/cereals.html" target="_blank" rel="noopener noreferrer">
                            <BiLinkExternal />
                        </a>
                    </div>
                </div>

                <div className="projects-box">
                    <img src={leave} alt="Leave Mgmnt" />
                    <div className="projects-layer">
                        <h4>Easyleave</h4>
                        <p>An online leave management platform that allows a company to manage its leave applications through a website. It is created using HTML, CSS and Javascript</p>
                        <a href="https://weream.github.io/easyleave/Html/index.html" target="_blank" rel="noopener noreferrer">
                            <BiLinkExternal />
                        </a>
                    </div>
                </div>

                <div className="projects-box">
                    <img src={gallery} alt="Online Gallery" />
                    <div className="projects-layer">
                        <h4>Here&There</h4>
                        <p>Here&There is an online gallery created using ReactJS, HTML, and Tailwind CSS. It is your one place store for all your photo albums, arranged to give you the most elegant and pleasing visualization of your memories </p>
                        <a href="https://react-assessment-irz5ez0uq-weream.vercel.app/" target="_blank" rel="noopener noreferrer">
                            <BiLinkExternal />
                        </a>
                    </div>
                </div>

                <div className="projects-box">
                    <img src={vote} alt="Voting-App" />
                    <div className="projects-layer">
                        <h4>Strath Vote</h4>
                        <p>Strath Vote is a mobile application created to digitalize the voting process at Strathmore University by allowing for online voting as well as tallying and announcing of results. It was created using Kotlin in Android Studio</p>
                        <a href="#">
                            <BiLinkExternal />
                        </a>
                    </div>
                </div>

            </div>
        </section>
    );
}