import { useState } from "react";
import Item from "./item";

export default function PackingList({
  items,
  onDeleteItem,
  onToggleItems,
  onClearItems,
}) {
  const [sortBy, setSortBy] = useState("input");

  let sortedItems;

  if (sortBy === "input") sortedItems = items;
  if (sortBy === "description")
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  if (sortBy === "packed")
    sortedItems = items.slice.sort(
      (a, b) => Number(a.packed) - Number(b.packed)
    );
  return (
    <div className="list">
      <ul>
        {sortedItems.map((itemObj) => (
          <Item
            key={itemObj.id}
            onDeleteItem={onDeleteItem}
            onToggleItems={onToggleItems}
            item={itemObj}
          />
        ))}
      </ul>
      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">sort by input order</option>
          <option value="description">sort alphabetically</option>
          <option value="packed">sort by packed status</option>
        </select>
        <button onClick={onClearItems}>Clear List</button>
      </div>
    </div>
  );
}

// ///////////////////////
