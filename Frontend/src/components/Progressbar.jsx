import PropTypes from 'prop-types';

function ProgressBar({ progressPercentage, usePercentage = true }) {
  const progressWidth = usePercentage ? `${progressPercentage}%` : `${progressPercentage}px`;

  return (
    <div className="h-4 w-full bg-gray-100 bg-opacity-20 rounded-3xl overflow-hidden">
      <div
        style={{ width: progressWidth }}
        className={`h-full ${
          progressPercentage < 70 ? "bg-[#9dc8f9]" : "bg-gray-200"
        }`}
      ></div>
    </div>
  );
}

ProgressBar.propTypes = {
  progressPercentage: PropTypes.number.isRequired,
  usePercentage: PropTypes.bool
};

export default ProgressBar;