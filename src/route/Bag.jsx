import { useSelector } from "react-redux";
import Bagitem from "../components/Bagitem";
import BagSummary from "../components/BagSummary";

const Bag = () => {
  const bagItem=useSelector(store=>store.bag);
  const items=useSelector(store=>store.items);
  const finalItems=items.filter((x)=>{
    let itemindex=bagItem.includes(x.id)
    return itemindex;
  }
  )
  return (
    <>
      <main>
        <div className="bag-page">
          {finalItems.map(item=><Bagitem item={item}></Bagitem>)}
           

          <BagSummary></BagSummary>
          
        </div>
      </main>
    </>
  );
};
export default Bag;
