import { useState } from "react";
import Logo from "./logo";
import Form from "./form";
import PackingList from "./packing-list";
import Stats from "./stats";

export default function App() {
  const [items, setItems] = useState([]);
  function handleClearItems() {
    const confirmed = window.confirm(
      "Are you sure you want to delete all items?"
    );
    if (confirmed) setItems([]);
  }
  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }

  function handleToggleItems(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : items
      )
    );
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onToggleItems={handleToggleItems}
        onClearItems={handleClearItems}
      />
      <Stats items={items} />
    </div>
  );
}
