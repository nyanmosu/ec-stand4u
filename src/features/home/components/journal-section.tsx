import Image from "next/image";
import Link from "next/link";
import SectionHeading from "@/features/home/components/section-heading";
import { JOURNAL_ITEMS } from "@/features/home/data/journal-items";

export default function JournalSection() {
  return (
    <section aria-labelledby="journal-heading">
      <div className="flex flex-col items-center gap-8 md:gap-10 xl:gap-12">
        {/* 見出し */}
        <SectionHeading
          id="journal-heading"
          title="Journal"
          subtitle="記事一覧"
        />

        {/* 記事リスト */}
        <ul className="grid justify-items-center w-[304px] md:w-[680px] xl:w-[1120px] xl:grid-cols-4 xl:gap-8">
          {JOURNAL_ITEMS.map((item, index) => (
            <li
              key={item.id}
              className="py-8 border-b border-dashed border-b-line first:pt-0 xl:py-0"
            >
              <article className="flex flex-col gap-6 md:flex-row xl:flex-col">
                {/* 画像 */}
                <div className="relative h-[171px] w-full md:h-[135px] md:w-[240px] xl:h-[144px] xl:w-[256px] md:flex-none md:shrink-0">
                  <Image
                    src={item.imageSrc}
                    alt={item.title}
                    fill
                    className="object-cover"
                    sizes="(min-width: 1280px) 256px, (min-width: 768px) 240px, 304px"
                    priority={index === 0}
                    loading={index === 0 ? "eager" : "lazy"}
                  />
                  {item.isNew && (
                    <span className="absolute top-0 right-0 bg-accent text-white p-1 ts-new-icon uppercase">
                      new
                    </span>
                  )}
                </div>

                {/* 記事情報 */}
                <div className="flex flex-col gap-2">
                  {/* タグ */}
                  <ul className="flex flex-wrap gap-1">
                    {item.tags.map((tag) => (
                      <li key={`${item.id}-${tag}`}>
                        <span className="flex items-center rounded-full ring-1 ring-inset ring-accent text-accent px-2 py-1 ts-tag">
                          #{tag}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* タイトル */}
                  <h3 className="ts-h3">{item.title}</h3>

                  {/* 本文 */}
                  <p className="ts-caption">{item.excerpt}</p>
                </div>
              </article>
            </li>
          ))}
        </ul>
        <Link
          href="/"
          className="ts-btn bg-main text-white px-10 py-3 rounded-full"
        >
          <span>記事一覧</span>
        </Link>
      </div>
    </section>
  );
}
