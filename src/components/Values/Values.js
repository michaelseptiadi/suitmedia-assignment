import React from "react"
import "./style.css"

function Values() {
    return (
        <div id="value">
            <div class="title">
                <h2>OUR VALUES</h2>
            </div>
            <div class="values">
                <div class="value value-1">
                    <div class="value-icon-container">
                        <img
                            class="value-icon"
                            src={require("../../img/lightbulb-o.png")}
                            alt="light"
                        />
                    </div>
                    <div class="value-title">INNOVATIVE</div>
                    <div class="value-description">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime
                        exercitationem dolorem deserunt, unde, eaque ipsa?
                    </div>
                </div>
                <div class="values">
                    <div class="value value-2">
                        <div class="value-icon-container">
                            <img
                                class="value-icon"
                                src={require("../../img/bank.png")}
                                alt="light"
                            />
                        </div>
                        <div class="value-title">LOYALTY</div>
                        <div class="value-description">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. impedit
                            similique eum itaque facere temporibus dolores.
                        </div>
                    </div>
                    <div class="values">
                        <div class="value value-3">
                            <div class="value-icon-container">
                                <img
                                    class="value-icon"
                                    src={require("../../img/balance-scale.png")}
                                    alt="light"
                                />
                            </div>
                            <div class="value-title">RESPECT</div>
                            <div class="value-description">
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                                Consequatur, sir? Tenetur et neque quod incidunt!
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Values
