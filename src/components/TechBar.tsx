interface TechBarProps {
  techIcons: Array<{
    id: string;
    name: string;
    img: string;
    href: string;
  }>;
}

export function TechBar({ techIcons }: TechBarProps) {
  return (
    <div className="w-full">
      <div className="w-full h-32 bg-gradient-to-r from-accent/5 via-accent/10 to-accent/5 rounded-xl border-2 border-accent/15 shadow-inner flex items-center justify-center overflow-x-auto px-4">
        <div className="flex items-center justify-center gap-6 px-4 py-2">
          {techIcons.map((icon) => (
            <a
              key={icon.id}
              href={icon.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex items-center justify-center transition-all duration-300"
              title={icon.name}
            >
              {/* 16x16 circle container */}
              <div className="w-16 h-16 rounded-full overflow-hidden shadow-xl bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-lg border-2 border-white/20 group-hover:border-accent/40 transition-all duration-300 group-hover:scale-125 group-hover:rotate-6 group-hover:shadow-2xl group-hover:z-10 flex items-center justify-center p-0">
                <div className="w-full h-full flex items-center justify-center">
                  <img
                    src={icon.img}
                    alt={icon.name}
                    className="w-10 h-10 object-contain"
                  />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}