import React from "react";
import "./Footer.css"

function Footer(){
    return (
        <>
            <div className="main-container">
                <h5>Join the advanture newslatter to recieve our best vacation deals</h5>
                <h6>You can subscribe at any time</h6>
                <div className="form">
                    <input type="text" placeholder="Your Email"/>
                    <button className="btn">subscribe</button>
                </div>

                <div className="lists">
                    <div className="about">
                        <h5 className="heading">About Us</h5>
                        <h6>how it works</h6>
                        <h6>how it works</h6>
                        <h6>how it works</h6>
                        <h6>how it works</h6>
                        <h6>how it works</h6>
                    </div>
                    <div className="contact">
                        <h5 className="heading">Contact Us</h5>
                        <h6>contac</h6>
                        <h6>support</h6>
                        <h6>distination</h6>
                        <h6>Sponserships</h6>
                    </div>
                    <div className="videos">
                        <h5 className="heading">Videos</h5>
                        <h6>submit videos</h6>
                        <h6>ambassadors</h6>
                        <h6>agency</h6>
                        <h6>influancer</h6>
                    </div>
                    <div className="social-media">
                        <h5 className="heading">Social Media</h5>
                        <h6>instgram</h6>
                        <h6>facebook</h6>
                        <h6>youtube</h6>
                        <h6>twitter</h6>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Footer;