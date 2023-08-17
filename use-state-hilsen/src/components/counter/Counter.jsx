import { useState } from "react";

export function Counter() {

    const [count, setCount] = useState(0)

    return (
        <>
            <p>Du har klikket på knappen {count} antal gange</p>
            <button onClick={() => {setCount(count + 1)}}>Update</button>
        </>
    )
}