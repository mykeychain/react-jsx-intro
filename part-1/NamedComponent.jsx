function NamedComponent(props) {
    return <p>My name is {props.name}</p>
}

// ReactDOM.render(<NamedComponent name="Mike"/>, 
//     document.getElementById("root"));