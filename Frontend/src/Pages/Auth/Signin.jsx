import Authform from "./Authform";

function Signin() {
  return (
    <> <Authform route="/api/token/" method="signin"/></>
  );
}

export default Signin;
