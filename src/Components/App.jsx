import { useSelector } from 'react-redux'

import "../style/App.css"
import svg1 from "../style/svg1.svg"

const App = () => {

  const count = useSelector(state => state.counter)

console.log(count.poll)
  return (


    <div className='main' >

      <div className='nav' >

      </div>




      <div className='grid'>

        <span className='item' >

          <span className='inner_item one'> </span>
          <span className='inner_item two'> </span>
          <span className='inner_item three'> </span>
          <span className='inner_item four'> </span>

        </span>


        <span className='item' ></span>
        <span className='item' ></span>
        <span className='item' ></span>
        <span className='item' ></span>
        <span className='item' ></span>

      </div>



      {/* <img className='rotate' src="https://www.stugov.iastate.edu/cms/wp-content/uploads/2022/03/Election-Commission-Logo-Complex-with-Transparent-Background.png" /> */}


    </div>
  )

}


export default App

