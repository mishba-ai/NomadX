import Nomadlrs from "./assets/nomadlrs.png";

function App() {
  return (
    <>
      {/* landing section */}
      <section className="w-screen h-screen bg-gradient-to-r from-black to-blue">
        <header className="w-full h-16 ">
          <ul className="flex justify-around font-bold text-xl font-mono pt-4 text-[rgb(86,97,199)]">
            <li>
              {" "}
              <img
                src={Nomadlrs}
                alt="NomadX2"
                className="absolute -top-20 left-2"
              />
            </li>
            <li>Services</li>
            <li>Destination</li>
            <li>Pricing</li>
            <li>
              <button className="bg-[#5661C7] px-2 py-1 rounded-md text-[#FFC9F6]">
                Go Nomad
              </button>
            </li>
          </ul>
        </header>

        <section className="flex justify-center items-center">
          <h1 className="text-6xl text-white">Nomad X</h1>
        </section>
      </section>
    </>
  );
}

export default App;
