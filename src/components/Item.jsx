export default function Item({ info, handleDelete, handlePacked }) {
	const { id, description, quantity, packed } = info;

	return (
		<li className="flex items-center p-[1rem] def-border">
			<p className="mr-[8rem] text-lightYellow text-lg" style={packed ? { textDecoration: "line-through" } : null}>
				<span>{quantity}</span> {description}
			</p>

			<div className="flex items-center">
				<input
					type="checkbox"
					className="w-[2.5rem] h-[2.5rem] outline-none border-none accent-lightYellow cursor-pointer"
					onChange={() => handlePacked(id)}
				/>

				<button className="w-[2.4rem] h-[2.4rem] bg-lightYellow ml-[0.5rem] rounded-1" onClick={() => handleDelete(id)}>
					<img src="./close.svg" alt="Close Svg" className="w-full" />
				</button>
			</div>
		</li>
	);
}
