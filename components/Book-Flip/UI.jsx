import { atom, useAtom } from "jotai";
import { useEffect, useRef } from "react";

function OpenBookIcon({ className }) {
  return (
    <svg
      className={className}
      width="20"
      height="24"
      viewBox="0 0 32 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M16 3.8v16.2M7.4 5.3l8.6-1.6 8.5 1.7v14.2l-8.5-1.5-8.6 1.5V5.3z"
        stroke="currentColor"
        strokeWidth="1.05"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16 4.4v15M8 5.6l8-1.3 8.2 1.4M16 4.4l.2 15.8"
        stroke="currentColor"
        strokeWidth="0.42"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.5"
      />
    </svg>
  );
}

const pictures = [
  "PAGE2",
  "PAGE3",
  "PAGE4",
  "PAGE5",
  "PAGE6",
  "PAGE7",
  "PAGE8",
  "PAGE9",
  "PAGE10",
  "PAGE11",
];

export const pageAtom = atom(0);
export const introAtom = atom(true);
export const pages = [
  {
    front: "PAGE1",
    back: pictures[0],
  },
];
for (let i = 1; i < pictures.length - 1; i += 2) {
  pages.push({
    front: pictures[i % pictures.length],
    back: pictures[(i + 1) % pictures.length],
  });
}

pages.push({
  front: pictures[pictures.length - 1],
  back: "PAGE12",
});

function ChevronLeft({ className }) {
  return (
    <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M14 6l-6 6 6 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ChevronRight({ className }) {
  return (
    <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M10 6l6 6-6 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export const UI = () => {
  const [page, setPage] = useAtom(pageAtom);
  const [intro, setIntro] = useAtom(introAtom);
  const skipInitialSfx = useRef(true);

  const maxPage = pages.length;

  useEffect(() => {
    if (skipInitialSfx.current) {
      skipInitialSfx.current = false;
      return;
    }
    const audio = new Audio("/audios/page-flip-01a.mp3");
    audio.play().catch(() => {});
  }, [page]);

  useEffect(() => {
    if (intro) return;
    const onKey = (e) => {
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        setPage((p) => Math.max(0, p - 1));
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        setPage((p) => Math.min(maxPage, p + 1));
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [intro, maxPage, setPage]);

  return (
    <>
      <main className="pointer-events-none select-none z-10 absolute inset-0 flex flex-col">
        {intro ? (
          <div className="mt-auto w-full flex justify-center px-6 pb-10 md:pb-14">
            <button
              type="button"
              className="pointer-events-auto inline-flex items-center gap-2.5 rounded-full border border-black bg-black px-5 py-2.5 font-sans text-sm font-medium text-white shadow-sm transition hover:bg-black/90 active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-black/40 focus-visible:ring-offset-2 focus-visible:ring-offset-[#070605]"
              onClick={() => {
                setIntro(false);
                window.setTimeout(() => setPage(1), 720);
              }}
            >
              <OpenBookIcon className="shrink-0 rounded-full bg-white p-0.5 text-black opacity-90" />
              Open book
            </button>
          </div>
        ) : (
          <>
            <div className="flex min-h-0 flex-1 items-center justify-between px-1 sm:px-3 md:px-6 lg:px-10">
              <button
                type="button"
                className={`pointer-events-auto flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/25 bg-black/35 text-white shadow-lg backdrop-blur-sm transition hover:border-white/50 hover:bg-black/50 sm:h-14 sm:w-14 ${
                  page === 0 ? "cursor-not-allowed opacity-35" : ""
                }`}
                disabled={page === 0}
                aria-label="Previous page"
                onClick={() => setPage((p) => Math.max(0, p - 1))}
              >
                <ChevronLeft className="h-6 w-6 sm:h-7 sm:w-7" />
              </button>
              <button
                type="button"
                className={`pointer-events-auto flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/25 bg-black/35 text-white shadow-lg backdrop-blur-sm transition hover:border-white/50 hover:bg-black/50 sm:h-14 sm:w-14 ${
                  page === maxPage ? "cursor-not-allowed opacity-35" : ""
                }`}
                disabled={page === maxPage}
                aria-label="Next page"
                onClick={() => setPage((p) => Math.min(maxPage, p + 1))}
              >
                <ChevronRight className="h-6 w-6 sm:h-7 sm:w-7" />
              </button>
            </div>
            <div className="pointer-events-none flex justify-center px-2 pb-3 pt-1 md:pb-5">
              <div className="pointer-events-auto flex max-w-full flex-wrap items-center justify-center gap-1 sm:gap-1.5">
                {[...pages].map((_, index) => (
                  <button
                    key={index}
                    type="button"
                    className={`shrink-0 rounded-full border border-transparent px-1.5 py-0.5 text-[10px] font-medium uppercase tracking-wide transition-all duration-200 hover:border-white/60 sm:px-2 sm:py-1 sm:text-xs ${
                      index === page ? "bg-white/90 text-black" : "bg-black/35 text-white/95"
                    }`}
                    onClick={() => setPage(index)}
                  >
                    {index === 0 ? "Cover" : `${index}`}
                  </button>
                ))}
                <button
                  type="button"
                  title="Back cover"
                  className={`shrink-0 rounded-full border border-transparent px-1.5 py-0.5 text-[10px] font-medium uppercase tracking-wide transition-all duration-200 hover:border-white/60 sm:px-2 sm:py-1 sm:text-xs ${
                    page === maxPage ? "bg-white/90 text-black" : "bg-black/35 text-white/95"
                  }`}
                  onClick={() => setPage(maxPage)}
                >
                  Back
                </button>
              </div>
            </div>
          </>
        )}
      </main>

      {!intro && (
        <div className="absolute inset-0 flex items-center -rotate-2 select-none pointer-events-none">
          <div className="relative">
            <div className="bg-white/0 animate-horizontal-scroll flex items-center gap-8 w-max px-8">
              <h1 className="shrink-0 text-white text-10xl font-black" />
              <h2 className="shrink-0 text-white text-8xl italic font-light" />
              <h2 className="shrink-0 text-white text-12xl font-bold" />
              <h2 className="shrink-0 text-transparent text-12xl font-bold italic outline-text" />
              <h2 className="shrink-0 text-white text-9xl font-medium" />
              <h2 className="shrink-0 text-white text-9xl font-extralight italic" />
              <h2 className="shrink-0 text-white text-13xl font-bold" />
              <h2 className="shrink-0 text-transparent text-13xl font-bold outline-text italic" />
            </div>
            <div className="absolute top-0 left-0 bg-white/0 animate-horizontal-scroll-2 flex items-center gap-8 px-8 w-max">
              <h1 className="shrink-0 text-white text-10xl font-black" />
              <h2 className="shrink-0 text-white text-8xl italic font-light" />
              <h2 className="shrink-0 text-white text-12xl font-bold" />
              <h2 className="shrink-0 text-transparent text-12xl font-bold italic outline-text" />
              <h2 className="shrink-0 text-white text-9xl font-medium" />
              <h2 className="shrink-0 text-white text-9xl font-extralight italic" />
              <h2 className="shrink-0 text-white text-13xl font-bold" />
              <h2 className="shrink-0 text-transparent text-13xl font-bold outline-text italic" />
            </div>
          </div>
        </div>
      )}
    </>
  );
};