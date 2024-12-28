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



export const HERO_CONTENT = `I am a passionate full-stack developer with a strong foundation in building responsive and user-friendly web applications. Proficient in front-end technologies like HTML, CSS, JavaScript, React, and modern styling frameworks such as Bootstrap and Tailwind CSS, I pair these with robust back-end tools like Django, Python, and MySQL to create scalable and dynamic solutions. As a 4th-year computer science student, I have combined academic learning with hands-on projects to develop innovative applications that deliver seamless user experiences. I am eager to apply my skills in real-world projects and continue growing as a developer.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full-stack developer with a strong passion for creating efficient and user-friendly web applications. As a 4th-year student, I have honed my skills in technologies such as React, Django, and MySQL, along with front-end frameworks like Bootstrap and Tailwind CSS. My journey in web development began with a deep curiosity for how things work, which has evolved into hands-on experience through academic projects and personal ventures. I thrive in collaborative environments, tackling complex challenges to deliver high-quality solutions. Outside of coding, I stay active, explore new technologies, and contribute to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "Senior Full Stack Developer",
    company: "Google Inc.",
    description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
  },
  {
    year: "2022 - 2023",
    role: "Frontend Developer",
    company: "Adobe",
    description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["HTML", "CSS", "Vue.js", "mySQL"],
  },
  {
    year: "2021 - 2022",
    role: "Full Stack Developer",
    company: "Facebook",
    description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
    technologies: ["Python", "Svelte", "Three.js", "Postgres"],
  },
  {
    year: "2020 - 2021",
    role: "Software Engineer",
    company: "Paypal",
    description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
    technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
  },
];

export const PROJECTS = [
  {
    title: "E-Commerce Website",
    image: project1,
    description:
      "A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.",
    technologies: ["HTML", "CSS", "React", "Bootstrap","Django","MySQL"],
  },
  {
    title: "Smart Quest",
    image: project2,
    description:
      "Smart Quest is an advanced request and complaint handling system designed to streamline and automate the management of requests within organizations. It ensures that tasks, requests, and complaints are addressed efficiently while maintaining accountability and a clear escalation hierarchy. ",
    technologies: ["HTML", "CSS", "React", "Bootstrap","Django", "MySQL"],
  },
  {
    title: "Personal Portfolio",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Tailwind"],
  },
  {
    title: "Blogging Platform",
    image: project4,
    description:
      "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
    technologies: ["HTML", "CSS", "React", "Django", "MySQL"],
  },
];

export const CERTIFICATIONS = [

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
  }, 
  {
    title: "Django ",
    image: django,
    description:
      "Developed robust back-end systems using Django, implementing features like user authentication, CRUD operations, and database integration.",
  },
  {
    title: "Django REST Framework",
    image: REST,
    description:
      "Created RESTful APIs using Django REST Framework to enable seamless communication between front-end and back-end services.",
  }, 
];

export const EDUCATIONS = [

  {
    title: "University of Engineering and Technology (UET), Lahore",
    role:"B.Sc. in Computer Science (2021 - Present)",
    image: uet,
    description:
      "I am currently pursuing my Bachelor's degree in Computer Science at UET Lahore, where I have gained a strong foundation in data structures, algorithms, and software engineering principles. I am actively involved in various projects , focusing on full-stack developement. UET has provided me with a stimulating environment to learn and grow as a future full-stack developer.",
  },
  
];

export const CONTACT = {
  address: "Pakistan, Lahore",
  phoneNo: "+923224370409",
  email: "saqlainwaleed99@gmail.com",
};
