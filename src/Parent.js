import React from 'react'
import CorrectFile from './CorrectFile';
import Falsefile from './Falsefile';
function Parent() {



  

  // Arrow Function without Parameter:
  // const handlebtn=()=>{
  //   console.log("Hii");
  // }


  // Arrow Function with Parameter:
  // const handlebtnwithpara=(x)=>{
  //   console.log(x)
  // }


  // if-else Statement:
  // let z=true;
  // if (z){
  //  return <CorrectFile />}
  // else{}
  //  return <Falsefile />
  // }


// Ternary:
const z = "true";
return <h1>{z === "true" ? <CorrectFile /> : <Falsefile />}</h1>;



let age = 65;
let totalSpent = 1200;


return <h1>{age >= 60 && totalSpent >= 1000? <CorrectFile /> : <Falsefile />}</h1>
  

//   return (
//     <div className='App'>
//         Hello Ulaagamee!!!!
//         <h1>React is {5+5} times better with JSX</h1>
   

// Forms:
// <h2>HTML Forms</h2>
// <form action="/action_page.php" className='App2'/>
//   <label for="fname">First name:</label><br/>
//   <input type="text" id="fname" name="fname" value="John"/><br/>
//   <label for="lname">Last name:</label><br/>
//   <input type="text" id="lname" name="lname" value="Doe"/><br/>
//   <input type="submit" value="Submit"/>
// <form/>



// let x=20;
// let y="India"
// let msg;
// let msg1;
// <h1>{ x>=10? msg="The value of x is less than 10":msg="The value of x is greater than 10"}</h1>
// <h1>{ y="India"? msg1="India won the WC":msg1="India lost the finals"}</h1>
// <div>
//   <button onClick={handlebtn}>Submit</button>
// </div>

// <div>
//   <button onClick={() => handlebtnwithpara("Hi")}>
//     Submit With Para
//   </button>
// </div>
// </div>
//   );

}
export default Parent