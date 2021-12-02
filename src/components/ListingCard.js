import React, {useState} from "react";

function ListingCard({id,description,image,location,handleDelete}) {

  const [like, setLike] = useState(false)
  const btnClass = like? "emoji-button favorite active" : "emoji-button delete"

  function toggleLike(){
    setLike(!like)
  }

  

  function handleClick(){
    fetch(`http://localhost:6001/listings/${id}`, {
      method: "DELETE",
    })
    .then(() => handleDelete(id));
  }

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={description} />
      </div>
      <div className="details" >
        <button className={btnClass} onClick = {toggleLike}>{like? "★" : "☆" }</button>
        <strong>{description}</strong>
        <span> · {location}</span>
        <button className="emoji-button delete" onClick={handleClick}>🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
