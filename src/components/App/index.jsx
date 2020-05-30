import React from "react";
import { Route, Switch, Redirect, Link } from "react-router-dom";
import Main from "../../pages/Main";
import About from "../../pages/About";
import Articles from "../../pages/Articles";

const App = (props) => (
  <>
    <h3>Agenda</h3>
    <ul>
      <li>
        <Link to="/">Main</Link>
      </li>
      <li>
        <Link to="/articles">Articles</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
    </ul>
    <Switch>
      <Route path="/" exact component={Main} />
      <Route path="/about" component={About} />
      <Route path="/articles" component={Articles} />
      <Redirect to="/" />
    </Switch>
  </>
);

export default App;

// const Gender = {
//   MALE: "MALE",
//   FEMALE: "FEMALE",
// };

// const initialState = {
//   name: "",
//   email: "",
//   password: "",
//   isAgree: false,
//   gender: null,
//   age: "",
// };

// export default class Form extends Component {
//   state = { ...initialState };

//   hanbleChange = ({ target: { name, value, type, checked } }) => {
//     this.setState({
//       [name]: type === "checkbox" ? checked : value,
//     });
//   };

//   hanbleSubmit = (e) => {
//     e.preventDefault();
//     this.props.onSendForm();
//     this.resetForm();
//   };

//   resetForm = () => {
//     this.setState({ ...initialState });
//   };

//   render() {
//     return (
//       <form onSubmit={this.hanbleSubmit}>
//         <label htmlFor="01">
//           Name
//           <input
//             type="text"
//             name="name"
//             id="01"
//             value={this.state.name}
//             onChange={this.hanbleChange}
//           />
//         </label>

//         <label htmlFor="01">
//           E-mail
//           <input
//             type="email"
//             name="email"
//             id="02"
//             value={this.state.email}
//             onChange={this.hanbleChange}
//           />
//         </label>

//         <label htmlFor="01">
//           Password
//           <input
//             type="password"
//             name="password"
//             id="03"
//             value={this.state.password}
//             onChange={this.hanbleChange}
//           />
//         </label>
//         <label>
//           Yes/No
//           <input
//             type="checkbox"
//             name="isAgree"
//             checked={this.state.isAgree}
//             onChange={this.hanbleChange}
//           />
//         </label>

//         <section>
//           <h2> Choose gender</h2>
//           <label>
//             Male
//             <input
//               type="radio"
//               name="gender"
//               checked={this.state.gender === Gender.MALE}
//               value={Gender.MALE}
//               onChange={this.hanbleChange}
//             />
//           </label>
//           <label>
//             Female
//             <input
//               type="radio"
//               name="gender"
//               checked={this.state.gender === Gender.FEMALE}
//               value={Gender.FEMALE}
//               onChange={this.hanbleChange}
//             />
//           </label>
//         </section>

//         <label>
//           Choose your isAgree
//           <select
//             name="age"
//             value={this.state.age}
//             onChange={this.hanbleChange}
//           >
//             <option value="" disabled>
//               ...
//             </option>
//             <option value="18-25">18-25</option>
//             <option value="26-35">26-35</option>
//             <option value="35+">35+</option>
//           </select>
//         </label>

//         <button type="submit" disabled={!this.state.isAgree}>
//           Submit
//         </button>
//       </form>
//     );
//   }
// }

// const Counter = ({ changeValue }) => (
//   <>
//     <button name="decrease" onClick={changeValue}>
//       Click
//     </button>
//   </>
// );

// class Test extends React.Component {
//   state = {
//     value: 0,
//   };

//   increaseValue = () =>
//     this.setState((prevState) => ({
//       value: prevState.value + 1,
//     }));

//   render() {
//     return (
//       <>
//         <div>Button {this.state.value}</div>
//         <Counter changeValue={this.increaseValue} />
//       </>
//     );
//   }
// }

// export default Test;
