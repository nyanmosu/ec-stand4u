import Image from "next/image";
import SectionHeading from "@/features/home/components/section-heading";

export default function AboutUsSection() {
  return (
    <section aria-labelledby="about-us-heading">
      <div className="flex flex-col items-center px-7 gap-8 md:px-11 md:gap-10 xl:px-20 xl:gap-12">
        {/* 見出し */}
        <SectionHeading
          id="about-us-heading"
          title="About Us"
          subtitle="私たちについて"
        />

        {/* コンテンツ */}
        <div className="flex flex-col items-center gap-6 md:flex-row md:items-start md:grid md:grid-cols-2 xl:gap-16">
          <div className="relative w-full h-[171px] md:h-[185px] xl:h-[306px]">
            <Image
              src="/about-img.png"
              alt="About Us"
              fill
              className="object-cover"
              sizes="(min-width: 1280px) 544px, (min-width: 768px) 328px, 304px"
            />
          </div>
          <div className="flex flex-col gap-8">
            <p className="ts-body">
              私たちは本来の自分に合った、自然なスタイルを見つけて頂くために、心から心地よく感じる服を提案するというスタイルで服作りを始めました。
            </p>
            <p className="ts-body">
              日々進化するファッション業界の中で、流行のトレンドは見据えつつも、普遍的なその人にあったスタイルを重視し、今の流行に寄り添ったファッションを提案して続けていきたいと思っています。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
