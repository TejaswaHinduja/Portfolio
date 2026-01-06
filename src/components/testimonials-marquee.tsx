import React from "react";

import { cn } from "@/lib/utils";

export function Testimonial({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      className={cn("flex h-full flex-col gap-4 p-4", className)}
      {...props}
    />
  );
}

export function TestimonialQuote({
  className,
  ...props
}: React.ComponentProps<"blockquote">) {
  return (
    <blockquote
      className={cn("text-sm text-foreground italic", className)}
      {...props}
    />
  );
}

export function TestimonialAuthor({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div className={cn("flex items-center gap-3", className)} {...props} />
  );
}

export function TestimonialAvatar({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return <div className={cn("relative", className)} {...props} />;
}

export function TestimonialAvatarImg({
  className,
  ...props
}: React.ComponentProps<"img">) {
  return (
    <img
      className={cn("size-10 rounded-full object-cover", className)}
      {...props}
    />
  );
}

export function TestimonialAvatarRing({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "absolute inset-0 rounded-full ring-1 ring-border ring-offset-1 ring-offset-background",
        className
      )}
      {...props}
    />
  );
}

export function TestimonialAuthorName({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      className={cn("text-sm font-medium text-foreground", className)}
      {...props}
    />
  );
}

export function TestimonialAuthorTagline({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      className={cn("text-xs text-muted-foreground", className)}
      {...props}
    />
  );
}

export function TestimonialVerifiedBadge({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      className={cn("text-info", className)}
      aria-label="Verified"
      {...props}
    />
  );
}
