function Child() {
  return <div>This is children content</div>;
}

function Parent({ children }) {
  return (
    <div>
      <h3>Parent Component</h3>
      {children}
    </div>
  );
}

export const ShowChildinParent = () => {
  return (
    <div>
      <Parent>
        <Child />
      </Parent>
    </div>
  );
};
