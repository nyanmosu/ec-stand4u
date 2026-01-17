import Header from "@/components/header";
import Footer from "@/components/footer";
import { HOME_CONFIG } from "@/features/home/config";
import { HomeShellStack } from "@/features/home/components/home-shell-stack";

interface HomeLayoutProps {
  children: React.ReactNode;
}

export default function HomeLayout({ children }: HomeLayoutProps) {
  return (
    <HomeShellStack relative>
      <div className="absolute inset-x-0 top-0 z-20">
        <Header
          navItems={HOME_CONFIG.homeNavItems}
          socialLinks={HOME_CONFIG.homeSocialLinks}
        />
      </div>
      <main>{children}</main>
      <Footer
        navItems={HOME_CONFIG.homeNavItems}
        socialLinks={HOME_CONFIG.homeSocialLinks}
      />
    </HomeShellStack>
  );
}
