
import { useSelector } from 'react-redux'

const Count = () => {
    const { counter } = useSelector((state) => ({...state}))
  return (
    <>
    <h3 className="counter">
    Count : { counter.value }
    </h3>
    </>
  )
}

export default Count