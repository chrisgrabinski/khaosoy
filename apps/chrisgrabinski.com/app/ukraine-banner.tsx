export function UkraineBanner() {
  return (
    <div className="flex h-9 items-center justify-center gap-3 bg-foreground px-3 text-sm text-white">
      🇺🇦 Support Ukraine
      <a
        href="https://u24.gov.ua/"
        target="_blank"
        rel="noopener noreferrer"
        className="underline decoration-2 underline-offset-4"
      >
        Donate to United24
      </a>
    </div>
  );
}
