import React from "react";
import SkillItem from "./ui/skillItem";

// Helper function to format the description list
const formatDescription = (description) => {
  return description.map((line, index) => (
    <React.Fragment key={index}>
      {line}
      <br />
    </React.Fragment>
  ));
};

// Helper function to format skills list
const formatSkills = (skills) => {
  return skills.map((skill, index) => (
    <SkillItem key={index} skill={skill} />
  ));
};

export default function ExperienceItem({ date, position, company, companyURL, description, skills, referenceName="Saif", referenceEmailLink="nei03.castillon@gmail.com", isBottom }) {
  return (
    <div className="container">
      <p className="text-gray-light font-black xl:text-xs 2xl:text-xs 3xl:text-lg">
        {date}
      </p>
      <p className="font-extrabold text-white xl:text-m 2xl:text-xs 3xl:text-lg">
        {position}
      </p>
      <p className="font-bold text-white xl:text-s 2xl:text-xs 3xl:text-lg">
        <a href={companyURL} target="_blank" rel="noopener noreferrer">
          {company}
        </a>
      </p>
      <div
        className="
          container
          mb-8
        "
      >
        <div className="bg-black2 bg-opacity-15 w-full p-4 rounded-lg text-gray-light xl:text-s xl:mt-2 2xl:text-xs 2xl:mt-2 3xl:text-lg">
          {formatDescription(description)}
        </div>
      </div>

      <div 
        className="
          flex
          flex-wrap
        "
      >
        <span
          className="
            text-gray-light
            xl:text-s 
            xl:mt-1 
            2xl:text-xs 
            2xl:mt-1 
            3xl:text-lg
            mr-2
            w-fit
          "
        >
          Skills:
        </span>
        <div
          className="
            flex
            flex-wrap
            gap-2
          "
        >
          {formatSkills(skills)}
        </div>
      </div>
      <div className={`font-bold text-gray-light xl:text-s xl:mt-4 ${!isBottom ? "xl:mb-18" : ""} 2xl:text-xs 2xl:mt-1 3xl:text-lg`}>
        <div className="flex">
          Reference: 
        </div>
        <div className="relative group">
          <a href={referenceEmailLink} target="_blank" rel="noopener noreferrer">
            {referenceName}
          </a>
          <div className="absolute left-0 mt-1 w-48 p-2 bg-gray-700 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {referenceEmailLink}
          </div>
        </div>
      </div>
    </div>
  );
}
