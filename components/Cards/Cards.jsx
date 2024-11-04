"use client";
import Card from "./Card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion, AnimatePresence } from "framer-motion";

import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaWordpress,
  FaFigma,
} from "react-icons/fa";

const journey = [
  // experience
  {
    type: "experience",
    company: "Kitovu Technology",
    logoUrl: "/assets/journey/experience/logo-1.svg",
    position: "Frontend Developer",
    duration: "Feb 2022 - Present",
    description:
      "Built websites and web apps using Next.js, Tailwind CSS, and Javascript. Worked on scalable, user-friendly solutions.",
  },
  {
    type: "experience",
    company: "Vip Break Ltd",
    logoUrl: "/assets/journey/experience/logo-2.svg",
    position: "Finance Controller",
    duration: "Jan 2017 - Jan 2022",
    description:
      "Developed and managed budgets, enforced internal controls, ensured tax compliance, resolved claims, investigated fraud, and conducted audits to validate financial integrity.",
  },
  {
    type: "experience",
    company: "Elite Consortium Ltd",
    logoUrl: "/assets/journey/experience/logo-3.svg",
    position: "Finance Assistant",
    duration: "Jan 2015 - Jan 2017",
    description:
      "Managed financial transactions, maintained accurate records, reconciled accounts, and prepared reports to support decision-making and budget control",
  },
  {
    type: "experience",
    company: "Warpspeed Inc.",
    logoUrl: "/assets/journey/experience/logo-4.svg",
    position: "Full Stack Developer",
    duration: "Oct 2010 - Sep 2013",
    description:
      "Developed full-stack solutions using React and Node.js. Integrated frontend and backend technologies.",
  },
  // education
  {
    type: "education",
    institution: "Udemy",
    logoUrl: "/assets/journey/education/logo-1.svg",
    qualification: "Web Development Bootcamp",
    duration: "Jan 2024 - Apr 2024",
    description:
      "Learned full-stack development concepts, focusing on React, Node.js, and APIs. Completed hands-on projects to solidify skills.",
  },
  {
    type: "education",
    institution: "University Of Birmingham Bootcamp",
    logoUrl: "/assets/journey/education/logo-2.svg",
    qualification: "Full Stack Dev Cert",
    duration: "Oct 2022 - May 2023",
    description:
      "Gained experience in frontend and backend technologies, including React, Node.js, and databases.",
  },
  {
    type: "education",
    institution: "Middlesex University",
    logoUrl: "/assets/journey/education/logo-3.svg",
    qualification: "B.A Accounting & Finance",
    duration: "Oct 2013 - Jul 2017",
    description:
      "Studied advanced principles of user interface and user experience design. Developed skills in prototyping, wireframing, and usability testing.",
  },
  {
    type: "education",
    institution: "Uxbridge College",
    logoUrl: "/assets/journey/education/logo-4.svg",
    qualification: "Information Technology",
    duration: "Oct 2010 - Jul 2012",
    description:
      "Completed certification in project management, focusing on Agile methodologies and effective team collaboration.",
  },
  // skills
  {
    type: "skill",
    name: "HTML",
    icon: <FaHtml5 />,
    duration: "Learned in 2010",
    description:
      "Crafted structured web content using HTML effectively for modern websites, ensuring semanting marckup and accessibility.",
  },
  {
    type: "skill",
    name: "CSS",
    icon: <FaCss3Alt />,
    duration: "Learned in 2010",
    description:
      "Styled responsive web pages using CSS, ensuring an appealing user experience with modern design principles and layouts.",
  },
  {
    type: "skill",
    name: "Javascript",
    icon: <FaJs />,
    duration: "Learned in 2010",
    description:
      "Implemented Javascript for interactivity, enhancing user engagement on websites through dynamic content and features.",
  },
  {
    type: "skill",
    name: "React.js",
    icon: <FaReact />,
    duration: "Learned in 2010",
    description:
      "Built dynamic user interfaces using React.js, optimizing component-driven design for seamless user experiences and efficiency.",
  },
  {
    type: "skill",
    name: "Next.js",
    icon: <FaReact />,
    duration: "Learned in 2010",
    description:
      "Developed dynamic websites with Next.js, simplifying content management processes while ensuring scalability and performance.",
  },
  {
    type: "skill",
    name: "HTML",
    icon: <FaFigma />,
    duration: "Learned in 2010",
    description:
      "Designed user interfaces in Figma, facilitating collaboration and rapid prototyping to meet user needs and project goals.",
  },
];

const Cards = () => {
  return (
    <>
      <Tabs
        defaultValue="experience"
        className="w-full flex flex-col items-center"
      >
        <TabsList className="max-w-max mb-[30px]">
          <TabsTrigger value="experience">Experience</TabsTrigger>
          <TabsTrigger value="education">Education</TabsTrigger>
          <TabsTrigger value="skills">My Skills</TabsTrigger>
        </TabsList>
        <TabsContent value="experience" className="w-full">
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
            >
              {journey
                .filter((item) => item.type === "experience")
                .map((card, index) => {
                  return <Card key={index} {...card} />;
                })}
            </motion.div>
          </AnimatePresence>
        </TabsContent>
        <TabsContent value="education" className="w-full">
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
            >
              {journey
                .filter((item) => item.type === "education")
                .map((card, index) => {
                  return <Card key={index} {...card} />;
                })}
            </motion.div>
          </AnimatePresence>
        </TabsContent>
        <TabsContent value="skills" className="w-full">
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
            >
              {journey
                .filter((item) => item.type === "skill")
                .map((card, index) => {
                  return <Card key={index} {...card} />;
                })}
            </motion.div>
          </AnimatePresence>
        </TabsContent>
      </Tabs>
    </>
  );
};

export default Cards;
