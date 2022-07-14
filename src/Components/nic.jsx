import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { current_nic } from "../store/counterslice"
import { useDispatch } from "react-redux"

import '../style/nic.css'

const App = () => {



    const [nic, setnic] = useState()

    const navigate = useNavigate()
    const dispatch = useDispatch()

    

    const checking = () => {

        if (nic == "" || nic == undefined || nic.length < 13 || nic.length > 13 ) {
            alert("Invalid cnic number")
        }
        else {

            dispatch(current_nic(nic))
            navigate("/voting-app/vote")
        }
    }


    return (
        <div className="backscreen">

            <input maxLength={13} className="form-control" onChange={(e) => setnic(e.target.value)} type="text" placeholder="Enter CNIC Number without hyphen" />
            <button onClick={() => { checking(); }} className="btn btn-outline-warning btn_goto"  >Cast my vote</button>

        </div>
    )
}


export default App