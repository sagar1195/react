import { memo, useEffect } from "react";

// Wrapped in memo so this child only re-renders when props change.
const ChildUseCallback = ({ handleClick }: { handleClick: () => void }) => {
	useEffect(() => {
		console.log("ChildUseCallback render", handleClick);
	});

	return <div>ChildUseCallback</div>;
};

export default memo(ChildUseCallback);
