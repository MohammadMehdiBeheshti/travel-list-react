import { useState } from "react";

export default function Header({ itemHandler, items }) {
	const [description, setDescription] = useState("");
	const [quantity, setQuantity] = useState(1);

	function submissionHandler(e) {
		e.preventDefault();

		if (!description) return;

		const id = items.length ? items.at(items.length - 1).id + 1 : 1;
		const newItem = { id, description, quantity, packed: false };
		itemHandler(newItem);

		setDescription("");
		setQuantity(1);
	}

	return (
		<header className="bg-yellow pt-[4rem]">
			<div className="flex justify-center mb-[4rem]">
				<img src="./logo.svg" alt="logo" className="w-[44rem]" />
			</div>

			<form className="h-[10rem] bg-orange flex justify-center items-center" onSubmit={submissionHandler}>
				<p className="text-black text-lg mr-[2rem]">What do you need for your lovely trip?</p>

				<input
					type="number"
					placeholder="0"
					className="w-[5rem] mr-[2rem] text-center input"
					value={quantity}
					onInput={(e) => setQuantity(+e.currentTarget.value)}
				/>

				<input
					type="text"
					placeholder="Item..."
					className="w-[40rem] mr-[2rem] input"
					value={description}
					onInput={(e) => setDescription(e.currentTarget.value)}
					required
				/>

				<input type="submit" value="Add" className="btn w-[8rem] cursor-pointer" />
			</form>
		</header>
	);
}
