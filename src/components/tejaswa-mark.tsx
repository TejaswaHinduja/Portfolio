export function TejaswaMarkText(props: React.ComponentProps<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 120 60"
      {...props}
    >
      {/* T letter */}
      <rect x="8" y="8" width="36" height="8" fill="currentColor" />
      <rect x="22" y="16" width="8" height="44" fill="currentColor" />

      {/* H letter */}
      <rect x="56" y="8" width="8" height="52" fill="currentColor" />
      <rect x="64" y="30" width="20" height="8" fill="currentColor" />
      <rect x="84" y="8" width="8" height="52" fill="currentColor" />
    </svg>
  );
}

export function TejaswaMarkModern(props: React.ComponentProps<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 100 100"
      {...props}
    >
      {/* Modern geometric T */}
      <path fill="currentColor" d="M15 15h70v15H60v55H40V30H15V15Z" />

      {/* Modern geometric H integrated */}
      <rect
        x="85"
        y="15"
        width="10"
        height="70"
        fill="currentColor"
        opacity="0.9"
      />
    </svg>
  );
}

export function TejaswaMarkMinimal(props: React.ComponentProps<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 100 100"
      {...props}
    >
      {/* Clean minimal design */}
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M20 15h60v12H55v58H45V27H20V15Z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M75 15h10v70h-10V15ZM75 47h-20v10h20V47Z"
      />
    </svg>
  );
}

// Default export - choose your favorite style
export function TejawaMark(props: React.ComponentProps<"svg">) {
  return <TejaswaMarkMinimal {...props} />;
}

export function getMarkSVG(
  color: string,
  style: "text" | "modern" | "minimal" = "minimal"
) {
  if (style === "text") {
    return `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 120 60">
      <rect x="8" y="8" width="36" height="8" fill="${color}" />
      <rect x="22" y="16" width="8" height="44" fill="${color}" />
      <rect x="56" y="8" width="8" height="52" fill="${color}" />
      <rect x="64" y="30" width="20" height="8" fill="${color}" />
      <rect x="84" y="8" width="8" height="52" fill="${color}" />
    </svg>`;
  }

  if (style === "modern") {
    return `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 100 100">
      <path fill="${color}" d="M15 15h70v15H60v55H40V30H15V15Z" />
      <rect x="85" y="15" width="10" height="70" fill="${color}" opacity="0.9" />
    </svg>`;
  }

  // minimal
  return `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 100 100">
    <path fill="${color}" fill-rule="evenodd" d="M20 15h60v12H55v58H45V27H20V15Z" />
    <path fill="${color}" fill-rule="evenodd" d="M75 15h10v70h-10V15ZM75 47h-20v10h20V47Z" />
  </svg>`;
}
