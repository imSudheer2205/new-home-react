// import React from 'react';
// import '../../App.css';

// // export default function SignUp() {
// //   return <h1 className='sign-up'></h1>;
// // }

// // export default function SignUp() {
// //     return <h1 className='sign-up'></h1>;
// // }

// export class Register extends React.Component {
//   constructor(props) {
//     super(props);
//   }

//   render() {
//     return (
//       <div className="reglogin" ref={this.props.containerRef}> 
//       <div className="base-container" ref={this.props.containerRef}>
//         <div className="header"><h3>Register</h3></div>
//         <div className="content">
//           {/* <div className="image">
//             <img src={loginImg} />
//           </div> */}
//           <div className="form">
//             <div className="form-group">
//               <label htmlFor="username">First Name</label>
//               <input type="text" name="username" placeholder="Enter your first name" />
//             </div>

//             <div className="form-group">
//               <label htmlFor="username">Last Name</label>
//               <input type="text" name="username" placeholder="Enter your last name" />
//             </div>
            
//             <div className="form-control">
//               <label htmlFor="gender">Gender</label>
              
//                 <td><input type="radio" value="Male" name="gender" /> Male </td>
//                 <td><input type="radio" value="Female" name="gender" /> Female </td>
//                 <td><input type="radio" value="Other" name="gender" /> Other </td>
              
//             </div>

//             <div className="form-group">
//               <label htmlFor="email">Email</label>
//               <input type="email" name="email" placeholder="Enter your email" />
//             </div>

//             <div className="form-group">
//               <label htmlFor="phone">Phone Number</label>
//               <input type="integer" name="username" placeholder="Enter your phone number" />
//             </div>

//             <div className="form-group">
//               <label htmlFor="password">Password</label>
//               <input type="password" name="password" placeholder="password" />
//             </div>
    

//           </div>
//         </div>
//         <div className="footer">
//           <button type="button" className="btn">
//             Register
//           </button>
//         </div>
//       </div>
//       </div>
//     );
//   }
// }

// export default Register;


import React from "react";
import "../../App.scss";
import { Login, Register } from "../login/index";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogginActive: true
    };
  }

  componentDidMount() {
    //Add .right by default
    this.rightSide.classList.add("right");
  }

  changeState() {
    const { isLogginActive } = this.state;

    if (isLogginActive) {
      this.rightSide.classList.remove("right");
      this.rightSide.classList.add("left");
    } else {
      this.rightSide.classList.remove("left");
      this.rightSide.classList.add("right");
    }
    this.setState(prevState => ({ isLogginActive: !prevState.isLogginActive }));
  }

  render() {
    const { isLogginActive } = this.state;
    const current = isLogginActive ? "Register" : "Login";
    const currentActive = isLogginActive ? "login" : "register";
    return (
      <div className="App">
        <div className="login">
          <div className="container" ref={ref => (this.container = ref)}>
            {isLogginActive && (
              <Login containerRef={ref => (this.current = ref)} />
            )}
            {!isLogginActive && (
              <Register containerRef={ref => (this.current = ref)} />
            )}
          </div>
          <RightSide
            current={current}
            currentActive={currentActive}
            containerRef={ref => (this.rightSide = ref)}
            onClick={this.changeState.bind(this)}
          />
        </div>
      </div>
    );
  }
}

const RightSide = props => {
  return (
    <div
      className="right-side"
      ref={props.containerRef}
      onClick={props.onClick}
    >
      <div className="inner-container">
        <div className="text">{props.current}</div>
      </div>
    </div>
  );
};

export default App;