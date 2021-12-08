import React,{useState} from "react";

function ListingCard({list, onDelete}) {
  const {description, image, location} = list
  const [star, setStar] = useState(false)

  function handleClick(){
    setStar(!star)
  }

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={description} />
      </div>
      <div className="details">
        {star ? (
          <button onClick={handleClick} className="emoji-button favorite active">★</button>
        ) : (
          <button onClick={handleClick} className="emoji-button favorite">☆</button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button className="emoji-button delete" onClick={()=>onDelete(list)} >🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
