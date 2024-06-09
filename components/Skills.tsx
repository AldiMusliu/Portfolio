"use client";
import React from "react";

const skillsData = [
  {
    skill: "HTML5",
    percentage: 90,
  },
  {
    skill: "CSS",
    percentage: 95,
  },
  {
    skill: "JavaScript",
    percentage: 70,
  },
  {
    skill: "NextJs",
    percentage: 85,
  },
  {
    skill: "React Js",
    percentage: 90,
  },
  {
    skill: "SEO",
    percentage: 65,
  },
];

const Skills = () => {
  return (
    <section id="skills" className="w-full h-auto py-24 px-8">
      <div className="container mx-auto">
        <h2 className="text-5xl font-bold mb-4 text-center">My Skills</h2>
        <p className="text-lg mb-12 text-center text-gray-500">
          I possess strong expertise in HTML5, CSS, JavaScript, and React.js,
          with proficiency in Next.js and SEO optimization, demonstrated by my
          ability to create high-quality, responsive web applications.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillsData.map((skill, index) => (
            <div key={index} className="flex flex-col space-y-2">
              <div className="flex justify-between">
                <span>{skill.skill}</span>
                <span>{skill.percentage}%</span>
              </div>
              <div className="w-full bg-gray-800 rounded-full h-4">
                <div
                  className="bg-primary h-4 rounded-full"
                  style={{ width: `${skill.percentage}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
