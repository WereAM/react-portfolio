import '../App.css';
import React from 'react';

export default function Home() {
    return(
        <section className="home" id="home">
            <div className="home-content">
                <h4>Meet the developer,</h4>
                <h1>Michelle Were Ambunya</h1>
                <h3><span>Front End Developer; Web & Mobile</span></h3>
                <p>Michelle is a Computer Science student. She is proficient in web and mobile development using Kotlin, HTML, CSS and JavaSript.
                Michelle is familiar with frameworks such as React. 
                She likes to create unique and aesthetic mobile and web applications that inspire user interaction. </p>
                <br />

                <div className="socials">
                    <a href="https://www.linkedin.com/in/michelle-ambunya/" target="_blank" rel='noopener noreferrer'>
                        <i class="bx bxl-linkedin"></i>
                    </a>
                    <a href="https://github.com/WereAM" target="_blank" rel='noopener noreferrer'>
                        <i class="bx bxl-github"></i>
                    </a>
                </div>

                <a href="CV/cv.pdf" class="btn" target="_blank">Michelle's CV</a>

            </div>

            <div className="profile">
                <img src="Images/profile.jpg" alt="profile"/>
            </div>

        </section>
    );
}