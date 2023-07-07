import { useState } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

export default function App() {
	const [items, setItems] = useState([]);

	function itemHandler(item) {
		setItems((i) => [...i, item]);
	}

	function handleDelete(id) {
		setItems((i) => [...i.filter((eachItem) => eachItem.id !== id)]);
	}

	function handlePacked(id) {
		setItems((i) => i.map((eachItem) => (eachItem.id === id ? { ...eachItem, packed: !eachItem.packed } : eachItem)));
	}

	function handleSorting(mode = "input") {
		let sortedItems = [];
		if (mode === "input") {
			sortedItems = [...items].sort((a, b) => a.id - b.id);
		} else if (mode === "description") {
			sortedItems = [...items].sort((a, b) => a.description.localeCompare(b.description));
		} else if (mode === "packed") {
			sortedItems = [...items].sort((a, b) => +a.packed - +b.packed);
		}

		setItems(sortedItems);
	}

	function handleClearList() {
		const confirmation = window.confirm("Are you sure about taking this action?");
		if (confirmation) setItems([]);
	}

	return (
		<>
			<Header itemHandler={itemHandler} items={items} />
			<Main items={items} handleDelete={handleDelete} handlePacked={handlePacked} />
			<Footer items={items} handleSorting={handleSorting} handleClearList={handleClearList} />
		</>
	);
}
