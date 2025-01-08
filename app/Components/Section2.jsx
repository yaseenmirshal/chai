import Image from "next/image";
import food1 from "../assets/food1.jpg";
import food2 from "../assets/food2.jpg";
import food3 from "../assets/food3.jpg";
import food4 from "../assets/food4.jpg";
import food5 from "../assets/curry.jpg";
import food6 from "../assets/fish items.jpg";
import food7 from "../assets/meals.jpg";
import food8 from "../assets/prouns.jpg";

const Section2 = () => {
  const foodItems = [
    { img: food5, name: "Fish Curry", rating: "⭐⭐⭐⭐⭐" },
    { img: food6, name: "Fish", rating: "⭐⭐⭐⭐⭐" },
    { img: food7, name: "Meals", rating: "⭐⭐⭐⭐⭐" },
    { img: food8, name: "Prawns", rating: "⭐⭐⭐⭐⭐" },
    { img: food1, name: "Fresh Strawberry Juice", rating: "⭐⭐⭐⭐⭐" },
    { img: food2, name: "Multi Loaded Burger", rating: "⭐⭐⭐⭐⭐" },
    { img: food3, name: "Full Chicken Tandoori", rating: "⭐⭐⭐⭐⭐" },
    { img: food4, name: "Full Chicken Tandoori", rating: "⭐⭐⭐⭐⭐" },
  ];

  return (
    <div className="text-center bg-black text-orange-500 py-12 px-4">
      

      <h2 className="text-3xl font-bold mb-8">ARE YOU HUNGRY?</h2>
      <div className="flex flex-wrap justify-center gap-6">
        {foodItems.map((item, index) => (
          <div
            key={index}
            className="bg-gray-800 rounded-lg overflow-hidden text-center p-4 w-52 transform transition-transform hover:-translate-y-2"
          >
            <Image
              src={item.img}
              alt={item.name}
              className="rounded-lg"
              width={200}
              height={150}
            />
            <h3 className="text-lg text-white mt-3">{item.name}</h3>
            <p className="text-orange-500 text-sm">{item.rating}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Section2;
