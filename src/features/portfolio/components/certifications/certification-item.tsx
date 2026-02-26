import { format } from "date-fns";
import { ArrowUpRightIcon } from "lucide-react";

import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

import type { Certification } from "../../types/certifications";

export function CertificationItem({
  className,
  certification,
}: {
  className?: string;
  certification: Certification;
}) {
  return (
    <a
      className={cn(
        "group/cert flex items-center pr-2 hover:bg-accent2",
        className
      )}
      href={certification.URL}
      target="_blank"
      rel="noopener"
    >
      <div className="flex-1 space-y-1 border-l border-dashed border-edge p-4 pr-2">
        <h3 className="leading-snug font-medium text-balance underline-offset-4 group-hover/cert:underline">
          {certification.title}
        </h3>
      </div>
      {certification.URL && (
        <ArrowUpRightIcon
          className="size-4 text-muted-foreground"
          aria-hidden
        />
      )}
    </a>
  );
}
