function Student(props) {
  return (
    <div className="card">

      <h2>{props.name}</h2>

      <p>
        <strong>Course:</strong> {props.course}
      </p>

      <p>
        <strong>Marks:</strong> {props.marks}
      </p>

    </div>
  );
}

function App() {
  return (
    <div className="container">

      <h1>Student Information</h1>

      <Student
        name="VIKAS YADAV"
        course="Computer Science"
        marks="100"
      />

      <Student
        name="Anita Verma"
        course="Information Technology"
        marks="92"
      />

      <Student
        name="PRIYANSHU SINGH"
        course="Electronics"
        marks="86"
      />

    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);