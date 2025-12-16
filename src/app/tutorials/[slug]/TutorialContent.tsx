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
import { Tutorial } from "@/lib/tutorials";
import MusicNotation from "@/components/MusicNotation";
import GuitarTab from "@/components/GuitarTab";

interface TutorialContentProps {
  tutorial: Tutorial;
}

export default function TutorialContent({ tutorial }: TutorialContentProps) {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const sections = tutorial.sections.map((s) => s.id);
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i]);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [tutorial]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="border-b">
        <div className="mx-auto flex max-w-5xl items-center justify-between gap-6 px-6 py-6">
          <div className="flex flex-1 flex-col gap-3">
            <div className="flex flex-wrap items-center gap-3">
              <Link href="/" className="flex items-center gap-3">
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
              </Link>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Button asChild variant="secondary">
              <Link href="/tutorials">Learn & Grow</Link>
            </Button>
            <Button asChild>
              <Link href="https://app.worshipviewer.com">Login</Link>
            </Button>
          </div>
        </div>
      </header>

      <main className="mx-auto flex max-w-7xl gap-8 px-6 py-16">
        {/* Section Outline Sidebar */}
        <aside className="hidden w-64 shrink-0 lg:block">
          <div className="sticky top-24 space-y-2">
            <Link
              href="/tutorials"
              className="mb-4 block text-sm text-muted-foreground hover:text-foreground underline underline-offset-4"
            >
              ← Back to Learn & Grow
            </Link>
            <h2 className="mb-4 text-lg font-semibold">Table of Contents</h2>
            <nav className="space-y-1">
              {tutorial.sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className={`block w-full text-left rounded-md px-3 py-2 text-sm transition-colors ${
                    activeSection === section.id
                      ? "bg-primary text-primary-foreground font-medium"
                      : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                  }`}
                >
                  {section.order}. {section.title}
                </button>
              ))}
            </nav>
          </div>
        </aside>

        {/* Main Content */}
        <div className="flex-1 space-y-8">
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link
              href="/"
              className="hover:text-foreground underline-offset-4 hover:underline"
            >
              Home
            </Link>
            <span>/</span>
            <Link
              href="/tutorials"
              className="hover:text-foreground underline-offset-4 hover:underline"
            >
              Learn & Grow
            </Link>
            <span>/</span>
            <span className="text-foreground">{tutorial.title}</span>
          </nav>

          <div className="space-y-4">
            <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
              Tutorial
            </p>
            <h1 className="text-4xl font-semibold leading-tight md:text-5xl">
              {tutorial.title}
            </h1>
            <p className="text-lg text-muted-foreground">
              {tutorial.description}
            </p>
            <p className="text-sm text-muted-foreground">
              Estimated reading time: {tutorial.estimatedTime}
            </p>
          </div>

          {/* Mobile Table of Contents */}
          <Card className="lg:hidden">
            <CardHeader>
              <Link
                href="/tutorials"
                className="mb-2 block text-sm text-muted-foreground hover:text-foreground underline underline-offset-4"
              >
                ← Back to Learn & Grow
              </Link>
              <CardTitle>Table of Contents</CardTitle>
            </CardHeader>
            <CardContent>
              <nav className="space-y-1">
                {tutorial.sections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => scrollToSection(section.id)}
                    className={`block w-full text-left rounded-md px-3 py-2 text-sm transition-colors ${
                      activeSection === section.id
                        ? "bg-primary text-primary-foreground font-medium"
                        : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                    }`}
                  >
                    {section.order}. {section.title}
                  </button>
                ))}
              </nav>
            </CardContent>
          </Card>

          {/* Tutorial Sections */}
          {tutorial.sections.map((section) => (
            <Card key={section.id} id={section.id} className="scroll-mt-24">
              <CardHeader>
                <CardTitle className="text-3xl">{section.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {section.content.map((item, index) => {
                  if (item.type === "heading") {
                    return (
                      <h3
                        key={index}
                        className="text-xl font-semibold mt-6 mb-3"
                      >
                        {item.text}
                      </h3>
                    );
                  }
                  if (item.type === "notes" && item.notes) {
                    return (
                      <div key={index} className="my-6">
                        <p className="text-sm font-medium text-muted-foreground mb-3">
                          {item.text}
                        </p>
                        <MusicNotation notes={item.notes} clef="treble" />
                      </div>
                    );
                  }
                  if (item.type === "guitarTab" && item.positions) {
                    return (
                      <GuitarTab
                        key={index}
                        positions={item.positions}
                        chordName={item.chordName}
                        fingers={item.fingers}
                      />
                    );
                  }
                  return (
                    <p
                      key={index}
                      className="text-muted-foreground leading-relaxed"
                    >
                      {item.text}
                    </p>
                  );
                })}
              </CardContent>
            </Card>
          ))}
        </div>
      </main>

      <footer className="border-t bg-muted/50 px-6 py-10 text-sm text-muted-foreground">
        <div className="mx-auto flex max-w-5xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <p className="md:flex-1">
            Worship Viewer - From worshippers for worshippers
          </p>
          <nav className="flex flex-wrap gap-4 md:flex-1 md:flex-nowrap md:justify-end md:gap-6">
            <Link
              href="/imprint"
              className="underline underline-offset-4 hover:text-foreground"
            >
              Imprint (Impressum)
            </Link>
            <Link
              href="/privacy"
              className="underline underline-offset-4 hover:text-foreground"
            >
              Privacy Policy (Datenschutzerklärung)
            </Link>
            <Link
              href="/terms"
              className="underline underline-offset-4 hover:text-foreground"
            >
              Terms & Conditions (AGB)
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  );
}

