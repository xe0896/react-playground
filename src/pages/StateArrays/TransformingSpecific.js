import { useState } from 'react';

export default function TransformingSpecific() {
    const [counters, setCounters] = useState(
        [0, 0, 0]
    );

    function handleClick(index) {
        const nextCounters = counters.map((counter, i) => {
            if(i === index) {
                return counter + 1;
            } else {
                return counter;
            }
        });

        setCounters(nextCounters);
    }

    return (
        <ul>
            {counters.map((counter, index) => (
                <li key = {index}>
                    {counter}
                    <button onClick = {() => {
                        handleClick(index)
                    }}>+1</button>
                </li>
            ))}
        </ul>

    )
}