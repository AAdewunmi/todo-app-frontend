import React from "react";

class Test extends React.Component {
    render() {
        return <h1>This is a test!</h1>;
    }
}

class App extends React.Component {
    render(){
        return <Test />
    }
}

export default App;