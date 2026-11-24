import { useState } from "react"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"

function Login(props)
{
    const navigate=useNavigate()
    const [Eusername,setEusername]=useState()
    const [Epassword,setEpassword]=useState()
    const [Ruser,setRuser]=useState(true)

    const users = props.users
    
        function handleUInput(evt)
        {
            setEusername(evt.target.value)
        }

        function handlePInput(evt)
        {
            setEpassword(evt.target.value)
        }

        function checkuser()
        {
            var userfound = false
            users.forEach(function(item)
        {
            if(item.username===Eusername && item.password===Epassword)
            {
                console.log("Login Successfull")
                userfound= true
                navigate("/landing", {state:{user:Eusername}})
            }
        } )

            if(userfound === false)
            {
                console.log("Login Failed")
                setRuser(false)
            }

        }




    return(
        <div className="bg-black p-10">
            <div className="bg-[#EFEFEF] p-10 border rounded-md">
                <h1 className="text-3xl font-medium">Hey Hi!</h1>
                {Ruser? <p>I help you manage your activities after you login :)</p>:<p className="text-red-500">"Please Sign Up Before You Login!!"</p> }
                

                <div className="flex flex-col gap-2 my-2">
                    <input 
                      type="text"
                      className="w-52 border-black p-1 bg-transparent border rounded-md" 
                      placeholder="username"
                      onChange={handleUInput}>                        
                    </input>

                    <input 
                      type="text"
                      className="w-52 border-black p-1 bg-transparent border rounded-md" 
                      placeholder="password"
                      onChange={handlePInput}>                        
                    </input>
                
                    <button className="bg-[#8272DA] w-24 p-1 rounded-md" onClick={checkuser}>Login</button>

                    <p>Don't have an account? <Link to={"/signup"} className="underline">Sign up</Link></p>
                </div>

            </div>

        </div>
    )
}

export default Login