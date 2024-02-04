import { useState } from "react"

export const Form = ({ status = "empty" }) => {
    const [answer, setAnswer] = useState("helloo")
    if (status === "success") return <h1 >That's right!</h1>
    const handleInputChange=(event)=>{
        setAnswer(event.target.value)
    }


    return (
        <>
            <h2>City quiz</h2>
            <p>
                What city is located on two continents?
            </p>
            <form id="form">
                <textarea value={answer} onChange={handleInputChange}></textarea>
                <br />
                <button >Submit</button>
                <p>Loading...</p>
                <p style={{ color: "red" }} >There was an error</p>
            </form>
        </>
    )
} 