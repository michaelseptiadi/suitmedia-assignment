import React from "react"
import "./style.css"

function Contact() {
    return (
        <div>
            <div class="title">
                <h2>CONTACT US</h2>
            </div>
            <div class="contact-form">
                <form>
                    <p class="label">Name</p>
                    <input
                        type="text"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        required
                    />
                    <p class="Email">Email</p>
                    <input type="email" required />
                    <p class="Message">Message</p>
                    <textarea type="text" required></textarea>
                    <br />
                    <button type="submit" class="btn btn-primary">
                        SUBMIT
                    </button>
                </form>
                <div></div>
            </div>
        </div>
    )
}

export default Contact
