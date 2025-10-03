import { useState } from "react";
import { foods, filterItems } from "./data.js";

export default function FilterableList() {
  const [query, setQuery] = useState("");

  return (
    <>
      <SearchBar onChange={(e) => setQuery(e.target.value)} query={query} />
      <hr />
      <List items={foods} query={query} />
    </>
  );
}

function SearchBar({ onChange, query }) {
  return (
    <label>
      Search: <input value={query} onChange={(e) => onChange(e)} />
    </label>
  );
}

function List({ items, query }) {
  const filteredItems = filterItems(items, query);
  return (
    <table>
      <tbody>
        {filteredItems.map((food) => (
          <tr key={food.id}>
            <td>{food.name}</td>
            <td>{food.description}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
