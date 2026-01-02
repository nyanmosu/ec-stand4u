import Image from "next/image";
import Link from "next/link";
import { PICKUP_ITEMS } from "@/features/home/data/pickup-items";

export default function PickupItemsSection() {
  return (
    <section aria-labelledby="pickup-items-heading">
      <div className="px-7 md:px-11 xl:px-30">
        <div className="relative flex flex-col items-center gap-8 md:gap-10 xl:flex-row xl:items-start xl:gap-[82px] xl:max-w-[1040px] mx-auto">
          {/* 背景 */}
          <div
            aria-hidden="true"
            className="hidden xl:block pointer-events-none absolute z-0 bg-surface w-screen top-[calc(198px/2)] bottom-0 -translate-x-1/2 left-1/2"
          />

          {/* 見出し */}
          <div className="relative z-10 flex flex-col items-center gap-1 md:gap-2 xl:gap-3 xl:items-start">
            <h2 id="pickup-items-heading" className="ts-h2-en uppercase">
              Pickup <br className="hidden xl:block" />
              Items
            </h2>
            <p className="ts-h2-sub whitespace-nowrap">
              注目のファッションアイテム
            </p>
          </div>

          {/* 商品リスト */}
          <div className="relative z-10 w-full pb-20">
            {/* 背景 */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute z-0 bg-surface w-screen top-[calc(171px/2)] md:top-[calc(184.5px/2.3)] xl:hidden bottom-0 -translate-x-1/2 left-1/2"
            />
            <ul className="relative z-10 grid grid-cols-1 md:grid-cols-2 justify-items-center gap-6 md:max-w-[680px] xl:max-w-[732px] xl:gap-7 mx-auto">
              {PICKUP_ITEMS.map((item, index) => (
                <li
                  key={item.id}
                  className="grid w-[304px] md:w-[328px] xl:w-[352px] gap-6 xl:gap-8"
                >
                  {/* 商品画像 */}
                  <div className="relative w-full h-[171px] md:h-[184.5px] xl:h-[198px]">
                    <Image
                      src={item.imageSrc}
                      alt={item.name}
                      fill
                      className="object-contain"
                      sizes="(min-width: 1280px) 352px, (min-width: 768px) 328px, 304px"
                      priority={index === 0}
                      loading={index === 0 ? "eager" : "lazy"}
                    />
                  </div>

                  {/* 商品情報 */}
                  <div className="flex flex-col gap-2 md:gap-3 xl:gap-4">
                    <h3 className="ts-h3">{item.name}</h3>
                    <p className="ts-caption">{item.description}</p>
                    <Link
                      href={item.href}
                      className="self-end px-4 py-2 rounded-[30px] bg-main text-white ts-btn-mini-en uppercase"
                      aria-label={`${item.name}の詳細を見る`}
                    >
                      view item
                    </Link>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
