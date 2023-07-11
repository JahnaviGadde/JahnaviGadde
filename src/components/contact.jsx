import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
        const form = useRef();

        const sendEmail = (e) => {
            e.preventDefault();
        
            emailjs.sendForm('service_dpq3yxv', 'template_3sc00md', form.current, 'AWVGOxffO_Ywpim93')
              .then((result) => {
                  console.log(result.text);
              }, (error) => {
                  console.log(error.text);
              });
          };
        

    return (
        <div className="Contact" id="contact">
            <div className="container">
            <div className="heading">
                <h3>Contact me</h3>
                <span>Don't be a stranger!   say hi..!</span>
            </div> 
            <form action="" ref={form} onSubmit={sendEmail}>
            <div className="inputtags">
            <input type="text" name="user_name" id="" placeholder="Enter your name" />
            <br />
            <input type="email" name="user_email"  id="" placeholder="Enter your email address" />
            <br />
            <textarea name="message" id="" cols="50" rows="6" placeholder="Type your message here"></textarea>
            </div>
            <button type="submit">Send!</button>
            </form>
            </div> 
        </div>
    );

};

export default Contact ;  