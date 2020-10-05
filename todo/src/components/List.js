import React from 'react';

import Todo from './Todo'

const List = (props) => {
    const { state, markCompleted } = props

    return (
        <div>
            {
                state.list.map(task => {
                    return (
                        <Todo key={task.id} task={task} markCompleted={markCompleted} />
                    )
                })
            }
        </div>
    )
}

export default List;