import { useState, ChangeEvent, KeyboardEvent, MouseEvent } from "react";
import { ListTypes, ListData } from 'types/List'; 

const useToDoList = (): ListTypes => {
    const [list, setList] = useState<ListData[]>([]);
    const [inputValue, setInputValue] = useState<string>('');

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        setInputValue(value);
    };

    const onPressEnter = (e: KeyboardEvent<HTMLInputElement>) => {
        const { key, code, nativeEvent } = e;

        if(key === 'Enter' || code === 'Enter'){
            const { isComposing } = nativeEvent;

            if(!isComposing){
                const temp = list.slice();
                temp.push({
                    completed: false, 
                    dueDate: new Date(),
                    content: inputValue
                });
                setList(temp);
    
                setInputValue('');
            }
        }
    };

    const deleteListItem = (e: MouseEvent<HTMLButtonElement>, itemId: number) => {
        const temp = list.slice();
        delete temp[itemId];
        setList(temp);
    };

    const onChangeCheckBox = (e: ChangeEvent<HTMLInputElement>, checked: boolean, itemId: number) => {    
        const temp = list.slice();
        temp[itemId].completed = checked;
        setList(temp);
    };

    return { 
        value: inputValue,
        list,
        onChangeHandler,
        onPressEnter,
        deleteListItem,
        onChangeCheckBox,
    };
};

export default useToDoList;