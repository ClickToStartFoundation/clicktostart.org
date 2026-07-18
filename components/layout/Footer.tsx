import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { site } from "@/lib/site";
import { FacebookIcon, InstagramIcon } from "@/components/ui/icons";

const link = "font-mono text-[13px] text-on-tile-mono transition-colors hover:text-white";

export function Footer() {
  return (
    <footer className="bg-footer text-white">
      <Container className="flex flex-col justify-between gap-6 py-10 md:flex-row md:items-center">
        <div className="font-mono text-[14.5px]">
          <span className="text-on-tile-mono">click</span>tostart_foundation
          <span className="ml-2.5 text-[12.5px] text-on-tile-mono">{site.tagline}</span>
        </div>
        <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
          <a href={site.social.facebook} target="_blank" rel="noopener noreferrer" className={`flex items-center gap-2 ${link}`}>
            <FacebookIcon size={16} />
            facebook
          </a>
          <a href={site.social.instagram} target="_blank" rel="noopener noreferrer" className={`flex items-center gap-2 ${link}`}>
            <InstagramIcon size={16} strokeWidth={1.8} />
            instagram
          </a>
          <Link href="/sponsors" className={link}>
            sponsor us
          </Link>
          <a href={`mailto:${site.email}`} className={link}>
            {site.email}
          </a>
        </div>
      </Container>
      <div className="border-t border-white/20">
        <Container className="flex flex-col justify-between gap-2 py-4 font-mono text-[12px] text-on-tile-mono md:flex-row md:items-center">
          <div>
            © {site.foundedYear}–{site.currentYear} {site.name}. All rights reserved.
          </div>
          <div>
            site by{" "}
            <a href={site.partner.url} target="_blank" rel="noopener noreferrer" className="text-white hover:underline">
              {site.partner.name}
            </a>
          </div>
        </Container>
      </div>
    </footer>
  );
}
