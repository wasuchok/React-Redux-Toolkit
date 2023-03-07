
import { useDispatch } from "react-redux"
import { decrement } from '../counter/counterSlice'
const Counter2 = () => {
  const dispatch = useDispatch()
  return (
   <>
    <h4>Counter2 : <button onClick={() => dispatch(decrement())}>Decrement -</button> </h4>
    
   </>
  )
}

export default Counter2