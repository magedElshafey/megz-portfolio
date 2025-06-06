// types
import { Nav } from "../types/Nav";
import { Socials } from "../types/Socials";
import { Service } from "../types/Services";
import { Skill } from "../types/Skill";
import { Statistic } from "../types/Statistics";
import { PortfolioTypes } from "../types/PortfolioTypes";
// assets
import { FaLinkedin, FaWhatsapp, FaPhoneAlt } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import serv1 from "../assets/serv-01.png";
import serv2 from "../assets/serv-02.png";
import serv3 from "../assets/serv-03.png";
import serv4 from "../assets/serv-04.png";
import serv5 from "../assets/serv-05.png";
import serv6 from "../assets/serv-06.png";
import serv7 from "../assets/serv-07.png";
import serv8 from "../assets/serv-08.png";
import serv9 from "../assets/serv-09.png";
import serv10 from "../assets/serv-10.png";
import serv11 from "../assets/serv-11.png";
import serv12 from "../assets/serv-12.png";
import serv13 from "../assets/serv-13.png";
import serv14 from "../assets/serv-14.png";
import serv15 from "../assets/serv-15.png";
import serv16 from "../assets/serv-16.png";
import serv17 from "../assets/serv-17.png";
import serv18 from "../assets/serv-18.png";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaBootstrap,
  FaGithub,
  FaSass,
  FaLaravel,
  FaPhp,
  FaNode,
} from "react-icons/fa";
import {
  SiTypescript,
  SiNextdotjs,
  SiRedux,
  SiTailwindcss,
  SiMui,
  SiAntdesign,
  SiAxios,
  SiReactquery,
  SiReactrouter,
  SiJquery,
  SiMysql,
  SiPostman,
  SiVercel,
  SiReact,
  SiI18Next,
} from "react-icons/si";

import port1 from "../assets/port-01.png";
import port2 from "../assets/port-02.png";
export const navLinks: Nav[] = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "About",
    link: "#about",
  },
  {
    name: "services",
    link: "#services",
  },
  {
    name: "portfolio",
    link: "#portfolio",
  },
  {
    name: "skills",
    link: "#skills",
  },

  {
    name: "Contact",
    link: "#contact",
  },
];

