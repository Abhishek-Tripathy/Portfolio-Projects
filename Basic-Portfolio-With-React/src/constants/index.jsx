import {
  FaXTwitter,
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaDiscord,
  FaInstagram,
} from "react-icons/fa6";

import projectImage1 from "../assets/project1.jpeg";
import projectImage2 from "../assets/project2.jpeg";
import projectImage3 from "../assets/project3.jpeg";
import projectImage4 from "../assets/project4.jpeg";
import projectImage5 from "../assets/project5.jpeg";
import projectImage6 from "../assets/project6.jpeg";
import { DiPython } from 'react-icons/di';
import { DiMysql } from 'react-icons/di'; 
import { SiMicrosoftexcel } from 'react-icons/si';
import { SiPowerbi } from 'react-icons/si';
import { SiTableau } from 'react-icons/si';
import { SiDatabricks } from 'react-icons/si';
import { SiDataiku } from 'react-icons/si'; 
import { SiPandas } from 'react-icons/si'; 
import { SiNumpy } from 'react-icons/si';
import { SiPytorch } from 'react-icons/si'; 
import { SiRobotframework } from 'react-icons/si';
import { SiStatamic } from 'react-icons/si'; 
import { BsMedium } from "react-icons/bs";
import { SiScikitlearn } from "react-icons/si";



export const NAVIGATION_LINKS = [
  { label: "Projects", href: "#projects" },
  { label: "Bio", href: "#bio" },
  { label: "Skills", href: "#skills" },
  { label: "Work Experience", href: "#work" },
  { label: "Education", href: "#education" },
  { label: "Connect", href: "#contact" },
];

export const HERO = {
  name: "𝑻𝒂𝒏𝒎𝒂𝒚𝒂 𝑺𝒂𝒉𝒖",
  greet: "Hello there! 👋🏻",
  description:
    "Data Analyst with over 1.5 years of hands-on experience and an MBA in System Management. Proficient in Python, Power BI, Excel, and SQL. Skilled in data cleaning, exploratory data analysis (EDA), predictive modeling, and advanced data visualization. Adept at delivering actionable insights to support business decisions.",
  email: "𝘌𝘮𝘢𝘪𝘭: 𝘵𝘢𝘯𝘮𝘢𝘺𝘢𝘴𝘢𝘩𝘶8658@𝘨𝘮𝘢𝘪𝘭.𝘤𝘰𝘮",
  phone: "𝘊𝘰𝘯𝘵𝘢𝘤𝘵 𝘯𝘰.: +91 85948 11431"
};

export const PROJECTS = [
  {
    id: 1,
    name: "SQL Projects",
    description:
      "I have uploaded multiple SQL analyses online, demonstrating skills in data querying, manipulation, and analysis. These projects showcase proficiency in writing efficient SQL queries and extracting insights from complex datasets.",
    image: projectImage1,
    githubLink: "https://github.com/Tanmaya009/SQL-Projects",
  },
  {
    id: 2,
    name: "Chatbot Multimedia Text Extraction",
    description:
      "Enable multimedia text extraction and automated question generation to enhance user interaction. Implementation: Utilize Streamlit, and speech recognition for extracting text from videos, PDFs, and DOCX files, facilitating efficient information retrieval and engagement.",
    image: projectImage2,
    githubLink: "https://github.com/Tanmaya009/Chatbot-Multimedia-Text-Extraction-and-Question-Generation-",
  },
  {
    id: 3,
    name: "Elon Musk Twitter Sentiment",
    description:
      "Conducting sentiment analysis on Elon Musk's tweets enables the extraction of valuable insights from the public's perception. A well-documented and accurately trained model can serve as a powerful tool for gauging sentiment trends over time and informing strategic decision-making.",
    image: projectImage3,
    githubLink: "https://github.com/Tanmaya009/Elon-Musk-Twitter-Sentiment-Analysis",
  },
  {
    id: 4,
    name: "Multi Dataset ML Analysis and Modeling",
    description:
      "In this project, I analyze multiple datasets to find patterns and trends. I clean the data, create visualizations, and explore the data to understand it better. I then build models to predict future values for each dataset. This helps us gain useful insights and make better decisions.",
    image: projectImage4,
    githubLink: "https://github.com/Tanmaya009/Multi-Dataset-ML-Analysis-and-Modeling",
  },
  {
    id: 5,
    name: "Voice Assistant",
    description:
      "This project is a voice-activated virtual assistant named Alpha, capable of performing tasks like web searches, fetching weather data, playing songs, and providing Wikipedia summaries. It uses Python libraries for speech recognition and text-to-speech to interact with users and execute commands.",
    image: projectImage5,
    githubLink: "https://github.com/Tanmaya009/-PYTHON--PROJECTS-",
  },
  {
    id: 6,
    name: "Power Bi Dashboards",
    description:
      "I have uploaded multiple Power BI dashboards, showcasing expertise in data visualization and analysis. These dashboards demonstrate a range of skills in presenting complex data insights through interactive and visually appealing reports. ",
    image: projectImage6,
    githubLink: "https://github.com/Tanmaya009/Power-Bi-Dashboards",
  },
];

export const BIO = [
  "With over a year of experience in data analysis, I excel at interpreting complex datasets and providing actionable insights. I've collaborated with cross-functional teams to deliver data solutions and contributed to predictive modeling efforts. My experience has refined my ability to manage and organize data to support strategic business decisions.",
  "I hold an MBA with a specialization in System Management, where I gained expertise in integrating business and technology. Following this, I completed a certification in Data Science and Machine Learning, which enhanced my skills in advanced analytics and machine learning techniques. This combination of education and certification has equipped me with a strong foundation in both business strategy and data-driven decision-making.",
  "I possess strong skills in Python, SQL, advanced Excel, and Power BI, enabling me to perform in-depth data analysis and create insightful visualizations. My expertise also extends to business analysis, where I leverage data to drive strategic decisions. Additionally, I have foundational knowledge of machine learning, allowing me to apply various algorithms and techniques to solve complex problems.",
];

