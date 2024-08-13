import arrowleft from "../../assets/svg/Wishlist/arrowleft.svg";
import arrowright from "../../assets/svg/Wishlist/arrowright.svg";
import heart from "../../assets/svg/Wishlist/heart.svg";
import heartfill from "../../assets/svg/Wishlist/heartfill.svg";
import uploadimg from "../../assets/svg/uploadimg.svg";
import { useState, useEffect, useRef } from "react";

function Wishlist() {
  const [wishlists, setWishlists] = useState([
    {
      image:
        "https://cdn-thumbs.ohmyprints.net/1/131bc1993bd395140032a07fef0ce3ae/817x600/thumbnail/fit.jpg",
      Liked: true,
      destination: "Norway",
    },
    {
      image:
        "https://d3iso9mq9tb10q.cloudfront.net/magefan_blog/g/a/gardens-by-the-bay_article.jpg",
      Liked: false,
      destination: "Singapore",
    },
  ]);

  const [showAddForm, setShowAddForm] = useState(false);
  const carouselRef = useRef(null);
  const [newImage, setNewImage] = useState("");
  const [destination, setDestination] = useState("");
  const fileInputRef = useRef(null);

  const handleToggleLike = (index) => {
    const newWishlists = [...wishlists]; //copy the previous array
    newWishlists[index].Liked = !newWishlists[index].Liked;
    setWishlists(newWishlists); //update the array
  };
  const handleAddWishlistForm = () => {
    setShowAddForm(true);
  };
  const handleCloseWishlistForm = () => {
    setShowAddForm(false);
  };
  //scrolling
  const scrollCarousel = (direction) => {
    if (carouselRef.current) {
      const scrollAmount = direction === "left" ? -100 : 100;
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0]; //When a file is selected, the input's files property contains a FileList object.We're accessing the first (and usually only) file from this list.

    if (file) {
      //This check ensures we only proceed if a file was actually selected.
      const reader = new FileReader(); // it create a new FileReader object, which allows us to read the contents of files

      //This sets up an event handler that will run when the reader finishes reading the file.
      reader.onloadend = () => {
        setNewImage(reader.result); //Inside the onloadend handler, it sets the newImage state to the result of the file reading operation.reader.result contains the file's data as a data URL, which can be used as the src for an img element.
      };
      reader.readAsDataURL(file); //This starts the process of reading the file, converting it to a data URL.
    }
  };

  const handleAddWishlists = (e) => {
    e.preventDefault();
    if (newImage && destination) {
      setWishlists([
        ...wishlists,
        { image: newImage, Liked: false, destination },
      ]);
      setNewImage(null);
      setDestination("");
      setShowAddForm(false);
    }
  };
  return (
    <div>
      <div className="flex justify-between pr-14">
        <h3 className="font-montserrat mt-1 font-bold  text-sky-200 text-xl">
          Wishlist
        </h3>
        <div className="flex justify-center items-center">
          <button
            className="h-5 w-5 hover:transition-transform hover:scale-110"
            onClick={() => scrollCarousel("left")}
          >
            <img src={arrowleft} alt="" className="" />
          </button>
          <button
            className="h-5 w-5 hover:transition-transform hover:scale-110"
            onClick={() => scrollCarousel("right")}
          >
            <img src={arrowright} alt="" />
          </button>
        </div>
      </div>

      <div className="flex gap-x-2 mt-2 rounded-2xl  flex-wrap overflow-hidden w-[24.4rem]">
        <ul
          className="flex gap-x-2 overflow-x-auto no-scrollbar scroll-smooth"
          ref={carouselRef}
        >
          {wishlists.map((wishlist, index) => (
            <li key={index}>
              {" "}
              <div className="w-28 overflow-hidden group relative h-28 rounded-2xl text-white">
                <img
                  src={wishlist.image}
                  className="w-28 h-28 rounded-2xl group-hover:opacity-60 "
                  alt=""
                />
                <div className="group-hover:opacity-100 opacity-0 absolute bottom-[3rem]   px-4  transition-opacity duration-300 ">
                  <p className="text-center group-hover:text-opacity-65 group-hover:text-white">
                    {wishlist.destination}
                  </p>
                </div>
                <button className="" onClick={() => handleToggleLike(index)}>
                  {" "}
                  <div className="h-6 w-6 flex justify-center relative -top-[6.5rem] left-20 items-center bg-purple-400 rounded-full">
                    <img
                      src={wishlist.Liked ? heartfill : heart}
                      className="h-4 w-4 "
                      alt=""
                    />
                  </div>
                </button>
              </div>
            </li>
          ))}{" "}
          <li>
            <div className="w-28 h-28 rounded-2xl border-2 border-sky-200 flex justify-center items-center">
              <button
                className="text-4xl text-sky-200 hover:transition-transform hover:scale-x-110"
                onClick={handleAddWishlistForm}
              >
                +
              </button>
            </div>
          </li>
        </ul>
      </div>

      {showAddForm && (
        <div className="">
          <div className="flex absolute top-[35%] left-[40%] p-8 bg-black text-black w-96 h-56 z-10 bg-opacity-90 shadow-2xl border border-sky-200 flex-col font-montserrat">
            <button
              className="flex justify-end  text-white w-5 h-5 text-center"
              onClick={handleCloseWishlistForm}
            >
              x
            </button>
            <h3 className="text-3xl text-sky-100 text-opacity-60 text-center">
              Add Wishlist
            </h3>

            <form
              action=""
              onSubmit={handleAddWishlists}
              className="pt-4 flex  flex-col gap-4"
            >
              <div className="flex gap-2">
                <input
                  type="text"
                  className="px-2 py-1 w-44 h-10 rounded-lg bg-opacity-20 bg-sky-100 text-sky-100"
                  placeholder="Favourite destination"
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                />
                <div className="flex gap-x-4">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleFileChange}
                    ref={fileInputRef}
                    className="hidden"
                    name=""
                    id=""
                  /> {newImage && <img src={newImage} alt="Preview" className="w-12 h-12 object-cover rounded-lg" />}
                  <button
                    className="bg-sky-50 rounded-lg border-sky-200 bg-opacity-45 borde text-xs  p-3"
                    onClick={() => fileInputRef.current.click()}
                  >
                    <img src={uploadimg} alt="" />
                  </button>
                 

                </div>
              </div>
              <button type="submit" className="bg-sky-50 rounded-xl p-2">
                Add{" "}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Wishlist;
