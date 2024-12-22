import { useSelector } from "react-redux";

const BagSummary = () => {
  const bagItemsId=useSelector(store=>store.bag)
  const items=useSelector(store=>store.items);

  const finalItems=items.filter((x)=>{
   const itemIndex=bagItemsId.includes(x.id)
   return itemIndex;
  })
    let totalItem= bagItemsId.lenth;
    let totalMRP= 0;
    let totalDiscoun= 0;
    const convinience_fee=99;

  finalItems.forEach((bagItem)=>{
    totalMRP+=bagItem.original_price;
    totalDiscoun+=bagItem.original_price - bagItem.current_price;
  });
  let finalPayment=totalMRP+convinience_fee-totalDiscoun;

  return (
    <div className="bag-summary">
      <div className="bag-details-container">
        <div className="price-header">
          PRICE DETAILS ({totalItem} Items){" "}
        </div>
        <div className="price-item">
          <span className="price-item-tag">Total MRP</span>
          <span className="price-item-value">₹{totalMRP}</span>
        </div>
        <div className="price-item">
          <span className="price-item-tag">Discount on MRP</span>
          <span className="price-item-value priceDetail-base-discount">
            -₹{totalDiscoun}
          </span>
        </div>
        <div className="price-item">
          <span className="price-item-tag">Convenience Fee</span>
          <span className="price-item-value">₹99</span>
        </div>
        <hr />
        <div className="price-footer">
          <span className="price-item-tag">Total Amount</span>
          <span className="price-item-value">₹ {finalPayment}</span>
        </div>
      </div>
      <button className="btn-place-order">
        <div className="css-xjhrni">PLACE ORDER</div>
      </button>
    </div>
  );
};

export default BagSummary;
