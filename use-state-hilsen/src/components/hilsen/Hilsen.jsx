import { useState } from "react";

export function Hilsen() {
    const [name, setName] = useState('Lars')

    return (
        <>
            <p>Send en hilsen til {name}</p>
            <input type='text' onChange={(event) => setName(event.target.value)} />
        </>
    )
}