import Image from "next/image";
import Link from "next/link";
import { PICKUP_ITEMS } from "@/features/home/data/pickup-items";

export default function PickupItemsSection() {
  return (
    <section aria-labelledby="pickup-items-heading">
      <div className="px-7">
        <div className="flex flex-col items-center gap-8">
          {/* 見出し */}
          <div className="flex flex-col items-center gap-1">
            <h2 id="pickup-items-heading" className="ts-h2-en uppercase">
              Pickup Items
            </h2>
            <p className="ts-h2-sub">注目のファッションアイテム</p>
          </div>

          {/* 商品リスト */}
          <div className="relative w-full pb-20">
            {/* 背景 */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute z-0 bg-surface w-screen top-[calc(171px/2)] bottom-0 -translate-x-1/2 left-1/2"
            />

            <ul className="relative z-10 grid grid-cols-1 justify-items-center gap-6">
              {PICKUP_ITEMS.map((item, index) => (
                <li key={item.id} className="grid w-[304px] gap-6">
                  {/* 商品画像 */}
                  <div className="relative w-full h-[171px]">
                    <Image
                      src={item.imageSrc}
                      alt={item.name}
                      fill
                      className="object-contain"
                      sizes="304px"
                      priority={index === 0}
                      loading={index === 0 ? "eager" : "lazy"}
                    />
                  </div>

                  {/* 商品情報 */}
                  <div className="flex flex-col gap-2">
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
