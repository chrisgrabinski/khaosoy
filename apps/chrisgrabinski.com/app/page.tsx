import Image from "next/image";

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
  const spotifyData = await getCurrentlyPlaying();

  const showSpotifyLink =
    spotifyData?.is_playing && spotifyData?.currently_playing_type === "track";

  const name = showSpotifyLink && spotifyData?.item?.name;
  const href = showSpotifyLink && spotifyData?.item?.external_urls.spotify;
  const images = showSpotifyLink && spotifyData?.item?.album?.images;
  const artists =
    showSpotifyLink &&
    spotifyData?.item?.artists.map((artist) => artist.name).join(", ");

  return (
    <>
      <UkraineBanner />
      <div className="isolate grid flex-grow grid-cols-[24px_repeat(6,1fr)_24px] grid-rows-[48px_auto_repeat(2,24px)_auto] items-center md:grid-cols-[auto_repeat(6,minmax(0px,144px))_auto] md:grid-rows-none md:gap-6">
        <div className="relative z-10 col-start-2 col-end-6 row-start-2 row-end-3 pt-6 md:col-start-5 md:col-end-8 md:row-start-1 md:row-end-auto md:py-6">
          <Image src={portraitImage} alt="" />
        </div>
        <div className="z-10 col-start-2 col-end-8 row-start-4 row-end-6 pb-6 md:col-start-2 md:col-end-5 md:row-start-1 md:row-end-auto md:py-6">
          <h1 className="text-5xl sm:text-6xl">
            Chris
            <br /> Grabiński
          </h1>
          <p className="mt-3 text-2xl text-foreground-muted">
            Frontend Engineer
          </p>
          <p className="whitespace-balance mt-3 text-lg">
            Working with product teams to deliver beautiful, user‑friendly, and
            goal‑driven web experiences.
          </p>
          <p className="mt-6 text-xs text-foreground-muted">Worked with</p>
          <ul className="mt-3 flex items-center gap-6">
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
          <ul className="mt-12 flex gap-1.5">
            {showSpotifyLink && (
              <li>
                <CurrentlyPlayingHoverCard
                  title={name}
                  artists={artists}
                  image={images[0].url}
                >
                  <a
                    className="relative grid h-8 w-8 place-items-center rounded-full bg-foreground text-background outline-0 outline-offset-[3px] outline-transparent transition-all duration-150 focus-visible:outline-2 focus-visible:outline-foreground-muted"
                    href={href}
                    rel="noopener noreferrer"
                    target="_blank"
                    aria-label="Spotify"
                  >
                    <SiSpotify title="" className="relative z-10 h-4 w-4" />
                    <div className="pointer-events-none absolute inset-0 h-full w-full animate-pulse rounded-full bg-green-500" />
                  </a>
                </CurrentlyPlayingHoverCard>
              </li>
            )}
            {profiles.map(({ name, icon: Icon, href }) => (
              <li key={name}>
                <a
                  className="grid h-8 w-8 place-items-center rounded-full bg-foreground text-background outline-0 outline-offset-[3px] outline-transparent transition-all duration-150 focus-visible:outline-2 focus-visible:outline-foreground-muted"
                  href={href}
                  rel="noopener noreferrer"
                  target="_blank"
                  aria-label={name}
                >
                  <Icon className="h-4 w-4" title="" />
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="relative col-start-4 col-end-9 row-start-1 row-end-5 h-full w-full overflow-clip md:col-start-6 md:col-end-9 md:row-start-1 md:row-end-auto md:min-h-[100dvh]">
          <Image
            src={patternImage}
            alt=""
            fill
            className="scale-105 object-cover"
            style={{ filter: "url(#flow)" }}
          />
          <svg className="pointer-events-none absolute">
            <filter id="noise">
              <feTurbulence baseFrequency="0.05" />
              <feColorMatrix type="hueRotate" values="0">
                <animate
                  attributeName="values"
                  from="0"
                  to="360"
                  dur="5s"
                  repeatCount="indefinite"
                />
              </feColorMatrix>
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0
               0 0 0 0 0
               0 0 0 0 0
               1 0 0 0 0"
              />
              <feDisplacementMap in="SourceGraphic" scale="10" />
            </filter>
            <filter
              id="flow"
              x="0"
              y="0"
              width="100%"
              height="100%"
              colorInterpolationFilters="sRGB"
            >
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
    </>
  );
}
