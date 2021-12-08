import React, {useState, useEffect} from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [list, setList] = useState([])
  const [search, setSearch] = useState("")

  useEffect(()=>{
    fetch("http://localhost:6001/listings")
    .then(res=>res.json())
    .then(setList)
  },[])

  function handleDelete(listID){
    const updateList = list.filter(l=>l.id !== listID.id)
    fetch(`http://localhost:6001/listings/${listID.id}`,{
      method: "DELETE"
    })
    setList(updateList)
  }

  const displayList = list.filter((l) => l.description.toLowerCase().includes(search.toLowerCase()))
  return (
    <div className="app">
      <Header search={search} setSearch={setSearch} />
      <ListingsContainer lists={displayList} onDelete={handleDelete} />
    </div>
  );
}

export default App;
