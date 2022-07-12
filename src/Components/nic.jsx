import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { current_nic } from "../store/counterslice"
import { useDispatch } from "react-redux"

import '../style/nic.css'

const App = () => {

    const [nic, setnic] = useState()

    const navigate = useNavigate()
    const dispatch = useDispatch()

    return (
        <div className="backscreen">

            <input className="form-control" onChange={(e) => setnic(e.target.value)} type="text" placeholder="Enter CNIC Number" />
            <button onClick={() => { navigate("/voting-app/vote"); dispatch(current_nic(nic)) }} className="btn btn-outline-warning btn_goto"  >Cast my vote</button>
        
        </div>
    )
}


export default App