export const SKILLS = [ 
  {
    icon: <DiPython className="text-4xl text-yellow-300 lg:text-5xl" />,
    name: "Python",
    experience: "1.5+ years",
  },
  {
    icon: <DiMysql className="text-4xl text-cyan-400 lg:text-5xl" />,
    name: "SQL",
    experience: "1.5+ years",
  },
  {
    icon: <SiMicrosoftexcel className="text-4xl text-green-600 lg:text-5xl" />,
    name: "Advance Excel",
    experience: "2+ years",
  },
  {
    icon: <SiPowerbi  className="text-4xl text-yellow-400 lg:text-5xl" />,
    name: "Power Bi",
    experience: "2+ years",
  },
  {
    icon: <SiTableau  className="text-4xl text-cyan-500 lg:text-5xl" />,
    name: "Tableau",
    experience: "1+ year",
  },
  {
    icon: <SiNumpy   className="text-4xl text-sky-400 lg:text-5xl" />,
    name: "Numpy",
    experience: "1.5+ years",
  },
  {
    icon: <SiPandas  className="text-4xl text-white lg:text-5xl" />,
    name: "Pandas",
    experience: "1.5+ years",
  },
  {
    icon: <SiPytorch className="text-4xl text-red-700 lg:text-5xl" />,
    name: "PyTorch",
    experience: "1+ year",
  },
  {
    icon: <SiRobotframework className="text-4xl text-machine lg:text-5xl" />    ,
    name: "Machine Learning",
    experience: "1.5+ years",
  },
  {
    icon: <SiScikitlearn  className="text-4xl text-orange-400 lg:text-5xl" />    ,
    name: "Scikit Learn",
    experience: "1.5+ years",
  },
  {
    icon: <SiStatamic className="text-4xl text-statistics lg:text-5xl" />    ,
    name: "Statistics",
    experience: "1+ year",
  },
  {
    icon: <SiDatabricks className="text-4xl text-stone-400 lg:text-5xl" /> ,
    name: "Data Analysis",
    experience: "1.5+ years",
  },
  {
    icon: <SiDataiku   className="text-4xl text-cyan-500 lg:text-5xl" />,
    name: "Data Science",
    experience: "1.5+ years",
  }
];

export const EXPERIENCES = [
  {
    title: "Data Analyst",
    company: "Boostr Netwave Solutions Pvt. Ltd.",
    duration: "July 2023 - Present",
    description:
      "As As a Data Analyst at Boostr Netwave Solutions Pvt. Ltd., I analyzed and interpreted complex datasets to provide actionable insights. I performed data cleaning, exploratory data analysis, and created dashboards using Power BI and Excel. I collaborated with teams to deliver customized data solutions and contributed to predictive modeling to forecast trends. Additionally, I managed and organized data to ensure accuracy and reliability. ",
  },
  {
    title: "Author|Editor",
    company: "DesignDataScience.com",
    duration: "July 2023 - Oct 2023",
    description:
      "I worked on a website where I was responsible for uploading and managing data related to projects and case studies focused on data analysis and machine learning. I ensured that the data was accurately organized and updated, making it easily accessible for users. My role contributed to maintaining the quality and relevance of the website's content.",
  },
  {
    title: "Data Science & ML Internship",
    company: "Whizzo Infotech Pvt. Ltd.",
    duration: "Jan 2023 - June 2023",
    description:
      "In my role as During your internship at Whizzo Infotech Pvt. Ltd., I worked on various data science and machine learning projects. I was involved in data preprocessing, feature engineering, and building predictive models. I also applied machine learning algorithms to solve real-world business problems, evaluated model performance, and optimized them for better accuracy. Additionally, I gained hands-on experience with tools and technologies commonly used in the industry.",
  },
];

export const EDUCATION = [
  {
    degree: "Data Science & Machine Learning Certification",
    institution: "Biju Patnaik University of Technology",
    duration: "Jan 2023 - July 2023",
    description:
      "I completed a certification in Data Science and Machine Learning from Nimble Tech, where I gained skills in data preprocessing, feature engineering, and model building. The program equipped me with the ability to apply machine learning algorithms to solve real-world problems and enhance predictive accuracy.",
  },
  {
    degree: "Master of Business Administration",
    institution: "Biju Patnaik University of Technology",
    duration: "September 2021 - Aug 2023",
    description:
      "I completed my MBA with a specialization in System Management, gaining expertise in integrating business and technology. The program equipped me with skills in strategic management, information systems, and data-driven decision-making. I learned to manage and optimize business processes using technology and developed the ability to implement IT solutions to support organizational goals.",
  },
];

export const SOCIAL_MEDIA_LINKS = [
  {
    href: "https://medium.com/@tanmayasahu8658",
    icon: <BsMedium  fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "#",
    icon: <FaDiscord fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://www.instagram.com/t_a_n_m_a_y__s_a_h_u?igsh=MXhrejNhcXY3Z2UyOA==",
    icon: <FaInstagram fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://x.com/T_DS_Nerd",
    icon: <FaXTwitter fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://github.com/Tanmaya009",
    icon: <FaGithub fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://www.linkedin.com/in/tanmaya-sahu-427095263/",
    icon: <FaLinkedin fontSize={25} className="hover:opacity-80" />,
  },
];
