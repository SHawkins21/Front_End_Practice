import React from 'react'

type MathProps = {
    num1:number
    num2:number
    math:string
    title_style:string

}

const Math = ({num1,num2,math, title_style}: MathProps) => {
  
  let sum = 0
  
  
    switch (math) {
    case math = "add":
        console.log("we are adding")

        sum = (num1 + num2)
        
        break;

    case math = "subtract":
        console.log("we are subtractijg ")
        
        sum = (num1 - num2)

        break;

        case math = "multiply":

        sum = (num1 / num2)

        break;

        case math = "divide":

        sum = (num1 * num2)

        break; 
        
        
    default:
        break;
  }
  
  
  
    return (
    <div className={`${title_style}`}> 
        
        
        <h1>Math Object</h1> 

        <div>
            {sum}
        </div>
    
    
    
    
    </div>
  ) 
}

export default Math