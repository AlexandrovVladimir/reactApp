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

//counter
// class Content extends React.Component {
//     constructor(props) {
//         super(props);
//         this.increaseClick = this.increaseClick.bind(this);
//         this.decreaseClick = this.decreaseClick.bind(this);
//
//         this.state={counter: 0};
//     }
//
//     increaseClick() {
//         this.setState({
//             counter: ++this.state.counter
//         })
//     }
//
//     decreaseClick() {
//         this.setState({
//             counter: --this.state.counter
//         })
//     }
//
//     render() {
//         return (
//             <div>
//                 <div>
//                     <p>{this.state.counter}</p>
//                     <button onClick={this.decreaseClick}>Decrease</button>
//                     <br/>
//                     <button onClick={this.increaseClick}>Increase</button>
//                 </div>
//                 <br/>
//             </div>
//
//         )
//     }
// }


//form
// class Content extends React.Component {
//     constructor(props) {
//         super(props);
//
//         this.handleCheckBox = this.handleCheckBox.bind(this);
//         this.state = {
//             checkBoxGroup: {
//                 angular: false,
//                 react: true,
//                 viewJS: false,
//                 ember: false
//             }
//         }
//
//     }
//
//     handleCheckBox(event) {
//         let object = Object.assign(this.state.checkBoxGroup);
//         object[event.target.value] = event.target.checked;
//         console.log(event.target.checked);
//         this.setState({
//             checkBoxGroup: object
//         });
//         console.log(object);
//     }
//
//     render() {
//         return (<form>
//             <input
//                 type="checkbox"
//                 value="angular"
//                 checked={this.state.checkBoxGroup.angular}
//                 onChange={this.handleCheckBox}
//             />
//             <input
//                 type="checkbox"
//                 value="react"
//                 checked={this.state.checkBoxGroup.react}
//                 onChange={this.handleCheckBox}
//             />
//             <input
//                 type="checkbox"
//                 value="viewJS"
//                 checked={this.state.checkBoxGroup.viewJS}
//                 onChange={this.handleCheckBox}
//             />
//             <input
//                 type="checkbox"
//                 value="ember"
//                 checked={this.state.checkBoxGroup.ember}
//                 onChange={this.handleCheckBox}
//             />
//         </form>)
//     }
// }
//
//
// ReactDOM.render(
//     <Content />,
//     document.getElementById('content')
// );


class Menu extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let menus = ["Home", "About us", "Contacts", "Services"];
        return (
            <ul className="nav-main">
                {menus.map((value, index, list) => {
                    return <li className="nav-main__item" key={index}>
                        <Link
                            label={value}
                        />
                    </li>
                })}
            </ul>
        )
    }
}
class Link extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const links = document.querySelectorAll('.nav-main__link');

        const url = "/" + this.props.label.toLocaleLowerCase().trim().replace(" ", "-");
        return <a className="nav-main__link" href={url}>{this.props.label}</a>
    }
}


ReactDOM.render(
    <div>
        <Menu />
    </div>,
    document.getElementById('content')
);