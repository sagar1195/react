import { useState } from "react";

// Static list of tasks to display
const TaskList = ["Task 1", "Task 2", "Task 3", "Task 4", "Task 5"];

const Task = () => {
  // Track checked state for each task, initialized to false
  const [isChecked, setIsChecked] = useState<boolean[]>(Array(TaskList.length).fill(false));

  // Toggles the checked state of a task by index
  const toggle = (index: number) => {
    const newIsChecked = [...isChecked];
    newIsChecked[index] = !newIsChecked[index];
    setIsChecked(newIsChecked);
  };

  return (
    <div>
      {TaskList.map((task, index) => {
        // Wrap task in <del> if checked, otherwise <span>
        const Wrapper = isChecked[index] ? "del" : "span";
        return (
          <div key={index}>
            <Wrapper>
              {task}
              <input type="checkbox" checked={isChecked[index]} onChange={() => toggle(index)} />
            </Wrapper>
          </div>
        );
      })}
    </div>
  );
};

export default Task;
