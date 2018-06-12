/* clock
const StatelessClock = function(props) {
    return <div>{props.time}</div>
};

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentTime: (new Date()).toLocaleString()
        };
        this.clockLaunch();
    }

    clockLaunch() {
        setInterval(() => {
            this.setState({
                currentTime: (new Date()).toLocaleString()
            });
            console.log('time');
        }, 1000);
    }

    render() {
        return (
            <div>
                <StatelessClock time={this.state.currentTime} />
            </div>
        )
    }
}
*/

// class Button extends React.Component {
//     render() {
//         return (
//             <div>
//                 <button onClick={this.props.decreaseClick}>Decrease</button>
//                 <br/>
//                 <button onClick={this.props.increaseClick}>Increase</button>
//             </div>
//         )
//     }
// }

class Content extends React.Component {
    constructor(props) {
        super(props);
        this.increaseClick = this.increaseClick.bind(this);
        this.decreaseClick = this.decreaseClick.bind(this);

        this.state = { counter: 0 };
    }

    increaseClick() {
        this.setState({
            counter: ++this.state.counter
        });
    }

    decreaseClick() {
        this.setState({
            counter: --this.state.counter
        });
    }

    render() {
        return React.createElement(
            'div',
            null,
            React.createElement(
                'div',
                null,
                React.createElement(
                    'p',
                    null,
                    this.state.counter
                ),
                React.createElement(
                    'button',
                    { onClick: this.decreaseClick },
                    'Decrease'
                ),
                React.createElement('br', null),
                React.createElement(
                    'button',
                    { onClick: this.increaseClick },
                    'Increase'
                )
            ),
            React.createElement('br', null)
        );
    }
}

ReactDOM.render(React.createElement(Content, null), document.getElementById('content'));

//***************************************************************************************//


// let value = 2;
// const titleStyles = {background: "lightgreen", padding: "1rem"};
//
// class TestApp extends React.Component {
//     getUrl() {
//         return "https://google.com"
//     }
//
//     render () {
//         // let testVar = 'test';
//         // const d = new Date(Date.now());
//
//         // return (
//         //     <h1>
//         //     HelloWorld {d.toLocaleTimeString()}
//         //     <br/>
//         //     {testVar}
//         //     </h1>
//         // )
//
//         if (value === 1) {
//             return (
//                 <h1 title={this.props.title}>
//                     hello, {this.props.myName}, {this.getUrl()}
//                 </h1>
//             )
//         } else {
//             return (
//                 <h2 style={titleStyles} className="heading" title={this.props.title}>
//                     hello, {this.props.myName}, {this.getUrl()}
//                 </h2>
//             )
//         }
//     }
// }
//
// ReactDOM.render(
//     <TestApp title="TEST_TITLE" myName="Vova"/>,
//     document.getElementById("content")
// );
