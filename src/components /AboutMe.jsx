import portraite from "../assets/portraite.png";


function AboutMe() {
    return (
        <div className="about-me">
            <img src={portraite} alt="Portrait of Chris Diggs" />
            <div className="aboutme-text">
                <h3>About Me</h3>
                <p>
                Hello, I'm Christopher Diggs, a tech enthusiast driven by curiosity and a desire to shape the future through innovation. My journey into technology began with a simple yet powerful tool: a 3D printer. What started as a hobby quickly transformed into a journey of discovery as I explored the endless possibilities it offered. Intrigued by the potential of automation, I delved into programming. Creating an auto-leveler using Python and a bit of youtube along the way but it not only solved a problem but also opened my eyes to the immense power of coding to streamline processes and drive efficiency. I believe wholeheartedly in the transformative power of technology. My goal is to leverage my skills and passion to contribute positively to the tech landscape, creating solutions that make a tangible difference in people's lives. To achieve my vision, I embarked on a journey to master full-stack development. I am a full-stack web developer and have been studying software at Atlas school in Tulsa, Oklahoma since January 2023. From mastering the intricacies of frontend design to diving deep into backend architecture, every step of this journey has been fueled by a desire to create seamless digital experiences. While proficient in various tech stacks, I'm particularly drawn to the M.E.R.N stack—MongoDB, Express.js, React, and Node.js. This versatile and efficient framework aligns perfectly with my goal of building scalable, impactful tech solutions that push boundaries and drive innovation. In essence, my passion for technology is a driving force in my life. With each new skill learned and every project undertaken, I am one step closer to realizing my dream of shaping a better, more connected future through the power of technology.
                </p>
            </div>
        </div>
    );
}

export default AboutMe;

