import { categoryColor } from "@/components/pages/Portfolio";
import { Project } from "./ProjectModal";

interface ProjectCardProps {
  project: Project;
  onClick: (p: Project) => void;
  index: number;
}

export function ProjectCard({ project, onClick, index }: ProjectCardProps) {
  const isWide = project.thumbnail.aspect === "wide";
  const isTall = project.thumbnail.aspect === "tall";

  return (
    <div
      onClick={() => onClick(project)}
      className={`
        card-shimmer group relative cursor-pointer overflow-hidden rounded-xl
        border border-white/[0.07] bg-[#111827]
        transition-all duration-500
        hover:border-[#E50914]/30 hover:shadow-2xl hover:shadow-[#E50914]/5
        hover:-translate-y-1
        anim-fadeup
        ${isWide ? "col-span-2" : ""}
        ${isTall ? "row-span-2" : ""}
      `}
      style={{ animationDelay: `${index * 0.07}s` }}
    >
      {/* thumbnail */}
      <div
        className={`w-full overflow-hidden ${isTall ? "h-[350px] md:h-[520px]" : "h-[240px]"}`}
        style={{
          backgroundImage: project.thumbnail.src ? `url('${project.thumbnail.src}')` : undefined,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* simulated film grain overlay */}
        <div
          className="absolute inset-0 opacity-20 mix-blend-overlay"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='g'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23g)' opacity='0.15'/%3E%3C/svg%3E\")",
          }}
        />
        {/* category pill */}
        <div className="absolute top-3 left-3 z-10">
          <span
            className={`font-mono-cm text-[0.6rem] tracking-[0.18em] uppercase px-3 py-1 rounded-full border ${categoryColor(project.category)}`}
          >
            {project.category}
          </span>
        </div>
        {/* featured badge */}
        {project.featured && (
          <div className="absolute top-3 right-3 z-10">
            <span className="font-mono-cm text-[0.58rem] tracking-[0.15em] uppercase px-2.5 py-1 rounded-full bg-[#E50914]/90 text-[#080a0f]">
              Featured
            </span>
          </div>
        )}
        {/* hover overlay */}
        <div className="absolute inset-0 bg-[#080a0f]/0 group-hover:bg-[#080a0f]/30 transition-all duration-500 flex items-center justify-center">
          <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
            <div className="flex items-center gap-2 bg-[#E50914] text-[#080a0f] font-body font-semibold text-sm px-5 py-2.5 rounded-full">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path
                  d="M2 7h10M7 2l5 5-5 5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              View Project
            </div>
          </div>
        </div>
      </div>

      {/* card body */}
      <div className="p-6">
        <div className="flex items-center gap-3 mb-3">
          <span className="font-mono-cm text-[0.58rem] tracking-[0.18em] uppercase text-[#E50914]/70">
            {project.client}
          </span>
          <span className="w-px h-3 bg-white/10" />
          <span className="font-mono-cm text-[0.58rem] tracking-[0.14em] uppercase text-white/30">
            {project.year}
          </span>
        </div>
        <h3 className="font-display text-xl font-bold text-white leading-tight mb-1 group-hover:text-[#E50914] transition-colors duration-300">
          {project.title}
        </h3>
        <p className="font-body text-sm text-white/50 mb-4">
          {project.subtitle}
        </p>
        <div className="flex flex-wrap gap-1.5">
          {project.tags.slice(0, 3).map((tag: string) => (
            <span
              key={tag}
              className="font-mono-cm text-[0.58rem] tracking-wider uppercase px-2.5 py-1 rounded bg-white/[0.05] text-white/40 border border-white/[0.06]"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
