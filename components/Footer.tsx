const social = [
  { href: "https://github.com/AutomateQ", label: "GitHub" },
  { href: "https://youtube.com/@AutomateQ", label: "YouTube" },
  { href: "https://instagram.com/AutomateQ", label: "Instagram" },
  { href: "https://linkedin.com/company/AutomateQ", label: "LinkedIn" },
];

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 dark:border-gray-800">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-4 py-10 text-sm text-gray-500 sm:flex-row dark:text-gray-400">
        <p>© {new Date().getFullYear()} AutomateQ. All rights reserved.</p>
        <ul className="flex flex-wrap justify-center gap-6">
          {social.map(({ href, label }) => (
            <li key={href}>
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-blue-600 dark:hover:text-blue-400"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
