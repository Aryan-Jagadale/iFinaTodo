import HomeComp from "./components/HomeComp";
import LowerComp from "./components/LowerComp";
import MiddleComp from "./components/MiddleComp";

export default function Home() {
  return (
    <main
      className="min-h-full w-full"
      style={{
        background: "linear-gradient(140deg, #0A5783 5.05%, #18A19A 100%)",
      }}
    >
      <div
        style={{
          background: "linear-gradient(140deg, #0A5783 5.05%, #18A19A 100%)",
        }}
      >
        <div className="p-20">
          <HomeComp />
        </div>

        <div className="w-[90%] mx-auto">
          <MiddleComp />
        </div>

        <LowerComp />
      </div>

      
    </main>
  );
}
