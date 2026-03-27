import Link from "next/link";

export default function Hero() {
  return (
    <section className="px-4 py-20 text-center md:py-32">
      <div className="mx-auto max-w-3xl">
        <span className="mb-4 inline-block rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-blue-700 dark:bg-blue-900/40 dark:text-blue-300">
          AI &amp; Automation Tools
        </span>

        <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-5xl md:text-6xl">
          Automate your life.
          <br />
          <span className="text-blue-600 dark:text-blue-400">No PhD required.</span>
        </h1>

        <p className="mt-6 text-lg leading-relaxed text-gray-600 dark:text-gray-300">
          AutomateQ builds free and affordable tools that help beginners and everyday
          users put AI to work — saving time, cutting busywork, and making tech actually
          useful.
        </p>

        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Link href="/tools" className="btn-primary w-full sm:w-auto">
            Browse free tools
          </Link>
          <Link href="/store" className="btn-secondary w-full sm:w-auto">
            Get premium tools
          </Link>
          <Link href="/consulting" className="btn-secondary w-full sm:w-auto">
            Book a call
          </Link>
        </div>
      </div>
    </section>
  );
}
