 "use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const featureHighlights = [
  {
    title: "Single Source of Truth",
    description:
      "Craft a song once, then trust it everywhere—charts, slides, clicks, cues, and every team member stay perfectly in sync.",
  },
  {
    title: "Prepared Yet Free",
    description:
      "Plan sets down to the beat, but break out the instant the Spirit leads—even launch fully spontaneous worship without losing footing.",
  },
  {
    title: "All for His Glory",
    description:
      "The whole purpose of this App is to worhip and glorify the one true God - The Father, the Son and the Holy Spirt.",
  },
];

const supportWays = [
  {
    title: "Praying",
    description:
      "Ask the Lord to provide, guide the vision, keep it for His glory, and make every worshipper who uses it a blessing to their community.",
  },
  {
    title: "Feedback & Ideas",
    description: (
      <>
        Share testimonies, feature requests, or bug reports anytime at{" "}
        <Link
          href="mailto:info@worshipviewer.com"
          className="underline underline-offset-4 hover:text-foreground"
        >
          info@worshipviewer.com
        </Link>
        .
      </>
    ),
  },
  {
    title: "Contributing",
    description: (
      <>
        Jump into design, code, or docs by collaborating openly on{" "}
        <Link
          href="https://github.com/xilefmusics/worship_viewer"
          className="underline underline-offset-4 hover:text-foreground"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </Link>
        .
      </>
    ),
  },
  {
    title: "Spread the Word",
    description:
      "If Worship Viewer serves you well, invite other worship teams to try it so the community can grow organically.",
  },
  {
    title: "Financial Support",
    description: (
      <>
        There’s no official funding channel yet, but if God puts it on your heart
        to give, reach out at{" "}
        <Link
          href="mailto:info@worshipviewer.com"
          className="underline underline-offset-4 hover:text-foreground"
        >
          info@worshipviewer.com
        </Link>
        .
      </>
    ),
  },
];

const legalLinks = [
  { href: "/imprint", label: "Imprint (Impressum)" },
  { href: "/privacy", label: "Privacy Policy (Datenschutzerklärung)" },
  { href: "/terms", label: "Terms & Conditions (AGB)" },
];

const carouselSlides = [
  {
    src: "/screenshot1.png",
    alt: "Worship Viewer planning timeline mockup",
    caption: "Manage and display every chart in any key, so every worshipper sees the part they need instantly.",
  },
  {
    src: "/screenshot2.png",
    alt: "Worship Viewer click and cue sample mockup",
    caption: "Import songs from ChordPro, Ultimate Guitar, or build them from scratch in minutes.",
  },
  {
    src: "/more-to-come.svg",
    alt: "More features teaser",
    caption: "More to come — automatic slides, click and cue sampling, team management, and a digital MD.",
  },
];

