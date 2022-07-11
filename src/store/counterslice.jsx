import { createSlice } from '@reduxjs/toolkit'





const initialState = {

  current_user: {},

  poll: {

    pti: ["firebase343", "fihg78", "dsv", "efefvefv"],
    noon: ["firebse", "dsfs", "nhji"]

  }

}





export const counterSlice = createSlice({

  name: 'counter',

  initialState,


  reducers: {



    current_user: (state, payload) => {


      state.currentUser = payload.payload
      console.log(state.currentUser)

    }

    ,




    load_data: (state, payload) => {

      state.brands = payload.payload.brands

      console.log(payload.payload)

    },




    add_to_cart: (state, payload) => {
      console.log(payload.payload)
    }



  },
})




export const { current_user, load_data, add_to_cart } = counterSlice.actions

export default counterSlice.reducer