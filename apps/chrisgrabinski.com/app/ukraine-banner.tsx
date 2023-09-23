export function UkraineBanner() {
  return (
    <div className="absolute z-10 w-full">
      <div className="absolute inset-0 bg-white/30 saturate-200 backdrop-blur-xl" />
      <div className="relative flex h-12 items-center justify-center gap-3 px-3 text-sm">
        🇺🇦 Support Ukraine
        <a
          href="https://u24.gov.ua/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-700 underline decoration-2 underline-offset-4"
        >
          Donate to United24
        </a>
      </div>
    </div>
  );
}
