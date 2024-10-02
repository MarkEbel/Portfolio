
import '/src/css/ContactMe.css'

const ContactMe = () => {
  return (
    <div>
      <div className="intro">
      <p>Work in progress!</p>
      </div>
      <div className="contactSection">
        <input type="text" name="name" id="name" aria-required="true" placeholder="Name*" min="0"></input>
        <input type="text" name="email" id="name" aria-required="true" placeholder="Email*" min="0"></input>
        <input type="text" name="message" id="name" aria-required="true" placeholder="How can I help?" min="0"></input>  
      
        <button>Send!</button>
      </div>
      
    </div>
  );
};

export default ContactMe;
