import type { ReactNode } from "react";

const HOME_STACK_GAP_CLASSNAME = "flex flex-col gap-16 md:gap-20 xl:gap-24";

type HomeShellStackProps = {
  children: ReactNode;
  relative?: boolean;
  className?: string;
};

export function HomeShellStack({
  children,
  relative = false,
  className = "",
}: HomeShellStackProps) {
  const base = relative
    ? `relative ${HOME_STACK_GAP_CLASSNAME}`
    : HOME_STACK_GAP_CLASSNAME;

  const merged = className ? `${base} ${className}` : base;

  return <div className={merged}>{children}</div>;
}
