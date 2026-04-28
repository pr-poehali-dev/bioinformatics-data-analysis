import { Card, CardContent } from "@/components/ui/card"

const projects = [
  {
    title: "Корпоратив для IT-компании",
    category: "Театральный корпоратив",
    image: "/placeholder.jpg",
    description:
      "Детективный спектакль на 200 человек: сотрудники разгадывали тайну внутри компании. Актёры были вписаны в роль «новых коллег». Уровень вовлечённости — 100%.",
    tags: ["Детектив", "Иммерсив", "200 гостей"],
  },
  {
    title: "Юбилей бренда — 10 лет",
    category: "Событийное шоу",
    image: "/placeholder.jpg",
    description:
      "Театральное путешествие сквозь историю компании: каждое десятилетие — отдельная сцена с живыми актёрами, музыкой и видео. Гости аплодировали стоя.",
    tags: ["Юбилей", "Шоу", "Бренд"],
  },
  {
    title: "Свадьба в стиле Венеции",
    category: "Событийный праздник",
    image: "/placeholder.jpg",
    description:
      "Полностью иммерсивная свадьба: гости прилетели в «Венецию» прямо в Москве. Гондольеры, маски, живая опера и театральные персонажи весь вечер.",
    tags: ["Свадьба", "Иммерсив", "Тематика"],
  },
  {
    title: "Презентация нового продукта",
    category: "Театральная презентация",
    image: "/placeholder.jpg",
    description:
      "Запуск нового автомобиля превратился в живой спектакль: история создания машины разыгрывалась на сцене актёрами, пока инженер вёл технический рассказ.",
    tags: ["Презентация", "B2B", "Продакшн"],
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
                <span className="text-7xl">🎭</span>
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
