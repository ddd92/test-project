import React, { FunctionComponent } from "react";
import AddItem from 'components/list/AddItem';

const index: FunctionComponent = () => {
    return ( 
        <div>
            <h1>todos</h1>
            <AddItem />
        </div>
    )
}

export default index;