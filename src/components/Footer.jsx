export default function Footer({ items, handleSorting, handleClearList }) {
	const numOfItems = items.length;
	const numOfPackedItems = items.filter((eachItem) => eachItem.packed).length;
	const percentage = Math.round((numOfPackedItems / numOfItems) * 100);

	return (
		<footer className="w-full absolute bottom-0">
			<div className="flex justify-center mb-[2rem]">
				<select className="mr-[1rem] mini-btn" onChange={(e) => handleSorting(e.currentTarget.value)}>
					<option value="input">Sort By Input Order</option>
					<option value="description">Sort By Description</option>
					<option value="packed">Sort By Packed Status</option>
				</select>

				<button className="mini-btn" onClick={handleClearList}>
					Clear List
				</button>
			</div>

			<div className="bg-green h-[8rem] flex justify-center items-center text-black text-lg">
				<p className="italic">
					{percentage === 100 ? (
						<span>You Got Everything! Ready To Travel</span>
					) : (
						<span>
							You have {numOfItems} items on your list, and you already packed {numOfPackedItems} (
							{percentage ? percentage : 0}%)
						</span>
					)}
				</p>
			</div>
		</footer>
	);
}
