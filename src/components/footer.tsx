import Image from "next/image";
import Link from "next/link";
import type { NavItem } from "@/types/nav";
import type { SocialLink } from "@/types/social";

type FooterProps = {
  navItems: NavItem[];
  socialLinks: SocialLink[];
};

export default function Footer({ navItems, socialLinks }: FooterProps) {
  return (
    <footer className="bg-surface text-text">
      <div className="flex flex-col items-start gap-8 px-7 py-16">
        <div className="flex flex-col items-start gap-3">
          <div className="flex flex-col items-start gap-4">
            <Image src="/logo.svg" alt="logo" width={90} height={19} />
            <nav
              aria-label="フッターナビゲーション"
              className="uppercase ts-footer-nav-en"
            >
              {navItems.map((item) => (
                <Link
                  key={`${item.href}:${item.label}`}
                  href={item.href}
                  aria-label={item.ariaLabel}
                  className="px-2 border-r border-line last:border-r-0 first:pl-0 first:pr-2 last:pr-0 last:pl-2"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
          <div className="ts-copyright-en">© STAND 4U All Rights Reserved.</div>
        </div>

        {/* ソーシャルメディアリンク */}
        {socialLinks.length > 0 ? (
          <nav aria-label="ソーシャルリンク">
            <ul className="flex items-center gap-2">
              {socialLinks.map((item) => (
                <li key={`${item.href}:${item.ariaLabel}`}>
                  <Link
                    href={item.href}
                    className="inline-flex"
                    aria-label={item.ariaLabel}
                  >
                    <Image
                      src={item.iconSrc}
                      alt={item.iconAlt}
                      width={item.iconWidth}
                      height={item.iconHeight}
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        ) : null}
      </div>
    </footer>
  );
}
