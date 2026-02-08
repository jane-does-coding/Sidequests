"use client";

interface MenuItemProps {
	onClick: () => void;
	label: string;
}

const MenuItem = ({ onClick, label }: MenuItemProps) => {
	return (
		<div
			onClick={onClick}
			className="px-4 py-3 hover:bg-black/25 text-yellow-200 transition"
		>
			{label}
		</div>
	);
};

export default MenuItem;
