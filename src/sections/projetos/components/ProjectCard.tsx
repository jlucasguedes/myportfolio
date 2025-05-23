import { SvgRightDiagonalArrow } from "@/components/ui/SvgRightDiagonalArrow";
import { SvgStar } from "@/components/ui/SvgStar";

interface ProjectCardProps {
  title: string;
  description: string;
  href: string;
  imageAlt: string;
  imageUrl: string;
}

export const ProjectCard = ({ title, description, imageAlt, imageUrl }: ProjectCardProps) => {
  return (
    <li className="mb-12">
      {/*Projeto 1*/}
      <div className="group relative grid pb-1 gap-4 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
        <div className="absolute -inset-x-4 -inset-y-4 z-0 rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
        <div className="z-10 sm:order-2 sm:col-span-6">
          <h3>
            <a href="" className="inline-flex items-baseline font-medium leading-tight  text-slate-200  hover:text-teal-300 group/link text-base">
              <span className="absolute -inset-x-4 inset-y-2.5 md:-inset-x-6 md:-inset-y-4 lg:block hidden"></span>
              <span className="inline-block">
                {title}
                <SvgRightDiagonalArrow />
              </span>
            </a>
          </h3>
          <p className="mt-2 text-sm leading-normal">
            {description}
          </p>
          <a href="#" aria-label="500 stars on GitHub (opens in a new tab)" className="relative mt-2 inline-flex items-center text-sm font-medium text-slate-300 hover:text-teal-300 focus-visible:text-teal-300" target="_blank">
            <SvgStar />
            <span>500</span>
          </a>
          <ul className="mt-2 flex flex-wrap" aria-label="Tecnologias usadas: ">
            <li className="mr-1.5 mt-2">
              <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                React
              </div>
            </li>
            <li className="mr-1.5 mt-2">
              <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                React
              </div>
            </li>
            <li className="mr-1.5 mt-2">
              <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                React
              </div>
            </li>
            <li className="mr-1.5 mt-2">
              <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                React
              </div>
            </li>
            <li className="mr-1.5 mt-2">
              <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                React
              </div>
            </li>
            <li className="mr-1.5 mt-2">
              <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                React
              </div>
            </li>
          </ul>
        </div>
        <img
          className="aspect-video object-cover rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1"
          src={imageUrl}
          alt={imageAlt}
          width={200}
          height={48} />
      </div>
    </li>
  );
}