import Authform from "./Authform";

function Signup() {
  return <Authform route="/api/user/register/" method="signup" />;
}

export default Signup;
