import { useEffect, useRef, useState } from "react"
import { HighlightedText } from "./HighlightedText"

const philosophyItems = [
  {
    title: "Точность исполнения",
    description:
      "Каждый сварной шов — это наша подпись. Мы работаем только аккуратно и ровно, без компромиссов с качеством, потому что от этого зависит надёжность всего объекта.",
  },
  {
    title: "Промышленная эстетика",
    description:
      "Промышленные объекты могут быть не только прочными, но и красивыми. Мы доказываем это на каждом проекте — от рыбоперерабатывающих заводов до судового оборудования.",
  },
  {
    title: "Скорость без потери качества",
    description:
      "Клиенты выбирают нас за соблюдение сроков. Наши профессионалы умеют работать быстро, не жертвуя качеством — потому что опыт с 2017 года позволяет нам делать это.",
  },
  {
    title: "Индивидуальный подход",
    description:
      "Каждый заказ уникален. Мы глубоко вникаем в задачу клиента и предлагаем оптимальные решения для монтажа, реконструкции или изготовления оборудования любой сложности.",
  },
]

export function Philosophy() {
  const [visibleItems, setVisibleItems] = useState<number[]>([])
  const itemRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number(entry.target.getAttribute("data-index"))
          if (entry.isIntersecting) {
            setVisibleItems((prev) => [...new Set([...prev, index])])
          }
        })
      },
      { threshold: 0.3 },
    )

    itemRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" className="py-32 md:py-29">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase mb-6">Почему именно мы</p>
            <h2 className="text-6xl md:text-6xl font-medium leading-[1.15] tracking-tight mb-6 text-balance lg:text-8xl">
              Работаем с
              <br />
              <HighlightedText>душой</HighlightedText>
            </h2>

            <div className="relative hidden lg:block">
              <img
                src="https://cdn.poehali.dev/projects/ee8083b0-0e34-412d-8b5a-28d3ab21f9b1/files/eb03d038-fac9-4c2e-a3ea-e89fdbb40f63.jpg"
                alt="Монтаж оборудования ЭстетПром"
                className="opacity-90 relative z-10 w-auto rounded-sm"
              />
            </div>
          </div>

          <div className="space-y-6 lg:pt-48">
            <p className="text-muted-foreground text-lg leading-relaxed max-w-md mb-12">
              ЭстетПром — это команда профессионалов в области сварки и монтажа. С 2017 года мы реализуем крупные промышленные проекты в России и за рубежом: рыбопромышленные предприятия Сахалина, монтаж заводов на судах БМРТ в Корее, установка линий Сурими.
            </p>

            {philosophyItems.map((item, index) => (
              <div
                key={item.title}
                ref={(el) => {
                  itemRefs.current[index] = el
                }}
                data-index={index}
                className={`transition-all duration-700 ${
                  visibleItems.includes(index) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="flex gap-6">
                  <span className="text-muted-foreground/50 text-sm font-medium">0{index + 1}</span>
                  <div>
                    <h3 className="text-xl font-medium mb-3">{item.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
