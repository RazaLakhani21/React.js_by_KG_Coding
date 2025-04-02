import FoodInput from "./FoodInput";
import Item from "./Item";

function FoodItems({ items }) {
  return (
    <>
      <ul className="list-group">
        {items.map((item) => (
          <Item
            key={item}
            foodItem={item}
            handleBuyButton={() => {
              console.log(`${item} is bought`);
            }}
          >
            </Item>
        ))}
      </ul>
    </>
  );
}

export default FoodItems;
