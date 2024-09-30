import HoverLink from "../HoverLink";
import Accordion from "../Accordion";

const Skills = () => {
  return (
    <section className="relative z-50 h-auto bg-black px-4 py-20 md:px-6 md:py-[120px] lg:px-20 lg:py-[120px] xl:px-[156px] xl:py-40 2xl:py-[240px]">
      <div className="m-auto flex w-full flex-col items-start gap-y-10 md:gap-y-10 lg:grid lg:grid-cols-2 lg:gap-20 xl:gap-[120px] 2xl:max-w-[1408px] 2xl:gap-40">
        <div className="flex flex-col gap-12 md:items-start lg:gap-14 2xl:max-w-[514px]">
          <div className="2xl:max-w-[528px]">
            <h2 className="text-[40px] leading-[1.12] text-white xl:text-[56px] 2xl:text-[64px] mb-6 text-text-t900-d md:mb-8">
              Our accumulated professional skills cover all the needs of a
              digital product. Geek out below
            </h2>
          </div>
          <div className="md:w-auto">
            <HoverLink
              to="/get-in-touch"
              bg="bg-white text-black border-white"
              textcolor="after:text-white"
            >
              Get in touch
            </HoverLink>
          </div>
        </div>
        <Accordion />
      </div>
    </section>
  );
};

export default Skills;
