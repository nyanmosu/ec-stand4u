import Image from "next/image";
import Link from "next/link";
import SectionHeading from "@/features/home/components/section-heading";
import { ALL_ITEMS } from "@/features/home/data/all-items";

export default function AllItemsSection() {
  return (
    <section aria-labelledby="all-items-heading">
      <div className="flex flex-col items-center gap-8 md:gap-10 xl:gap-12">
        {/* 見出し */}
        <SectionHeading
          id="all-items-heading"
          title="All Items"
          subtitle="商品一覧"
        />

        {/* コンテンツ */}
        <ul className="grid justify-items-center w-[304px] gap-6 md:w-[680px] xl:w-[1216px] md:grid-cols-2 xl:grid-cols-4 xl:gap-7">
          {ALL_ITEMS.map((item, index) => (
            <li
              key={item.id}
              className="relative w-full h-[171px] md:h-[328px] xl:h-[280px]"
            >
              {/* 画像 */}
              <Image
                src={item.imageSrc}
                alt={item.name}
                fill
                className="object-cover"
                sizes="(min-width: 1216px) 280px, (min-width: 768px) 680px, 304px"
                priority={index === 0}
                loading={index === 0 ? "eager" : "lazy"}
              />

              {/* グラデーション（画像の上に重ねる） */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 z-10"
                style={{ background: "var(--gradation-k)" }}
              />

              {/* 文言（画像の上に重ねる） */}
              <div className="absolute inset-0 z-20 flex items-end px-2 pb-3">
                <div className="flex w-full justify-between items-end gap-6">
                  <Link
                    href={item.href}
                    className="inline-flex items-center justify-center rounded-full ring-1 ring-inset ring-white text-white px-2 py-1 ts-btn-mini-en whitespace-nowrap"
                    aria-label={`${item.name}を購入する`}
                  >
                    {item.ctaText ?? "BUY NOW"}
                  </Link>

                  <div className="flex items-center gap-4">
                    <p className="text-white ts-caption-mini">{item.name}</p>
                    <p className="text-white ts-caption-mini">
                      {item.priceLabel}
                    </p>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
        <Link
          href="/"
          className="ts-btn bg-main text-white px-10 py-3 rounded-full"
        >
          <span>商品一覧</span>
        </Link>
      </div>
    </section>
  );
}
