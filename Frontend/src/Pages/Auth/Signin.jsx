function Signin() {
  return (
    <div>
      <form action="" className="w-1/2">
        <label htmlFor="">
          <input type="text" placeholder="Email" className=""/>
        </label>
        <label htmlFor="">
          <input type="text" placeholder="password" />
        </label>
        <button>Forgot password</button>
        <button>Go Nomad</button>
      </form>
    </div>
  );
}

export default Signin;
