interface HeadingProps {
  title: string;
  subtitle?: string; // optional subtitle support
  align?: "left" | "center" | "right"; // flexibility in alignment
}

const Heading = ({ title, subtitle, align = "center" }: HeadingProps) => {
  const alignment = align === "center" ? "items-center text-center" : align === "right" ? "items-end text-right" : "items-start text-left";

  return (
    <section className="w-full px-4">
      <div
        className={`flex flex-col ${alignment} gap-3 py-10 md:py-16`}
      >
        {/* Title */}
        <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold tracking-tight bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          {title}
        </h2>

        {/* Subtitle (if provided) */}
        {subtitle && (
          <p className="text-gray-600 text-sm sm:text-base max-w-2xl">
            {subtitle}
          </p>
        )}

        {/* Accent underline */}
        <span className="mt-2 h-1 w-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></span>
      </div>
    </section>
  );
};

export default Heading;
