import Navbar from "../../components/settings/Navbar.jsx";
import Profile from "../Setting/profile.jsx";

function Setting() {
  return (
    <>
      <div className="min-w-screen h-auto">
        <div className="flex  h-full">
          <Navbar />
          <Profile />
        </div>
      </div>
    </>
  );
}

export default Setting;
