import React from "react";
import SkillItem from "./ui/skillItem";

const formatCourses = (courses) => {
  return courses.map((course, index) => (
    <p
        class="
            font-bold 
            text-gray 
            xl:text-s 
            xl:mt-1 
            2xl:text-xs 
            2xl:mt-1 
            3xl:text-lg
        "
    >
        <SkillItem skill={course} key={index} />
    </p>
  ));
};

export default function EducationItem({
  date,
  major,
  university,
  courses,
  transcriptLink = "",
  isBottom = false,
}) {
  return (
    <div className={isBottom ? "container" : "container mb-10"}>
      <p
        className="
          font-black
          text-gray-light
          xl:text-xs
          2xl:text-xs
          3xl:text-lg
        "
      >
        {date}
      </p>

      <p
        className="
          font-extrabold
          text-white
          xl:text-m
          2xl:text-xs
          3xl:text-lg
        "
      >
        {major}
      </p>

      <p
        className="
            font-bold
          text-white
          xl:text-s
          2xl:text-xs
          3xl:text-lg
        "
      >
        {university}
      </p>
      <div
        class="
        text-gray
        xl:text-s
        2xl:text-xs
        3xl:text-lg
        mt-4
        "
      >
        Interest: Robotics, Machine Learning
      </div>

      <div className="flex flex-wrap">
        <div
          className="
            font-bold 
            text-gray 
            xl:text-s 
            xl:mt-8
            2xl:text-xs 
            2xl:mt-8
            3xl:text-lg
            mr-2
          "
        >
          Relevant Courses:
        </div>
        <div className="flex flex-wrap gap-2">{formatCourses(courses)}</div>
      </div>
    </div>
  );
}
