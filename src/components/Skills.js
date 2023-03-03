import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import SkillCard from "./SkillCard.js"

import javascript from "../assets/skills/javascript.svg"
import linux from "../assets/skills/linux.svg"
import docker from "../assets/skills/docker.svg"
import html from "../assets/skills/html.svg"
import css from "../assets/skills/css.svg"
import git from "../assets/skills/git.svg"
import nest from "../assets/skills/nest.svg"
import postgresql from "../assets/skills/postgresql.svg"
import typescript from "../assets/skills/typescript.svg"
import reactIcon from "../assets/skills/react.svg"
import scss from "../assets/skills/scss.svg"
import hr from "../assets/curve-hr.svg"

export default function Skills() {
    const settings = {
        dots: false,
        autoplay: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 2,
                }
            }
        ]
    };

    return (
        <div id="skills" className="mt-4 text-white">
            <h1 className="text-2xl font-bold">Skills</h1>
            <p className="font-light text-gray-400">Here are some of my skills</p>

            <div className="mt-4">
                <Slider {...settings}>
                    <SkillCard name="JavaScript" experience="2 years" img={javascript}/>
                    <SkillCard name="HTML5" experience="2 years" img={html}/>
                    <SkillCard name="CSS3" experience="2 years" img={css}/>
                    <SkillCard name="SCSS" experience="1 years" img={scss}/>
                    <SkillCard name="TypeScript" experience="4 months" img={typescript}/>
                    <SkillCard name="React" experience="1 years" img={reactIcon}/>
                    <SkillCard name="Git" experience="1 years" img={git}/>
                    <SkillCard name="Linux" experience="1 years" img={linux}/>
                    <SkillCard name="Docker" experience="5 months" img={docker}/>
                    <SkillCard name="Nest" experience="3 months" img={nest}/>
                    <SkillCard name="PostgreSQL" experience="3 months" img={postgresql}/>
                </Slider>
            </div>
            <img src={hr} className="w-full mt-8 md:h-3" alt="hr"/>
        </div>
    )
}