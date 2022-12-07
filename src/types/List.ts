import { ChangeEvent, KeyboardEvent, MouseEvent } from 'react';

interface AddItemTypes {
    value: string, 
    onChangeHandler: (e: ChangeEvent<HTMLInputElement>) => void,
    onPressEnter: (e: KeyboardEvent<HTMLInputElement>) => void,
}

interface ListTypes extends AddItemTypes {
    list: object [],
    deleteListItem: (e: MouseEvent<HTMLButtonElement>, idx: number) => void,
}

interface ListItemTypes {
    key: number,
    itemId: number, 
    content: string,
    dueDate: Date,
    deleteListItem: (e: MouseEvent<HTMLButtonElement>, idx: number) => void,
}

export { AddItemTypes, ListTypes, ListItemTypes };