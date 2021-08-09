function Person(props) {

  const {name, age, hobbies} = props;

  return (
    <div>
      <p>Learn some information about this person:</p>
      <ul>
        <li><b>Name: </b>{name.length < 8? name : name.slice(0, 7)}</li>
        <li><b>Age: </b>{age}</li>
        <li><b>Voting Info: </b>{age > 18 ? "Please go vote!" : "You must be 18."}</li>
        <li><b>Hobbies: </b>
          <ul>
            {hobbies.map(h => <li>{h}</li>)}
          </ul>
        </li>
      </ul>


    </div>
  )
}

ReactDOM.render(
<div>
  <Person name = "MikeChang" age = {16} hobbies = {["Coding", "More Coding", "Even More Coding"]} />
  <Person name = "LillianLakes" age = {30} hobbies = {["Coding", "Exercise", "Cooking"]} />
  <Person name = "Nate" age = {40} hobbies = {["Teaching", "Coding", "Public speaking"]} />
</div>, 

document.getElementById("root"));