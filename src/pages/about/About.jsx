import React from "react";
import {
  AboutMe,
  Contact,
  Description,
  Github,
  HardSkills,
  Header,
  Image,
  Left,
  LinkedIn,
  Main,
  Right,
  SoftSkills,
  Subtitle,
} from "./About.style";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import profil from "../../assets/IMG_3462.jpg";

const About = () => {
  return (
    <Main>
      <AboutMe>
        <Left>
          <Image>
            <img src={profil} alt="" />
          </Image>
          <Header>Kemal Durukan MERT</Header>
          <Subtitle>Full Stack Developer</Subtitle>
          <Contact>
            <Github>
              <a href="https://github.com/KemalDurukanMERT">
                <AiFillGithub />
              </a>
            </Github>
            <LinkedIn>
              <a href="https://www.linkedin.com/in/kemal-durukan-mert1/">
                <AiFillLinkedin />
              </a>
            </LinkedIn>
          </Contact>
        </Left>
        <Right>
          <Description>
            <h1>About Me</h1>
            <div>
              +3 years experienced front-end developer, interested in writing
              codes, skilled at developing complex solutions, making responsive
              designs, possessing strong thinking skills, high energy and
              integrity. Ability to build algorithms effectively, and interact
              positively and communicate appropriately with team members.
              Quickly grasp new technologies and concepts to develop innovative
              and creative solutions to problems. Always eager to learn various
              technologies, tools and libraries. Especially interested in the
              Front end/Web Development, HTML, CSS, JS, React. Excited to learn
              new things and improve, lifetime student.
            </div>
          </Description>
          <HardSkills>
            <h3>Hard Skills</h3>
            <div>
              HTML5 | CSS3 | JavaScript | React.js | Redux | SASS | Bootstrap |
              Axios | Python | Linux | SQL | PostgreSQL | Git | GitHub | APIs |
              Agile | Jira | SDLC | OOP
            </div>
          </HardSkills>
          <SoftSkills>
            <h3>Soft Skills</h3>
            <div>
              Strong Communication | Analytical Thinking | Problem-Solving
              Abilities | Self-Motivated | Project Management | Planning | Time
              Management | Adaptability | Continuous Learning | Collaboration &
              Teamwork | Coaching Mindset | Resilience | Curiosity | Emotional
              Intelligence |
            </div>
          </SoftSkills>
        </Right>
      </AboutMe>
    </Main>
  );
};

export default About;
