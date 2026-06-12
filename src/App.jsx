import { useEffect, useMemo, useState } from "react";
import { About } from "./components/About";
import { CaseStudies } from "./components/CaseStudies";
import { ContactCTA } from "./components/ContactCTA";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Metrics } from "./components/Metrics";
import { Services } from "./components/Services";
import { TechStack } from "./components/TechStack";
import { languages, portfolio } from "./data/portfolio";

export default function App() {
  const [language, setLanguage] = useState(() => {
    const savedLanguage = localStorage.getItem("portfolio-language");
    return savedLanguage && portfolio[savedLanguage] ? savedLanguage : "pt";
  });
  const content = useMemo(() => portfolio[language], [language]);

  useEffect(() => {
    document.documentElement.lang = languages[language].locale;
    document.title = content.metaTitle;
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute("content", content.metaDescription);
    localStorage.setItem("portfolio-language", language);
  }, [content, language]);

  return (
    <>
      <Header
        content={content}
        language={language}
        languages={languages}
        onLanguageChange={setLanguage}
      />
      <main>
        <Hero content={content} />
        <Metrics content={content} />
        <About content={content} />
        <CaseStudies content={content} />
        <Services content={content} />
        <TechStack content={content} />
        <ContactCTA content={content} />
      </main>
      <Footer content={content} />
    </>
  );
}
