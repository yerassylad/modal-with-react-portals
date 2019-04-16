import React, { Component } from "react";
import ReactDOM from "react-dom";

export class Modal extends Component {
  componentWillMount = () => {
    this.root = document.createElement("div");
    this.root.setAttribute("id", "react-portals-modal");
    document.body.appendChild(this.root);
  };

  componentWillUnmount = () => {
    document.body.removeChild(this.root);
  };

  render() {
    const { onClick } = this.props;
    return ReactDOM.createPortal(
      <div>
        <div
          style={{ position: "fixed", top: 0, left: 0, right: 0, bottom: 0 }}
        >
          <div
            style={{
              minHeight: "100%",
              display: "flex",
              justifyContent: "center",
              padding: "80px"
            }}
          >
            <div
              style={{
                alignSelf: "flex-start",
                flexGrow: 1,
                background: "tomato"
              }}
            >
              <div>Modal</div>
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <div>
                <button onClick={onClick}>close modal</button>
              </div>
            </div>
          </div>
        </div>
      </div>,
      this.root
    );
  }
}

export default Modal;
