import "./contact.scss"
import { useState } from "react";

function Contact() {
    const [message, setMessage] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setMessage(true);
    };
    return (
        <div className="contact" id="contact">
            <div className="left">
                <img src="assets/shake.svg" alt="" />
            </div>
            <div className="right">
                <h2>Contact.</h2>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="Email" />
                    <textarea placeholder="Message"></textarea>
                    <button type="submit"><a href="mailto:nardin.lachowski@gmail.com">Send</a></button>
                    {message && <span>Thanks for your message, I will reply ASAP 🙂 </span>}
                </form>
            </div>
        </div>
    )
}

export default Contact
