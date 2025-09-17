import { useState } from 'react'


let nextId = 0;

export default function AddingRemove() {
    const [item, setItem] = useState('');
    const [list, setList] = useState([]);

    return (
        <>
            <input value = {item} onChange = {e => setItem(e.target.value)}/>
            <button onClick = {() => {
                setList([...list, {id: nextId++, item: item}]);
            }}>
                Add
            </button>
            <h1>Items</h1>
            <ul>
                {list.map(iter => (
                    <li key = {iter.id}>{iter.item}
                    <button onClick = {() => {
                        setList(
                            list.filter(a => a.id !== iter.id)
                        );
                    }}>
                        Delete
                    </button>
                    </li>
                ))}
            </ul>
        </>
    );
}