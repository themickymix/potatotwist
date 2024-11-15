import React from "react";
import FadeInOnScroll from "../components/FadeInOnScroll ";
import FadeLeftOnScroll from "../components/FadeLeftOnScroll";
import Card from "../components/Card";
function Hero() {
  const prices = [
    {
      id: 1,
      name: "Small",
      price: "₱25",
    },
    {
      id: 2,
      name: "Medium",
      price: "₱30",
    },
    {
      id: 3,
      name: "Large",
      price: "₱35",
    },
    {
      id: 4,
      name: "Extra Large",
      price: "₱40",
    },
  ];

  return (
    <>
      <div className="relative grid grid-cols-1 md:grid-cols-2 h-[600px] mb-[3%] animate-fade">
        {/* Text section with transparency and z-index */}
        <div className="bg-[#FFA388] bg-opacity-80 h-auto flex flex-col justify-center items-center z-10 relative">
          <h1 className="roboto-bold-italic text-white text-4xl sm:text-6xl text-center animate-fade-right">
            A Twist You Can't Resist!
          </h1>
          <button className="bg-yellow-600 text-gray-200 p-3 rounded-full font-bold mt-4 sm:mt-8">
            <a
              itemProp="url"
              target="_blank"
              href="https://www.facebook.com/profile.php?id=61568376730830">Contact Us</a>
          </button>
        </div>

        {/* Image Section */}
        <div className="absolute h-full w-full">
          <div className="relative h-full bg-[#FFCCBD] flex justify-center items-center">
            <img
              className="object-cover w-full h-full brightness-50"
              src="/banner-hero.png"
              alt="Hero Image"
            />
            {/*       <div className="absolute left-[70%] top-[17%]">
            <img
              src="/spiral.png"
              className="hidden md:block h-96 animate-fade-left"
              alt="Spiral"
            />
          </div> */}
          </div>
        </div>
      </div>
      <section className="h-[100vh] md:h-[60vh] pt-36">
        <div className="grid grid-cols-2 gap-5 p-2 md:grid-cols-4 md:px-24 ">
          {prices.map((item) => {
            // Dynamically assign image size based on name
            let imageSize = "h-16"; // Default size for "Small"
            if (item.name === "Medium") {
              imageSize = "h-20"; // Medium size
            } else if (item.name === "Large") {
              imageSize = "h-28"; // Large size
            } else if (item.name === "Extra Large") {
              imageSize = "h-32"; // Extra Large size
            }

            return (
              <Card
                key={item.id}
                name={item.name}
                price={item.price}
                imageSize={imageSize} // Pass dynamic image size
              />
            );
          })}
        </div>
      </section>
      <section className="pt-10 h-">
        <div className="md:grid grid-cols-2 p-8 gap-8">
          <FadeInOnScroll>
            <img
              className="w-96 rounded-xl justify-self-end shadow-2xl animate-fade-right animate-duration-1000"
              src="/photo2.jpg"
              alt=""
            />
          </FadeInOnScroll>
          <FadeLeftOnScroll>
            <span className="flex font-light text-xl md:text-4xl items-center animate-fade-left animate-duration-1000">
              We sell fresh, delicious fried potato snacks from my vibrant,
              mobile cart, perfect for busy spots like schools and events. With
              flexible setup and customizable flavors, my cart draws in hungry
              crowds looking for a quick, satisfying treat.
            </span>
          </FadeLeftOnScroll>
        </div>
      </section>
    </>
  );
}

export default Hero;
