import React, { useState } from 'react';
import Item from "./Item";

function ShoppingList({ items }) {

  const [selectedCategory,setCat] = useState("All")

  function handleSelect(event) {
    setCat(event.target.value)
  }

  const itemsFiltered = items.filter((item) => {
    if (selectedCategory === "All") return true;
    
    return  selectedCategory === item.category
  })

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={handleSelect}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {itemsFiltered.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
