import Header from "@/components/header";
import { HOME_CONFIG } from "@/features/home/config";

interface HomeLayoutProps {
  children: React.ReactNode;
}

export default function HomeLayout({ children }: HomeLayoutProps) {
  return (
        <Header
          navItems={HOME_CONFIG.homeNavItems}
          socialLinks={HOME_CONFIG.homeSocialLinks}
        />
      <main>{children}</main>
      <footer></footer>
    </div>
  );
}
