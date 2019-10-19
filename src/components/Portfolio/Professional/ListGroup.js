import React from "react";

const ListGroup = ({ onBtnPress, state }) => {
    return (
      <div className="list-group">
        <button
          onClick={() => onBtnPress(1)}
          className="list-group-item list-group-item-action"
        >
          <strong className={"underline " + state.underline1}>
            Digital Circular React App
          </strong>
        </button>

        <button
          onClick={() => onBtnPress(2)}
          className="list-group-item list-group-item-action"
        >
          <strong className={"underline " + state.underline2}>
            Lowes Foods Fall Landing Page
          </strong>
        </button>

        <button
          onClick={() => onBtnPress(3)}
          className="list-group-item list-group-item-action"
        >
          <strong className={"underline " + state.underline3}>
            Dollar General Halloween Landing Page
          </strong>
        </button>

        <button
          onClick={() => onBtnPress(4)}
          className="list-group-item list-group-item-action"
        >
          <strong className={"underline " + state.underline4}>
            Lowes HTML Node Script
          </strong>
        </button>

        <button
          onClick={() => onBtnPress(5)}
          className="list-group-item list-group-item-action"
        >
          <strong className={"underline " + state.underline5}>
            Dollar General Halloween Landing Page
          </strong>
        </button>

        <button
          onClick={() => onBtnPress(6)}
          className="list-group-item list-group-item-action"
        >
          <strong className={"underline " + state.underline6}>
            Dollar General Halloween Landing Page
          </strong>
        </button>
      </div>
    );
}

export default ListGroup;
