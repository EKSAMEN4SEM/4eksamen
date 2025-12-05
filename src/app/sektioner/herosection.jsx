export default function HeroSection({
  bgUrl = "/forside_hero.png",
  height = "h-[600px]",
}) {
  return (
    <section>
      <div
        className={`
          relative 
          bg-cover 
          bg-center 
          ${height}
        `}
        style={{
          backgroundImage: `url(${bgUrl})`,
        }}
      ></div>
    </section>
  );
}
