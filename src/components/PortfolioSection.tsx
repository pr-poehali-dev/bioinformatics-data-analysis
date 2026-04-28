import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronLeft, ChevronRight } from "lucide-react"

const corporatePhotos = [
  "https://cdn.poehali.dev/projects/fca0aa65-00cb-4128-88fc-787ad09d2aa5/bucket/2e385f86-b07f-47ad-807d-7294953dd8fb.jpg",
  "https://cdn.poehali.dev/projects/fca0aa65-00cb-4128-88fc-787ad09d2aa5/bucket/c74c6904-9540-44bf-a24f-12da7c1dbabe.jpg",
  "https://cdn.poehali.dev/projects/fca0aa65-00cb-4128-88fc-787ad09d2aa5/bucket/ed4b14eb-49b6-421d-9aab-48b8b51ba01b.jpg",
  "https://cdn.poehali.dev/projects/fca0aa65-00cb-4128-88fc-787ad09d2aa5/bucket/73b0efef-38a3-4537-b7ab-3865ec48513f.jpg",
  "https://cdn.poehali.dev/projects/fca0aa65-00cb-4128-88fc-787ad09d2aa5/bucket/71fe91b3-fce8-4ec8-80bc-2aebe3e1dd38.jpg",
]

const beседkaPhotos = [
  "https://cdn.poehali.dev/projects/fca0aa65-00cb-4128-88fc-787ad09d2aa5/bucket/ae4a90fe-28c2-4f05-9952-461319a20ba8.jpg",
  "https://cdn.poehali.dev/projects/fca0aa65-00cb-4128-88fc-787ad09d2aa5/bucket/829a9b1a-019b-4003-a2a0-fa3f7d09b152.jpg",
  "https://cdn.poehali.dev/projects/fca0aa65-00cb-4128-88fc-787ad09d2aa5/bucket/ed309b56-2f71-4b05-8c8c-458e5e3aeec9.jpg",
  "https://cdn.poehali.dev/projects/fca0aa65-00cb-4128-88fc-787ad09d2aa5/bucket/b06eaf8c-6d83-418a-8e4b-c2070547fe76.jpg",
]

const projects = [
  {
    title: "Проводник",
    category: "Иммерсивный спектакль",
    emoji: "🌌",
    photos: null,
    description:
      "Чуткий, чувственный опыт: гости проживали вечер через все органы чувств. Легенда о Проводнике, который искал Избранных, чтобы спасти мир чувства. Каждый стал частью истории.",
    tags: ["Иммерсив", "Все органы чувств", "Спектакль"],
  },
  {
    title: "Совет дома 2026",
    category: "Корпоративное новогоднее шоу",
    emoji: "🏠",
    photos: corporatePhotos,
    description:
      "Ностальгичный, яркий праздничный ужин, где гости стали настоящими соседями, объединёнными одной миссией и теплотой воспоминаний. Атмосфера советского дома, живые персонажи и общий стол.",
    tags: ["Корпоратив", "Новый год", "Ностальгия"],
  },
  {
    title: "Летняя беседка",
    category: "Театрализованный юбилей",
    emoji: "🌿",
    photos: beседkaPhotos,
    description:
      "Все гости оказались в летней беседке, где происходила магия истории именинницы. Камерный, уютный и яркий вечер — о жизни, любви и самом главном.",
    tags: ["Юбилей", "Камерный", "Уют"],
  },
]

function PhotoGallery({ photos }: { photos: string[] }) {
  const [current, setCurrent] = useState(0)

  const prev = (e: React.MouseEvent) => {
    e.stopPropagation()
    setCurrent((c) => (c - 1 + photos.length) % photos.length)
  }
  const next = (e: React.MouseEvent) => {
    e.stopPropagation()
    setCurrent((c) => (c + 1) % photos.length)
  }

  return (
    <div className="relative overflow-hidden aspect-video bg-black group/gallery">
      <img
        src={photos[current]}
        alt=""
        className="w-full h-full object-cover transition-opacity duration-500"
      />
      <button
        onClick={prev}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/80 text-white rounded-full p-1.5 opacity-0 group-hover/gallery:opacity-100 transition-opacity"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        onClick={next}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/80 text-white rounded-full p-1.5 opacity-0 group-hover/gallery:opacity-100 transition-opacity"
      >
        <ChevronRight className="h-5 w-5" />
      </button>
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5">
        {photos.map((_, i) => (
          <button
            key={i}
            onClick={(e) => { e.stopPropagation(); setCurrent(i) }}
            className={`w-1.5 h-1.5 rounded-full transition-all ${i === current ? "bg-white scale-125" : "bg-white/50"}`}
          />
        ))}
      </div>
    </div>
  )
}

export function PortfolioSection() {
  return (
    <section id="portfolio" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-balance">Наши проекты</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
            Каждое событие — уникальная история. Посмотрите, как мы превращаем идеи клиентов в незабываемые театральные переживания.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group overflow-hidden border-none shadow-md hover:shadow-xl transition-all duration-300"
            >
              {project.photos ? (
                <PhotoGallery photos={project.photos} />
              ) : (
                <div className="relative overflow-hidden aspect-video bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                  <span className="text-7xl">{project.emoji}</span>
                </div>
              )}
              <CardContent className="p-6">
                <p className="text-sm text-primary font-semibold mb-2">{project.category}</p>
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="text-xs px-2 py-1 rounded-full bg-muted text-muted-foreground">
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}