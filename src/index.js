import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'








/*


title

[---]
[---]
[---]
[---]

other
more

texts


*/




// const Item = (props) => {
//   console.log(props.i)
//   return (
//     <li className=''>
//       {props.i}
//     </li>
//   );
// }


// const CenterPanel = (props) => {
//   return (
//     <ul className="center-panel">
//       {
//         Array(props.i).fill(null).map((v, i) =>
//           <Item key={i} i={i}></Item>
//         )
//       }
//     </ul>
//   );
// }

// // ========================================

// const i = 20








// const ThingClass = (state, props) => {
//    return (

//    )
// };



class Clock extends React.Component {
  constructor(props) {
    super(props)
    this.state = { date: new Date() }
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    Object.assign({}, )
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <div className='panel col'>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    )
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Clock />);




// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<CenterPanel i={i} />);


