import { brainwaveSymbol, check } from "../assets";
import { collabApps, collabContent, collabText } from "../contants";
import Button from "./Button";
import Section from "./Section";
import { LeftCurve, RightCurve } from "./design/Collaboration";

const Collaboration = () => {
  return (
    <Section crosses>
      <div className="container lg:flex">
        <div className="max-w-[25rem]">
          <h2 className="h2 mb:4 md:mb-8">
            AI chat app for seamless collabaration
          </h2>
          <ul className="max-w-[22rem] mb-10 md:mb14">
            {collabContent.map((item) => (
              <li id={item.id} className="mb-3 py-3">
                <div className="flex items-center">
                  <img src={check} alt="check" width={24} height={24} />
                  <h6 className="body-2 ml-4">{item.title}</h6>
                </div>
                {item.text && (
                  <p className="body-2 mt-3 text-n-4">{item.text}</p>
                )}
              </li>
            ))}
          </ul>
          <Button>Try it now</Button>
        </div>
        <div className="lg:ml-auto xl:w-[34rem] mt-4">
          <p className="body-2 mb-4 text-n-4 md:mb-20 lg:mb-32 lg:w-[22rem] lg:mx-auto">
            {collabText}
          </p>

          <div className="relative left-1/2 flex w-[22rem] aspect-square border border-n-6 rounded-full -translate-x-1/2 scale:75 md:scale-100 ">
            <div className="flex w-60 border border-n-6 aspect-square  m-auto rounded-full">
              <div className="w-[6rem] aspect-square p-[0.2rem] bg-conic-gradient rounded-full m-auto">
                <div className="flex items-center justify-center w-full h-full bg-n-8 rounded-full">
                  <img
                    src={brainwaveSymbol}
                    alt="brainwave"
                    width={48}
                    height={48}
                  />
                </div>
              </div>
            </div>
            <ul>
              {collabApps.map((item, index) => (
                <li
                  key={item.id}
                  className={`absolute top-0 left-1/2 h-1/2 -m-[1.2rem] origin-bottom rotate-${
                    index * 45
                  }`}
                >
                  <div
                    className={`relative -top-[1.6rem] flex w-[3.2rem] h-[3.2rem] bg-n-7 border border-n-1/15 rounded-xl -rotate-${
                      index * 45
                    }`}
                  >
                    <img
                      className="m-auto"
                      height={item.height}
                      width={item.width}
                      alt={item.title}
                      src={item.icon}
                    />
                  </div>
                </li>
              ))}
            </ul>
            <LeftCurve />
            <RightCurve />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Collaboration;
