import { memo, useEffect } from "react";

const MemoChild = ({ count }: { count: number }) => {
	useEffect(() => {
		console.log("Child rendered");
	});

	return <div>Child {count}</div>;
};

// Memoize the child component so it only re-renders when `count` changes.
const enhancedMemoChild = memo(MemoChild);
export default enhancedMemoChild;
