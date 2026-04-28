import { Card, CardContent } from "@/components/ui/card"

const projects = [
  {
    title: "Проводник",
    category: "Иммерсивный спектакль",
    emoji: "🌌",
    description:
      "Чуткий, чувственный опыт: гости проживали вечер через все органы чувств. Легенда о Проводнике, который искал Избранных, чтобы спасти мир чувства. Каждый стал частью истории.",
    tags: ["Иммерсив", "Все органы чувств", "Спектакль"],
  },
  {
    title: "Совет дома 2026",
    category: "Корпоративное новогоднее шоу",
    emoji: "🏠",
    description:
      "Ностальгичный, яркий праздничный ужин, где гости стали настоящими соседями, объединёнными одной миссией и теплотой воспоминаний. Атмосфера советского дома, живые персонажи и общий стол.",
    tags: ["Корпоратив", "Новый год", "Ностальгия"],
  },
  {
    title: "Летняя беседка",
    category: "Театрализованный юбилей",
    emoji: "🌿",
    description:
      "Все гости оказались в летней беседке, где происходила магия истории именинницы. Камерный, уютный и яркий вечер — о жизни, любви и самом главном.",
    tags: ["Юбилей", "Камерный", "Уют"],
  },
]

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
              <div className="relative overflow-hidden aspect-video bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                <span className="text-7xl">{project.emoji}</span>
              </div>
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