/** Primary navigation. `match` decides the active item for a given pathname. */

export type NavItem = {
  label: string;
  href: string;
  /** Extra path prefixes that should also light up this item. */
  match?: string[];
};

export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Programs", href: "/programs" },
  { label: "Impact", href: "/impact" },
  { label: "Team", href: "/team" },
  { label: "Stories", href: "/stories" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export function isActive(item: NavItem, pathname: string): boolean {
  if (item.href === "/") return pathname === "/";
  if (pathname === item.href || pathname.startsWith(`${item.href}/`)) return true;
  return item.match?.some((p) => pathname === p || pathname.startsWith(`${p}/`)) ?? false;
}
