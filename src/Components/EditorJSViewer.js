import React, {useState } from "react";
import './EditorJSViewer.css'

function EditorJSView({ data, collapsed}) {
  const { EditorData, category_name, tag } = data;
  const { current } = EditorData;
  const { blocks } = current;
  return (
    <div className="bg-secondary bg-gradient w-100 p-2 rounded">
    <div className="d-flex justify-content-between mt-2">
    <div>
      <h6 className="text-start fs-3 text-dark fw-bold">Category: <span className="fst-italic">{category_name}</span></h6>
    </div>
    <div className="d-inline-flex align-items-center">

      <ul className="list-group list-group-horizontal">
        {tag.map((t) => (
          <li className="list-group-item ">{t}</li>
        ))}
      </ul>
    </div>
    </div>
      {blocks.map((block) => {
        switch (block.type) {
          case "header":
            {

            return <h1 className="fw-bold text-start text-dark">Question: {(collapsed)?"":<br/>}{block.data.text}</h1>;
            }
          case "paragraph":
            {
              return (collapsed) ? 
              <p className="text-light"><span className="text-dark fw-bold">Description: </span>{block.data.text.slice(0, 10)}...</p>:
              <p className="text-light"><span className="text-dark fw-bold">Description: </span><br/>{block.data.text}</p>;
            }
          default:
            return null;
        }
      })}
    </div>
  );
}

export default EditorJSView;