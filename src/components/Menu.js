// components/Menu.jsx
import React from "react";

const Menu = () => {
  const menuItems = [
    {
      name: "Bhat ki Churkani",
      image: "https://images.herzindagi.info/image/2022/Mar/easy-recipe-bhatt-ki-churkani.jpg",
      description: "Delicious homemade roti served hot."
    },
    {
      name: "Madua Roti",
      image: "https://images.herzindagi.info/image/2023/Jan/how-to-eat-ragi-for-weight-loss.jpg",
      description: "Tasty dal cooked with authentic spices."
    },
    {
      name: "Gahat ki Dal",
      image: "https://5.imimg.com/data5/SELLER/Default/2021/12/BM/TH/DO/139498813/gahat-ki-dal-500x500.jpg",
      description: "Aromatic biryani with layers of flavor."
    },
    {
      name: "Hhangore ki Kheer",
      image: "https://img-global.cpcdn.com/recipes/085041be6e44bd66/680x482cq70/%E0%A4%9B%E0%A4%97%E0%A4%B0-%E0%A4%95-%E0%A4%96%E0%A4%B0-jhangore-ki-kheer-recipe-in-hindi-%E0%A4%B0%E0%A4%B8%E0%A4%AA-%E0%A4%AE%E0%A4%96%E0%A4%AF-%E0%A4%A4%E0%A4%B8%E0%A4%B5%E0%A4%B0.jpg",
      description: "A spicy, savory mix of potatoes and cauliflower."
    },
    {
      name: "Bhat ki Dubuk",
      image: "https://i.ytimg.com/vi/Gz_leJLEZxE/maxresdefault.jpg",
      description: "Sweet fried dumplings soaked in sugar syrup."
    },
    {
      name: "Aalu ke Gutke",
      image: "https://www.funfoodfrolic.com/wp-content/uploads/2020/09/Aloo-Gutka-Thumbnail.jpg",
      description: "Grilled cottage cheese with spices."
    },
    {
      name: "Muli ki Thechua",
      image: "https://i.ytimg.com/vi/I0Li0U0bOhA/maxresdefault.jpg",
      description: "Creamy chicken cooked in tomato-based gravy."
    },
    {
      name: "Phaanu",
      image: "https://pulses.org/images/com_yoorecipe/Uttarakhand_phaanu-1513.jpg",
      description: "A classic combination of spicy chickpeas and deep-fried bread."
    },
    {
      name: "Bal Mithai",
      image: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Bal_mithai.jpg",
      description: "Fried pastry stuffed with spiced potatoes and peas."
    },
  ];

  return (
    <section id="menu" className="py-16 px-6 bg-white">
      <div className="max-w-screen-xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-8">Our Delicious Menu</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuItems.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-52 object-cover"
              />
              <div className="p-4">
                <h3 className="text-2xl font-semibold text-gray-800 mb-3">{item.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;
