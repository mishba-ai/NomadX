function Progressbar({ progressPercentage }, { percentageOrDollar }) {
  return (
    <div className="h-4  w-full bg-gray-100 rounded-3xl overflow-hidden">
      <div
        style={{ width: `${progressPercentage + percentageOrDollar}` }}
        className={`h-full ${progressPercentage < 70 ? "bg-purple-400" : "bg-gray-200"}`}
      ></div>
    </div>
  );
}
// props validation


export default Progressbar;
