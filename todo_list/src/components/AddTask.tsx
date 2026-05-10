import { useRef } from "react";

const AddTask = ({ onAdd }: { onAdd: (value: string) => void }) => {
  const inputTask = useRef<HTMLInputElement>(null);
  const handleTask = () => {
    if (
      inputTask.current?.value !== "" &&
      inputTask.current?.value !== undefined
    ) {
      onAdd(inputTask.current.value);
      inputTask.current.value = "";
      inputTask.current.focus();
      return;
    } else {
      alert("Please enter a task");
      return;
    }
  };
  return (
    <div className="flex flex-row justify-between gap-2">
      <input
        type="text"
        placeholder="Enter task"
        ref={inputTask}
        onKeyDown={(e) => e.key === "Enter" && handleTask()}
        className="
      w-full bg-amber-100 border-2 border-gray-100 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500
      "
      />
      <button
        onClick={handleTask}
        className="w-auto min-w-[100px] px-4 py-2 bg-blue-500 text-white rounded"
      >
        Add Task
      </button>
    </div>
  );
};

export default AddTask;
