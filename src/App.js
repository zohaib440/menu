// new Set is used to get unique values for catogory so that we will not get repeating values
// const allCategories = ["all", ...new Set(items.map((item) => item.category))];
// in the above line we are iterating an array of value "all" and all catepries uniquely
// import React, { useState } from "react";
// import Menu from "./Menu";
// import Categories from "./Categories";
// import items from "./data";

// const allCategories = ["all", ...new Set(items.map((item) => item.category))];
// console.log(allCategories);

// function App() {
//   const [menuItems, setMenuItems] = useState(items);
//   const [categories, setCategories] = useState(allCategories);

//   const filterItems = (category) => {
//     if (category === "all") {
//       setMenuItems(items);
//       return;
//     }

//     const newItems = items.filter((item) => item.category === category);
//     setMenuItems(newItems);
//   };

//   return (
//     <main>
//       <section className="menu section">
//         <div className="title">
//           <h2>Our menu</h2>
//           <div className="underline"></div>
//         </div>
//         <Categories filterItems={filterItems} categories={categories} />
//         <Menu items={menuItems} />
//       </section>
//     </main>
//   );
// }

// export default App;

import React, { useState } from "react";
import items from "./data";
import Menu from "./Menu";
import Categories from "./Categories";

// in order to get the unique categories to create buttons
const allCategories = ["all", ...new Set(items.map((item) => item.category))];
console.log(allCategories);

const App = () => {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    if (category === "all") {
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
  };
  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>our menu</h2>
          <div className="underline"></div>
        </div>
        <Categories filterItems={filterItems} categories={categories} />
        <Menu items={menuItems} />
      </section>
    </main>
  );
};

export default App;
