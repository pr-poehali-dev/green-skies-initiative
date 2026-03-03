import { ArrowRight } from "lucide-react"
import { HighlightedText } from "./HighlightedText"

export function CallToAction() {
  return (
    <section id="contact" className="py-32 md:py-29 bg-foreground text-primary-foreground">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-primary-foreground/60 text-sm tracking-[0.3em] uppercase mb-8">Начать сотрудничество</p>

          <h2 className="text-3xl md:text-4xl lg:text-6xl font-medium leading-[1.1] tracking-tight mb-8 text-balance">
            Готовы возвести
            <br />
            ваш промышленный <HighlightedText>гигант</HighlightedText>?
          </h2>

          <p className="text-primary-foreground/70 text-lg md:text-xl leading-relaxed mb-12 max-w-2xl mx-auto">
            Обсудим ваш проект — монтаж, реконструкцию или обслуживание. Работаем по всей России и за рубежом. Каждый проект — это наша гордость.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a
              href="mailto:info@estetprom.ru"
              className="inline-flex items-center justify-center gap-3 bg-primary-foreground text-foreground px-8 py-4 text-sm tracking-wide hover:bg-primary-foreground/90 transition-colors duration-300 group"
            >
              Написать нам
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="tel:+79000000000"
              className="inline-flex items-center justify-center gap-2 border border-primary-foreground/30 px-8 py-4 text-sm tracking-wide hover:bg-primary-foreground/10 transition-colors duration-300"
            >
              Позвонить
            </a>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-sm text-primary-foreground/60">
            <a href="https://t.me/" className="hover:text-primary-foreground transition-colors">
              Telegram
            </a>
            <a href="#" className="hover:text-primary-foreground transition-colors">
              Мессенджер Max
            </a>
            <a href="mailto:info@estetprom.ru" className="hover:text-primary-foreground transition-colors">
              info@estetprom.ru
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
