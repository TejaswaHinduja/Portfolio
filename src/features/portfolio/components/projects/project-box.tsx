"use client";

import {
  Circle,
  Eye,
  EyeOff,
  Github,
  Link as LinkIcon,
  Share2,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { toast } from "sonner";

import type { Project } from "../../types/projects";
import { InfoTipProjects } from "./info-tip-projects";

interface ProjectBoxProps {
  project: Project;
}

export function ProjectBox({ project }: ProjectBoxProps) {
  const [show, setShow] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest(".project-box")) {
        setOpen(false);
      }
    };

    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  const handleShare = async (url: string) => {
    const shareData = {
      title: "Check out this Project",
      url: url,
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else {
        await navigator.clipboard.writeText(shareData.url);
        toast.success("Copied to clipboard");
      }
    } catch (error) {
      console.error("Error sharing:", error);
      toast.error("Error sharing");
    }
  };

  const status = project.status ?? true; // Default to true if not specified
  const img = project.logo || "/placeholder-project.png";
  const url = project.link;
  const github = project.github;
  const preview = project.preview;
  const content = project.description || "";
  const skill = project.skills;

  return (
    <div
      onClick={() => setOpen((prev) => !prev)}
      className="project-box cursor-pointer rounded-md border border-edge bg-background transition-colors duration-100 hover:bg-accent2"
    >
      <AnimatePresence mode="wait">
        {show && preview && (
          <motion.div
            onClick={(e) => {
              e.stopPropagation();
            }}
            initial={{
              opacity: 0,
              height: 0,
            }}
            animate={{
              opacity: 1,
              height: "auto",
            }}
            exit={{
              opacity: 0,
              height: 0,
            }}
            transition={{ ease: "easeInOut", duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="p-2">
              <video className="w-full rounded-md" loop autoPlay controls>
                <source src={preview} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <div className="flex flex-col gap-3 p-2 md:flex-row">
        <div className="basis-[22%] p-1 select-none">
          <Image
            className="h-[200px] w-full rounded-md object-cover md:h-[130px]"
            src={img}
            alt={project.title}
            width={200}
            height={200}
            unoptimized
          />
        </div>
        <div className="flex basis-[78%] flex-col gap-1 md:gap-0">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 truncate">
              <h1 className="text-2xl font-semibold">{project.title}</h1>
              {status ? (
                <div className="flex w-fit items-center gap-0.5 rounded-md bg-green-400/10 px-1.5 py-0.5 text-xs font-medium text-green-400 select-none">
                  <span className="animate-pulse">
                    <Circle className="size-2 fill-current" />
                  </span>
                  Running
                </div>
              ) : (
                <div className="flex w-fit items-center gap-0.5 rounded-md bg-red-400/10 px-1.5 py-0.5 text-xs font-medium text-red-400 select-none">
                  <span className="animate-pulse">
                    <Circle className="size-2 fill-current" />
                  </span>
                  Building
                </div>
              )}
            </div>
            <div className="flex gap-2 px-2 text-base select-none">
              {preview && (
                <>
                  {show ? (
                    <InfoTipProjects text="Close">
                      <a
                        onClick={(e) => {
                          e.stopPropagation();
                          setShow((prev) => !prev);
                        }}
                        target="_blank"
                        className="cursor-pointer transition-colors duration-100 hover:text-muted-foreground"
                      >
                        <EyeOff className="size-4" />
                      </a>
                    </InfoTipProjects>
                  ) : (
                    <InfoTipProjects text="Preview">
                      <a
                        onClick={(e) => {
                          e.stopPropagation();
                          setShow((prev) => !prev);
                        }}
                        target="_blank"
                        className="cursor-pointer transition-colors duration-100 hover:text-muted-foreground"
                      >
                        <Eye className="size-4" />
                      </a>
                    </InfoTipProjects>
                  )}
                </>
              )}

              {url && (
                <InfoTipProjects text="Live">
                  <a
                    target="_blank"
                    className="transition-colors duration-100 hover:text-muted-foreground"
                    href={url}
                    onClick={(e) => {
                      e.stopPropagation();
                    }}
                    rel="noopener noreferrer"
                  >
                    <LinkIcon className="size-4" />
                  </a>
                </InfoTipProjects>
              )}
              {github && (
                <InfoTipProjects text="Github">
                  <a
                    onClick={(e) => {
                      e.stopPropagation();
                    }}
                    target="_blank"
                    className="transition-colors duration-100 hover:text-muted-foreground"
                    href={github}
                    rel="noopener noreferrer"
                  >
                    <Github className="size-4" />
                  </a>
                </InfoTipProjects>
              )}
            </div>
          </div>
          <p className="opacity-80">{content}</p>
        </div>
      </div>
      <AnimatePresence mode="wait">
        {open && (
          <motion.div
            initial={{
              opacity: 0,
              height: 0,
            }}
            animate={{
              opacity: 1,
              height: "auto",
            }}
            exit={{
              opacity: 0,
              height: 0,
            }}
            transition={{ ease: "easeInOut", duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="mx-auto mt-3 flex w-[97%] border-t border-edge md:mt-0" />
            <div className="flex items-center justify-between px-3 py-3 transition-all duration-100 md:py-2">
              <div className="flex flex-wrap gap-1.5 select-none">
                {skill.map((skill, index) => (
                  <p
                    key={index}
                    className="rounded-md border border-edge px-2 py-0.5 text-sm"
                  >
                    {skill}
                  </p>
                ))}
              </div>
              <div className="flex items-center gap-4 px-2.5 text-xl md:px-2 md:text-lg">
                <div
                  className="cursor-pointer transition-colors duration-100 select-none hover:text-muted-foreground"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleShare(url ? url : github || "");
                  }}
                >
                  <Share2 className="size-4" />
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
