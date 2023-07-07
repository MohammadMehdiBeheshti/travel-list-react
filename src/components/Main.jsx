/* eslint-disable no-mixed-spaces-and-tabs */
import Item from "./Item";

export default function Main({ items, handleDelete, handlePacked }) {
	return (
		<main className="contain mt-[2%] h-[30rem]">
			<ul className="flex justify-center items-center flex-wrap gap-[2rem] h-full overflow-y-scroll">
				{items.length
					? items.map((eachItem) => (
							<Item info={eachItem} handleDelete={handleDelete} handlePacked={handlePacked} key={eachItem.id} />
					  ))
					: null}
			</ul>
		</main>
	);
}
