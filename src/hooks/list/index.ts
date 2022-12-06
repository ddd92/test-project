import { useState, ChangeEvent, KeyboardEvent } from "react"
import { ListTypes } from 'types/List'; 

const useToDoList = (): ListTypes => {
    const [list, setList] = useState<object []>([]);
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
                temp.push({ dueDate: new Date(), content: inputValue });
                setList(temp);
    
                setInputValue('');
            }
        }
    };

    return { value: inputValue, list, onChangeHandler, onPressEnter }
}

export default useToDoList;