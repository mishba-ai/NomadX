

function Footer() {
  return (
    <>
      <footer className=" w-screen  h-[300px] bg-cover px-24 mt-8 text-white font-Robotomono">
        <hr className="border-gray-500" />
        <div className="flex justify-between mt-14">
          <div>
            <img
              src="../../../nomadxlogo.png"
              alt=""
              className="h-24 w-24 -mt-10 pb-4"
            />
          </div>
          <div className="flex gap-x-14 font-medium  text-lg">
            <h3>Product</h3>
            <h3>Company</h3>
          </div>
        </div>
        <div className="flex justify-end gap-x-14 text-sm ">
          {" "}
          <ul className="">
            <li>Changelog</li>
          </ul>
          <ul className="flex flex-col space-y-2">
            <li>About Us</li>
            <li>Blog</li>
            <li>Features</li>
            <li>Community</li>
          </ul>
        </div>
        <hr className="mt-8 border-gray-500" />
        <div className="mt-4 flex justify-between">
          <p>© 2024 NomadX. All rights reserved.</p>
          <ul className="flex gap-x-4 text-sm font-medium">
            <li>Terms of Service</li>
            <ul>Privacy Policy</ul>
            <ul>Cookies</ul>
          </ul>
        </div>
      </footer>
    </>
  );
}

export default Footer;
