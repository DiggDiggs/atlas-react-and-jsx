import linkedin from "../assets/linkedin.svg";
import github from "../assets/github.svg";

function SocialLinks() {
    return (
        <div className="social-links">
            <a href="https://www.linkedin.com/in/christopher-a-diggs-" target="_blank" rel="noopener noreferrer">
               <img src={linkedin} alt="LinkedIn logo" />
            </a>
            <a href="https://github.com/DiggDiggs" target="_blank" rel="noopener noreferrer">
                <img src={github} alt="GitHub logo" />
            </a>
        </div>
    );
}

export default SocialLinks;
