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
  return (
    <div className="text-center bg-black text-orange-500 py-12 px-4">
      <h2 className="text-3xl font-bold mb-8">ARE YOU HUNGRY?</h2>
      <div className="flex flex-wrap justify-center gap-6">
        {/* Food Item 1 */}
        <div className="bg-gray-800 rounded-lg overflow-hidden text-center p-4 w-52 transform transition-transform hover:-translate-y-2">
          <Image
            src={food5}
            alt="Fish Curry"
            className="rounded-lg"
            width={200}
            height={150}
          />
          <h3 className="text-lg text-white mt-3">Fish Curry</h3>
          <p className="text-orange-500 text-sm">⭐⭐⭐⭐⭐</p>
        </div>

        {/* Food Item 2 */}
        <div className="bg-gray-800 rounded-lg overflow-hidden text-center p-4 w-52 transform transition-transform hover:-translate-y-2">
          <Image
            src={food6}
            alt="Fish"
            className="rounded-lg"
            width={200}
            height={150}
          />
          <h3 className="text-lg text-white mt-3">Fish</h3>
          <p className="text-orange-500 text-sm">⭐⭐⭐⭐⭐</p>
        </div>

        {/* Food Item 3 */}
        <div className="bg-gray-800 rounded-lg overflow-hidden text-center p-4 w-52 transform transition-transform hover:-translate-y-2">
          <Image
            src={food7}
            alt="Meals"
            className="rounded-lg"
            width={200}
            height={150}
          />
          <h3 className="text-lg text-white mt-3">Meals</h3>
          <p className="text-orange-500 text-sm">⭐⭐⭐⭐⭐</p>
        </div>

        {/* Food Item 4 */}
        <div className="bg-gray-800 rounded-lg overflow-hidden text-center p-4 w-52 transform transition-transform hover:-translate-y-2">
          <Image
            src={food8}
            alt="Prawns"
            className="rounded-lg"
            width={200}
            height={150}
          />
          <h3 className="text-lg text-white mt-3">Prawns</h3>
          <p className="text-orange-500 text-sm">⭐⭐⭐⭐⭐</p>
        </div>

        {/* Food Item 5 */}
        <div className="bg-gray-800 rounded-lg overflow-hidden text-center p-4 w-52 transform transition-transform hover:-translate-y-2">
          <Image
            src={food1}
            alt="Fresh Strawberry Juice"
            className="rounded-lg"
            width={200}
            height={150}
          />
          <h3 className="text-lg text-white mt-3">Fresh Strawberry Juice</h3>
          <p className="text-orange-500 text-sm">⭐⭐⭐⭐⭐</p>
        </div>

        {/* Food Item 6 */}
        <div className="bg-gray-800 rounded-lg overflow-hidden text-center p-4 w-52 transform transition-transform hover:-translate-y-2">
          <Image
            src={food2}
            alt="Multi Loaded Burger"
            className="rounded-lg"
            width={200}
            height={150}
          />
          <h3 className="text-lg text-white mt-3">Multi Loaded Burger</h3>
          <p className="text-orange-500 text-sm">⭐⭐⭐⭐⭐</p>
        </div>

        {/* Food Item 7 */}
        <div className="bg-gray-800 rounded-lg overflow-hidden text-center p-4 w-52 transform transition-transform hover:-translate-y-2">
          <Image
            src={food3}
            alt="Full Chicken Tandoori"
            className="rounded-lg"
            width={200}
            height={150}
          />
          <h3 className="text-lg text-white mt-3">Full Chicken Tandoori</h3>
          <p className="text-orange-500 text-sm">⭐⭐⭐⭐⭐</p>
        </div>

        {/* Food Item 8 */}
        <div className="bg-gray-800 rounded-lg overflow-hidden text-center p-4 w-52 transform transition-transform hover:-translate-y-2">
          <Image
            src={food4}
            alt="Full Chicken Tandoori"
            className="rounded-lg"
            width={200}
            height={150}
          />
          <h3 className="text-lg text-white mt-3">Full Chicken Tandoori</h3>
          <p className="text-orange-500 text-sm">⭐⭐⭐⭐⭐</p>
        </div>
      </div>
    </div>
  );
};

export default Section2;
