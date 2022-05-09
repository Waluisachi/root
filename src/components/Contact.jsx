import whatsapp from "../images/whatsapp.png";
import instagram from "../images/instagram.png";
import twitter from "../images/twitter.png";
import linkedin from "../images/linkedin.png";
import github from "../images/github.png";


const Contact = () => {
  return (
    <div className={`flex box-border border-1 p-8 m-10 shadow-xl justify-evenly`}>
      <div className="m-10">
        <a
          href="https://github.com/Waluisachi/"
          target='_blank'
          rel="noopener"
          aria-label='Github'
        >
        <img src={whatsapp} className="w-10 h-10" alt="whatsapp" />
        </a>

      </div>
      <div className="m-10">
      <a
          href="https://instagram.com/_waluisachi"
          target='_blank'
          rel="noopener"
          aria-label='Instagram'
        >
          <img src={instagram} className="w-10 h-10" alt="instagram" />
        </a>

      </div>
      <div className="m-10">
      <a
          href="https://twitter.com/_waluisachi"
          target='_blank'
          rel="noopener"
          aria-label='Twitter'
        >
          <img src={twitter} className="w-10 h-10" alt="twitter" />
        </a>

      </div>
      <div className="m-10">
      <a
          href="https://www.linkedin.com/in/philip-waluisachi-b72a221a3/"
          target='_blank'
          rel="noopener"
          aria-label='LinkedIn'
        >
          <img src={linkedin} className="w-10 h-10" alt="linkedin" />
        </a>

      </div>
      <div className="m-10">
        <a
            href="https://github.com/Waluisachi"
            target='_blank'
            rel="noopener"
            aria-label='Github'
          >
            <img src={github} className="w-10 h-10" alt="github" />
          </a>
      </div>
    </div>
  );
}

export default Contact;
