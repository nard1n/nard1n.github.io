import "./work.scss";
import { useState } from "react";
import aboutme from "../../about-me.png";
import resumeDownload from "../../NL2021Resume.pdf";

function Work() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    {
      id: "1",
      icon: "./assets/user-profile.png",
      title: "About Me",
      desc: "Results oriented Web Developer with over 6 years of experience spanning various product integrations and software implementation projects. Worked at fast-paced internet and software companies and developed strong organizational skills. Leading all phases of diverse technology initiatives. Enjoys building new features and can spend hours effortlessly debugging away. My skills are varied across frontend and backend technologies with my strong suit being Node.js, React, SQL, NoSQL, Express.js, and Next.js.",
      img: "",
    },
    {
      id: "2",
      icon: "./assets/globe.png",
      title: "Work",
      desc: "",
      img: "",
    },
    {
      id: "3",
      icon: "./assets/writing.png",
      title: "Resume",
      desc: "Please see my resume, enclosed here:",
      img: "../assets/resume.png",
    },
  ];

  const experience = {
    education: [
      {
        school: "University of Connecticut",
        degree: "Bachelor of Science",
      },
      {
        degree: "Certificate, Full Stack Software Developer",
      },
    ],
    work: [
      {
        company: "KnownPoint Technology",
        title: "Frontend Software Engineer",
        years: "Apr 2021 - Present",
        description:
          "Scope, maintain, and implement new features. Bug resolution and site enhancement.",
      },
      {
        company: "Paytronix Systems",
        title: "Software Implementations, Consultant",
        years: "Dec 2019 - Jul 2021",
        description:
          "Project Management. Multifaceted product implementations with varying tech. Tailored technical solutions.",
      },
      {
        company: "CJ Affiliate",
        title: "Client Integrations Engineer",
        years: "Nov 2018 - Dec 2019",
        description:
          "Provided integration solutions. Led strategic discussion with client developers. Plan, QA, and deployment of integrations.",
      },
      {
        company: "Indeed.com",
        title: "Product Support Analyst",
        years: "Apr 2015 - Nov 2018",
        description:
          "Product SME. Extensive knowledge of third-party integrations. Facilitate cross-functional collaboration and initiatives.",
      },
    ],
    skills: [
      {
        name: "JavaScript, React.js, Python, Node.js",
        title: "Programming languages",
      },
      {
        name: "HTML, CSS, jQuery, Redux, Express.js, Bootstrap, Materialize, Material UI",
        title: "Web Development",
      },
      {
        name: "SQL, MongoDB, MySQL, JSON, AJAX, RESTful APIs, XML, Google Tag Manager",
        title: "Database and Analytics",
      },
      {
        name: "Heroku, Git, ELK Stack, Miro, Figma, JIRA, Confluence, Salesforce, Zendesk, Smartsheets, ELK Stack, User Auth",
        title: "Tools and Technologies",
      },
      {
        name: "Deployment, Project Management, Peer onboarding and mentorship, Agile methodology, Cross-functional, Customer Service, Product Research",
        title: "Additional Experience",
      },
    ],
  };

  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };

  return (
    <div className="work" id="work">
      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        <div className="container">
          <div className="item">
            <div className="left">
              <div className="leftContainer">
                <span>
                  <img className="aboutme" src={aboutme} alt="about me" />
                  <img className="aboutmepic" src="assets/profilepic.jpeg" alt="pictureofnardin" />
                </span>
                <h2 className="aboutdesc">{data[0].desc}</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="item">
            <div className="left">
              <div className="leftContainer">
                <h2>Work Experience</h2>
                <h4>{experience.work[0].title}</h4>
                <div className="vspace">
                  <p>{experience.work[0].company}</p>
                  <p className="workyear">{experience.work[0].years}</p>
                </div>
                <p className="custmargin">{experience.work[0].description}</p>

                <h4>{experience.work[1].title}</h4>
                <div className="vspace">
                  <p>{experience.work[1].company}</p>
                  <p className="workyear">{experience.work[1].years}</p>
                </div>
                <p className="custmargin">{experience.work[1].description}</p>

                <h4>{experience.work[2].title}</h4>
                <div className="vspace">
                  <p>{experience.work[2].company}</p>
                  <p className="workyear">{experience.work[2].years}</p>
                </div>
                <p className="custmargin">{experience.work[2].description}</p>

                <h4>{experience.work[3].title}</h4>
                <div className="vspace">
                  <p>{experience.work[3].company}</p>
                  <p className="workyear">{experience.work[3].years}</p>
                </div>
                <p className="custmargin">{experience.work[3].description}</p>
                <hr />
                <h2>Education</h2>
                <h4>{experience.education[0].school}</h4>
                <p>{experience.education[0].degree}</p>
                <p>{experience.education[1].degree}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="item">
            <div className="left">
              <div className="leftContainer">

                <h2>Skills</h2>
                <h4>{experience.skills[0].title}</h4>
                <p>{experience.skills[0].name}</p>
                <h4>{experience.skills[1].title}</h4>
                <p>{experience.skills[1].name}</p>
                <h4>{experience.skills[2].title}</h4>
                <p>{experience.skills[2].name}</p>
                <h4>{experience.skills[3].title}</h4>
                <p>{experience.skills[3].name}</p>
                <h4>{experience.skills[4].title}</h4>
                <p>{experience.skills[4].name}</p>

                <br />
                <hr />
                <br />

                <div className="download">
                  <p>
                    <a href={resumeDownload} className="button">
                      <i className=""></i>Download Resume
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img
        src="assets/arrow.png"
        className="arrow left"
        alt=""
        onClick={() => handleClick("left")}
      />
      <img
        src="assets/arrow.png"
        className="arrow right"
        alt=""
        onClick={() => handleClick()}
      />
    </div>
  );
}

export default Work;