export default function Home() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % carouselSlides.length);
    }, 6000);

    return () => window.clearInterval(timer);
  }, []);

  const goToSlide = (index: number) => {
    const normalizedIndex = (index + carouselSlides.length) % carouselSlides.length;
    setActiveSlide(normalizedIndex);
  };

  const handlePrev = () => goToSlide(activeSlide - 1);
  const handleNext = () => goToSlide(activeSlide + 1);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="border-b">
        <div className="mx-auto flex max-w-5xl items-center justify-between gap-6 px-6 py-6">
          <div className="flex flex-1 flex-col gap-3">
            <div className="flex flex-wrap items-center gap-3">
              <Image
                src="/logo_icon.png"
                alt="Worship Viewer icon"
                width={2000}
                height={2000}
                className="h-12 w-12 rounded-[20%] object-cover"
                priority
              />
              <Image
                src="/logo_text.png"
                alt="Worship Viewer"
                width={2250}
                height={1023}
                className="h-9 w-auto"
                priority
              />
            </div>
          </div>
          <Button asChild>
            <Link href="https://app.worshipviewer.com/login">Login</Link>
          </Button>
        </div>
      </header>

      <main className="mx-auto flex max-w-5xl flex-col gap-12 px-6 py-16">
        <section className="grid gap-10 md:grid-cols-[1.1fr_0.9fr] md:items-center">
          <div className="space-y-6">
            <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
              All for His glory
            </p>
            <h2 className="text-4xl font-semibold leading-tight md:text-5xl">
              Helps you lead worship - then steps aside when the Spirit takes
              over.
            </h2>
            <p className="text-lg text-muted-foreground">
              Focus on the room not the screen! Don't make music - worship!
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Button asChild size="lg">
                <Link href="https://app.worshipviewer.com/login">Go to Login</Link>
              </Button>
              <p className="text-sm uppercase tracking-wide text-muted-foreground">
                Join Now For Free
              </p>
            </div>
          </div>

          <Card className="border-dashed">
            <CardHeader>
              <CardTitle>First Impressions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="relative overflow-hidden rounded-lg border bg-muted/40">
                <Image
                  key={carouselSlides[activeSlide].src}
                  src={carouselSlides[activeSlide].src}
                  alt={carouselSlides[activeSlide].alt}
                  width={960}
                  height={640}
                  className="h-64 w-full object-cover"
                />

                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-background/90 to-transparent px-4 py-3">
                  <p className="text-sm font-medium text-foreground">
                    Slide {activeSlide + 1} of {carouselSlides.length}
                  </p>
                </div>

                <div className="absolute inset-y-0 left-0 flex items-center p-3">
                  <Button
                    variant="secondary"
                    size="sm"
                    onClick={handlePrev}
                    type="button"
                    aria-label="View previous slide"
                  >
                    Prev
                  </Button>
                </div>
                <div className="absolute inset-y-0 right-0 flex items-center p-3">
                  <Button
                    variant="secondary"
                    size="sm"
                    onClick={handleNext}
                    type="button"
                    aria-label="View next slide"
                  >
                    Next
                  </Button>
                </div>
              </div>

              <p className="text-sm text-muted-foreground" aria-live="polite">
                {carouselSlides[activeSlide].caption}
              </p>

              <div className="flex items-center justify-center gap-2">
                {carouselSlides.map((slide, index) => {
                  const isActive = index === activeSlide;
                  return (
                    <button
                      key={slide.src}
                      type="button"
                      onClick={() => goToSlide(index)}
                      aria-label={`Go to slide ${index + 1}`}
                      className={`h-2.5 w-2.5 rounded-full transition-all ${
                        isActive ? "bg-primary" : "bg-muted-foreground/40"
                      }`}
                    />
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </section>

        <section className="grid gap-6 md:grid-cols-3">
          {featureHighlights.map((feature) => (
            <Card key={feature.title}>
              <CardHeader>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
                <CardDescription>{feature.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </section>

        <section className="space-y-6">
          <div className="space-y-2 text-center">
            <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
              How to Support
            </p>
            <h3 className="text-3xl font-semibold">
              Join the Mission to Serve Worshippers
            </h3>
            <p className="text-base text-muted-foreground">
              Lean in however God prompts you so Worship Viewer keeps pointing every team toward His presence.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {supportWays.map((support) => (
              <Card key={support.title}>
                <CardHeader>
                  <CardTitle className="text-xl">{support.title}</CardTitle>
                  <CardDescription>{support.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </section>
      </main>

      <footer
        id="legal"
        className="border-t bg-muted/50 px-6 py-10 text-sm text-muted-foreground"
      >
        <div className="mx-auto flex max-w-5xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <p className="md:flex-1">
            Worship Viewer - From worshippers for worshippers
          </p>
          <nav className="flex flex-wrap gap-4 md:flex-1 md:flex-nowrap md:justify-end md:gap-6">
            {legalLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="underline underline-offset-4 hover:text-foreground"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </footer>
    </div>
  );
}
