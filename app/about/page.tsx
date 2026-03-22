import { Navigation } from "@/components/navigation"
import { Providers } from "@/components/providers"
import { Mail, Github, Palette, Code, Heart } from "lucide-react"

export default function AboutPage() {
  return (
    <Providers>
      <div className="min-h-screen bg-background">
        <Navigation />
        <main className="container mx-auto px-4 py-8">
          <div className="mx-auto max-w-3xl">
            <header className="mb-12 text-center">
              <h1 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
                О проекте
              </h1>
              <p className="text-lg text-muted-foreground">
                Добро пожаловать в микро-галерею цифрового искусства
              </p>
            </header>

            <div className="space-y-8">
              {/* About Section */}
              <section className="rounded-xl border border-border bg-card p-6 md:p-8">
                <div className="mb-6 flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border border-primary bg-primary/20">
                    <Palette className="h-6 w-6 text-primary" />
                  </div>
                  <h2 className="text-xl font-bold text-foreground">
                    О сайте
                  </h2>
                </div>
                <p className="leading-relaxed text-foreground">
                  По сути своей сайт представляет собой небольшую сборку из различных 2D и 3D картинок а так же рендеров и фото, прототипом в разработки послужили сайты галереи вроде pinterest и artstation.
                </p>
              </section>

              {/* Skills Section */}
              <section className="rounded-xl border border-border bg-card p-6 md:p-8">
                <div className="mb-6 flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border border-primary bg-primary/20">
                    <Code className="h-6 w-6 text-primary" />
                  </div>
                  <h2 className="text-xl font-bold text-foreground">
                    Технологии
                  </h2>
                </div>
                <div className="grid gap-3 sm:grid-cols-2">
                  {[
                    "Adobe Photoshop",
                    "Blender 3D",
                    "Procreate",
                    "After Effects",
                    "Figma",
                    "Cinema 4D",
                  ].map((skill) => (
                    <div
                      key={skill}
                      className="rounded-lg border border-border bg-secondary/50 px-4 py-2 text-center text-sm font-medium text-foreground"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </section>

              {/* Mission Section */}
              <section className="rounded-xl border border-border bg-card p-6 md:p-8">
                <div className="mb-6 flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border border-primary bg-primary/20">
                    <Heart className="h-6 w-6 text-primary" />
                  </div>
                  <h2 className="text-xl font-bold text-foreground">
                    Миссия
                  </h2>
                </div>
                <p className="leading-relaxed text-foreground">
                  Данный проект является типичным тестом для проверки работы сайта а также различных технологий, сайт был создан менее чем за 8 часов одним скучным  воскрестным днём, на энтузиазме и с лбовью.
                </p>
              </section>

              {/* Contact Section */}
              <section className="rounded-xl border border-border bg-card p-6 md:p-8">
                <h2 className="mb-6 text-xl font-bold text-foreground">
                  Контакты
                </h2>
                <div className="flex flex-wrap gap-4">
                  <a
                    href="https://outlook.com"
                    className="flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-medium text-foreground transition-all hover:border-primary hover:bg-primary hover:text-primary-foreground"
                  >
                    <Mail className="h-4 w-4" />
                    Email
                  </a>
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-medium text-foreground transition-all hover:border-primary hover:bg-primary hover:text-primary-foreground"
                  >
                    <Github className="h-4 w-4" />
                    GitHub
                  </a>
                </div>
              </section>
            </div>

            {/* Footer */}
            <footer className="mt-12 text-center">
              <p className="text-sm text-muted-foreground">
                © 2026 P.Z ArtGallery. Все права защищены.
              </p>
            </footer>
          </div>
        </main>
      </div>
    </Providers>
  )
}
