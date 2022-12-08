import { ChangeEvent, KeyboardEvent, MouseEvent } from 'react';

interface AddItemTypes {
    value: string, 
    onChangeHandler: (e: ChangeEvent<HTMLInputElement>) => void,
    onPressEnter: (e: KeyboardEvent<HTMLInputElement>) => void,
}

interface ListData {
    content: string,
    completed: boolean,
    dueDate: Date,
}

interface ListTypes extends AddItemTypes {
    list: ListData[],
    deleteListItem: (e: MouseEvent<HTMLButtonElement>, itemId: number) => void,
    onChangeCheckBox: (e: ChangeEvent<HTMLInputElement>, checked: boolean, itemId: number) => void,
    setFilterData: (e: MouseEvent<HTMLButtonElement>, completed: boolean) => void,
    initListData: () => void,
}

interface ListItemTypes {
    key: number,
    itemId: number, 
    content: string,
    completed: boolean,
    dueDate: Date,
    deleteListItem: (e: MouseEvent<HTMLButtonElement>, itemId: number) => void,
    onChangeCheckBox: (e: ChangeEvent<HTMLInputElement>, checked: boolean, itemId: number) => void,
}

export { AddItemTypes, ListTypes, ListData, ListItemTypes };