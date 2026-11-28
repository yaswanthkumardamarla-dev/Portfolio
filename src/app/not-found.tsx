import SketchButton from "@/components/SketchButton";

export default function NotFound() {
  return (
    <section className="flex min-h-[60svh] flex-col items-center justify-center px-5 text-center">
      <h1 className="mb-4 text-5xl font-bold">
        <span className="sketch-underline">404</span>
      </h1>
      <p className="ink-soft mb-8 text-lg">
        This page got erased before it was finished.
      </p>
      <SketchButton href="/" primary>
        Back to the homepage
      </SketchButton>
    </section>
  );
}
