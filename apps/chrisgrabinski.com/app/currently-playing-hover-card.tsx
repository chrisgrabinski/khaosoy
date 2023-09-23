"use client";

import * as HoverCard from "@radix-ui/react-hover-card";
import Image from "next/image";

export function CurrentlyPlayingHoverCard({ children, artists, title, image }) {
  return (
    <HoverCard.Root>
      <HoverCard.Trigger asChild>{children}</HoverCard.Trigger>
      <HoverCard.Portal>
        <HoverCard.Content
          align="start"
          side="top"
          sideOffset={3}
          className="flex min-w-0 max-w-xs cursor-default items-center overflow-hidden rounded-xl shadow-lg backdrop-blur-md"
        >
          <Image
            src={image}
            alt=""
            className="h-14 w-14 flex-shrink-0"
            width={56}
            height={56}
          />
          <div className="min-w-0 px-3 py-1.5">
            <span className="block truncate text-sm">{title}</span>
            <span className="line-clamp-1 block text-xs text-foreground-muted">
              {artists}
            </span>
          </div>
        </HoverCard.Content>
      </HoverCard.Portal>
    </HoverCard.Root>
  );
}
