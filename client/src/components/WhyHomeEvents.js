import React from "react";
import weddingGifts from "../images/weddingGifts.png"
import "../styles/whyHomeEvents.css"

const WhyHomeEvents = () => {
    return (
        <div className="why-home-events-container">
        <div className="content">
            <h2>WHY Dratha Creations</h2>
            <h1>As a Professional Event Planner</h1>
            <p>
                We know what you expect and work towards exceeding it. Events are labour and cost intensive and our experts help you set the budget and stick to it while putting together events that will dazzle your guests. We are partnered with reputed caterers, venues, and other party service providers that make the task of finalizing vendors a breeze. Most of all, we plan and execute the event like it is our own, and leave you to fully indulge in your day and make it your own.
            </p>
            <button className="know-more-btn">Know More</button>
        </div>
        <div className="image-container">
            <img src={weddingGifts} alt="Event Planning" style={{ width: '400px', height: 'auto' }}/>
        </div>
    </div>
    )
}

export default WhyHomeEvents
