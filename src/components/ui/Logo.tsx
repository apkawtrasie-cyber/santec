/**
 * Słowne logo "santec" + podpis "group".
 * Łatwo wymienić na <Image src="/logo.svg" /> kiedy będzie gotowy plik SVG.
 */
export function Logo({ className = '' }: { className?: string }) {
  return (
    <div className={`flex flex-col leading-none ${className}`}>
      <span className="text-2xl font-semibold tracking-tight text-white">
        santec
      </span>
      <span className="-mt-1 text-xs italic text-white/60">group</span>
    </div>
  );
}
