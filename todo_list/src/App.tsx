import { useState } from "react";
import AddTask from "./components/AddTask";
import { MdDelete } from "react-icons/md";

const App = () => {
  // Stores the list of task strings
  const [tasks, setTasks] = useState<string[]>([]);
  // Tracks the checked state for each task
  const [isChecked, setIsChecked] = useState<boolean[]>([]);

  // Adds a new task and initializes its checked state to false
  const handleAddTask = (value: string) => {
    setTasks([...tasks, value]);
    setIsChecked([...isChecked, false]);
  };

  // Toggles the checked state of a task by index
  const toggle = (index: number) => {
    const newIsChecked = [...isChecked];
    newIsChecked[index] = !newIsChecked[index];
    setIsChecked(newIsChecked);
  };

  // Removes a task and its checked state by index
  const deleteMe = (index: number) => {
    const newTasks = [...tasks];
    const newIsChecked = [...isChecked];

    newTasks.splice(index, 1);
    setTasks(newTasks);

    newIsChecked.splice(index, 1);
    setIsChecked(newIsChecked);
  };

  return (
    <div className="flex flex-col w-full min-h-screen px-2 py-20 items-center gap-4">
      <div className="card flex flex-col w-full max-w-md min-h-[200px] p-4 rounded-lg shadow-lg">
        {/* Input component for adding new tasks */}
        <AddTask onAdd={handleAddTask} />
        {tasks.map((task, index) => {
          // Wrap task in <del> if checked, otherwise <span>
          const Wrapper = isChecked[index] ? "del" : "span";
          return (
            <div key={index}>
              <Wrapper
                className={`text-lg flex flex-row justify-between bg-emerald-200 my-2 rounded-md py-2 px-4 text-gray-800 `}
              >
                <span
                  className={` ${Wrapper === "del" ? "text-violet-700" : ""} `}
                >
                  {task}
                </span>
                <span className="flex flex-row items-center gap-3">
                  <input
                    type="checkbox"
                    checked={isChecked[index]}
                    onChange={() => toggle(index)}
                  />
                  <MdDelete onClick={() => deleteMe(index)} />
                </span>
              </Wrapper>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default App;
