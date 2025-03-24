import { Button } from "@/components/ui/button";
import CountUp from "react-countup";

const BriefAbout = () => {
  return (
    <div className="px-44 py-56 w-full space-y-20">
      <div className="flex justify-center w-full gap-20 ">
        <div className="flex flex-col items-end">
          <div>
            <h3 className="text-4xl font-medium">I'm Emmanuel</h3>
            <h2 className="text-6xl font-bold">
              Web Developer
              <br />
              with AI Solutions
            </h2>
          </div>
        </div>
        <div className="flex justify-end items-end w-1/2">
          <p className="font-light">
            Highly skilled frontend developer with expertise in integrating
            Artificial Intelligence (AI) solutions into business projects.
            Proficient in leveraging machine learning frameworks and libraries
            to create intelligent, user-centric web applications. Passionate
            about harnessing the power of AI to drive innovation, improve user
            experiences, and solve complex business problems.
          </p>
        </div>
      </div>
      <div className="w-full flex justify-between">
        <div className="flex gap-3 items-center">
          <p className="text-6xl font-bold">
            <CountUp
              end={21}
              duration={5}
              enableScrollSpy
              scrollSpyOnce
              formattingFn={(num) => {
                if (num >= 1000000) {
                  return (num / 1000000).toFixed(1) + "M";
                } else if (num >= 1000) {
                  return (num / 1000).toFixed(1) + "K";
                } else {
                  return num.toString();
                }
              }}
            />
          </p>
          <p>
            Year of <br />
            Experience
          </p>
        </div>
        <div className="flex gap-3 items-center">
          <p className="text-6xl font-bold">
            <CountUp
              end={50}
              duration={5}
              enableScrollSpy
              scrollSpyOnce
              suffix="+"
              formattingFn={(num) => {
                if (num >= 1000000) {
                  return (num / 1000000).toFixed(1) + "M";
                } else if (num >= 1000) {
                  return (num / 1000).toFixed(1) + "K";
                } else {
                  return num.toString();
                }
              }}
            />
            +
          </p>
          <p>
            Projects <br />
            Completed
          </p>
        </div>
        <div className="flex gap-3 items-center">
          <p className="text-6xl font-bold">
            <CountUp
              end={1500}
              duration={7}
              enableScrollSpy
              scrollSpyOnce
              formattingFn={(num) => {
                if (num >= 1000000) {
                  return (num / 1000000).toFixed(1) + "M";
                } else if (num >= 1000) {
                  return (num / 1000).toFixed(1) + "K";
                } else {
                  return num.toString();
                }
              }}
            />
          </p>
          <p>
            Happy <br />
            Clients
          </p>
        </div>
        <div className="flex gap-3 items-center">
          <p className="text-6xl font-bold">
            <CountUp
              end={21}
              duration={5}
              enableScrollSpy
              scrollSpyOnce
              formattingFn={(num) => {
                if (num >= 1000000) {
                  return (num / 1000000).toFixed(1) + "M";
                } else if (num >= 1000) {
                  return (num / 1000).toFixed(1) + "K";
                } else {
                  return num.toString();
                }
              }}
            />
          </p>
          <p>
            Year of <br />
            experience
          </p>
        </div>
      </div>
      <div className="w-full flex justify-center">
        <div className="hover:scale-105">
          <Button
            variant={null}
            className="border-[1.5px] border-muted py-2 px-8 rounded-lg text-purple-300 bg-background font-normal shadow hover:shadow-purple-300/15 transition"
          >
            More About Anuel
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BriefAbout;
