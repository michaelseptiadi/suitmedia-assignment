import React from "react"
import ReactSwipe from "react-swipe"

import "./style.css"

function CarouselSlide() {
    let reactSwipeEl
    return (
        <div className="slideshow-container" id="about">
            <ReactSwipe
                className="carousel"
                swipeOptions={{ continuous: false }}
                ref={(el) => (reactSwipeEl = el)}
            >
                <div className="mySlides fade ">
                    <img src={require("../../img/about-bg.jpg")} alt="About" width={"100%"} />
                    <div className="text">WE DON'T HAVE THE BEST BUT WE HAVE THE GREATEST TEAM</div>
                </div>

                <div class="mySlides fade second">
                    <img src={require("../../img/bg.jpg")} alt="About" width={"100%"} />
                    <div class="text">
                        THIS IS A PLACE WHERE TECHNOLOGY & CREATIVITY FUSED INTO DIGITAL CHEMISTRY
                    </div>
                </div>
            </ReactSwipe>
            <button className="prev" onClick={() => reactSwipeEl.prev()}>
                &#10094;
            </button>
            <button className="next" onClick={() => reactSwipeEl.next()}>
                &#10095;
            </button>
        </div>
    )
}

export default CarouselSlide
