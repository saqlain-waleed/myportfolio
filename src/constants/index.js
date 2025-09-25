import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";
import REST from "../assets/projects/REST.png"
import django from "../assets/projects/django.png"
import frontend from "../assets/projects/frontend.png"
import javascript from "../assets/projects/javascript.png"
import reacts from "../assets/projects/reacts.png"
import scrimbareact from "../assets/projects/scrimbareact.png"
import uet from "../assets/projects/uet.png"
import decathon from "../assets/projects/decathon.jpg"




export const HERO_CONTENT = `I am a passionate full-stack developer with a strong foundation in building responsive and user-friendly web applications. Proficient in front-end technologies like HTML, CSS, JavaScript, React, Angular and modern styling frameworks such as Bootstrap, I pair these with robust back-end tools like ASP.NET, C#, and MySQL to create scalable and dynamic solutions. As a 4th-year computer science student, I have combined academic learning with hands-on projects to develop innovative applications that deliver seamless user experiences. I am eager to apply my skills in real-world projects and continue growing as a developer.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full-stack developer with a strong passion for creating efficient and user-friendly web applications. As a 4th-year student, I have honed my skills in technologies such as React, Angular, C#, and MySQL, along with front-end frameworks like Bootstrap . My journey in web development began with a deep curiosity for how things work, which has evolved into hands-on experience through academic projects and personal ventures. I thrive in collaborative environments, tackling complex challenges to deliver high-quality solutions. Outside of coding, I stay active, explore new technologies, and contribute to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "Oct 2024 - Present",
    role: "ASP.NET & Agular",
    company: "Apply Dreams",
    description: `Led a team in developing and maintaining web applications using Angular and ASP.NET. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["HTML", "CSS", "Javascript", "Angular", "ASP.NET", "MySQL"],
  },

];

export const PROJECTS = [
  {
    title: "Personal Portfolio",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React"],
  },
{
  title: "E-commerce Website",
  image: project4,  // You can keep this image or replace it with one related to your e-commerce project
  description:
    "A fully functional e-commerce platform with product listings, shopping cart, payment gateway integration, and user authentication.",
  technologies: ["HTML", "CSS", "Angular", "ASP.NET", "MySql"],  // Common tech stack for e-commerce
},


  {
    title: "Smart Quest",
    image: project2,
    description:
      "Smart Quest is an advanced request and complaint handling system designed to streamline and automate the management of requests within organizations. It ensures that tasks, requests, and complaints are addressed efficiently while maintaining accountability and a clear escalation hierarchy. ",
    technologies: ["HTML", "CSS", "Angular", "Bootstrap", "ASP.NET", "MySQL"],
  },

];

export const CERTIFICATIONS = [

  {
    title: "Full-Stack Quiz Certificate",
    image: decathon,
    description:
      "Gained foundational knowledge in front-end development, mastering HTML, CSS, React and responsive design to create visually appealing and user-friendly web-interfaces.",
  },

  {
    title: "Introduction to Front-end",
    image: frontend,
    description:
      "Learned the basics of front-end development, including HTML, CSS, and responsive design to build engaging user interfaces.",
  },
  {
    title: "Javascript",
    image: javascript,
    description:
      "Gained proficiency in JavaScript to add interactivity, dynamic content, and logic to modern web applications.",
  },
  {
    title: "React",
    image: scrimbareact,
    description:
      "Built scalable and maintainable applications using React, focusing on creating reusable UI components, managing application state efficiently with hooks, and implementing best practices for state management to ensure a seamless and dynamic user experience.",
  },
  {
    title: "React Essential Training",
    image: reacts,
    description:
      "Built component-based applications using React, focusing on state management, hooks, and reusable UI elements.",
  }
];

export const EDUCATIONS = [

  {
    title: "University of Engineering and Technology (UET), Lahore",
    role: "B.Sc. in Computer Science (2021 - 2025)",
    image: uet,
    description:
      "I have completed my Bachelor's degree in Computer Science at UET Lahore, where I have gained a strong foundation in data structures, algorithms, and software engineering principles. I am actively involved in various projects , focusing on full-stack developement. UET has provided me with a stimulating environment to learn and grow as a future full-stack developer.",
  },

];

export const CONTACT = {
  address: "Pakistan, Lahore",
  phoneNo: "+923224370409",
  email: "saqlainwaleed99@gmail.com",
};
