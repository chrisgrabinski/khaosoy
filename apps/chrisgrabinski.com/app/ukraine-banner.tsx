export function UkraineBanner() {
  return (
    <div className="bg-foreground text-white h-9 flex justify-center items-center px-3 text-sm gap-3">
      🇺🇦 Support Ukraine
      <a
        href="https://u24.gov.ua/"
        target="_blank"
        rel="noopener noreferrer"
        className="underline underline-offset-4 decoration-2"
      >
        Donate to United24
      </a>
    </div>
  );
}
