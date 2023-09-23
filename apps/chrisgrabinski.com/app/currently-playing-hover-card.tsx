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
          className="cursor-default backdrop-blur-md min-w-0 overflow-hidden items-center flex rounded-xl max-w-xs shadow-lg"
        >
          <Image
            src={image}
            alt=""
            className="h-14 w-14 flex-shrink-0"
            width={56}
            height={56}
          />
          <div className="px-3 py-1.5 min-w-0">
            <span className="block text-sm truncate">{title}</span>
            <span className="block text-xs text-foreground-muted line-clamp-1">
              {artists}
            </span>
          </div>
        </HoverCard.Content>
      </HoverCard.Portal>
    </HoverCard.Root>
  );
}
