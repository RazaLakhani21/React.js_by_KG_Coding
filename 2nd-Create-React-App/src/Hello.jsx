import React from 'react'

//Dynamic Component Creation !
export default function Hello() {
    let myName = 'SomeOne'
    let mthd = (a,b) => {
        return a + b
    }
    let enrollNo = 2102034435345

  return (
    <div>
        {/* can write any js code in this 'Curly Braces' */}
      <h3>Trying Creating, and method is : {mthd(2,3)} Dynamic Components, enrollNo = {enrollNo} here, and Name is {myName} </h3>
    </div>
  )
}
