import { TypedText } from "@/components/typed-text";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { translations } from "@/lib/translations";
import { FadeIn } from "@/components/animations/fade-in";
import { StaggerContainer } from "@/components/animations/stager-container";
import { StaggerItem } from "@/components/animations/stagger-item";
import { ScaleIn } from "@/components/animations/scale-in";
import { PageTransition } from "@/components/animations/page-transition";
import Author from "@/assets/adnen.webp";
import { useLanguage } from "@/contexts/LanguageContext";
import { socialLinks } from "@/lib/socialLinks";
import TestimonialsSlider from "@/components/testimonials";
import InfiniteTechScroll from "@/components/ui/InfiniteTechScroll";

export default function Home() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <PageTransition>
      <div className="flex items-center justify-center ">
        <div className="container px-4 py-16 mx-auto text-center">
          <div className="relative max-w-5xl mx-auto space-y-2">
            <div className="z-10 mx-auto h-72 md:max-w-2xl   text-center border  rounded-2xl p-6  backdrop-blur-xs bg-gradient-to-br from-white/500  to-white/10 shadow-xl ">
              <h1 className="mt-10 md:text-3xl  text-2xl">{t.home.question}</h1>
              <StaggerContainer className="space-y-4 z-20">
                <StaggerItem>
                  <div className=" mt-3 text-xl md:text-2xl min-h-[3rem] ">
                    <TypedText strings={t.home.roles} typeSpeed={50} backSpeed={30} loop />
                  </div>
                </StaggerItem>
              </StaggerContainer>
            </div>
            <div className="z-30 mt-15 w-[90%] max-w-4xl mx-auto md:max-w-xl  transform  border   text-center  md:-translate-y-24 -translate-y-16  p-15 overflow-hidden backdrop-blur-xs bg-gradient-to-br  from-white/500  to-white/10 border-white/5 rounded-2xl shadow-xl">
              {/* Developer Avatar */}
              <ScaleIn delay={0.2}>
                <div className="relative w-32 h-32 md:w-40 md:h-40 mx-auto mb-8">
                  <div className="relative w-full h-full">
                    <img
                      src={Author}
                      alt="Adnen  - Techlead / Js Consultant"
                      width={160}
                      height={160}
                      className="rounded-full object-cover shadow-2xl ring-4 ring-primary/20   "
                      loading="lazy"
                    />
                    {/* Decorative ring animation */}
                    <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary/20 to-transparent animate-pulse"></div>
                    {/* Status indicator */}
                    <div className="absolute bottom-2 right-2 w-6 h-6 bg-green-500 rounded-full border-4 border-background shadow-lg">
                      <div className="w-full h-full bg-green-400 rounded-full animate-ping opacity-75"></div>
                    </div>
                  </div>
                </div>
              </ScaleIn>

              <StaggerContainer className="space-y-4 z-20 ">
                <StaggerItem>
                  <h1 className="text-2xl md:text-3xl font-extralight tracking-tight my-5 ">
                    {t.home.greeting} <span className="">{t.home.name}</span>
                  </h1>
                </StaggerItem>
              </StaggerContainer>
              <FadeIn delay={0.4}>
                <p className="md:text-lg  max-w-2xl mx-auto leading-relaxed font-extralight">{t.home.description}</p>
              </FadeIn>
              <FadeIn delay={0.6} direction="up">
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <Button
                    asChild
                    size="lg"
                    className=" text-white group  focus:scale-95 transition-transform duration-200 mt-10 rounded-md bg-indigo-600 hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-background"
                  >
                    <Link to={`/contact`}>
                      {t.home.getInTouch} <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </div>
              </FadeIn>
            </div>
            <ScaleIn delay={0.8}>
              <InfiniteTechScroll />
            </ScaleIn>
            <ScaleIn delay={0.8}>
              <TestimonialsSlider />
            </ScaleIn>
            <ScaleIn delay={0.8}>
              <div className="flex justify-center space-x-6 pt-8">
                {socialLinks.map((social) => (
                  <Button variant="ghost" size="icon" asChild key={social.label}>
                    <a href={social.href} target="_blank" rel="noopener noreferrer">
                      <social.icon className="h-5 w-5" />
                      <span className="sr-only">{social.label}</span>
                    </a>
                  </Button>
                ))}
              </div>
            </ScaleIn>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
