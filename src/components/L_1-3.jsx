import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import { tomorrow as style } from "react-syntax-highlighter/dist/esm/styles/hljs";

const codeExample = `
import React from 'react';

const MyComponent = () => {
  return (
    <div>
      <h1>Hello, World!</h1>
    </div>
  );
};

export default MyComponent;
`;

const ReactComponentExp = () => {
  return (
    <div>
      <h2>React Component Example</h2>
      <SyntaxHighlighter language="jsx" style={style}>
        {codeExample}
        console.log(style);
      </SyntaxHighlighter>
    </div>
  );
};

export default ReactComponentExp;
