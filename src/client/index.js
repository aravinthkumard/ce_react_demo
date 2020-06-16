import React from "react";
import ReactDOM from "react-dom";

class Header extends React.Component {
    render() {

        return (
            <marquee behavior="scroll" direction="right"><h2>React application running on GCP - Compute Engine!!!</h2></marquee>
        )
    }
}

ReactDOM.render(<Header/>, document.getElementById('root'));
