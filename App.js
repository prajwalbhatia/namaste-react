import React from "react";
import ReactDOM from "react-dom/client";

const Title = () => {
  return <h1>This is title component</h1>;
};

const Heading = () => {
  return (
    <div>
      <Title />
      <h1>This is heading component</h1>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<Heading/>);
