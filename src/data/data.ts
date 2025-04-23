// types
import { Nav } from "../types/Nav";
import { Socials } from "../types/Socials";
import { Service } from "../types/Services";
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
    link: "/contact",
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
