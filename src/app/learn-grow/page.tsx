"use client";

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
import { tutorials } from "@/lib/tutorials";

export default function TutorialsIndexPage() {
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

      <main className="mx-auto flex max-w-5xl flex-col gap-12 px-6 py-16">
        <div className="space-y-4">
          <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
            Learn & Grow
          </p>
          <h1 className="text-4xl font-semibold leading-tight md:text-5xl">
            Worship Viewer Learn & Grow
          </h1>
          <p className="text-lg text-muted-foreground">
            Everything you need to know to get the most out of Worship Viewer
            and lead worship with confidence.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {tutorials.map((tutorial) => (
            <Card key={tutorial.slug} className="flex flex-col">
              <CardHeader>
                <CardTitle className="text-2xl">{tutorial.title}</CardTitle>
                <CardDescription className="text-base">
                  {tutorial.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex flex-1 flex-col justify-between gap-4">
                <div className="space-y-2">
                  <p className="text-sm text-muted-foreground">
                    <span className="font-medium">Estimated time:</span>{" "}
                    {tutorial.estimatedTime}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    <span className="font-medium">Sections:</span>{" "}
                    {tutorial.sections.length}
                  </p>
                </div>
                <Button asChild className="w-full">
                  <Link href={`/tutorials/${tutorial.slug}`}>
                    Read Tutorial
                  </Link>
                </Button>
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
