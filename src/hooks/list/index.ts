import { useState, ChangeEvent, KeyboardEvent, MouseEvent, useEffect } from "react";
import { ListTypes, ListData } from 'types/List'; 

const useToDoList = (): ListTypes => {
    const [list, setList] = useState<ListData[]>([]);
    const [all, setAllList] = useState<ListData[]>([]);
    const [inputValue, setInputValue] = useState<string>('');

    useEffect(()=>{
        const Wd = window as any;
        window.localStorage.setIem(all) as any;
    },[all]);

    const onChangeHandler = ({ target } : ChangeEvent<HTMLInputElement>) => {
        if (target){
            const { value } = target as any;
            setInputValue(value);
        }
    };

    const onPressEnter = ({ key, code, nativeEvent }: KeyboardEvent<HTMLInputElement>) => {
        if(key === 'Enter' || code === 'Enter'){
            const { isComposing } = nativeEvent as any;
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

    const onChangeDate = ({date, itemId} : { date : Date, itemId: number }) => {
        const temp = list.slice();
        temp[itemId].dueDate = new Date(date);
        setList(temp);
    };

    const setFilterData = (e: MouseEvent<HTMLButtonElement>, completed: boolean) => {
        if(list?.length > 0) {
            const allData = all.length > 0 ? all : list;
            setAllList(allData);
            const filterData = allData.slice();
            
            const data = filterData.filter((value) => value.completed === completed);
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
        onChangeDate,
    };
};

export default useToDoList;