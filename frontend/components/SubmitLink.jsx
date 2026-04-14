import { useEffect, useState } from "react";
import axios from "axios";
import Login from "./Login";


function SubmitLink(){
    const [data, setData]=useState('')
    const [loading, setLoading]=useState(false)
    const [link1, setLink]=useState('')
    const [reply, setReply]=useState('')
    function separateLettersAndDigits(str) {
  return String(str)
    .replace(/(\d)/g, ' ');
}


    async function handleSubmit(e){
    
    
    e.preventDefault()
    setLoading(true)
    let form=e.target
    
    setLink(form.link.value)
    try{
    const res=await axios.post('/api',{link : link1}, {timeout:300000})
    
    let data1=res.data
    data1=separateLettersAndDigits(data1)
    setData(data1)
    setReply('The most appeared words are:')
    console.log(`${data}`)
    }catch(err){
        console.log(err)
    }
    finally{
        console.log('finally')
        setLoading(false)
    }
    }

    return(
        <>
        <form action="/api" method="post" onSubmit={handleSubmit} className="text-black h-full align-bottom grid flex-col gap-2">
            <input type="text" name="link"  className="w-xl mx-auto border-2 border-b-black rounded-2xl grid-cols-12 pl-2 "/> <br />
            <input type="submit" value={loading ? 'Submitting…' : 'Submit'}
  disabled={loading} className=" bg-mist-700 mx-auto text-gray-100 hover:bg-black rounded-2xl w-2xs h-10"/>
        </form> 
        
        <p>{reply}{data}</p>
        </>
    )
}
export default SubmitLink;