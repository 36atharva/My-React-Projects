import { useState } from "react";

const List = () => {
  const [items, setItems] = useState([]);

  function onSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const input = form.item;
    const newItem = [...items, input.value];
    setItems(newItem);
    form.reset();
  }

  function onRemoveItem(itemToRemove) {
    const newItems = items.filter((item) => {
      return item !== itemToRemove;
    });
    setItems(newItems);
  }

  return (
    <div className='shop'>
      <p className='headline'>Items to buy today</p>
      <form autoComplete='off' onSubmit={onSubmit} className='form'>
        <input required type='text' name='item' />
        <button className='btn'>Add</button>
      </form>
      <ul className='ul'>
        {items.map((item, index) => (
          <Item onRemoveItem={onRemoveItem} item={item} key={index} />
        ))}
      </ul>
    </div>
  );
};

function Item({ item, onRemoveItem }) {
  return (
    <div className='listt'>
      <li className='items'>
        {item}{" "}
        <span className='delete' onClick={() => onRemoveItem(item)}>
          X
        </span>
      </li>
    </div>
  );
}

export default List;
