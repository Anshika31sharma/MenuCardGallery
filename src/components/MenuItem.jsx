import React from 'react';
import { Element } from 'react-scroll';
import DropDown from "./DropDown";

const MenuItem = ({ image, name, description, price }) => {


  return (
    <div> {/* Wrap the JSX inside a single parent element */}
      <DropDown/>
      <div className="bg-white rounded-lg shadow-md overflow-hidden w-full mx-2  lg:mx-auto max-w-4xl">
        <img src={image} alt={name} className="w-full h-52 object-cover" />
        <div className="p-4">
          <h2 className="text-lg font-bold">{name}</h2>
          <p className="text-gray-600 text-sm">{description}</p>
          <div className=' flex justify-between'>
            <p className="text-lg font-semibold">Rs {price}</p>
            <button className='bg-gray-700 text-white font-bold rounded-full p-2' onClick={() => addToCart({ image, name, description, price })}>Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};


const Beverages = ({ addToCart }) => {
  const beverages = [
    {id:1, image: 'https://d3nn873nee648n.cloudfront.net/900x600/14449/14-SQ538499.jpg', name: 'Spicy Tea', description: 'A perfect blend of loose leaf Ceylon tea, creamy milk, and  caramel-y sweetness.', price: 25 },
    { id:2, image: 'https://d3nn873nee648n.cloudfront.net/900x600/20524/300-PA1050849.jpg', name: 'Coffee', description: 'Made from the best coffee grounds, this cup of joe will kick start your day!', price: 25 },
    {id:3,  image: 'https://d3nn873nee648n.cloudfront.net/900x600/15351/220-SM625910.jpg', name: 'Fresh Juice', description: 'A refreshing glass of freshly squeezed juice, made with real fruit.', price: 50 },
    {id:4,  image: 'https://d3nn873nee648n.cloudfront.net/900x600/16983/1-ES739031.jpg', name: 'Milkshake', description: 'A creamy and delicious drink made with milk, ice cream, and your choice of flavor.', price: 100 },
  ];

  return (
    <div>
      <h2 className="text-2xl font-bold mb-5 mt-52  lg:mt-20 text-center">Beverages</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mx-4 lg:mx-12">
        {beverages.map((item) => (
          <MenuItem key={item.id} {...item} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
};

const Starters = ({ addToCart }) => {
  const starters = [
    { id:5, image: 'https://d3nn873nee648n.cloudfront.net/900x600/19023/120-SM889137.jpg', name: 'Samosa', description: 'A popular fried pastry with a savory filling, such as spiced potatoes, onions, peas.', price: 50 },
    { id:6, image: 'https://d3nn873nee648n.cloudfront.net/900x600/14134/120-EA444748.jpg', name: 'Pakora', description: 'A fried fritter from South Asian cuisine, common in India, Pakistan, and Bangladesh.', price: 60 },
    { id: 7, image: 'https://d3nn873nee648n.cloudfront.net/900x600/6357/20-SM156305.jpg', name: 'Spring Roll', description: 'A savory roll with various fillings, wrapped in a thin pastry and deep-fried.', price: 70 },
    {id:8 , image: 'https://d3nn873nee648n.cloudfront.net/900x600/16561/11-EV710184.jpg', name: 'Cutlet', description: 'A breaded and deep-fried patty, often made with meat, fish, or vegetables.', price: 80 },
  ];

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4 text-center">Starters</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mx-4 lg:mx-12">
        {starters.map((item, index) => (
          <MenuItem key={item.id} {...item} addToCart={addToCart}/>
        ))}
      </div>
    </div>
  );
};

const MainCourse  = ({ addToCart }) => {
  const mainCourse = [
    {id:9,  image: 'https://d3nn873nee648n.cloudfront.net/900x600/19037/220-SM890131.jpg', name: 'Biryani', description: 'A mixed rice dish with its origins among the Muslims of the Indian subcontinent.', price: 250 },
    {id:10, image: 'https://d3nn873nee648n.cloudfront.net/900x600/20091/220-SY987935.jpg', name: 'Curry', description: 'A variety of dishes originating from the Indian subcontinent.', price: 300 },
    {id:11, image: 'https://d3nn873nee648n.cloudfront.net/900x600/16636/120-DO716758.jpg', name: 'Pizza', description: 'A savory dish of Italian origin, consisting of  tomatoes, cheese.', price: 400 },
    {id:12, image: 'https://d3nn873nee648n.cloudfront.net/900x600/6059/20-SM147827.jpg', name: 'Burger', description: 'A sandwich consisting of one or more cooked patties of a sliced bread roll or bun.', price: 150 },
  ];

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4 text-center">Main Course</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mx-4 lg:mx-12">
        {mainCourse.map((item, index) => (
          <MenuItem key={item.id} {...item} addToCart={addToCart}/>
        ))}
      </div>
    </div>
  );
};

const Soup  = ({ addToCart }) => {
  const soups = [
    { id:13, image: 'https://d3nn873nee648n.cloudfront.net/900x600/3365/19-SM110408.jpg', name: 'Tomato Soup', description: 'A soup made from tomatoes, often with other ingredients such as vegetables, herbs, and spices.', price: 150 },
    {id:14, image: 'https://d3nn873nee648n.cloudfront.net/900x600/16994/1-ES739318.jpg', name: 'Cream of Mushroom Soup', description: 'A creamy soup made with mushrooms and often other ingredients such as vegetables, herbs, and spices.', price: 180 },
    { id:15, image: 'https://d3nn873nee648n.cloudfront.net/900x600/10761/10-SP305628.jpg', name: ' Noodle Soup', description: 'Noodle soup refers to a variety of soups with noodles and other ingredients served in a light broth', price: 200 },
  ];

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4 text-center">Soups</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mx-4 lg:mx-12">
        {soups.map((item, index) => (
          <MenuItem key= {item.id} {...item} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
};

const Desserts  = ({ addToCart }) => {
  const desserts = [
    {id:16,  image: 'https://d3nn873nee648n.cloudfront.net/900x600/17042/220-SM741544.jpg', name: 'Ice Cream', description: 'Rich and creamy ice cream available in various flavors.', price: 120 },
    { id:17, image: 'https://d3nn873nee648n.cloudfront.net/900x600/19094/120-MZ895589.jpg', name: 'Cake', description: 'Soft, moist cake layered with frosting and topped with decorations.', price: 150 },
    {id:18,  image: 'https://d3nn873nee648n.cloudfront.net/900x600/17323/5-GB764287.jpg', name: 'Pie', description: 'Sweet pie filled with fresh fruit or creamy fillings encased in flaky pastry.', price: 130 },
    {id:19, image: 'https://d3nn873nee648n.cloudfront.net/900x600/17318/1-GB763953.jpg', name: 'Pudding', description: 'Smooth and creamy pudding made with vanilla, chocolate, or butterscotch flavors.', price: 100 },
  ];

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4 text-center">Desserts</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mx-4 lg:mx-12">
        {desserts.map((item, index) => (
          <MenuItem key={item.id} {...item} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
};

const Menu = () => {
  // Define the addToCart function here
  const addToCart = (item) => {
    // Implement your logic to add the item to the cart
    console.log('Item added to cart:', item);
  };

  return (
    <div className="space-y-12">
      <Element name="beverages"><Beverages addToCart={addToCart} /></Element>
      <Element name="starters"><Starters addToCart={addToCart} /></Element>
      <Element name="mainCourse"><MainCourse addToCart={addToCart} /></Element>
      <Element name="soup"><Soup addToCart={addToCart} /></Element>
      <Element name="desserts"><Desserts addToCart={addToCart} /></Element>
    </div>
  );
};

export default Menu;
