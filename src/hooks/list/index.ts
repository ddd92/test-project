import { useState, ChangeEvent, KeyboardEvent, MouseEvent } from "react";
import { ListTypes, ListData } from 'types/List'; 

const useToDoList = (): ListTypes => {
    const [list, setList] = useState<ListData[]>([]);
    const [all, setAllList] = useState<ListData[]>([]);
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

    const setFilterData = (e: MouseEvent<HTMLButtonElement>, completed: boolean) => {
        if(list?.length > 0) {
            const allData = all.length > 0 ? all : list;
            setAllList(allData);
            const data = allData.filter((value) => value.completed === completed);
            setList(data);
        }
    };

    const initListData = () => {
        if(list?.length > 0) {
            const allData = all.length > 0 ? all : list;
            setAllList([]);
            setList(allData);
        }
    };

    return { 
        value: inputValue,
        list,
        onChangeHandler,
        onPressEnter,
        deleteListItem,
        onChangeCheckBox,
        setFilterData,
        initListData,
    };
};

export default useToDoList;