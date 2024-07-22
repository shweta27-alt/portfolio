import project1 from "../assets/Projects/project-1.jpg";
import project2 from "../assets/Projects/project-2.jpg";
import project3 from "../assets/Projects/project-3.jpg";
import project4 from "../assets/Projects/project-4.jpg";

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With 1 years of hands-on experience, I have honed my skills in front-end technologies like React, as well as back-end technologies like Node.js, Express and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 1 years of professional experience, I have worked with a variety of technologies, including React, Node.js, Express and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "Software Developer",
    company: "CarTradeTech",
    description: `• Enhanced the design of over 10+ dealer websites to improve SEO rankings, resulting in increased visibility and user
engagement. .
• Improved Documentation of Oxygen library and wrote more than 5 components unit test cases on JEST
• Contributed research on micro-frontend architecture and enhanced my understanding of agile methodologies
applied at CarWale.
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
    year: "2023 - Present",
    role: "Software Developer",
    company: "CarTradeTech",
    description: `• Developed 7 new components - Camera, DynamicInfoBar, AnimatedThankYouHeader, Expand Collapse,
InputLegend, Image, and Switch.
• Maintained their exisiting Oxygen component library having 50+ components in both React and React Native,
emphasizing design consistency, thorough testing, and clear documentation
• Initiated Research on reducing DOM size by using counter based hashing (from 6 characters to 2-3 character)
• Developed 2 new react hooks to track components efficiently for DOM reduction and tracking purposes
• Migrated Components to Ozone components system, facilitating multi-platform use of 20+ common higher-order
components.
• Created Responsive Micro-sites using vanilla js, such as Women In Mobility.
• Optimized website performance through DOM Node reduction on more than 5 components effectively reducing DOM
element overall.
• Lead the Integration of Sell Vehicle Flow to replace old design patterns and create a 10 fold screens design for
product Bikewale.
• Explored React Native Reanimated and created optimized version of DraggableFabButton for carwale app.
• Implemented browser-level and JavaScript-level lazy loading for the image component, significantly enhancing load
times and performance for all image components site-wide`,
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
    description: `• Deployed a robust real time communication service written in nodejs with easy to use accessible web interface
• Features include authentication with validation, One-to-one chat, Group chat, Authorization where group admin
can edit or remove group users, for image storage it uses Cloudinary`,
    technologies: [
      "HTML",
      "CSS",
      "React",
      "Node.js",
      "MongoDB",
      "Socket.io",
      "Cloudinary",
      "Passport.js",
      "Express-session",
    ],
  },
  {
    title: "NetflixGPT",
    image: project2,
    description: `• Developed Netflix GPT, a Netflix clone, integrating GPT search capabilities for faster search results and an enhanced
browsing and viewing experience, bolstered by multi-language support.
• Deployed on Firebase, thus allowing us to vertically scale for large user base`,
    technologies: ["HTML", "CSS", "Firebase", "Tailwind CSS", "Redux"],
  },
  {
    title: "URL shortener",
    image: project4,
    description: `• Compressed lengthy URLs using advanced algorithms , transforming them into concise, memorable links,increased
Click-through rates and enhance tracking accuracy for marketing campaigns
• Features includes Authentication and authorization, Custom short URLs, Link expiration, and deactivation`,
    technologies: ["HTML", "CSS", "REact.js", "Express", "MongoDB"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description: `A personal portfolio website showcasing projects, skills, and contact information.`,
    technologies: ["HTML", "CSS", "React", "Tailwind CSS"],
  },
];

export const CONTACT = {
  address: "A-303, shanti dham, Adharwadi chowk, Kalyan",
  phoneNo: "+91 8850555867",
  email: "shwetasaindane27@email.com",
};
