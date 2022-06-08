// import React from "react";
// import ReactDOM from "react-dom";
// import { card } from './card'
import { UserCard } from './userCard'

import { createRoot } from 'react-dom/client';
const container = document.getElementById('root');

const app = 
  <div>
    {/* {Card} */}
    {UserCard}
  </div>;
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(app);


// const rootElement = document.getElementById("root");

// ReactDOM.render(app, rootElement);
