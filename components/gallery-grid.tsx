"use client"

import { useState } from "react"
import Image from "next/image"
import { useMobileView } from "@/hooks/use-mobile-view"
import { ArtworkModal } from "@/components/artwork-modal"

export type Artwork = {
  id: string
  title: string
  imageUrl: string
  isLarge?: boolean
}

const artworks: Artwork[] = [
  {
    id: "1",
    title: "Космический странник",
    imageUrl: "https://cdna.artstation.com/p/assets/images/images/073/169/340/large/chris-falkenberg-planetarysurvey-swirlycave-02122024-01-cf.jpg?1709060541",
    isLarge: true,
  },
  {
    id: "2",
    title: "Киберпанк город",
    imageUrl: "https://cdna.artstation.com/p/assets/images/images/005/460/804/large/daniel-liang-2017-3-29-13.jpg?1491206968",
  },
  {
    id: "3",
    title: "Древний храм",
    imageUrl: "https://cdna.artstation.com/p/assets/images/images/039/239/110/large/pablo-dominguez-reedkeep1.jpg?1625337022",
  },
  {
    id: "4",
    title: "Мрачный лес",
    imageUrl: "https://cdna.artstation.com/p/assets/images/images/026/396/042/large/muhammed-ali-acar-someone-is-coming.jpg?1588675743",
  },
  {
    id: "5",
    title: "Подводный мир",
    imageUrl: "https://cdnb.artstation.com/p/assets/images/images/040/540/183/large/namit-kapoor-shrine-underwater-namit.jpg?1629169176",
  },
  {
    id: "6",
    title: "Цифровой портрет",
    imageUrl: "https://cdnb.artstation.com/p/assets/images/images/065/351/433/large/alexis-franklin-isaac.jpg?1690169604",
    isLarge: true,
  },
  {
    id: "7",
    title: "Закат над горами",
    imageUrl: "https://cdnb.artstation.com/p/assets/images/images/021/768/677/large/hanumant-singh-f1.jpg?1572887478",
  },
  {
    id: "8",
    title: "Абстрактная волна",
    imageUrl: "https://cdnb.artstation.com/p/assets/images/images/070/466/723/large/nathalia-ibanez-asian-waves-2d.jpg?1702583629",
  },
  {
    id: "9",
    title: "Неоновые огни",
    imageUrl: "https://cdnb.artstation.com/p/assets/images/images/097/172/735/large/garima-awasthi-highresscreenshot00008.jpg?1773382530",
  },
  {
    id: "10",
    title: "Звёздная ночь",
    imageUrl: "https://cdna.artstation.com/p/assets/images/images/063/925/562/large/ponomar-end-image-render-min2.jpg?1686690700",
  },
  {
    id: "11",
    title: "Футуристический интерьер",
    imageUrl: "https://cdna.artstation.com/p/assets/images/images/095/649/158/large/evangelia-bakasi-highresscreenshot00067-recovered.webp?1769114099",
    isLarge: true,
  },
  {
    id: "12",
    title: "Океанский бриз",
    imageUrl: "https://cdna.artstation.com/p/assets/images/images/081/331/850/large/igor-artyomenko-pirate-sb-copy.jpg?1729974461",
  },
  {
    id: "13",
    title: "Механическое сердце",
    imageUrl: "https://cdna.artstation.com/p/assets/images/images/071/320/406/large/carla-navarro-back-1.jpg?1704922060",
  },
  {
    id: "14",
    title: "Рассвет в пустыне",
    imageUrl: "https://cdnb.artstation.com/p/assets/images/images/089/835/177/large/pasquale-scionti-dusk2.jpg?1752077207",
  },
  {
    id: "15",
    title: "Магический кристалл",
    imageUrl: "https://cdnb.artstation.com/p/assets/images/images/011/056/235/large/louis-philippe-desjardins-beautyshot.jpg?1527628413",
  },
  {
    id: "16",
    title: "Фото горы",
    imageUrl: "https://images.unsplash.com/photo-1599385549907-a8a47fb6e402?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "17",
    title: "Портрет",
    imageUrl: "https://cdnb.artstation.com/p/assets/images/images/027/297/649/large/nina-haftka-03-comp-shot13.jpg?1591133366",
  },
  {
    id: "18",
    title: "Церковь",
    imageUrl: "https://cdnb.artstation.com/p/assets/images/images/027/383/487/large/florian-coudray-church.jpg?1591372085",
  },
  {
    id: "19",
    title: "Лошадь",
    imageUrl: "https://cdna.artstation.com/p/assets/images/images/026/059/836/large/tyler-smith-clydesdale07-02.jpg?1587752436",
  },
  {
    id: "20",
    title: "Старый фасад",
    imageUrl: "https://cdnb.artstation.com/p/assets/images/images/041/240/125/large/wojtek-piwowarczyk-wojtek-piwowarczayk-as-sketch-0004.jpg?1631140879",
  },
  {
    id: "21",
    title: "Лимон",
    imageUrl: "https://i.pinimg.com/1200x/91/f7/ae/91f7aeadd7f567d2f9a8399906eb1954.jpg",
  },
  {
    id: "22",
    title: "Лето",
    imageUrl: "https://i.pinimg.com/736x/5e/6f/3f/5e6f3f3772e08006c2ff589c4a279f14.jpg",
  },
  {
    id: "23",
    title: "Человеческий глаз",
    imageUrl: "https://cdnb.artstation.com/p/assets/images/images/020/030/659/large/tom-newbury-humaneye-g02.jpg?1566057958",
  },

]

export function GalleryGrid() {
  const { isMobileView } = useMobileView()
  const [selectedArtwork, setSelectedArtwork] = useState<Artwork | null>(null)

  return (
    <>
      <div
        className={`mx-auto px-4 py-8 ${isMobileView ? "max-w-sm" : "container"
          }`}
      >
        <div
          className={`grid gap-3 ${isMobileView
            ? "grid-cols-2"
            : "grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5"
            }`}
          style={{
            gridAutoRows: isMobileView ? "150px" : "180px",
          }}
        >
          {artworks.map((artwork) => (
            <div
              key={artwork.id}
              className={`group relative cursor-pointer overflow-hidden rounded-lg border border-border transition-all duration-300 hover:border-primary hover:shadow-lg hover:shadow-primary/20 ${artwork.isLarge && !isMobileView
                ? "col-span-2 row-span-2"
                : ""
                }`}
              onClick={() => setSelectedArtwork(artwork)}
            >
              <Image
                src={artwork.imageUrl}
                alt={artwork.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
                sizes={
                  artwork.isLarge && !isMobileView
                    ? "(max-width: 768px) 100vw, 40vw"
                    : "(max-width: 768px) 50vw, 20vw"
                }
              />
              <div className="absolute inset-0 bg-black/0 transition-all duration-300 group-hover:bg-black/50" />
              <div className="absolute inset-0 flex items-end p-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <h3 className="text-sm font-medium text-white drop-shadow-lg">
                  {artwork.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      <ArtworkModal
        artwork={selectedArtwork}
        onClose={() => setSelectedArtwork(null)}
      />
    </>
  )
}
