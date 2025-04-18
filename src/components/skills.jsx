import React from "react";

const skills = [
  "Java",
  "Spring Boot",
  "Spring MVC",
  "Hibernate",
  "React.js",
  "JavaScript",
  "Thymeleaf",
  "HTML",
  "CSS",
  "Bootstrap",
  "MySQL",
  "PostgreSQL",
  "Git",
  "GitHub",
];

const SkillCard = ({ name }) => (
  <div className="flex items-center justify-center bg-[#333] text-white px-4 py-2 rounded-lg transition-transform duration-200 hover:scale-105 w-fit h-fit shadow-md">
    <p className="text-center font-medium">{name}</p>
  </div>
);

const SkillsGrid = () => (
  <div className="flex flex-wrap gap-4 p-4">
    {skills.map((skill, index) => (
      <SkillCard key={index} name={skill} />
    ))}
  </div>
);

export default SkillsGrid;
