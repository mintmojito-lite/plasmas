import Countdown from "./Countdown";

const Launch = () => {
  return (
    <section
      id="launch"
      className="h-screen w-full flex flex-col items-center justify-center relative snap-start"
    >
      <div className="text-center">
        <h1 className="text-2xl md:text-4xl font-bold mb-8">
          Launch Sequence Initiated
        </h1>
        <Countdown />
        <div className="mt-8">
          <button className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-3 px-6 rounded-lg transition-colors">
            Join Discord
          </button>
        </div>
      </div>
    </section>
  );
};

export default Launch;
