/**
 * 
 * React Hook = allows functional component to use React features without writing class components 
 * 
 * 
 * // useState() = A react hook allows creation of a stateful variable and a setter function to update its value in dom 
 */

import Counter from "./counter"
import MyComponent from "./MyComponent"
Counter

function App() {
  return (
    <>
      {/* <MyComponent/> */}
      {/* <hr /> */}
      <Counter/>
    </>
  )
}
export default App