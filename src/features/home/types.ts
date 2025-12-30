import type { NavItem } from "@/types/nav";
import type { SocialLink } from "@/types/social";

export type HomeNavItem = NavItem;
export type HomeSocialLink = SocialLink;

export interface HomeConfig {
  homeNavItems: HomeNavItem[];
  homeSocialLinks: HomeSocialLink[];
}
