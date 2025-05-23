import { useState } from "react";
import NavLink from "./components/ui/Navlink";
import SpotlightBackground from "./components/ui/SpotlightBackground";
import { SvgGithub } from "./components/ui/SvgGithub";
import { SvgLinkedin } from "./components/ui/SvgLinkedin";
import { SvgInstagram } from "./components/ui/SvgInstagram";
import { SvgRightArrow } from "./components/ui/SvgRightArrow";
import SectionHeader from "./sections/SectionHeader";
import { ProjectCard } from "./sections/projetos/components/ProjectCard";

export default function Portfolio() {
  const [activeLink, setActiveLink] = useState("#sobre");
  return (
    <div className="group/spotlight relative">
      <SpotlightBackground />
      <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 md:py-16 lg:py-0 font-poppins">
        <div className="lg:flex lg:justify-between lg:gap-4">
          <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-[48%] lg:flex-col lg:justify-between lg:py-24" >
            <div>
              <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
                <a href="/">Lucas Guedes</a>
              </h1>
              <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">Software Engineer</h2>
              <nav className="nav hidden lg:block" aria-label="In-page jump links">
                <ul className="mt-16 w-max">
                  <NavLink href="#sobre" label="Sobre" isActive={activeLink === "#sobre"} onClick={setActiveLink} />
                  <NavLink href="#habilidades" label="Habilidades" isActive={activeLink === "#habilidades"} onClick={setActiveLink} />
                  <NavLink href="#projetos" label="Projetos" isActive={activeLink === "#projetos"} onClick={setActiveLink} />
                  <NavLink href="#contato" label="Contato" isActive={activeLink === "#contato"} onClick={setActiveLink} />
                </ul>
              </nav>
            </div>
            <ul className="ml-1 mt-8 flex items-center" aria-label="Social media">
              <li className="mr-5 shrink-0 text-xs">
                <a className="block hover:text-slate-200" href="https://github.com/jlucasguedes" target="_blank" rel="noreferrer noopener" aria-label="GitHub (opens in a new tab)" title="GitHub">
                  <span className="sr-only">GitHub</span>
                  <SvgGithub />
                </a>
              </li>
              <li className="mr-5 shrink-0 text-xs">
                <a className="block hover:text-slate-200" href="https://www.linkedin.com/in/joaolucasguedes/" target="_blank" rel="noreferrer noopener" aria-label="LinkedIn (opens in a new tab)" title="LinkedIn">
                  <span className="sr-only">LinkedIn</span>
                  <SvgLinkedin />
                </a>
              </li>
              <li className="mr-5 shrink-0 text-xs">
                <a className="block hover:text-slate-200" href="https://instagram.com/jlucasguedes" target="_blank" rel="noreferrer noopener" aria-label="Instagram (opens in a new tab)" title="Instagram">
                  <span className="sr-only">Instagram</span>
                  <SvgInstagram />
                </a>
              </li>
            </ul>
          </header>
          <main className="pt-24 lg:w-[52%] lg:py-24">
            {/* Sobre mim */}
            <section id="sobre" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
              <SectionHeader title="Sobre mim" />
              <p className="font-inter">
                Desenvolvedor Full Stack em busca da primeira oportunidade profissional na área de desenvolvimento de software, onde possa aplicar e expandir meus conhecimentos. Tenho experiência prática por meio de projetos pessoais voltados à gestão administrativa no setor público educacional, utilizando tecnologias como Java, Spring Boot, JSF, PostgreSQL, ReactJS, TypeScript e Tailwind CSS. Estou sempre disposto a aprender e contribuir com soluções eficientes para os desafios do time.
              </p>
            </section>

            {/* Habilidades */}
            <section id="habilidades" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
              <SectionHeader title="Habilidades" />
              <ul className="mt-2 flex flex-wrap">
                <li className="mr-1.5 mt-2">
                  <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                    Java
                  </div>
                </li>
                <li className="mr-1.5 mt-2">
                  <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                    Spring
                  </div>
                </li>
                <li className="mr-1.5 mt-2">
                  <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                    JasperReport
                  </div>
                </li>
                <li className="mr-1.5 mt-2">
                  <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                    React
                  </div>
                </li>
                <li className="mr-1.5 mt-2">
                  <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                    Tailwindcss
                  </div>
                </li>
                <li className="mr-1.5 mt-2">
                  <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                    HTML
                  </div>
                </li>
                <li className="mr-1.5 mt-2">
                  <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                    Dart
                  </div>
                </li>
                <li className="mr-1.5 mt-2">
                  <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                    Flutter
                  </div>
                </li>
                <li className="mr-1.5 mt-2">
                  <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                    PostgreSQL
                  </div>
                </li>
                <li className="mr-1.5 mt-2">
                  <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                    Spring Framework
                  </div>
                </li>
              </ul>
            </section>

            {/* Projetos */}
            <section id="projetos" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
              <SectionHeader title="Projetos" />
              <div>
                <ul className="group/list">
                  <li className="mb-12">
                    <ProjectCard
                      href="#"
                      title="SGCMEI"
                      description="Aplicação web para controle de autorizados a buscar as crianças na unidade escolar, informações das crianças matrículadas e servidores, e geração de relatórios."
                      imageAlt="SGCMEI"
                      imageUrl="https://escolaweb.com.br/wp-content/uploads/2024/03/topo-blogo_Prancheta-1.png" />
                  </li>
                </ul>
                <div className="mt-12">
                  <a href="" className="inline-flex items-center leading-tight font-medium text-slate-200 group">
                    <span className="border-b border-transparent pb-px transition group-hover:border-teal-300 motion-reduce:transition-none">Todos os projetos</span>
                    <SvgRightArrow />
                  </a>
                </div>
              </div>
            </section>
            {/*absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg*/}

            {/* Contato */}
            <section id="contato" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
              <SectionHeader title="Contato" />
              <p>
                Me envie um e-mail para <a className="text-blue-600 underline" href="mailto:seu@email.com">contato@jlucasguedes.com</a>
                &nbsp;ou entre em contato pelas redes sociais acima.
              </p>
            </section>

            <footer className="max-w-md pb-16 text-sm text-slate-500 sm:pb-0">
            </footer>
          </main>
        </div>
      </div >
    </div >
  );
}
