import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({lists, onDelete}) {
  const allList = lists.map(list => (
    <ListingCard key = {list.id} list={list} onDelete={onDelete} />
  ))
  return (
    <main>
      <ul className="cards">
        {allList}
      </ul>
    </main>
  );
}

export default ListingsContainer;
