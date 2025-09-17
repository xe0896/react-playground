import { useParams } from 'react-router-dom'

export default function TaskRenderer({tasks}) {
    const { id } = useParams();
    const Component = tasks.find(task => task.id === Number(id)).component;
    return (
        <Component/>
    );
}