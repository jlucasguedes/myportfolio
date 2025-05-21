type NavLinkProps = {
  href: string;
  label: string;
  isActive: boolean;
  onClick: (href: string) => void;
};

export default function NavLink({ href, label, isActive, onClick }: NavLinkProps) {
  const indicatorClasses = [
    "nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all motion-reduce:transition-none",
    isActive && "w-16 bg-slate-200",
    "group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200",
  ]
    .filter(Boolean)
    .join(" ");

  const textClasses = [
    "nav-text text-xs font-bold uppercase tracking-widest",
    isActive ? "text-slate-200" : "text-slate-500",
    "group-hover:text-slate-200 group-focus-visible:text-slate-200",
  ].join(" ");

  return (
    <li>
      <a
        className="group flex items-center py-3"
        href={href}
        onClick={() => onClick(href)}
      >
        <span className={indicatorClasses}></span>
        <span className={textClasses}>{label}</span>
      </a>
    </li>
  );
}
