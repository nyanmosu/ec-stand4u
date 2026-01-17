import type { NavItem } from "@/types/nav";
import type { SocialLink } from "@/types/social";

export type HomeNavItem = NavItem;
export type HomeSocialLink = SocialLink;

export interface HomeConfig {
  homeNavItems: HomeNavItem[];
  homeSocialLinks: HomeSocialLink[];
}

export interface PickupItem {
  id: string;
  name: string;
  description: string;
  imageSrc: string;
  href: string;
}

export interface JournalItem {
  id: string;
  title: string;
  excerpt: string;
  imageSrc: string;
  isNew: boolean;
  tags: readonly string[];
}

export interface AllItem {
  id: string;
  name: string;
  priceLabel: string;
  imageSrc: string;
  href: string;
  ctaText?: string;
}
