import NestedRoutes from '../../NestedRoutes';
import Transforming from './Transforming';
import AddingRemove from './AddingRemove';
import TransformingSpecific from './TransformingSpecific';

export default function StateArrays() {
    const tasks = [
        {id: 1, name: 'Adding and remove from an array state', component: AddingRemove},
        {id: 2, name: 'Transforming an array state', component: Transforming},
        {id: 3, name: 'Transforming a specific value', component: TransformingSpecific}
    ]

    return (
        <>
            <NestedRoutes tasks = {tasks} url = 'StateArrays'/>
        </>
    );
}