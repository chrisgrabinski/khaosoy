import { FrostedGlass } from "@/components/frosted-glass";

export function UkraineBanner() {
  return (
    <FrostedGlass className="absolute z-10 flex h-12 w-full items-center justify-center gap-3 px-3 text-sm">
      🇺🇦 Support Ukraine
      <a
        href="https://u24.gov.ua/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-700 underline decoration-2 underline-offset-4"
      >
        Donate to United24
      </a>
    </FrostedGlass>
  );
}
