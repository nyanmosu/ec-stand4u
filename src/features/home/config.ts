import type { HomeConfig } from "./types";

export const HOME_CONFIG: HomeConfig = {
  homeNavItems: [
    { href: "/", label: "pickup", ariaLabel: "注目のファッションアイテム" },
    { href: "/", label: "about", ariaLabel: "私たちについて" },
    { href: "/", label: "journal", ariaLabel: "記事一覧" },
    { href: "/", label: "all items", ariaLabel: "商品一覧" },
  ],
  homeSocialLinks: [
    {
      href: "/",
      ariaLabel: "インスタグラム",
      iconSrc: "/instagram.svg",
      iconAlt: "インスタグラムの画像",
      iconWidth: 20,
      iconHeight: 20,
    },
    {
      href: "/",
      ariaLabel: "フェイスブック",
      iconSrc: "/facebook.svg",
      iconAlt: "フェイスブックの画像",
      iconWidth: 20,
      iconHeight: 20,
    },
    {
      href: "/",
      ariaLabel: "X",
      iconSrc: "/x.svg",
      iconAlt: "Xの画像",
      iconWidth: 20,
      iconHeight: 20,
    },
  ],
};
