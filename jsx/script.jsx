let value = 2;
const titleStyles = {background: "lightgreen", padding: "1rem"};

class TestApp extends React.Component {
    getUrl() {
        return "https://google.com"
    }

    render () {
        // let testVar = 'test';
        // const d = new Date(Date.now());

        // return (
        //     <h1>
        //     HelloWorld {d.toLocaleTimeString()}
        //     <br/>
        //     {testVar}
        //     </h1>
        // )

        if (value === 1) {
            return (
                <h1 title={this.props.title}>
                    hello, {this.props.myName}, {this.getUrl()}
                </h1>
            )
        } else {
            return (
                <h2 style={titleStyles} className="heading" title={this.props.title}>
                    hello, {this.props.myName}, {this.getUrl()}
                </h2>
            )
        }
    }
}

ReactDOM.render(
    <TestApp title="TEST_TITLE" myName="Vova"/>,
    document.getElementById("content")
);