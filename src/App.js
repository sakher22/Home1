
function App() {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course={course} />
      <Content part1={part1} part2={part2} part3={part3} exercises1={exercises1} exercises2={exercises2} exercises3={exercises3}/>
      <Total exercises1={exercises1} exercises2={exercises2} exercises3={exercises3}/>
    </div>
  )
}


function Header(props)
{
   console.log(props);
    return(
    <h1>{props.course}</h1>
  )

}
function Content(props)
{
  console.log(props)
  return(
  <>
 <Part number={1} prop={props}/>
 <Part number={2} prop={props}/>
 <Part number={3} prop={props}/>

  </>
  )
  
}
function Part(props)
{
    var part=props.prop.part1;
    var exercise=props.prop.exercises1
   if(props.number==2){
   part=props.prop.part2
   exercise=props.prop.exercises2
   }
   if(props.number==3){
   part=props.prop.part3;
   exercise=props.prop.exercises3
  }
  return(
    <>
    <p>{part} {exercise}</p>
    </>
  )
}
function Total(props)
{
  return(
    <p>Number of exercises {props.exercises1+props.exercises2+props.exercises3}</p>
  )
}


export default App;
