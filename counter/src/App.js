import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Counter from './Counter';
import List from './List';
import TableDesign from './TableDesign';
import Lformdesign from './Lformdesign';
import EmployeeClass from './EmployeeClass';
import EmployeeFunc from './EmployeeFunc';
import { Component } from "react";
function App() {
  const wishes="Welcome to my world";
  const card={
    title:'React App',
    category:'verb',
    definition:'1.Act in something'
  }
  return (

   <>
   <Counter/>
   <List/>
   <Lformdesign/>
   <TableDesign/>
   <EmployeeClass/>
   <EmployeeFunc/>
   <div>
    <Greetings wish={wishes}/>
    <Card card={card}/>
   </div>
   </>
     );
}
function Greetings(props){
  const wish=props.wish
  return(
    <>
    <h1>Hi all!!{wish}</h1>
    </>
  )
}
class Card extends Component{
  render(){
    const cards=this.props.card;
    return(
      <div>
      <h1>{cards.title}</h1>
      <p>{cards.category}</p>
      <p>{cards.definition}</p>
      </div>
    )
  }
}

export default App;
