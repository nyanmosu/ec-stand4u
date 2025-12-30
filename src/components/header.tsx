import Link from "next/link";
import Image from "next/image";
import type { NavItem } from "@/types/nav";
import type { SocialLink } from "@/types/social";

interface HeaderProps {
  navItems?: NavItem[];
  socialLinks?: SocialLink[];
}

export default function Header({ navItems, socialLinks }: HeaderProps) {
  return (
    <header>
      <div className="flex items-center justify-between px-7 py-6 md:px-11 md:py-12 xl:p-16">
        <div className="flex items-center justify-between xl:gap-18">
          {/* ロゴ */}
          <Link href="/" className="inline-block" aria-label="ホーム">
            <Image
              src="/logo.svg"
              alt="ロゴの画像"
              width={90}
              height={19}
              className="h-auto w-[90px] md:w-[140px] xl:w-[150px]"
              sizes="(min-width: 1280px) 150px, (min-width: 768px) 140px, 90px"
              priority
            />
          </Link>

          {/* ナビゲーション */}
          {navItems && navItems.length > 0 ? (
            <nav className="hidden xl:block">
              <ul className="flex items-center">
                {navItems.map((item) => (
                  <li
                    key={`${item.href}:${item.label}`}
                    className="px-6 border-r border-line last:border-r-0"
                  >
                    <Link
                      href={item.href}
                      className="uppercase ts-gnav-en"
                      aria-label={item.ariaLabel}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ) : null}
        </div>

        <div className="flex items-center xl:gap-16">
          {/* ソーシャルメディアリンク */}
          {socialLinks && socialLinks.length > 0 ? (
            <nav className="hidden xl:block" aria-label="ソーシャルリンク">
              <ul className="flex items-center justify-center gap-2">
                {socialLinks.map((item) => (
                  <li
                    key={`${item.href}:${item.ariaLabel}`}
                    className="flex items-center justify-center"
                  >
                    <Link
                      href={item.href}
                      className="inline-block"
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

          {/* ハンバーガーメニュー */}
          <button
            type="button"
            aria-label="メニュー"
            className="inline-flex flex-col items-center justify-center gap-2 md:gap-3"
          >
            <span className="bg-main h-0.5 w-10 md:h-[3px] md:w-16" />
            <span className="bg-main h-0.5 w-10 md:h-[3px] md:w-16" />
            <span className="bg-main h-0.5 w-10 md:h-[3px] md:w-16" />
          </button>
        </div>
      </div>
    </header>
  );
}
