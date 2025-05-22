import { useState } from "react";
import NavLink from "./components/ui/Navlink";
import SpotlightBackground from "./components/ui/SpotlightBackground";
import { SvgGithub } from "./components/ui/SvgGithub";
import { SvgLinkedin } from "./components/ui/SvgLinkedin";
import { SvgInstagram } from "./components/ui/SvgInstagram";
import { SvgRightDiagonalArrow } from "./components/ui/SvgRightDiagonalArrow";
import { SvgStar } from "./components/ui/SvgStar";
import { SvgRightArrow } from "./components/ui/SvgRightArrow";

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
              <li className="mr-5 shrink-0 text-xs"><a className="block hover:text-slate-200" href="https://instagram.com/jlucasguedes" target="_blank" rel="noreferrer noopener" aria-label="Instagram (opens in a new tab)" title="Instagram">
                <span className="sr-only">Instagram</span>
                <SvgInstagram />
              </a>
              </li>
            </ul>
          </header>
          <main className="pt-24 lg:w-[52%] lg:py-24">
            {/* Sobre mim */}
            <section id="sobre" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
              <p className="font-inter">
                Sou Desenvolvedor Full Stack com experiência prática em projetos pessoais focados na gestão administrativa do setor público educacional. Ao longo desses projetos, desenvolvi soluções utilizando tecnologias como Java, Spring Boot, JSF, PostgreSQL, ReactJS, TypeScript e Tailwind CSS. Tenho facilidade em aprender novas ferramentas e frameworks, além de um forte compromisso com a qualidade e eficiência do código. Estou em busca da minha primeira oportunidade profissional na área de desenvolvimento de software, onde possa contribuir ativamente e seguir evoluindo como desenvolvedor.
              </p>
            </section>

            {/* Habilidades */}
            <section id="habilidades" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
              <h2 className="text-2xl font-semibold">Habilidades</h2>
              <ul className="list-disc list-inside">
                <li>HTML, CSS, JavaScript</li>
                <li>ReactJS, TailwindCSS</li>
                <li>Node.js, Express</li>
                <li>Git, GitHub</li>
                <li>Figma, UX/UI básico</li>
              </ul>
            </section>

            {/* Projetos */}
            <section id="projetos" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
              <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-2xl font-semiboldtext-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">Projetos</h2>
              </div>
              <div>
                <ul className="group/list">
                  <li className="mb-12">
                    <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                      <div className="absolute -inset-x-4 -inset-y-4 z-0 rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                      <div className="z-10 sm:order-2 sm:col-span-6">
                        <h3>
                          <a href="" className="inline-flex items-baseline font-medium leading-tight  text-slate-200  hover:text-teal-300 group/link text-base">
                            <span className="absolute -inset-x-4 inset-y-2.5 md:-inset-x-6 md:-inset-y-4 lg:block hidden"></span>
                            <span>
                              Build a Spotify Connected
                              <span className="inline-block">
                                &nbsp;App
                                <SvgRightDiagonalArrow />
                              </span>
                            </span>
                          </a>
                        </h3>
                        <p className="mt-2 text-sm leading-normal">Video course that teaches how to build a web app with the Spotify Web API. Topics covered include the principles of REST APIs, user auth flows, Node, Express, React, Styled Components, and more.</p>
                      </div>
                      <img className="aspect-video object-cover rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-x-1" src="https://files.tecnoblog.net/wp-content/uploads/2021/04/alexander-shatov-JlO3-oY5ZlQ-unsplash-scaled-e1618436154448.jpg" alt="" width={200} height={48} />
                    </div>
                  </li>
                  <li className="mb-12">
                    <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                      <div className="absolute -inset-x-4 -inset-y-4 z-0 rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                      <div className="z-10 sm:order-2 sm:col-span-6">
                        <h3>
                          <a href="" className="inline-flex items-baseline font-medium leading-tight  text-slate-200  hover:text-teal-300 group/link text-base">
                            <span className="absolute -inset-x-4 inset-y-2.5 md:-inset-x-6 md:-inset-y-4 lg:block hidden"></span>
                            <span>
                              Build a Spotify Connected
                              <span className="inline-block">
                                &nbsp;App
                                <SvgRightDiagonalArrow />
                              </span>
                            </span>
                          </a>
                        </h3>
                        <p className="mt-2 text-sm leading-normal">Video course that teaches how to build a web app with the Spotify Web API. Topics covered include the principles of REST APIs, user auth flows, Node, Express, React, Styled Components, and more.</p>
                        <a href="#" className="relative mt-2 inline-flex items-center text-sm text-slate-300 hover:text-teal-300 focus-visible:text-teal-300" >
                          <SvgStar />
                          <span>500</span>
                        </a>
                        <ul className="mt-2 flex flex-wrap" aria-label="Tecnologias usadas:">
                          <li className="mr-1.5 mt-2">
                            <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">React</div>
                          </li>
                          <li className="mr-1.5 mt-2">
                            <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">React</div>
                          </li>
                          <li className="mr-1.5 mt-2">
                            <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">React</div>
                          </li>
                          <li className="mr-1.5 mt-2">
                            <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">React</div>
                          </li>
                          <li className="mr-1.5 mt-2">
                            <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">React</div>
                          </li>
                          <li className="mr-1.5 mt-2">
                            <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">React</div>
                          </li>
                        </ul>
                      </div>
                      <img className="aspect-video object-cover rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-x-1" src="https://files.tecnoblog.net/wp-content/uploads/2021/04/alexander-shatov-JlO3-oY5ZlQ-unsplash-scaled-e1618436154448.jpg" alt="" width={200} height={48} />
                    </div>
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
            <section id="contato" className="space-y-4">
              <h2 className="text-2xl font-semibold">Contato</h2>
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
