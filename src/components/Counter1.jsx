
import { useDispatch } from "react-redux"
import { increment } from "../counter/counterSlice"
const Counter1 = () => {
    const dispatch = useDispatch()

    const Addincrement = () => {
        console.log("add")
      
    }
    
  return (
   <>
    <h4>Counter1 : <button onClick={() => dispatch(increment())}>Increment +</button> </h4>
    
   </>
  )
}

export default Counter1