import type { Project } from "../types/projects";

export const PROJECTS: Project[] = [
  {
    id: "teach-relief",
    title: "Teach Relief",
    period: {
      start: "05.2025",
    },
    link: "https://teachrelief.tejaswahinduja.me",
    skills: [
      "Open Source",
      "React",
      "TypeScript",
      "Monorepo",
      "Turborepo",
      "pnpm-workspace",
      "Package Publishing",
      "NPM Registry",
      "GitHub Actions",
      "Docker",
      "Docker Compose",
      "NGINX",
      "OCR",
    ],
    description: `Helping educators automate the grading process using AI.
    Grading Assignments is one of the most time consuming part of a teachers job, teachRelief addresses this by helping teachers automate this process, Teachers can just upload their solution key and grade student submissions instantly with accurate feedback
`,
    logo: "https://assets.chanhdai.com/images/project-logos/react-wheel-picker.svg",
    isExpanded: true,
  },
  {
    id: "TAISR",
    title: "TAISR",
    period: {
      start: "07.2025",
    },
    link: "https://TAISR.vercel.app",
    skills: [
      "React",
      "Tailwind CSS v4",
      "Radix UI",
      "Motion",
      "shadcn/ui",
      "Component Registry",
      "Vercel",
    ],
    description:
      "It is an AI powered Twitter bot, Helps Users in crafting their raw thoughts into well crafted tweets",
    logo: "https://assets.chanhdai.com/images/project-logos/chanhdaidotcom.svg",
    isExpanded: true,
  },
  {
    id: "WeChat",
    title: "WeChat",
    period: {
      start: "05.2025",
    },
    link: "https://wechat-kcq8.onrender.com/",
    skills: ["React", "Tailwind CSS v4", "shadcn/ui", "NodeJs", "Express"],
    description:
      "A real-time chat application built with React and Node.js. Features include instant messaging, user authentication, and responsive design for seamless communication across devices.",
    logo: "https://assets.chanhdai.com/images/project-logos/quaricdotcom.svg",
    isExpanded: true,
  },
];
