import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items, newItems }) {

  //for filter
  const [filterData, setFilterData] = useState({
    search: "",
    filter: "All"
  })

  function handleFilterChange(event) {
    let name = event.target.value;
    let value = event.target.value;

    setFilterData({
      ...filterData, [name]: value
    })
  }

  const itemsToDisplay = items.filter((item) => {

    if (filterData.filter === "All" && filterData.search === '') return true;

    if (filterData.filter === item.category && filterData.search === '') return true;

    if (filterData.filter === "All" && (item.name.toLowerCase().includes(filterData.search.toLowerCase()))) return true;

  });

  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={newItems} />
      <Filter onCategoryChange={handleFilterChange} onSearchChange={handleFilterChange} search={filterData.search} />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
