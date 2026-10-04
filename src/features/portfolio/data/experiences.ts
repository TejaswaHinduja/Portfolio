import type { Experience } from "../types/experiences";

export const EXPERIENCES: Experience[] = [
  {
    id: "synciq",
    companyName: "SyncIq",
    companyLogo: "",
    positions: [
      {
        id: "20f8bfe5-b6a3-4b0d-ac2f-6fccd50d417e",
        title: "SDE Intern",
        employmentPeriod: {
          start: "7.2026",
          end: "9.2026",
        },
        employmentType: "Intern",
        icon: "code",
        description: `- Developed a webscraping pipeline to extract and process unstructured content from websites, transforming scraped
data into structured Markdown for down stream consumption.
-IntegratedLLM-basedcontent structuring to convert noisy scraped data into consistent, readable documents with
standardized formatting.
-Built a Markdown document viewerusing Next.js to dynamically fetch and render processed content.
-Developed Fast API endpoints for retrieving document metadata and structured content,enabling seamless integration
between the processing pipeline and frontend viewer`,
        skills: [
          "TypeScript",
          "Next.js",
          "Python",
          "FastAPI",
          "Tailwind CSS",
          "pymupdf4llm",
        ],
      },
    ],
  },
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
          "Tailwind CSS",
          "Agile",
          "Teamwork",
          "Problem-solving",
        ],
      },
    ],
  },
];
