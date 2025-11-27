import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function ImprintPage() {
  return (
    <main className="mx-auto flex min-h-screen max-w-3xl flex-col gap-6 px-6 py-16">
      <Card className="gap-0">
        <CardHeader>
          <p className="text-sm uppercase tracking-widest text-muted-foreground">
            Legal Notice
          </p>
          <CardTitle className="text-4xl">Impressum</CardTitle>
          <p className="text-muted-foreground">
            This German-language imprint satisfies the mandatory German legal
            disclosure requirements.
          </p>
        </CardHeader>
        <CardContent className="space-y-8">
          <section className="space-y-2">
            <h2 className="text-2xl font-semibold">
              Angaben gemäß § 5 TMG
            </h2>
            <p className="text-muted-foreground">
              Felix Rollbühler
              <br />
              Münklinger Str. 2
              <br />
              75378 Bad Liebenzell
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-2xl font-semibold">Kontakt</h2>
            <p className="text-muted-foreground">E-Mail: info@worshipviewer.com</p>
          </section>

          <section className="space-y-2">
            <h2 className="text-2xl font-semibold">
              Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV
            </h2>
            <p className="text-muted-foreground">
              Felix Rollbühler
              <br />
              Münklinger Str. 2
              <br />
              75378 Bad Liebenzell
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-2xl font-semibold">Hinweis</h2>
            <p className="text-muted-foreground">
              Diese App wird privat betrieben und dient nicht kommerziellen
              Zwecken.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-2xl font-semibold">EU-Streitschlichtung</h2>
            <p className="text-muted-foreground">
              Die Europäische Kommission stellt eine Plattform zur
              Online-Streitbeilegung (OS) bereit:
              <a
                className="ml-1 underline"
                href="https://consumer-redress.ec.europa.eu"
                target="_blank"
                rel="noreferrer"
              >
                https://ec.europa.eu/consumers/odr
              </a>
              . Unsere E-Mail-Adresse finden Sie oben im Impressum.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-2xl font-semibold">
              Verbraucherstreitbeilegung / Universalschlichtungsstelle
            </h2>
            <p className="text-muted-foreground">
              Wir sind nicht bereit oder verpflichtet, an
              Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle
              teilzunehmen.
            </p>
          </section>

          <p className="text-sm italic text-muted-foreground">
            Stand: 10. November 2025
          </p>
        </CardContent>
      </Card>
    </main>
  );
}

