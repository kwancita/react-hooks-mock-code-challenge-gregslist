import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({lists, handleDelete}) {

  const allList = lists.map(list => {
    return <ListingCard 
      key={list.id} 
      id={list.id}
      description={list.description} 
      image={list.image} 
      location={list.location}
      handleDelete={handleDelete}
    />
  })

  return (
    <main>
      <ul className="cards">
        {allList}
      </ul>
    </main>
  );
}

export default ListingsContainer;
