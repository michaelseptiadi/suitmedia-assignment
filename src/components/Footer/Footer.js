import React from "react"
import "./style.css"

function Navbar() {
    return (
        <footer>
            <div class="footer-content">
                <p class="footer-title">Copyright © 2016. PT Company</p>
                <div class="sosmed">
                    <div class="facebook">
                        <img
                            class="value-icon"
                            src={require("../../img/facebook-official.png")}
                            alt="Facebook"
                        />
                    </div>
                    <div class="twitter">
                        <img
                            class="value-icon"
                            src={require("../../img/twitter.png")}
                            alt="Twitter"
                        />
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Navbar
