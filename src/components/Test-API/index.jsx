import React, { Component } from "react";

export default class Test extends Component {
  state = {
    value: [],
    name: "",
    number: "",
    isModalOpen: false,
  };

  componentDidMount() {
    // localStorage.setItem(
    //   "value",
    //   JSON.stringify([
    //     { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
    //     { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
    //     { id: "id-3", name: "Eden Clements", number: "645-17-79" },
    //     { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    //   ])
    // );

    window.addEventListener("keydown", this.onKeyCloseModal);

    if (!this.state.value.length) {
      const value = JSON.parse(localStorage.getItem("value"));
      if (value) {
        this.setState({
          value,
        });
      }
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.value.length !== this.state.value.length) {
      localStorage.setItem("value", JSON.stringify(this.state.value));
    }
  }

  componentWillMount() {
    window.removeEventListener("keydown", this.onKeyCloseModal);
  }

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  onKeyCloseModal = (e) => {
    if (e.code === "Escape") {
      this.setState({ isModalOpen: false });
    }
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { name, number, value } = this.state;
    const post = {
      id: value.length,
      name,
      number,
    };
    this.setState((prevState) => ({
      value: [...prevState.value, post],
      name: "",
      number: "",
    }));
  };

  onOpenModal = () => this.setState({ isModalOpen: true });

  onCloseModal = (e) => {
    if (e.target.className !== "modal") {
      this.setState({ isModalOpen: false });
    }
  };

  render() {
    const { name, number, value, isModalOpen } = this.state;

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            name="name"
            type="text"
            value={name}
            onChange={this.handleChange}
          />
          <textarea
            name="number"
            cols="30"
            rows="10"
            value={number}
            onChange={this.handleChange}
          />
          <button type="submit">Send</button>
        </form>
        <ul>
          {value.map(({ id, name, number }) => (
            <li key={id}>
              <h3>{name}</h3> <p>{number}</p>
            </li>
          ))}
        </ul>
        <button onClick={this.onOpenModal}>Open modal</button>
        {isModalOpen && (
          <div
            style={{
              position: "absolute",
              top: "0",
              left: "0",
              width: "100vw",
              height: "100vh",
              backgroundColor: "rgba(0,0,0,0.5)",
            }}
            onClick={this.onCloseModal}
          >
            <div
              className="modal"
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "transalate(-50%,-50%)",
                backgroundColor: "white",
                padding: "50px",
              }}
            >
              {value.length ? value[0].name : "hothing"}
              <button onClick={this.onCloseModal}>X</button>
            </div>
          </div>
        )}
      </div>
    );
  }
}
