import React, { Component } from "react";
import Modal from "./Modal";

export class App extends Component {
  state = {
    isModalOpen: false
  };

  openModal = () => this.setState({ isModalOpen: true });
  closeModal = () => this.setState({ isModalOpen: false });

  render() {
    const { isModalOpen } = this.state;
    return (
      <div>
        <div>{isModalOpen && <Modal onClick={this.closeModal} />}</div>
        <div>
          <button onClick={this.openModal}>open modal</button>
        </div>
      </div>
    );
  }
}

export default App;
