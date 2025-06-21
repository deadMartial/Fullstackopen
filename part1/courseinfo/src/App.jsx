const Header = (props) => {
  return (
    <h1>{props.course}</h1>
  );
};

const Content = (props) => {
  return (
    <div>
      <Part name={props.parts[0]}/>
      <Part name={props.parts[1]}/>
      <Part name={props.parts[2]}/>
    </div>
  );
};

const Total = (props) => {
  const total = props.parts.reduce((total, part)=> total + part.exercises, 0);
  return (
    <p>Number of exercises {total}</p>
  );
};

const Part = (props) => {
  return (
    <p>{props.name.name} {props.name.exercises}</p>
  );
};


const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
      name: 'Fundamentals of React',
      exercises: 10
      },
      {
      name: 'Using props to pass data',
      exercises: 7
      },
      {
      name: 'State of a component',
      exercises: 14
      }
    ]
  };
  return (
    <div>
      <Header course={course.name}/>
      <Content parts={course.parts}/>
      <Total parts={course.parts}/>
      
    </div>
  );
};

export default App
