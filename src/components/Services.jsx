import React from "react";
import Section from "./Section";
import Heading from "./Heading";
import { check, service1, service2, service3 } from "../assets";
import { brainwaveServices, brainwaveServicesIcons } from "../contants";
import Generating from "./Generating";
import {
  Gradient,
  PhotoChatMessage,
  VideoBar,
  VideoChatMessage,
} from "./design/Services";

const Services = () => {
  return (
    <Section id="how-to-use">
      <div className="container">
        <Heading
          title="Generative ai made for creators"
          text="Brainwave unlocks the potential of AI powered application"
        />

        <div className="relative">
          <div className="relative z-1 border border-n-1/10 flex items-center mb-5 p-8 h-[39rem] overflow-hidden rounded-3xl lg:p-20 xl:h-[46rem]">
            <div className="absolute  left-0 top-0 w-full h-full pointer-events-none md:w-3/5 xl:w-auto">
              <img
                src={service1}
                alt="Smartest Ai"
                className="w-full h-full object-cover md:object-right "
                width={800}
                height={730}
              />
            </div>
            <div className="relative z-1 max-w-[17rem]  ml-auto">
              <h4 className="h4 mb-4">Smartest Ai</h4>
              <p className="body-2 mb-[3rem] text-n-3">
                Brainwave unlocks the potential of AI powered applications
              </p>

              <ul className="body-2">
                {brainwaveServices.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start py-4  border-t border-n-6"
                  >
                    <img width={24} height={24} src={check} />
                    <p className="ml-4">{item}</p>
                  </li>
                ))}
              </ul>
            </div>
            <Generating className="absolute left-4 bottom-4 right-4 border-n-1/10 border lg:left-1/2 lg-rigth-auto lg:bottom-8 lg:-translate-x-1/2" />
          </div>

          <div className="relative z-1 grid gap-5 lg:grid-cols-2">
            <div className="relative min-h-[39rem] border border-n-1/10 rounded-3xl overflow-hidden">
              <div className="absolute inset-0">
                <img
                  src={service2}
                  alt="Service2 "
                  className="w-full h-full object-cover"
                  height={750}
                  width={630}
                />
              </div>
              <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-b from-n-8/0 to-n-8/90 lg:p-15">
                <h4 className="h4 mb-4">Photo editing</h4>
                <p className="body-2 mb-[3rem] text-n-3">
                  Automatically enhance your photo with our AI app&apos;s photo
                  editing feature.Try it now!
                </p>
              </div>
              <PhotoChatMessage />
            </div>

            <div className="p-4 bg-n-7 rounded-3xl overflow-hidden lg:min-h-[46rem]">
              <div className="py-12 px-4 xl:px-8">
                <h4 className="h4 mb-4">Vieo Generator</h4>
                <p className="body-2 text-n-3 mb-[3rem]">
                  The world&apos;s most powerful Ai photo and video art genrator
                  engit. What will you create?
                </p>

                <ul className="flex items-center justify-between">
                  {brainwaveServicesIcons.map((item, index) => (
                    <li
                      className={`rounded-2xl flex items-center justify-center  ${
                        index === 2
                          ? "w-[3rem] h-[3rem] bg-conic-gradient md:h-[4.5rem] md:w-[4.5rem]"
                          : "flex w-10 h-10 bg-n-6 md:w-15 md:h-15"
                      }`}
                    >
                      <div
                        className={
                          index === 2
                            ? "flex items-center justify-center bg-n-7 rounded-[1rem] w-full h-full"
                            : ""
                        }
                      >
                        <img src={item} alt={item} width={24} height={24} />
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative h-[20rem] bg-n-8 overflow-hidden rounded-xl md:h-[25rem] ">
                <img
                  src={service3}
                  alt={service3}
                  className="w-full h-full object-cover"
                  width={520}
                  height={400}
                />

                <VideoChatMessage />
                <VideoBar />
              </div>
            </div>
          </div>
          <Gradient />
        </div>
      </div>
    </Section>
  );
};

export default Services;
