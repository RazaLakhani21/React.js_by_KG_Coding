// Practiced More About Props, now it's time to implement it in a ToDO project

import React from 'react'

// function PracticeProps(props) {
//   return (
//     <>
//      <h1>Hey their : { props.name}, You are {props.color},  other more properties of Ayush are given here, {props.prop} </h1> 
//     </>
//   )
// }
// export default PracticeProps;


// ****Props using Functional components****
// function PracticeProps(props) {
//   return (
//     <div>
//     <h1>{props.singleProp}</h1>      {/*Taking ++props++ */} 
//     <h1>{props.text.HairCut}</h1> 
//     {/* <h1>{props.text}</h1>      Taking ++props++ by accessing 'text' **Object** {for e.g. :- {raza.text.FaceShape("object's key")}}  */}
//     </div>
//   )
// }

// export default PracticeProps


class Profile extends React.Component{
  render(){
    return(
      <>
      <h1>{this.props.singleProp}</h1>
      <h1>{this.props.text.HairCut}</h1>
      </>
    )
  }
}

export default Profile