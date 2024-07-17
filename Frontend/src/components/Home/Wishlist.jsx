import arrowleft from "../../assets/svg/Wishlist/arrowleft.svg";
import arrowright from "../../assets/svg/Wishlist/arrowright.svg";
import heart from "../../assets/svg/Wishlist/heart.svg";
import heartfill from "../../assets/svg/Wishlist/heartfill.svg";

function Wishlist() {
  return (
    <div>
      <div className="flex justify-between">
        <h3 className="font-montserrat mt-1 font-bold text-xl">Wishlist</h3>
        <div className="flex">
          <button className="h-5 w-5">
            <img src={arrowleft} alt="" />
          </button>
          <button className="h-5 w-5">
            <img src={arrowright} alt="" />
          </button>
        </div>
      </div>
      <div className="flex gap-x-2 mt-2">
        <div className="w-28 overflow-hidden h-28 rounded-2xl ">
          <img
            src="https://cdn-thumbs.ohmyprints.net/1/131bc1993bd395140032a07fef0ce3ae/817x600/thumbnail/fit.jpg"
            className="w-28 h-28 rounded-2xl"
            alt=""
          />
          <button className="">
            {" "}
            <div className="h-6 w-6 flex justify-center relative -top-[6.5rem] left-20 items-center bg-purple-400 rounded-full">
              <img src={heart} className="h-4 w-4 " alt="" />
            </div>
          </button>
        </div>
        <div className="w-28 overflow-hidden h-28 rounded-2xl bg-white">
          <img
            src="https://i.pinimg.com/736x/f7/b9/a7/f7b9a7f08e04be14864e105e4cd3c633.jpg"
            className="w-28 h-28 rounded-2xl"
            alt=""
          />
          <button className="">
            {" "}
            <div className="h-6 w-6 flex justify-center relative bottom-[6.5rem] left-20 items-center bg-purple-400 rounded-full">
              <img src={heart} className="h-4 w-4 " alt="" />
            </div>
          </button>
        </div>
        <div className="w-28 h-28 overflow-hidden rounded-2xl bg-white">
          <img
            src="https://d3iso9mq9tb10q.cloudfront.net/magefan_blog/g/a/gardens-by-the-bay_article.jpg"
            className="w-28 h-28 rounded-2xl"
            alt=""
          />
          <button className="">
            {" "}
            <div className="h-6 w-6 flex justify-center relative -top-[6.5rem] left-20 items-center bg-purple-400 rounded-full">
              <img src={heart} className="h-4 w-4 " alt="" />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Wishlist;
