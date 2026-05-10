import { useState } from "react";

const ConditionalRendering = () => {
  return (
    <section>
      <h1>My Packing List</h1>
      <ul>
        <Item isPacked={true} value="Space suit" name="1" />
        <Item isPacked={true} value="Helmet with a golden leaf" name="2" />
        <Item isPacked={false} value="Photo of me" name="3" />
      </ul>
    </section>
  );
};

const Item = ({
  isPacked,
  name,
  value,
}: {
  isPacked: boolean;
  name: string;
  value: string;
}) => {
  const [isChecked, setIsChecked] = useState(isPacked);

  const handleCheckbox = () => {
    setIsChecked(!isChecked);
  };

  return (
    <>
      <input
        type="checkbox"
        name={name}
        checked={isChecked}
        onChange={handleCheckbox}
      />
      <li>{isChecked ? <del>{value}</del> : <span>{value}</span>}</li>
    </>
  );
};

export default ConditionalRendering;
