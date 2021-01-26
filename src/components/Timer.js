import React, { useState, useEffect } from 'react'

export default function Timer(props) {

    console.log(props.resetTimer);

    const [seconds, setSeconds] = useState(15);

    useEffect(() => {
        if (seconds < 1) {
            return;
        } else if(props.resetTimer) {
                setSeconds(props.time);
                return;
        }
        const timeout = setTimeout(() => {
            setSeconds((s) => s - 1);
        }, 1000)
        return () => clearTimeout(timeout)
    }, [seconds, props.starter])


    return (
        
            <div className="time">
                {props.timerText} {seconds}
            </div>

    );
}



// import React from 'react'
// import ReactDOM from 'react-dom';

// class Timer extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = { seconds: 0 };
//     }

//     tick() {
//         this.setState(state => ({
//             seconds: state.seconds + 1
//         }));
//     }

//     componentDidMount() {
//         this.interval = setInterval(() => this.tick(), 1000);
//     }

//     sayHello() {
//         console.log("Hello");
//     }

//     componentWillUnmount() {
//         clearInterval(this.interval);
//     }



//     render() {
//         return (
//             <div>
//                 Seconds: {this.state.seconds}
//              {this.props.starter? "" : () => { this.componentWillUnmount()}}
//             </div>
//         );
//     }
// }





// export default Timer;










