import type { Experience } from "../types/experiences";

export const EXPERIENCES: Experience[] = [
  {
    id: "sponsogram",
    companyName: "Sponsogram",
    companyLogo: "https://assets.chanhdai.com/images/companies/simplamo.webp",
    positions: [
      {
        id: "20f8bfe5-b6a3-4b0d-ac2f-6fccd50d417e",
        title: "Frontend Developer Intern",
        employmentPeriod: {
          start: "7.2025",
          end: "9.2025",
        },
        employmentType: "Intern",
        icon: "code",
        description: `- Develop Authentication and Onboarding flow for the sellers.
- Develop interactive chart and analytics widgets for the [Dashboard] to enhance data visualization.
- Develop and maintain core features to enhance functionality and user experience.
- Ensure UI/UX consistency and adherence to standards.
- Implement robust frontend solutions for web platform.
- Analyze technical capabilities and provide optimal solutions.`,
        skills: [
          "TypeScript",
          "Next.js",
          "React Native",
          "MobX",
          "MobX-State-Tree",
          "Tailwind CSS",
          "Agile",
          "Teamwork",
          "Research",
          "Problem-solving",
        ],
      },
    ],
  },
];
