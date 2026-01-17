import React from "react";

interface InfoTipProps {
  text: string;
  children: React.ReactNode;
}

export const InfoTipProjects: React.FC<InfoTipProps> = ({ text, children }) => {
  return (
    <div className="relative flex items-center select-none">
      <div className="group relative flex">
        {children}
        <span className="absolute bottom-6 left-1/2 z-10 mb-2 w-max -translate-x-1/2 scale-0 transform rounded-md border border-edge bg-background px-1.5 py-1 text-sm font-medium text-foreground transition-all duration-100 group-hover:scale-100">
          {text}
          <span className="absolute top-full left-1/2 -translate-x-1/2 transform border-8 border-transparent border-t-background"></span>
        </span>
      </div>
    </div>
  );
};
