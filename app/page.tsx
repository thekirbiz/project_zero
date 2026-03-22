import { Navigation } from "@/components/navigation"
import { GalleryGrid } from "@/components/gallery-grid"
import { Providers } from "@/components/providers"

export default function Home() {
  return (
    <Providers>
      <div className="min-h-screen bg-background">
        <Navigation />
        <main>
          <div className="container mx-auto px-4 py-8">
            <header className="mb-8 text-center">
              <h1 className="mb-2 text-3xl font-bold text-foreground md:text-4xl">
                Project Zero
              </h1>
              <p className="text-muted-foreground">
                Коллекция цифрового искусства
              </p>
            </header>
          </div>
          <GalleryGrid />
        </main>
      </div>
    </Providers>
  )
}
