import axios from 'axios'

const config = {
    headers: {
      "Content-Type": "application/json",
      },
  };
export const SignUp = async (obj) => {
        let response = await axios.post('http://fundoonotes.incubation.bridgelabz.com/api/user/userSignUp', obj, config)
         console.log(response)
         return response.request.status;
}

export const Login = async (obj) =>{
    let response = await axios.post('http://fundoonotes.incubation.bridgelabz.com/api/user/login', obj, config)
    console.log(response)
    return response.request.status;
}