import SectionSvg from "../assets/svg/SectionSvg";
const Section = ({
  className,
  id,
  crosses,
  crossesOffset,
  children,
  customPadding,
}) => {
  return (
    <div
      id={id}
      className={`relative ${
        customPadding ||
        `py-10 lg:py-16 xl:py-20 ${crosses ? "lg:py-32 xl:py-40" : ""}`
      } 
        ${className || ""}
      `}
    >
      {children}
      <div className="hidden absolute top-0 left-5 w-0.25 bg-stroke-1 pointer-events-none md:block lg:left-7.5 xl:left-10 h-full" />
      <div className="hidden absolute top-0 right-5 w-0.25 bg-stroke-1 pointer-events-none md:block lg:rigth-7.5 xl:rigth-10 h-full" />

      {crosses && (
        <>
          <div
            className={`hidden absolute top-0 left-7.5 right-7.5 h-0.25 bg-stroke-1 ${
              crossesOffset && crossesOffset
            } pointer-events-none lg:block xl:left-10 right-10 `}
          />
          <SectionSvg crossesOffset={crossesOffset} />
        </>
      )}
    </div>
  );
};

export default Section;
