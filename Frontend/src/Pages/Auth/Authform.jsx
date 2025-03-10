import { useState } from "react";
import api from "../../api.js";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../../constants.js";
import { useNavigate } from "react-router-dom";
import proptypes from "prop-types";
import Arrow from "../../assets/svg/Arrow.svg";
import icelandbg from "../../assets/videos/icelandbg.mp4";

export default function Authform({ route, method }) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [confitmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    setLoading(true);
    setError("");
    e.preventDefault();
    if (method === "signup" && password !== confitmPassword) {
      setError("Password and Confirm Password do not match");
      setLoading(false);
      return;
    }
    try {
      // For signup, include email. For signin, only send username and password
      const payload =
        method === "signup"
          ? { username, password, email }
          : { username, password };

      const res = await api.post(route, payload);

      if (method === "signin") {
        localStorage.setItem(ACCESS_TOKEN, res.data.access);
        localStorage.setItem(REFRESH_TOKEN, res.data.refresh);
        navigate("/home");
      } else {
        navigate("/signin");
      }
    } catch (error) {
      alert(error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className=" w-full h-full ">
      <div className=" ">
        <video
          src={icelandbg}
          alt=""
          className=" w-[100%] max-h-screen object-cover bg-no-repeat pointer-events-none"
          autoPlay
          loop
          muted
        />
      </div>
      <div className="flex h-screen justify-center items-center  overflow-y-hidden absolute top-0 right-0 left-0">
        <div className="w-[1050px]  h-[550px] rounded-2xl bg-black p-12 opacity-[0.6] text-white font-montserrat flex">
          <div className="w-1/2">
            <img src="../../NOMADX.png" alt="logo" />
          </div>

          <div className="w-1/2">
            <h3 className="font-semibold text-gray-400 text-sm">
              {method === "signup" ? "START FOR FREE" : ""}
            </h3>
            <h1 className="text-4xl font-bold mt-4">
              {method === "signup" ? "Create new account" : "Welcome!!"}
            </h1>
            <h4 className="font-medium text-xs mt-4 text-gray-400">
              {method === "signup" ? "Already A Member?" : "Not yet a Member"}{" "}
              <span className="text-white hover:underline cursor-pointer" type="button" onClick={() => navigate(method === "signup" ? "/signin" : "/signup")}>
                {method === "signup" ? "Sign in" : "Sign up"}
              </span>
            </h4>
            <form
              action=""
              onSubmit={handleSubmit}
              className="mt-8 flex text-black flex-wrap gap-3 font-mono gap-y-10"
            >
              <input
                type="text"
                placeholder="Username"
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="px-4  rounded-lg w-[447px] opacity-[0.45] py-3"
              />

              {method === "signup" && (
                <input
                  type="email"
                  placeholder="Email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="px-4 rounded-lg opacity-[0.45] w-[447px] py-3"
                />
              )}
              <input
                type="password"
                placeholder="Password"
                required
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                className={`px-4 rounded-lg opacity-[0.45] text-black ${method === "signup" ? "w-54" : "w-[447px]"} py-3`}
              />
              
              {method === "signup" && (
                <input
                  type="password"
                  required
                  placeholder="Confirm Password"
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  value={confitmPassword}
                  className="px-4 rounded-lg opacity-[0.45] text-black w-54 py-3 "
                />
              )}
              {error && <p className="text-red-500 text-sm">{error}</p>}

              <div className="flex gap-x-6 w-[447px]">
                <button className="w-64  bg-white text-black hover:text-white hover:bg-black hover:border   justify-center gap-x-2 font-montserrat font-bold  py-2 rounded-3xl  opacity-[0.45]">
                  Sign up with google
                </button>
                <button
                  className="w-[14rem]  bg-white text-black hover:text-white hover:bg-black hover:border   justify-center gap-x-2 font-montserrat font-bold text-2xl py-2 rounded-3xl flex "
                  type="submit"
                >
                  Go Nomad{" "}
                  <span>
                    <img src={Arrow} className="pt-1" alt="arrow" />
                  </span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

Authform.propTypes = {
  route: proptypes.string.isRequired,
  method: proptypes.string.isRequired,
};
