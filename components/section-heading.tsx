type SectionHeadingProps = {
  tag: string;
  title: string;
  description: string;
  align?: "left" | "center";
};

export function SectionHeading({
  tag,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  const isCenter = align === "center";

  return (
    <div className={`${isCenter ? "mx-auto max-w-2xl text-center" : "section-copy"}`}>
      <span className="section-tag">{tag}</span>
      <h2 className="mt-5 text-2xl font-semibold leading-tight text-black dark:text-white sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      <p className="mt-4 text-sm leading-7 text-black/72 dark:text-white/72 sm:text-base">{description}</p>
    </div>
  );
}
