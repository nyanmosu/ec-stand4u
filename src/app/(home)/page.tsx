import Image from "next/image";

export default function HomePage() {
  return (
    <>
      <section>
        <div className="relative min-h-svh w-full mx-auto xl:max-w-[1440px] @container">
          {/* タグライン */}
          <div className="absolute left-7 @sm:left-10 @md:left-12 @xl:left-16 top-30 @lg:top-24 @3xl:top-32 @5xl:top-58 @6xl:top-64 @7xl:top-46 z-10">
            <h1 className="ts-tagline-en uppercase">unaffected</h1>
            <p className="ts-tagline-sub-en">
              We always like to wear what we love.
            </p>
          </div>

          {/* メインビジュアル */}
          <div
            className="absolute right-0 top-0 h-full
          w-[180px]
          @sm:w-[220px]
          @md:w-[270px]
          @lg:w-[330px]
          @xl:w-[390px]
          @2xl:w-[490px]
          @3xl:w-[540px]
          @4xl:w-[660px]
          @5xl:w-[520px]
          @6xl:w-[640px]
          @7xl:w-[760px]"
          >
            <Image
              src="/main-visual-img_001.png"
              alt="メインビジュアルの画像"
              fill
              priority
              className="object-cover"
              sizes="
              (min-width: 1280px) 760px,
              (min-width: 1152px) 640px,
              (min-width: 1024px) 520px,
              (min-width: 896px) 660px,
              (min-width: 672px) 490px,
              (min-width: 576px) 390px,
              (min-width: 512px) 330px,
              (min-width: 448px) 270px,
              (min-width: 384px) 220px,
              180px"
            />
          </div>

          {/* サブビジュアル */}
          <div className="absolute left-0 bottom-0">
            <div className="flex flex-col @5xl:flex-row gap-4 md:gap-8 @5xl:gap-6">
              <div
                className="relative
              w-[118px] h-[162px]
              @sm:w-[140px] @sm:h-[180px]
              @md:w-[160px] @md:h-[200px]
              @3xl:w-[200px] @3xl:h-[260px]
              @5xl:w-[220px] @5xl:h-[340px]"
              >
                <Image
                  src="/sub-visual-img_001.png"
                  alt=""
                  fill
                  priority
                  className="object-cover"
                  sizes="
                  (min-width: 1024px) 220px,
                  (min-width: 768px) 200px,
                  (min-width: 448px) 160px,
                  (min-width: 384px) 140px,
                  118px"
                />
              </div>
              <div
                className="relative
              w-[118px] h-[162px]
              @sm:w-[140px] @sm:h-[180px]
              @md:w-[160px] @md:h-[200px]
              @3xl:w-[200px] @3xl:h-[260px]
              @5xl:w-[220px] @5xl:h-[340px]"
              >
                <Image
                  src="/sub-visual-img_002.png"
                  alt=""
                  fill
                  priority
                  className="object-cover"
                  sizes="
                  (min-width: 1024px) 220px,
                  (min-width: 768px) 200px,
                  (min-width: 448px) 160px,
                  (min-width: 384px) 140px,
                  18px"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <p>a</p>
    </>
  );
}
