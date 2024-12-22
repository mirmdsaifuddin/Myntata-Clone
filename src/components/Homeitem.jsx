import { bagAction } from "../store/BagSlice";
import { useSelector,useDispatch } from "react-redux";

const Homeitem = ({ item }) => {
  const dispatch=useDispatch();
  const bagitem=useSelector(store=>store.bag)
  const elementFound=bagitem.includes(item.id)==true;
  

const handleAddTobag=()=>{
  dispatch(bagAction.addIToBag(item.id))
}
const handleRemoveFrombag=()=>{
  dispatch(bagAction.removeFromBag(item.id))
}
  return (
    <div className="item-container">
      <img className="item-image" src={item.image} alt="item image" />
      <div className="rating">
        {item.rating.stars} ⭐ | {item.rating.count}
      </div>
      <div className="company-name">{item.company}</div>
      <div className="item-name">{item.item_name}</div>
      <div className="price">
        <span className="current-price">Rs {item.current_price}</span>
        <span className="original-price">Rs {item.original_price}</span>
        <span className="discount">({item.discount_percentage}% OFF)</span>
      </div>
      {!elementFound ?<button
        className="btn-add-bag"
        onClick={handleAddTobag}
      >
        Add to Bag
      </button> : <button
        className="btn-remove-bag"
        onClick={handleRemoveFrombag}
      >
        Remove
      </button>}
      
      
    </div>
  );
};
export default Homeitem;
