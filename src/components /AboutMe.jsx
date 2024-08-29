import portraite from "../assets/portraite.png";


function AboutMe() {
    return (
        <div className="about-me">
            <img src={portraite} alt="Portrait of Chris Diggs" />
            <div className="aboutme-text">
                <h3>About Me</h3>
                <p>
                    My name is Chris. I'm a software engineer who loves to create beautiful and functional web applications. I recently graduated from the University of Pennsylvania with a degree in Computer Science. I'm always eager to learn and explore new technologies.
                    <br /><br />
                    I've worked on various projects, including a project to build a virtual reality experience for a children's book, and a project to create a digital library for a local bookstore. I'm also a part of a team that develops and maintains open-source projects on GitHub.
                    <br /><br />
                    Outside of work, I enjoy playing video games, reading, and spending time with my family and friends. I'm also a big fan of photography and traveling.
                </p>
            </div>
        </div>
    );
}

export default AboutMe;

