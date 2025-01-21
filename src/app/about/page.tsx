import { Slideshow } from "@/components/slideshow";

export default function Page() {
  return (
    <section className="flex flex-col gap-8 text-neutral-600">
      <h1 className="flex flex-wrap items-center gap-2 text-xl">
        <span>About</span>
      </h1>
      <Slideshow />
      <p>
        I'm <b>John Trinh</b>. A Vietnamese American software developer residing
        in the Washington D.C metro area.
      </p>
      <p>
        I love to create. Whether it takes the form of building software
        experiences, making art or putting together a dance routine, I have
        always enjoyed the act of creating something out of nothing for the
        enjoyment of others.
      </p>
      <p>
        Between editing custom MySpace themes in middle school, creating
        software tools for my other hobbies, and being my family's resident IT
        support specialist, technology has always been a part of my life in one
        way or another.
      </p>
      <p>
        I'm happily engaged to Suong, my fiance. I am also the proud (and busy)
        parent of 2 awesome Shiba Inus,{" "}
        <span className="text-yellow-400">Tofu</span> and{" "}
        <span className="text-red-400">Taro</span>.
      </p>
    </section>
  );
}
