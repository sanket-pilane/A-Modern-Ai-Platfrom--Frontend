import brackets from "../assets/svg/Brackets";

const Tagline = ({ className, children }) => {
  return (
    <div className={`tagline flex items-center ${className || ""}`}>
      {brackets("left")}
      <div className="text-n-3 mx-3">{children}</div>
      {brackets("rigth")}
    </div>
  );
};

export default Tagline;
