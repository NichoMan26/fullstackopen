const Header = (props) => {
  return (
    <h1>{props.title}</h1>
  )
}
const Content = (props) => {
  return (
    <div>
      <Part part={props.parts[0]} />
      <Part part={props.parts[1]} />
      <Part part={props.parts[2]} />
    </div>
  )      
   
}
const Part = ({part}) => {
  return (
    <p>{part.name} {part.exercises}</p>
  )
}
const Total = (props) => {
  let result = 0
  props.parts.forEach(part => {
    result += part.exercises
  })
  return (
    <p>Number of exercises {result}</p>
  )
}

const Exercise1_1__1_5 = () => {
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
  }
 

  return (
    <div style={{border: '1px solid black', padding: '10px', margin: '10px'}}>
      <Header title={course.name}/>
      <Content parts={course.parts} />
      <Total parts={course.parts}/>
    </div>
  )
}
export default Exercise1_1__1_5