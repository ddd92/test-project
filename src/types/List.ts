import { ChangeEvent, KeyboardEvent } from 'react';

interface AddItemTypes {
    value: string, 
    onChangeHandler: (e: ChangeEvent<HTMLInputElement>) => void,
    onPressEnter: (e: KeyboardEvent<HTMLInputElement>) => void
}

interface ListTypes extends AddItemTypes {
    list: object [],
}

interface ListItemTypes {
    key: number,
    content: string,
    dueDate: Date,
}

export { AddItemTypes, ListTypes, ListItemTypes };