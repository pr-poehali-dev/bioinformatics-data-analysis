import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Icon from "@/components/ui/icon"

const services = [
  {
    icon: "Drama",
    title: "Театральные корпоративы",
    description:
      "Превращаем корпоративное мероприятие в настоящий спектакль. Ваши коллеги станут актёрами, а офис — сценой. Создаём уникальную атмосферу, которая сближает команду и остаётся в памяти надолго.",
  },
  {
    icon: "PartyPopper",
    title: "Событийные праздники",
    description:
      "Дни рождения, юбилеи, свадьбы — каждое торжество с нами превращается в захватывающую историю. Разрабатываем авторский сценарий, подбираем актёров и создаём атмосферу, соответствующую вашему настроению.",
  },
  {
    icon: "Presentation",
    title: "Театральные презентации",
    description:
      "Скучные слайды в прошлом. Мы превращаем презентацию продукта или бренда в живое театральное действо, которое захватывает аудиторию и оставляет яркое впечатление о вашей компании.",
  },
  {
    icon: "Users",
    title: "Тимбилдинги",
    description:
      "Иммерсивные сценарии, где участники совместно решают задачи в роли персонажей. Театральный тимбилдинг — лучший способ раскрыть потенциал команды в нестандартной обстановке.",
  },
  {
    icon: "Sparkles",
    title: "Иммерсивные шоу",
    description:
      "Интерактивные спектакли, где зрители становятся участниками. Идеально для частных вечеринок, закрытых клубных событий и нестандартных форматов развлечений.",
  },
  {
    icon: "Star",
    title: "Продакшн под ключ",
    description:
      "Полный цикл: концепция, сценарий, кастинг, декорации, свет и звук. Берём на себя всю организацию, чтобы вы могли просто наслаждаться результатом.",
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5 animate-pulse" />

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="inline-block mb-4 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mx-auto block w-fit">
          Наша экспертиза
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4 text-balance">
          В чем мы <span className="text-primary">сильны</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto text-pretty leading-relaxed text-lg">
          От камерного торжества до масштабного шоу — мы трансформируем любое событие в незабываемое театральное переживание.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:border-primary transition-all duration-300 hover:shadow-xl hover:-translate-y-2 bg-background/50 backdrop-blur-sm"
            >
              <CardHeader>
                <div className="mb-4 inline-flex p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                  <Icon name={service.icon} className="h-6 w-6" />
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
