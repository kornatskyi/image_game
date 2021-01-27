import React, { useState, useEffect } from 'react'

export let timeOut = {
    aInternal: false,
    aListener: function (val) { },
    set a(val) {
        this.aInternal = val;
        this.aListener(val);
    },
    get a() {
        return this.aInternal;
    },
    registerListener: function (listener) {
        this.aListener = listener;
    }
};



export default function Timer(props) {



    const [seconds, setSeconds] = useState(props.time);


    useEffect(() => {
        if (seconds < 1 && props.gameStage !== "preGame" && props.gameStage !== "remembering") {
            timeOut.a = false;
            return;
        }
        if (seconds < 1 && props.gameStage === "remembering") {
            timeOut.a = 2;
            return;
        }
        if (seconds < 1 && props.gameStage === 'guessing') {
            timeOut.a = false;
            return;
        }
        if(seconds === 0) {
            return;
        }
        const timeout = setTimeout(() => {
            setSeconds((s) => s - 1);
        }, 1000)
        return () => clearTimeout(timeout)
    }, [seconds])

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










