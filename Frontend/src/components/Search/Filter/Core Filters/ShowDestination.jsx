import { useState } from "react";

function ShowDestination() {
  const [Destinations, setDestinations] = useState([
    {
      image:
        "https://i.pinimg.com/564x/f6/58/d2/f658d22f4227305bbfc4c71c453887dc.jpg",
      name: "I am flexible",
    },
    {
      image:
        "https://i.pinimg.com/564x/04/f9/bc/04f9bc4640feb916b2b876ba0148307e.jpg",
      name: "Europe",
    },
    {
      image:
        "https://www.kindpng.com/picc/m/723-7236540_map-of-asia-vector-hd-png-download.png",
      name: "Asia",
    },
    {
      image:
        "https://media.istockphoto.com/id/1205276176/vector/africa-map-vector-black-icon-silhouette-isolated-on-a-white-background.jpg?s=612x612&w=0&k=20&c=pz3RvGeNfZvIEvC9jUDtqU4aYgmICKlR4TXhk-BUWYk=",
      name: "Africa",
    },
    {
      image:
        "https://previews.123rf.com/images/skvoor/skvoor0801/skvoor080100051/2313571-detailed-north-america-continent-map-black-and-white-mercator-projection.jpg",
      name: "North America",
    },
    {
      image:
        "https://i.pinimg.com/originals/3d/26/f8/3d26f8258cb1903fcd5a6a0c9a75a6df.png",
      name: "South America",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHPTI5v0XQhIbu0H7iKHzAU_6CZQaA8uxEXA&s",
      name: "Antartica",
    },
    {
      image:
        "https://static.vecteezy.com/system/resources/previews/004/396/392/non_2x/australia-map-on-white-background-free-vector.jpg",
      name: "Australia",
    },
  ]);
  return (
    <div>
      <div className="w-[32.4rem] h-80 rounded-3xl  bg-black shadow-sm border border-slate-800 shadow-slate-800 p-4 font-montserrat">
        <h3 className="text-sky-200 text-lg">Search by Continent</h3>
        <div className="">
          <ul className="flex mt-4 flex-wrap gap-2 gap-x-3">
            {" "}
            {Destinations.map((destination, index) => (
              <li 
                key={index} onClick={""}
                className="group relative cursor-pointer w-28 rounded-md h-28 border bg-cover bg-no-repeat bg-center"
                style={{
                  backgroundImage: `url("${destination.image}")`,
                }}
              >
                <div className="relative top-[50%] transition-opacity duration-300 group-hover:opacity-55 group-hover:bg-black text-sky-100 opacity-0 ">
                  <p className="text-sm text-center">{destination.name}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ShowDestination;
