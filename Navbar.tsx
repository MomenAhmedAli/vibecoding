import Link from "next/link";

const links = [
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/experience", label: "Experience" },
];

export default function Navbar({ name }: { name: string }) {
  return (
    <header className="nav relative z-20 flex items-center justify-between px-5 py-4 md:px-10">
      <Link href="/" className="nav-name f-display">
        {name}
      </Link>
      <nav aria-label="Main">
        <ul className="flex items-center gap-5 md:gap-9">
          {links.map((l) => (
            <li key={l.href}>
              <Link href={l.href} className="nav-link">
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
