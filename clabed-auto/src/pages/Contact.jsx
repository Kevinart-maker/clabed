import { useForm, ValidationError } from '@formspree/react';

const Contact = () => {
    const [state, handleSubmit] = useForm("mblrerjk");
    if (state.succeeded) {
        return <p className='contact-msg'>Message sent!</p>;
    }
    
    return (
        <div className="contact">
            <div className="contact-head">
                <h1>Contact Us</h1>
                <p>Any question or remarks? Just write us a message!</p>
            </div>
            <div className="contact-body">
                <div className="contact-left">
                    <h2>Contact Information</h2>
                    <div className="contact-add">
                        <li>
                            <i className="fa-solid fa-phone"></i>
                            <span>+2348033218452</span>
                        </li>
                        <li>
                            <i className="fa-solid fa-envelope"></i>
                            <span>clabedautos@gmail.com</span>
                        </li>
                        <li>
                            <i className="fa-solid fa-location-dot"></i>
                            <span>
                                98B, Pipeline Road, off Kofoworola Street, Awori Bus stop, Abule-Egba, Lagos.
                            </span>
                        </li>
                    </div>
                    <div className="socials">
                        <a href="https://www.facebook.com/clabedautosng?mibextid=ZbWKwL"><i className="fa-brands fa-facebook"></i></a>
                        
                        <a href="https://www.instagram.com/clabedautos?igsh=MzRlODBiNWFlZA=="><i className="fa-brands fa-instagram"></i></a>

                        <a href="https://x.com/clabedautos?t=55GxUl-cLFF8bPmOOqnuLw&s=09"><i className="fa-brands fa-twitter"></i></a>

                        <a href="https://www.tiktok.com/@clabedautos?_t=8pbkwAJPluH&_r=1"><i className="fa-brands fa-tiktok"></i></a>
                    </div>
                </div>


                <div className="contact-right">
                    <form onSubmit={handleSubmit}>
                        
                        <div className="contact-in">
                            <input
                                id="firstname"
                                type='text' 
                                name="firstname"
                                placeholder='First Name'
                            />
                            <ValidationError 
                                prefix="First Name" 
                                field="firstname"
                                errors={state.errors}
                            />
                            <input
                                id="lastname"
                                type="text" 
                                name="lastname"
                                placeholder='Last Name'
                            />
                            <ValidationError 
                                prefix="Last Name" 
                                field="lastname"
                                errors={state.errors}
                            />
                            <input
                                id="email"
                                type="email" 
                                name="email"
                                placeholder='Email'
                            />
                            <ValidationError 
                                prefix="Email" 
                                field="email"
                                errors={state.errors}
                            />
                            <input
                                id="phone"
                                type="number" 
                                name="phone"
                                placeholder='Phone Number'
                            />
                            <ValidationError 
                                prefix="Phone Number" 
                                field="phone"
                                errors={state.errors}
                            />
                        </div>
                        <textarea
                            id="message"
                            name="message"
                            placeholder='Write your message'
                        />
                        <ValidationError 
                            prefix="Message" 
                            field="message"
                            errors={state.errors}
                        />
                        <button type="submit" disabled={state.submitting}>
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
 
export default Contact;