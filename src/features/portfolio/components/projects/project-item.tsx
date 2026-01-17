import type { Project } from "../../types/projects";
import { ProjectBox } from "./project-box";

export function ProjectItem({
  className,
  project,
}: {
  className?: string;
  project: Project;
}) {
  return (
    <div className={className}>
      <ProjectBox project={project} />
    </div>
  );
}
