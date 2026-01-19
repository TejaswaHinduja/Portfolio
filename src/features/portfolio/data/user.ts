import type { User } from "@/features/portfolio/types/user";

export const USER = {
  firstName: "Tejaswa",
  lastName: "Hinduja",
  displayName: "Tejaswa Hinduja",
  username: "Tej",
  gender: "male",
  pronouns: "he/him",
  bio: "Creating with code. Building Smart Web Apps.",
  flipSentences: ["Building Smart Web Apps.", "Engineer"],
  address: "New Delhi, India",
  phoneNumber: "KzkxOTg2ODIxNDAzNQ==", // E.164 format (+919868214035), base64 encoded
  email: "dGVqYXN3YWhpbmR1amFAZ21haWwuY29t", // tejaswahinduja@gmail.com base64 encoded
  website: "https://tejaswahinduja.me",
  jobTitle: "Engineer",
  jobs: [
    {
      title: "Full Stack Developer ",
      company: "",
      website: "",
    },
  ],
  about: `
Hello, World! I am Tejaswa Hinduja — a Engineer passionate about creating high-performance, user-centric software solutions.

I specialize in building high-quality web apps using Next.js, React, TypeScript, Express, NodeJs, FastAPI and other modern technologies. Beyond work, I love exploring new technologies and turning ideas into reality through personal projects.

One of my key projects, [teachRelief](https://teachrelief.tejaswahinduja.me), helps teachers in saving hours of manual effort and automating the grading process.

Let's connect and collaborate!
  `,
  avatar: "https://ik.imagekit.io/tejaswahinduja/githubpfp.jpg",
  ogImage: "", // TODO: Replace with your OG image URL
  namePronunciationUrl: "",
  timeZone: "Asia/Kolkata",
  keywords: [
    "tejaswa hinduja",
    "tejcodes",
    "tej",
    "frontend developer",
    "backend developer",
    "web developer",
    "react developer",
    "nextjs developer",
    "teachrelief",
  ],
  dateCreated: "2025-01-06", // YYYY-MM-DD - Update with your actual portfolio creation date
} satisfies User;
