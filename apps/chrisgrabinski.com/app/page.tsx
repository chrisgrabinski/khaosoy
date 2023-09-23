import Image from "next/image";
import { headers } from "next/headers";

import patternImage from "./images/pawel-czerwinski-8uZPynIu-rQ-unsplash.jpg";
import portraitImage from "./images/chris-grabinski.jpg";

import {
  SiGithub,
  SiInstagram,
  SiLinkedin,
  SiSpotify,
  SiThreads,
  SiX,
} from "@icons-pack/react-simple-icons";
import { TypeformLogo } from "@/app/typeform-logo";
import { UnbabelLogo } from "@/app/unbabel-logo";
import { RemoteLogo } from "@/app/remote-logo";
import { getCurrentlyPlaying } from "@/lib/spotify";
import { CurrentlyPlayingHoverCard } from "@/app/currently-playing-hover-card";
import { UkraineBanner } from "@/app/ukraine-banner";

const profiles = [
  {
    name: "GitHub",
    href: "https://github.com/chrisgrabinski",
    icon: SiGithub,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/chrisgrabinski/",
    icon: SiLinkedin,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/chrisgrabinski/",
    icon: SiInstagram,
  },
  {
    name: "Threads",
    href: "https://www.threads.net/@chrisgrabinski",
    icon: SiThreads,
  },
  {
    name: "X",
    href: "https://twitter.com/chrisgrabinski",
    icon: SiX,
  },
];

export default async function RootPage() {
  const headersList = headers();

  const test = await getCurrentlyPlaying().then((res) => res.json());

  const showSpotifyLink =
    test?.is_playing && test?.currently_playing_type === "track";

  const name = showSpotifyLink && test?.item?.name;
  const href = showSpotifyLink && test?.item?.external_urls.spotify;
  const images = showSpotifyLink && test?.item?.album?.images;
  const artists =
    showSpotifyLink &&
    test?.item?.artists.map((artist) => artist.name).join(", ");

  return (
    <div className="min-h-[100dvh] flex flex-col">
      <UkraineBanner />
      <div className="isolate flex-grow grid grid-cols-[24px_repeat(6,1fr)_24px] md:grid-cols-[auto_repeat(6,minmax(0px,144px))_auto] grid-rows-[24px_auto_repeat(2,24px)_auto] md:grid-rows-none items-center md:gap-6">
        <div className="md:py-6 relative row-start-2 row-end-3 col-start-2 col-end-6 aspect-square z-10 md:row-end-auto md:col-start-5 md:col-end-8 md:row-start-1">
          <Image src={portraitImage} alt="" />
        </div>
        <div className="md:py-6 col-start-2 col-end-8 row-start-4 row-end-6 z-10 md:row-end-auto md:col-start-2 md:col-end-5 md:row-start-1 pb-6">
          <h1 className="text-5xl sm:text-6xl">
            Chris
            <br /> Grabiński
          </h1>
          <p className="text-2xl mt-3 text-foreground-muted">
            Frontend Engineer
          </p>
          <p className="text-lg mt-3 whitespace-balance">
            Working with product teams to deliver beautiful, user‑friendly, and
            goal‑driven web experiences.
          </p>
          <p className="text-xs mt-6 text-foreground-muted">Worked with</p>
          <ul className="mt-3 flex gap-6 items-center">
            <li>
              <RemoteLogo className="h-5" />
            </li>
            <li>
              <TypeformLogo className="h-5" />
            </li>
            <li>
              <UnbabelLogo className="h-6" />
            </li>
          </ul>
          <ul className="flex gap-1.5 mt-12">
            {showSpotifyLink && (
              <li>
                <CurrentlyPlayingHoverCard
                  title={name}
                  artists={artists}
                  image={images[0].url}
                >
                  <a
                    className="relative grid focus-visible:outline-foreground-muted outline-transparent outline-offset-[3px] outline-0 transition-all duration-150 focus-visible:outline-2 place-items-center w-8 h-8 bg-foreground text-background rounded-full"
                    href={href}
                    rel="noopener noreferrer"
                    target="_blank"
                    aria-label="Spotify"
                  >
                    <SiSpotify title="" className="relative z-10 w-4 h-4" />
                    <div className="animate-pulse w-full h-full rounded-full absolute inset-0 pointer-events-none bg-green-500" />
                  </a>
                </CurrentlyPlayingHoverCard>
              </li>
            )}
            {profiles.map(({ name, icon: Icon, href }) => (
              <li
                key={name}
                className="grid focus-visible:outline-foreground-muted outline-transparent outline-offset-[3px] outline-0 transition-all duration-150 focus-visible:outline-2 place-items-center w-8 h-8 bg-foreground text-background rounded-full"
              >
                <a
                  href={href}
                  rel="noopener noreferrer"
                  target="_blank"
                  aria-label={name}
                >
                  <Icon className="w-4 h-4" title="" />
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="relative overflow-clip row-start-1 row-end-5 col-start-4 col-end-9 md:row-start-1 md:col-start-6 md:col-end-9 md:row-end-auto w-full h-full">
          <Image
            src={patternImage}
            alt=""
            fill
            className="object-cover scale-105"
            style={{ filter: "url(#flow)" }}
          />
          <svg className="absolute">
            <filter id="flow" x="0" y="0" width="100%" height="100%">
              <feTurbulence
                id="turbulence"
                numOctaves="3"
                seed="2"
                baseFrequency="0.05 0.1"
              />
              <feDisplacementMap scale="20" in="SourceGraphic" />
              <animate
                xlinkHref="#turbulence"
                attributeName="baseFrequency"
                dur="60s"
                keyTimes="0;0.5;1"
                values="0.05 0.1;0.1 0.05;0.05 0.1"
                repeatCount="indefinite"
              />
            </filter>
          </svg>
        </div>
      </div>
    </div>
  );
}
