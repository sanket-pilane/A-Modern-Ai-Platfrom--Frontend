import React from "react";
import { companyLogos } from "../contants";

const CompanyLogos = ({ className }) => {
  return (
    <div className={className}>
      <h6 className="tagline mb-6 text-center text-n-1/50">
        {" "}
        Helping people create beautiful content at
      </h6>

      <ul className="flex">
        {companyLogos.map((logo, index) => (
          <li
            className="flex justify-center items-center flex-1 h-[8.2rem] "
            key={index}
          >
            <img src={logo} alt={logo} width={134} height={28} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CompanyLogos;
