import { useState } from "react"


const Button = ({text,clickFunc}) => {
  return (
    <button onClick={clickFunc}>{text}</button>
  )
}
const StatisticLine = ({text, value}) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  )
}
const Statistic = ({good, neutral, bad}) => {
  let all = good + neutral + bad
  let average = ((good - bad) / all)
  let positive = (good / all) * 100
  return (<>
    {all === 0 
      ? <p>No feedback given</p> 
      : <table>
         <tbody>
          <StatisticLine text='Good' value={good}/>
          <StatisticLine text='Neutral' value={neutral}/> 
          <StatisticLine text='Bad' value={bad}/>
          <tr>
            <td>all</td>
            <td>{all}</td>
          </tr>
          <tr>
            <td>average</td>
            <td>{average.toFixed(2)}</td>
          </tr>
          <tr>
            <td>positive</td>
            <td>{positive.toFixed(2)} %</td>
          </tr>
          </tbody>
        </table>
    }
    </>
  )
}

const Exercise1_6__1_11 = () => {
 
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

const clickGoodBTN = () => {
  setGood(good + 1)
}
const clickNeutralBTN = () => {
  setNeutral(neutral + 1) 
}
const clickBadBTN = () => { 
  setBad(bad + 1)
}
  return (
    <div style={{border: '1px solid black', padding: '10px', margin: '10px'}}>
      <h2>Give feedback</h2>
      <div>
        <Button text={'Good'} clickFunc={clickGoodBTN}/>
        <Button text={'Neutral'} clickFunc={clickNeutralBTN}/>
        <Button text={'Bad'} clickFunc={clickBadBTN}/>
      </div>
      <Statistic good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}
export default Exercise1_6__1_11