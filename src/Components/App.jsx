import { useSelector } from 'react-redux'

import "../style/App.css"
// import svg1 from "../style/svg1.svg"

import { useDispatch } from 'react-redux/es/exports'
import { update_data } from "../store/counterslice"
import { useEffect } from 'react'
import { useNavigate } from "react-router-dom"

const App = () => {

  const count = useSelector(state => state.counter)


  const dispatch = useDispatch()
  const navigate = useNavigate()


  useEffect(() => { load_data() }, [])







  const load_data = () => {



    const headers = {
      'Content-Type': 'application/json;charset=UTF-8',
      "Access-Control-Allow-Origin": "*",
      'Access-Control-Allow-Methods': 'GET, PUT, POST, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': '*'
    }



    fetch("https://voting---server.herokuapp.com/getdata", {
    // fetch("http://localhost:4000/getdata", {

      method: "get",
      headers: headers
    })

      .then(r => r.json())
      .then(data => dispatch(update_data(data)))



  }




  const check = (v) => {

    // console.log(v)


    const headers = {
      'Content-Type': 'application/json;charset=UTF-8',
      "Access-Control-Allow-Origin": "*",
      'Access-Control-Allow-Methods': 'GET, PUT, POST, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': '*'
    }



    fetch("https://voting---server.herokuapp.com/check", {
    // fetch("http://localhost:4000/check", {

      method: "get",
      headers: headers
    })

      .then(r => r.json())
      .then(data => {

        // console.log(data)
        data.indexOf(v.nic) >= 0? alert("Vote has already been casted against this cnic") : voted(v)

      }

      )


  }






  const voted = (v) => {

    console.log(v)





    const headers = {
      'Content-Type': 'application/json;charset=UTF-8',
      "Access-Control-Allow-Origin": "*",
      'Access-Control-Allow-Methods': 'GET, PUT, POST, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': '*'
    }



    fetch("https://voting---server.herokuapp.com/vote", {
    // fetch("http://localhost:4000/vote", {


      method: "post",
      headers: headers,
      body: JSON.stringify(v)
    })

    alert(`Vote casted to ${v.party}`)




  }








  return (


    <div className='main' >

      <div className='nav' >
        {count.current_user == "" || count.current_user == undefined ? null : <p onClick={() => navigate("/voting-app")} > CNIC : {count.current_user}</p>}

      </div>




      <div className='grid'>

        {
          count.poll.map((v, i) => (

            <span className='item' key={i}>

              <span className='inner_item one'>

                <img src={v.logo} className="pic" />

              </span>


              <span className='inner_item two'> {v.name} </span>
              <span className='inner_item three'> {v.count.length} </span>
              <span className='inner_item four btn btn-outline-success' onClick={() => { check({ party: v.name, nic: count.current_user }); load_data() }} > vote </span>

            </span>


          ))

        }


      </div>




    </div>
  )

  }


export default App

