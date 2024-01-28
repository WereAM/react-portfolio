import React from "react";
import '../App.css';

export default function Connect(){
    return(
        <section className="connect" id="connect">
            <h2 className="heading">Connect With Michelle</h2>

            <form action="#">
                <div className="input-form">
                    <input type="text" placeholder="Full Name" />
                    <input type="email" placeholder="Email Address" />
                </div>

                <div className="input-form">
                    <input type="tel" placeholder="Mobile Number" />
                    <input type="url" placeholder="LinkedIn Profile" />
                </div>

                <textarea name="" id="" cols="30" rows="10" placeholder="Message"></textarea>
                <input type="submit" value="Connect" className="btn" />
            </form>

        </section>
    );
}