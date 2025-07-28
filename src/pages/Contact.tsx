import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { translations } from "@/lib/translations";

import { FadeIn } from "@/components/animations/fade-in";
import { StaggerContainer } from "@/components/animations/stagger-containter";
import { StaggerItem } from "@/components/animations/stagger-item";
import { PageTransition } from "@/components/animations/page-transition";
import { SlideIn } from "@/components/animations/slide-in";
import { useLanguage } from "@/contexts/LanguageContext";
import { socialLinks } from "@/lib/socialLinks";

export default function Contact() {
  const { language } = useLanguage();

  const t = translations[language];

  return (
    <PageTransition>
      <div
        style={{ height: "calc(100vh - 95px" }}
        className="container h-full   my-auto py-16  max-w-6xl mx-auto"
      >
        <FadeIn className="text-center mb-16">
          <Card className="p-12 max-w-2xl mx-auto">
            <CardHeader className="text-center">
              <CardTitle>
                {" "}
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                  {t.contact.title}
                </h1>
              </CardTitle>
              {/* <CardDescription> {t.contact.subtitle}</CardDescription>
              <CardDescription> {t.contact.subtitle_2}</CardDescription> */}
              <CardDescription> {t.contact.subtitle_3}</CardDescription>
            </CardHeader>
          </Card>
        </FadeIn>

        <div className="grid md:grid-cols-1  gap-8  mx-auto">
          <SlideIn direction="down" delay={0.4}>
            <Card>
              <CardHeader className="text-center">
                <CardTitle>{t.contact.social.title}</CardTitle>
                <CardDescription>{t.contact.social.subtitle}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <StaggerContainer
                  className="grid md:grid-cols-4 "
                  staggerDelay={0.1}
                >
                  {socialLinks.map((social) => (
                    <StaggerItem key={social.label}>
                      <a
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center space-x-3 p-3 rounded-lg hover:bg-muted transition-colors"
                      >
                        <social.icon className="w-5 h-5 text-primary" />
                        <div>
                          <div className="font-medium">{social.label}</div>
                          <div className="text-sm text-muted-foreground">
                            {social.username}
                          </div>
                        </div>
                      </a>
                    </StaggerItem>
                  ))}
                </StaggerContainer>
              </CardContent>
            </Card>
          </SlideIn>

          {/* <SlideIn direction="right" delay={0.6}>
            <Card>
              <CardHeader>
                <CardTitle>{t.contact.availability.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <StaggerContainer className="space-y-2" staggerDelay={0.1}>
                  <StaggerItem className="flex items-center justify-between">
                    <span>{t.contact.availability.status}</span>
                    <span className="flex items-center text-green-600">
                      <div className="w-2 h-2 bg-green-600 rounded-full mr-2"></div>
                      {t.contact.availability.available}
                    </span>
                  </StaggerItem>
                  <StaggerItem className="flex items-center justify-between">
                    <span>{t.contact.availability.responseTime}</span>
                    <span className="text-muted-foreground">
                      {t.contact.availability.responseValue}
                    </span>
                  </StaggerItem>
                  <StaggerItem className="flex items-center justify-between">
                    <span>{t.contact.availability.timezone}</span>
                    <span className="text-muted-foreground">
                      {t.contact.availability.timezoneValue}
                    </span>
                  </StaggerItem>
                </StaggerContainer>
              </CardContent>
            </Card>
          </SlideIn> */}
        </div>
      </div>
    </PageTransition>
  );
}
