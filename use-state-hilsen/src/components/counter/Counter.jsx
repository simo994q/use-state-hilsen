import { useState } from "react";

export function Counter() {

    const [count, updateCount] = useState(0)

    return (
        <>
            <p>Du har klikket på knappen {count} antal gange</p>
            <button onClick={() => {updateCount(count + 1)}}>Update</button>
        </>
    )
}