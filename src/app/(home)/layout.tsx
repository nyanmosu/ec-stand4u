import Header from "@/components/header";
import { HOME_CONFIG } from "@/features/home/config";

interface HomeLayoutProps {
  children: React.ReactNode;
}

export default function HomeLayout({ children }: HomeLayoutProps) {
  return (
    <div className="relative">
      <div className="absolute inset-x-0 top-0 z-20">
        <Header
          navItems={HOME_CONFIG.homeNavItems}
          socialLinks={HOME_CONFIG.homeSocialLinks}
        />
      </div>
      <main>{children}</main>
      <footer></footer>
    </div>
  );
}
