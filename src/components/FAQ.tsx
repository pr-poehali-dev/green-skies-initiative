import { useState } from "react"
import { Plus } from "lucide-react"

const faqs = [
  {
    question: "В каких регионах вы работаете?",
    answer:
      "Мы базируемся в России и работаем по всей стране — Сахалинская область, центральные регионы, Дальний Восток. Также выполняем международные проекты: у нас есть опыт монтажа на судах БМРТ и установки оборудования в Республике Корея.",
  },
  {
    question: "Какие объекты вы монтируете?",
    answer:
      "Мы специализируемся на монтаже рыбопромышленного оборудования, производственных линий (Сурими и другие), промышленных трубопроводных систем, металлоконструкций и нестандартного оборудования. Также занимаемся реконструкцией действующих объектов.",
  },
  {
    question: "Как быстро вы можете приступить к работе?",
    answer:
      "После согласования технического задания и договора мы готовы выехать на объект в кратчайшие сроки. Мы ценим время клиента и гордимся соблюдением сроков — это одна из главных причин, почему нам доверяют крупные предприятия.",
  },
  {
    question: "Вы работаете только с рыбной промышленностью?",
    answer:
      "Нет, наша экспертиза шире. Рыбопромышленные объекты — наша специализация, но мы также выполняем монтаж и сварку для других промышленных отраслей. Обратитесь к нам — обсудим ваш проект.",
  },
  {
    question: "Есть ли у вас вакансии?",
    answer:
      "Да! Мы всегда рады опытным сварщикам, монтажникам и специалистам по промышленному оборудованию. Если вы профессионал своего дела и разделяете наши ценности — качество и аккуратность — свяжитесь с нами.",
  },
  {
    question: "Как получить коммерческое предложение?",
    answer:
      "Свяжитесь с нами по телефону, Telegram, мессенджеру Max или через форму на сайте. Опишите задачу — мы оперативно подготовим индивидуальное коммерческое предложение. Первичная консультация бесплатна.",
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-20 md:py-29">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-3xl mb-16">
          <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase mb-6">Вопросы и вакансии</p>
          <h2 className="text-6xl font-medium leading-[1.15] tracking-tight mb-6 text-balance lg:text-7xl">
            Частые вопросы
          </h2>
        </div>

        <div>
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-border">
              <button
                onClick={() => toggleQuestion(index)}
                className="w-full py-6 flex items-start justify-between gap-6 text-left group"
              >
                <span className="text-lg font-medium text-foreground transition-colors group-hover:text-foreground/70">
                  {faq.question}
                </span>
                <Plus
                  className={`w-6 h-6 text-foreground flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? "rotate-45" : "rotate-0"
                  }`}
                  strokeWidth={1.5}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-muted-foreground leading-relaxed pb-6 pr-12">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
