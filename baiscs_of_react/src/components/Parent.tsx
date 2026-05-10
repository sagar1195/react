/*
In this example, we have a Parent component that receives two props: greeting and name. The Parent component then passes these props down to the Child component, which in turn passes them down to the GrandChild component. Finally, the GrandChild component renders the greeting and name.
 */

const Parent = ({ greeting, name }: { greeting: string; name: string }) => {
  return <Child greeting={greeting} name={name} />;
};

const Child = ({ greeting, name }: { greeting: string; name: string }) => {
  return <GrandChild greeting={greeting} name={name} />;
};

const GrandChild = ({ greeting, name }: { greeting: string; name: string }) => {
  return (
    <div>
      {greeting}, {name}
    </div>
  );
};

export default Parent;
