import Header from "@/components/header";
import { HOME_CONFIG } from "@/features/home/config";

interface HomeLayoutProps {
  children: React.ReactNode;
}

export default function HomeLayout({ children }: HomeLayoutProps) {
  return (
    <div>
      <Header navItems={HOME_CONFIG.homeNavItems} />
      <main>{children}</main>
      <footer></footer>
    </div>
  );
}
