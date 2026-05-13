import { createContext, useContext, useState } from "react";

type MycontextType = {
	count: number;
	setCount: React.Dispatch<React.SetStateAction<number>>;
};

const defaultValue: MycontextType = {
	count: 0,
	setCount: () => {},
};

const Mycontext = createContext(defaultValue);

const useMyContext = () => {
	return useContext(Mycontext);
};

const MyContextProvider = ({ children }: { children: React.ReactNode }) => {
	const [count, setCount] = useState(0);
	const value = {
		count,
		setCount,
	};
	return <Mycontext.Provider value={value}>{children}</Mycontext.Provider>;
};

export { MyContextProvider, useMyContext };
