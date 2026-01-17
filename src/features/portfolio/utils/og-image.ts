import { SITE_INFO } from "@/config/site";

import { PROJECTS } from "../data/projects";

/**
 * Get OG image URL for a specific project
 * @param projectId - The project ID
 * @returns OG image URL for the project
 */
export function getProjectOgImage(projectId: string): string {
  const project = PROJECTS.find((p) => p.id === projectId);

  // Use ogImage if available, otherwise fallback to logo, then default
  if (project?.ogImage) {
    return project.ogImage;
  }

  if (project?.logo) {
    return project.logo;
  }

  return SITE_INFO.ogImage;
}

/**
 * Get all project OG images (prioritizing ogImage field)
 * @returns Array of project OG image URLs
 */
export function getAllProjectOgImages(): string[] {
  return PROJECTS.map((project) => project.ogImage || project.logo).filter(
    (url): url is string => !!url
  );
}

/**
 * Get the first project's OG image (useful for default/fallback)
 */
export function getDefaultProjectOgImage(): string {
  const firstProject = PROJECTS[0];
  if (firstProject?.ogImage) {
    return firstProject.ogImage;
  }
  if (firstProject?.logo) {
    return firstProject.logo;
  }
  return SITE_INFO.ogImage;
}
