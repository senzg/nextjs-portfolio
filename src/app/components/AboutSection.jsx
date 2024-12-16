"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import Icon from "./Cards/Icon";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <div className="flex flex-wrap justify-start">
        <Icon iconPath={'/images/Icons/icons8-deep-learning-100.png'} iconName='Deep Learning' />
        <Icon iconPath={'/images/Icons/icons8-javascript-100.png'} iconName='Javascript' />  
        <Icon iconPath={'/images/Icons/icons8-typescript-96.png'} iconName='Typescript' />
        <Icon iconPath={'/images/Icons/icons8-react-100.png'} iconName='React' />
        <Icon iconPath={'/images/Icons/icons8-redux-100.png'} iconName='Redux' />
        <Icon iconPath={'/images/Icons/icons8-express-js-100.png'} iconName='Express' />
        <Icon iconPath={'/images/Icons/icons8-python-100.png'} iconName='Python' />  
        <Icon iconPath={'/images/Icons/icons8-sql-100.png'} iconName='SQL' />
        <Icon iconPath={'/images/Icons/icons8-r-100.png'} iconName='R Language' />
        <Icon iconPath={'/images/Icons/icons8-jest-can-collect-code-coverage-information-from-entire-projects-100.png'} iconName='Jest' />
        <Icon iconPath={'/images/Icons/icons8-hadoop-distributed-file-system-100.png'} iconName='Hadoop' />
      </div>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Fullstack Academy of Code</li>
        <li>University of California, Santa Cruz</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>AWS Cloud Practitioner</li>
        <li>Google Professional Cloud Developer</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-image.png" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I am a full stack web developer with a passion for creating
            interactive and responsive web applications. I have experience
            working with JavaScript, React, Redux, Node.js, Express, PostgreSQL,
            Sequelize, HTML, CSS, and Git. I am a quick learner and I am always
            looking to expand my knowledge and skill set. I am a team player and
            I am excited to work with others to create amazing applications.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
          </div>
          <div className="mt-8 w-full">
            {TAB_DATA.find((t) => t.id === tab).content}
            {/* <div className="flex flex-wrap justify-start">
              <Icon iconPath={'/images/Icons/icons8-deep-learning-100.png'} iconName='Deep Learning' />
              <Icon iconPath={'/images/Icons/icons8-javascript-100.png'} iconName='Javascript' />  
              <Icon iconPath={'/images/Icons/icons8-typescript-96.png'} iconName='Typescript' />
              <Icon iconPath={'/images/Icons/icons8-react-100.png'} iconName='React' />
              <Icon iconPath={'/images/Icons/icons8-redux-100.png'} iconName='Redux' />
              <Icon iconPath={'/images/Icons/icons8-express-js-100.png'} iconName='Express' />
              <Icon iconPath={'/images/Icons/icons8-python-100.png'} iconName='Python' />  
              <Icon iconPath={'/images/Icons/icons8-sql-100.png'} iconName='SQL' />
              <Icon iconPath={'/images/Icons/icons8-r-100.png'} iconName='R Language' />
              <Icon iconPath={'/images/Icons/icons8-jest-can-collect-code-coverage-information-from-entire-projects-100.png'} iconName='Jest' />
              <Icon iconPath={'/images/Icons/icons8-hadoop-distributed-file-system-100.png'} iconName='Hadoop' />
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
