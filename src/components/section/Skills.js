import React from "react";
import { BiBadgeCheck } from "react-icons/bi";
import { AiFillHtml5 } from "react-icons/ai";
import { FaCss3Alt, FaGithubSquare, FaWordpress } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import {
  SiTailwindcss,
  SiBootstrap,
  SiSass,
  SiStyledcomponents,
  SiStorybook,
  SiStrapi,
} from "react-icons/si";
import { DiResponsive } from "react-icons/di";
import { GrReactjs } from "react-icons/gr";
import { TbBrandNextjs } from "react-icons/tb";
import { SiTypescript, SiRedux } from "react-icons/si";
import CardSkills from "../section-component/skills/CardSkills";

function Skills() {
  const experince = [
    {
      id: 1,
      label: "Basic skills",
      skills: [
        {
          id: 1,
          title: "HTML",
          levelSkill: "Advanced",
          icon: <AiFillHtml5 className="skills__icon" />,
        },
        {
          id: 2,
          title: "CSS",
          levelSkill: "Advanced",
          icon: <FaCss3Alt className="skills__icon" />,
        },
        {
          id: 3,
          title: "Javascript",
          levelSkill: "Proficient",
          icon: <IoLogoJavascript className="skills__icon" />,
        },
        {
          id: 4,
          title: "Tailwind",
          levelSkill: "Proficient",
          icon: <SiTailwindcss className="skills__icon" />,
        },
        {
          id: 5,
          title: "Bootstrap",
          levelSkill: "Advanced",
          icon: <SiBootstrap className="skills__icon" />,
        },
        {
          id: 6,
          title: "Scss",
          levelSkill: "Intermediate",
          icon: <SiSass className="skills__icon" />,
        },
        {
          id: 7,
          title: "Responsive",
          levelSkill: "Proficient",
          icon: <DiResponsive className="skills__icon" />,
        },
        {
          id: 8,
          title: "Material-UI",
          levelSkill: "Intermediate",
          icon: <BiBadgeCheck className="skills__icon" />,
        },
      ],
    },
    {
      id: 2,
      label: "React Developer",
      skills: [
        {
          id: 1,
          title: "ReactJS",
          levelSkill: "Advanced",
          icon: <GrReactjs className="skills__icon" />,
        },
        {
          id: 2,
          title: "NextJs",
          levelSkill: "Advanced",
          icon: <TbBrandNextjs className="skills__icon" />,
        },
        {
          id: 3,
          title: "Typescript",
          levelSkill: "Proficient",
          icon: <SiTypescript className="skills__icon" />,
        },
        {
          id: 4,
          title: "Redux-toolkit",
          levelSkill: "Advanced",
          icon: <SiRedux className="skills__icon" />,
        },
        {
          id: 5,
          title: "Axios",
          levelSkill: "Advanced",
          icon: <BiBadgeCheck className="skills__icon" />,
        },
        {
          id: 6,
          title: "SOLID",
          levelSkill: "Advanced",
          icon: <BiBadgeCheck className="skills__icon" />,
        },
        {
          id: 7,
          title: "React Query",
          levelSkill: "Proficient",
          icon: <BiBadgeCheck className="skills__icon" />,
        },
        {
          id: 8,
          title: "Styled component",
          levelSkill: "Intermediate",
          icon: <SiStyledcomponents className="skills__icon" />,
        },
      ],
    },
    {
      id: 3,
      label: "Other skills",
      skills: [
        {
          id: 1,
          title: "Storybook",
          levelSkill: "Intermediate",
          icon: <SiStorybook className="skills__icon" />,
        },
        {
          id: 2,
          title: "Gitlab - Github",
          levelSkill: "Proficient",
          icon: <FaGithubSquare className="skills__icon" />,
        },
        {
          id: 3,
          title: "Strapi",
          levelSkill: "Intermediate",
          icon: <SiStrapi className="skills__icon" />,
        },
        {
          id: 4,
          title: "Wordpress",
          levelSkill: "Intermediate",
          icon: <FaWordpress className="skills__icon" />,
        },
      ],
    },
  ];
  return (
    <section className="skills section" id="skills">
      <span className="section_subtitle">My abilities</span>
      <h2 className="section_title">My Experience</h2>
      <div className="skills__container container grid">
        {experince.map((el, idx) => (
          <CardSkills key={`key_skill_content_${idx + 1}`} dataSkills={el} />
        ))}
      </div>
    </section>
  );
}

export default Skills;
