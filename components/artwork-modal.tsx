"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { X } from "lucide-react"
import type { Artwork } from "@/components/gallery-grid"
import { CommentSection } from "@/components/comment-section"

type ArtworkModalProps = {
  artwork: Artwork | null
  onClose: () => void
}

export function ArtworkModal({ artwork, onClose }: ArtworkModalProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (artwork) {
      setIsVisible(true)
      document.body.style.overflow = "hidden"
    } else {
      setIsVisible(false)
      document.body.style.overflow = "unset"
    }

    return () => {
      document.body.style.overflow = "unset"
    }
  }, [artwork])

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose()
      }
    }

    if (artwork) {
      window.addEventListener("keydown", handleEscape)
    }

    return () => {
      window.removeEventListener("keydown", handleEscape)
    }
  }, [artwork, onClose])

  if (!artwork) return null

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm transition-opacity duration-300 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      onClick={onClose}
    >
      <div
        className={`relative flex h-[90vh] w-full max-w-6xl flex-col overflow-hidden rounded-xl border border-border bg-card shadow-2xl transition-transform duration-300 md:flex-row ${
          isVisible ? "scale-100" : "scale-95"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute right-3 top-3 z-10 rounded-full border border-border bg-background/80 p-2 text-foreground backdrop-blur-sm transition-colors hover:bg-primary hover:text-primary-foreground"
          aria-label="Закрыть"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Image Section */}
        <div className="relative h-[40vh] w-full flex-shrink-0 md:h-full md:w-1/2 lg:w-3/5">
          <Image
            src={artwork.imageUrl}
            alt={artwork.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 60vw"
            priority
          />
        </div>

        {/* Info Section */}
        <div className="flex h-[50vh] w-full flex-col md:h-full md:w-1/2 lg:w-2/5">
          <div className="border-b border-border p-4 md:p-6">
            <h2 className="text-xl font-bold text-foreground md:text-2xl">
              {artwork.title}
            </h2>
          </div>

          <CommentSection artworkId={artwork.id} />
        </div>
      </div>
    </div>
  )
}
