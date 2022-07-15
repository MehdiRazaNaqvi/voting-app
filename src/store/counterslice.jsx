import { createSlice } from '@reduxjs/toolkit'





const initialState = {

  current_user: "",

  poll: [
    
  
  ]

}





export const counterSlice = createSlice({

  name: 'counter',

  initialState,


  reducers: {







    update_data: (state, payload) => {

      state.poll = payload.payload

      // console.log(payload.payload)


    },



    current_nic: (state, payload) => {

      // console.log(payload.payload)

      state.current_user = payload.payload
      
    }



  },
})




export const { update_data, current_nic } = counterSlice.actions

export default counterSlice.reducer