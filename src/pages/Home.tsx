import { TypedText } from "@/components/typed-text";
import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import { translations } from "@/lib/translations";
import { FadeIn } from "@/components/animations/fade-in";
import { StaggerContainer } from "@/components/animations/stager-container";
import { StaggerItem } from "@/components/animations/stagger-item";
import { ScaleIn } from "@/components/animations/scale-in";
import { PageTransition } from "@/components/animations/page-transition";
import Author from "@/assets/adnen.webp";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Home() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <PageTransition>
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-muted/20">
        <div className="container px-4 py-16 mx-auto text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            {/* Developer Avatar */}
            <ScaleIn delay={0.2}>
              <div className="relative w-32 h-32 md:w-40 md:h-40 mx-auto mb-8">
                <div className="relative w-full h-full">
                  <img
                    src={Author}
                    alt="Adnen  - Frontend Developer"
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

            <StaggerContainer className="space-y-4">
              <StaggerItem>
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                  {t.home.greeting}{" "}
                  <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                    {t.home.name}
                  </span>
                </h1>
              </StaggerItem>

              <StaggerItem>
                <div className="text-xl md:text-2xl text-muted-foreground min-h-[2rem]">
                  <TypedText
                    strings={t.home.roles}
                    typeSpeed={50}
                    backSpeed={30}
                    loop
                  />
                </div>
              </StaggerItem>
            </StaggerContainer>

            <FadeIn delay={0.4}>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                {t.home.description}
              </p>
            </FadeIn>

            <FadeIn delay={0.6} direction="up">
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button
                  asChild
                  size="lg"
                  className="group hover:scale-105 focus:scale-95 transition-transform duration-200"
                >
                  {/* <Link to={`/${language}/projects`}>
                    {t.home.viewWork}
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link> */}
                </Button>
                <Button
                  asChild
                  size="lg"
                  className="group hover:scale-105 focus:scale-95 transition-transform duration-200"
                >
                  <Link to={`/contact`}>
                    {t.home.getInTouch}{" "}
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </div>
            </FadeIn>

            <ScaleIn delay={0.8}>
              <div className="flex justify-center space-x-6 pt-8">
                <Button variant="ghost" size="icon" asChild>
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="h-5 w-5" />
                    <span className="sr-only">GitHub</span>
                  </a>
                </Button>
                <Button variant="ghost" size="icon" asChild>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin className="h-5 w-5" />
                    <span className="sr-only">LinkedIn</span>
                  </a>
                </Button>
                <Button variant="ghost" size="icon" asChild>
                  <a href="mailto:john@example.com">
                    <Mail className="h-5 w-5" />
                    <span className="sr-only">Email</span>
                  </a>
                </Button>
              </div>
            </ScaleIn>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
