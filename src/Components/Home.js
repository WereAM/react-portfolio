import '../App.css';
import React from 'react';
import { BiLogoGithub, BiLogoLinkedin } from "react-icons/bi";
import profile from '../Images/profile.jpg';

export default function Home() {
    return(
        <section className="home" id="home">
            <div className="home-content">
                <h4>Meet the developer,</h4>
                <h1>Michelle Were Ambunya</h1>
                <h3>Front End Developer; Web & Mobile</h3>
                <p>Michelle is a Computer Science student. She is proficient in web and mobile development using Kotlin, HTML, CSS and JavaScript.
                Michelle is familiar with frameworks such as React. 
                She likes to create unique and aesthetic mobile and web applications that inspire user interaction.
                <br />
                She likes to create unique and aesthetic mobile and web applications that inspire user interaction. 
                <br/>
                <br/>
                She's also curious about the Internet of Things(IoT) and enjoys connecting Arduino boards in her free time
                </p>

                <div className="socials">
                    <a href="https://www.linkedin.com/in/michelle-ambunya/" target="_blank" rel='noopener noreferrer'>
                    <BiLogoLinkedin />
                    </a>
                    <a href="https://github.com/WereAM" target="_blank" rel='noopener noreferrer'>
                    <BiLogoGithub />
                    </a>
                </div>

                <a href="CV/cv.pdf" class="btn" target="_blank">Michelle's CV</a>

            </div>

            <div className="profile">
                <img src={profile} alt="profile"/>
            </div>

        </section>
    );
}