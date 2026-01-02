import type { ReactNode } from "react";

type XlAlign = "center" | "start";

export default function SectionHeading({
  id,
  title,
  subtitle,
  xlAlign,
  className,
  subtitleClassName,
}: {
  id: string;
  title: ReactNode;
  subtitle: ReactNode;
  xlAlign?: XlAlign;
  className?: string;
  subtitleClassName?: string;
}) {
  return (
    <div
      className={[
        "flex flex-col gap-1 md:gap-2 xl:gap-3",
        "items-center",
        xlAlign === "start" ? "xl:items-start" : "",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <h2 id={id} className="ts-h2-en uppercase">
        {title}
      </h2>
      <p className={["ts-h2-sub", subtitleClassName].filter(Boolean).join(" ")}>
        {subtitle}
      </p>
    </div>
  );
}
