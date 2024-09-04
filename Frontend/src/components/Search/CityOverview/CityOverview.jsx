import PropTypes from "prop-types";

function CityOverview({onBack}) {
  // cities most popular places
  const places = [];

  return (
    <>
      <div className="w-full h-screen bg-[#101010] p-10 pl-24 " >
        <button onClick={onBack} className="bg-white hover:border  hover:border-white hover:bg-black hover:text-white p-1 w-8 text-center  rounded-md text-lg font-bold">
          {"x"}
            
        </button>
      </div>
    </>
  );
}
CityOverview.propTypes = {
  onBack: PropTypes.func.isRequired,
};
export default CityOverview;