export const socials: Socials[] = [
  {
    name: "whatsapp",
    url: "https://wa.me/+201022153359",
    icon: FaWhatsapp,
  },
  {
    name: "email",
    url: "mailto:magedelshafey98@gmail.com",
    icon: MdOutlineEmail,
  },
  {
    name: "phone",
    url: "tel:+201022153359",
    icon: FaPhoneAlt,
  },
  {
    name: "linkedin",
    url: "https://www.linkedin.com/in/maged-elshafey/",
    icon: FaLinkedin,
  },
];
export const service: Service[] = [
  {
    icon: serv1,
    title: "Custom Web Applications",
    descreption:
      "I build tailored web apps from scratch using modern technologies to meet your specific business needs.",
  },
  {
    icon: serv2,
    title: "Front-End Development",
    descreption:
      "Responsive, fast, and visually appealing interfaces using React.js and modern UI libraries.",
  },
  {
    icon: serv3,
    title: "Back-End Development",
    descreption:
      "Powerful, secure, and scalable server-side solutions with Laravel",
  },
  {
    icon: serv4,
    title: "API Development & Integration",
    descreption:
      "Creating robust APIs and integrating third-party services to boost your app's functionality.",
  },
  {
    icon: serv5,
    title: "Admin Dashboards",
    descreption:
      "Building clean, data-driven admin panels for effective business and content management.",
  },
  {
    icon: serv6,
    title: "Full Project Deployment",
    descreption:
      "From development to deployment — I handle everything to get your product live and running smoothly.",
  },
  {
    icon: serv7,
    title: "Web Hosting & Deployment",
    descreption:
      "Reliable and secure web hosting solutions to get your site online with minimal downtime.",
  },
  {
    icon: serv8,
    title: "Performance Optimization",
    descreption:
      "Speed up your website with optimized code, image compression, and best performance practices.",
  },
  {
    icon: serv9,
    title: "SEO Optimization",
    descreption:
      "Make your website more discoverable on search engines with proper SEO structure and strategy.",
  },
  {
    icon: serv10,
    title: "Website Maintenance",
    descreption:
      "Ongoing updates, bug fixes, and performance checks to keep your website running smoothly",
  },
  {
    icon: serv11,
    title: "Testing & Debugging",
    descreption:
      "I ensure your website or application runs smoothly by identifying bugs and applying efficient fixes before and after deployment.",
  },
  {
    icon: serv12,
    title: "Code Refactoring & Cleanup",
    descreption:
      "I help improve performance and maintainability by restructuring messy or outdated code without changing its functionality.",
  },
  {
    icon: serv13,
    title: "Security Enhancements",
    descreption:
      "I implement secure coding practices, handle authentication/authorization, and protect your app from common threats.",
  },
  {
    icon: serv14,
    title: "Technical Consultation",
    descreption:
      "Need help deciding on architecture, tools, or best practices? I offer expert guidance tailored to your project.",
  },
  {
    icon: serv15,
    title: "Domain & DNS Setup",
    descreption:
      "I help you connect your domain to your hosting, configure DNS settings, and ensure everything runs smoothly.",
  },
  {
    icon: serv16,
    title: "Third-Party Integrations",
    descreption:
      "From payment gateways to analytics, I integrate the tools and platforms your business needs.",
  },
  {
    icon: serv17,
    title: "Contact Forms & Email Handling",
    descreption:
      "I build smart contact forms with proper email handling, spam protection, and backend integration.",
  },
  {
    icon: serv18,
    title: "Content Management System (CMS) Integration",
    descreption:
      "I can integrate or build a custom CMS to help you manage your website’s content easily.",
  },
];
export const skills: Skill = {
  frontend: [
    { name: "HTML", icon: FaHtml5, class: "text-orange-600" },
    { name: "CSS", icon: FaCss3Alt, class: "text-blue-600" },
    { name: "JavaScript", icon: FaJs, class: "text-yellow-400" },
    { name: "TypeScript", icon: SiTypescript, class: "text-blue-500" },
    { name: "React", icon: FaReact, class: "text-cyan-400" },
    { name: "Next.js", icon: SiNextdotjs, class: "" },
    { name: "React Native", icon: SiReact, class: "text-cyan-400" },
    { name: "Tailwind CSS", icon: SiTailwindcss, class: "text-sky-400" },
    { name: "Bootstrap", icon: FaBootstrap, class: "text-purple-600" },
    { name: "Material UI", icon: SiMui, class: "text-blue-500" },
    { name: "ANT Design", icon: SiAntdesign, class: "text-red-400" },
  ],
  backend: [
    { name: "PHP", icon: FaPhp, class: "text-indigo-700" },
    { name: "Laravel", icon: FaLaravel, class: "text-red-600" },
    { name: "MySQL", icon: SiMysql, class: "text-blue-500" },
    { name: "Node.js", icon: FaNode, class: "text-green-600" },
  ],
  tools: [
    {
      name: "Redux Toolkit",
      icon: SiRedux,
      class: 'className="text-purple-500"',
    },
    { name: "Axios", icon: SiAxios, class: "text-yellow-500" },
    { name: "React Query", icon: SiReactquery, class: "text-red-500" },
    { name: "React Router", icon: SiReactrouter, class: "text-pink-500" },
    { name: "react-i18next", icon: SiI18Next, class: "text-indigo-500" },
    { name: "SASS", icon: FaSass, class: "text-pink-400" },
    { name: "GitHub", icon: FaGithub, class: "" },
    { name: "Postman", icon: SiPostman, class: "text-orange-500" },
    { name: "jQuery", icon: SiJquery, class: "text-blue-400" },
    { name: "Vercel", icon: SiVercel, class: "text-orange-500" },
  ],
};
export const stats: Statistic[] = [
  {
    id: 1,
    number: 3,
    desc: "years of experience",
  },
  {
    id: 2,
    number: 25,
    desc: "client",
  },
  {
    id: 3,
    number: 75,
    desc: "completed project",
  },
];
export const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};
export const portfolios: PortfolioTypes[] = [
  {
    id: 1,
    title: "calla store",
    descreption:
      "A multi-category online store offering a wide range of products such as clothing, toys, electronics, and more. In this project, I focused on delivering a smooth and user-friendly experience while maintaining the brand’s unique visual identity.",
    slug: "calla-store",
    image: port1,
    url: "https://calla-app.com/",
  },
  {
    id: 1,
    title: "iLAWFAIR store",
    descreption:
      "An intelligent and specialized platform for selling legal books, combining modern technology with trusted knowledge content to meet the needs of lawyers, students, researchers, and legal publishers in the Arab world.",
    slug: "calla-store",
    image: port2,
    url: "https://ilawfair.com/",
  },
];
