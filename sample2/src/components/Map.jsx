export const Map = () => {
  const names = ["Brian", "Paul", "Krug", "Halley"];
  const listItems = names.map((name, index) => <li key={index}>{name}</li>);
  return (
    <div>
      <ul>{listItems}</ul>
    </div>
  );
};
