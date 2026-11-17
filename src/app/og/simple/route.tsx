import { readFile } from "node:fs/promises";
import { join } from "node:path";

import { ImageResponse } from "next/og";

import { SITE_INFO } from "@/config/site";
import { USER } from "@/features/portfolio/data/user";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  const title = searchParams.get("title") || SITE_INFO.name;

  const robotoCondensedMedium = await readFile(
    join(process.cwd(), "src/assets/fonts/RobotoCondensed-Medium.ttf")
  );

  return new ImageResponse(
    (
      <div tw="w-full h-full flex flex-col items-center justify-center text-white bg-black p-16">
        <div tw="absolute flex inset-y-0 w-px border border-zinc-800 left-16" />
        <div tw="absolute flex inset-y-0 w-px border border-zinc-800 right-16" />
        <div tw="absolute flex inset-x-0 h-px border border-zinc-800 top-16" />
        <div tw="absolute flex inset-x-0 h-px border border-zinc-800 bottom-16" />

        <div tw="flex flex-col items-center justify-center max-w-3xl px-8">
          <h1
            tw="text-center font-medium tracking-tight text-white mb-4"
            style={{
              fontFamily: "RobotoCondensed",
              fontSize: 68,
            }}
          >
            {title}
          </h1>

          <p
            tw="text-center text-zinc-400 font-normal text-2xl"
            style={{
              fontFamily: "RobotoCondensed",
            }}
          >
            {USER.jobTitle} • {USER.bio}
          </p>
        </div>

        <div
          tw="absolute flex bottom-16 right-16 text-zinc-500 font-medium text-xl"
          style={{
            fontFamily: "RobotoCondensed",
          }}
        >
          {USER.website.replace(/^https?:\/\//, "")}
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: "RobotoCondensed",
          data: robotoCondensedMedium,
          weight: 500,
        },
      ],
    }
  );
}
