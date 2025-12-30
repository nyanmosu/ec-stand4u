import Link from "next/link";
import Image from "next/image";
import type { NavItem } from "@/types/nav";

interface HeaderProps {
  navItems?: NavItem[];
}

export default function Header({ navItems }: HeaderProps) {
  return (
    <header>
      <div className="flex items-center justify-between px-7 py-6 md:px-11 md:py-12 xl:p-16">
        <div className="flex items-center justify-between gap-18">
          {/* ロゴ */}
          <Link href="/" className="inline-block" aria-label="ホーム">
            <Image
              src="/logo.png"
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
                  <li key={`${item.href}:${item.label}`} className="px-6">
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

        {/* ハンバーガー */}
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
    </header>
  );
}
