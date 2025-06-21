import {useState} from 'react';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
   
  
  return (
    <div>
      <h1>give feedback</h1>
      <Button text="good" onClick={()=>setGood(good+1)}/>
      <Button text="neutral" onClick={()=>setNeutral(neutral+1)}/>
      <Button text="bad" onClick={()=>setBad(bad+1)}/>

      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  );
};

const Statistics = ({good, neutral, bad}) => {
  const getAll = ()=> good+neutral+bad;
  if(getAll()===0) {
    return (
      <p>No feedback give</p>
    );
  }
  return (
    <div>
      <h1>statistics</h1>
      <table>
        <tbody>
          <StatisticsLine text="good" value={good}/>
          <StatisticsLine text="neutral" value={neutral}/>
          <StatisticsLine text="bad" value={bad}/>
          <StatisticsLine text="all" value={getAll()}/>
          <StatisticsLine text="average" value={(good-bad)/getAll()}/>
          <StatisticsLine text="positive" value={good/getAll()*100+ " %"}/>
        </tbody>
      </table>
    </div>
  );
};

const StatisticsLine = (props) => {
  return (
    <tr>
    <td>{props.text}</td><td>{props.value}</td>
    </tr>
  );
};

const Button = (props)=> {
  return (
    <button onClick={props.onClick}>{props.text}</button>
  );
}


export default App;