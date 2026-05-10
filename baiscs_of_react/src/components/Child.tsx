/* 
    Child component that receives a function as a prop and calls it when the button is clicked. This is an example of how to pass data from a child component to a parent component using a callback function.
*/

export const Child = ({ onChildClick }: { onChildClick: () => void }) => {
  return (
    <div>
      <button
        onClick={() => {
          onChildClick();
        }}
      >
        decrease
      </button>
    </div>
  );
};
