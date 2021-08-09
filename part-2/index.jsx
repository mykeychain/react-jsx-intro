function Tweet(props) {

  const {username, name, date, message} = props;

  return (
    <div className="tweet">
      <ul>
        <li><b>username:</b> @{username}</li>
        <li><b>name:</b> {name}</li>
        <li><b>date:</b> {date}</li>
        <li><b>message:</b> {message}</li>
      </ul>
    </div>
  )
}

ReactDOM.render(
<div>
  <Tweet username="mikechang" name = "Mike Chang" date = "August 9, 2021" message = "Coding is fun!" />
  <Tweet username="lillianlakes" name = "Lillian Lakes" date = "August 10, 2021" message = "I agree!" />
  <Tweet username="nate" name = "Nate" date = "August 11, 2021" message = "Great job team!" />
</div>, 

document.getElementById("root"));