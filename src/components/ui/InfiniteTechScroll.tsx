const technologies = [
  "HTML5",
  "css3",
  "jquery",
  "tailwindcss",
  "javascript",
  "typescript",
  "react",
  "vue",
  "angular",
  "next",
  "nodejs",
  "php",
  "git",
  "mysql",
  "astro",
  "bash",
];

const InfiniteTechScroll = () => (
  <div className="relative overflow-x-hidden py-8">
    {/* Gradient fade edges */}
    <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[var(--background)] to-transparent z-20" />
    <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[var(--background)] to-transparent z-20" />

    {/* Scrolling items - triple the array for seamless looping */}
    <div className="flex animate-scroll hover:animate-paused gap-12 md:gap-20 w-max">
      {[...technologies].map((tech, index) => (
        <div
          key={`${tech}-${index}`} // Unique key for each instance
          className="flex items-center gap-2 group transition-all duration-300"
        >
          <img
            src={`/svg/${tech.toLowerCase()}.svg`} // Ensure consistent case
            alt={tech}
            className="h-7 w-auto object-contain transition-transform group-hover:scale-110 opacity-60 hover:opacity-100" // Added hover effect
            width="30"
            height="30"
            loading="lazy"
          />
          <span className="text-lg font-medium text-[var(--white-icon)] whitespace-nowrap">
            {tech.charAt(0).toUpperCase() +
              tech.slice(1).replace(/([a-z])([A-Z])/g, "$1 $2")}
            {/* Added regex to handle camelCase (e.g., "typeScript" → "Type Script") */}
          </span>
        </div>
      ))}
    </div>
  </div>
);

export default InfiniteTechScroll;
