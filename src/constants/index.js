import project1 from "../assets/Projects/project-1.jpg";
import project2 from "../assets/Projects/project-2.jpg";
import project3 from "../assets/Projects/project-3.jpg";
import project4 from "../assets/Projects/project-4.jpg";

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With 1 years of hands-on experience, I have honed my skills in front-end technologies like React, Javascript as well as back-end technologies like Node.js, Express and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 1 years of professional experience, I have worked with a variety of technologies, including React, Node.js, Express and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "Jun 2023 - Present",
    role: "Software Developer",
    company: "CarTradeTech",
    description: `I have developed 7 new components including Camera, DynamicInfoBar, AnimatedThankYouHeader, ExpandCollapse, InputLegend, Image, and Switch, while maintaining the existing Oxygen component library with 50+ components in both React and React Native, ensuring design consistency, thorough testing, and clear documentation. I initiated research on reducing DOM size using counter-based hashing (reducing from 6 characters to 2-3 characters) and developed 2 new React hooks for efficient component tracking and DOM reduction. Additionally, I migrated components to the Ozone components system, facilitating multi-platform use of 20+ common higher-order components. I created responsive micro-sites using vanilla JS, such as Women In Mobility, and optimized website performance by reducing DOM nodes in over 5 components. I led the integration of the Sell Vehicle Flow, replacing old design patterns and creating a 10-fold screen design for Bikewale. I explored React Native Reanimated and created an optimized version of DraggableFabButton for the CarWale app. Furthermore, I implemented browser-level and JavaScript-level lazy loading for the image component, significantly enhancing load times and performance site-wide.
`,
    technologies: [
      "Javascript",
      "React.js",
      "Tailwind css",
      "SCSS",
      "HTML",
      "CSS",
    ],
  },

  {
    year: "Mar 2023 - Apr 2023",
    role: "Software Developer Intern",
    company: "CarTradeTech",
    description: `
    I have enhanced the design of over 10 dealer websites to improve SEO rankings, resulting in increased visibility and user engagement. I improved the documentation of the Oxygen library and wrote unit test cases for over 5 components using JEST. Additionally, I contributed research on micro-frontend architecture and deepened my understanding of agile methodologies applied at CarWale.
    `,
    technologies: [
      "Javascript",
      "React.js",
      "Tailwind css",
      "SCSS",
      "HTML",
      "CSS",
    ],
  },
];

export const PROJECTS = [
  {
    title: "Chatify - web chat Application",
    image: project1,
    description: `I deployed a robust real-time communication service written in Node.js with an accessible web interface, featuring authentication with validation, one-to-one chat, group chat, and authorization allowing group admins to edit or remove group users. The service also utilizes Cloudinary for image storage.`,
    technologies: [
      "HTML",
      "CSS",
      "React",
      "Node.js",
      "MongoDB",
      "Socket.io",
      "Passport.js",
    ],
    live: "https://chatify-app-zeta.vercel.app/auth/login"
  },
  {
    title: "NetflixGPT",
    image: project2,
    description: `I developed Netflix GPT, a Netflix clone that integrates GPT search capabilities for faster search results and an enhanced browsing and viewing experience, bolstered by multi-language support. The application was deployed on Firebase, allowing it to scale vertically for a large user base.`,
    technologies: ["HTML", "CSS", "Firebase", "Tailwind CSS", "Redux"],
    live: "https://netflix-gpt-omega-virid.vercel.app/"
  },
  {
    title: "URL shortener",
    image: project4,
    description: `I compressed lengthy URLs using advanced algorithms, transforming them into concise, memorable links, which increased click-through rates and enhanced tracking accuracy for marketing campaigns. The features include authentication and authorization, custom short URLs, link expiration, and deactivation.`,
    technologies: ["HTML", "CSS", "REact.js", "Express", "MongoDB"],
    live:"https://urlshortner-app-rho.vercel.app/login"
  },
  {
    title: "Portfolio Website",
    image: project3,
    description: `A personal portfolio website showcasing projects, skills, and contact information.`,
    technologies: ["HTML", "CSS", "React", "Tailwind CSS"],
    live: "https://portfolio-nu-flax-38.vercel.app/"
  },
];

export const CONTACT = {
  address: "Mumbai, Maharashtra",
  // phoneNo: "+91 8850555867",
  email: "shwetasaindane27@email.com",
};
