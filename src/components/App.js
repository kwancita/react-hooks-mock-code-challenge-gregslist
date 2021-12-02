import React, {useState, useEffect} from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {

  const [lists, setLists] = useState([])
  const [search, setSearch] = useState("");

  useEffect(()=>{
    fetch("http://localhost:6001/listings")
    .then(res => res.json())
    .then(items => setLists(items))
  },[])

  function handleDelete(id){
    const updateDelete = lists.filter(list => list.id !== id)
    setLists(updateDelete)
  }

  const displayedListings = lists.filter((list) =>
    list.description.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="app">
      <Header onSearch = {setSearch}/>
      <ListingsContainer lists={displayedListings} handleDelete={handleDelete}/>
    </div>
  );
}

export default App;
