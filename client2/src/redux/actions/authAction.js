// expecttations: 1. action for registration 2. action for user 3. action for loading
import axios from 'axios'
import { REGISTER_SUCCESS } from '../types'
export const register = ({name,email,password}) =>async(dispatch)=>{
    // used to register the user via performing the rest call
   
   const config ={
    headers: {
        'Content-Type': 'application/json'
    },
   };

    const data = JSON.stringify({name,email,password})
    try{
        console.log(data);
       const res = await axios.post('/api/users',data,config)
       dispatch({type:REGISTER_SUCCESS,payload: res.data})
    }catch(err){
        const errors = err.response.data.errors;
        if(errors){
            errors.array.forEach(error => 
                dispatch(setAlert(error.msg,"danger"))
            );
            //lets traverse the errors array
            //to process the errors i.e display work should be handled by an action 
            //let have alertAction 
        }

    }
}
//export: we can use this funcion in any file
//const: keyword
//register: name of the function
//({name,email,password}): json object which is accepted by a function / methos
//as an argument caller ===>component
//asyn: asynchronous operations