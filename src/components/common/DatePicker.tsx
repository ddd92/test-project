import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import dayjs, { Dayjs } from 'dayjs';
import { styled } from '@mui/material/styles';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { MobileDatePicker } from '@mui/x-date-pickers';
import { DatePickerTypes } from 'types/DatePicker';

const index = ({ defaultValue } : DatePickerTypes) => {
    const [value, setValue] = useState<Dayjs | null>(dayjs(defaultValue));
    const handleChange = (date: Dayjs | null) => {
        setValue(date);
    };

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <MobileDatePicker 
                // label="Date mobile"
                inputFormat="MM/DD"
                value={value}
                onChange={handleChange}
                renderInput={(params) => 
                    <DateInput {...params} 
                        InputProps={{
                            readOnly: true,
                        }}
                    />
                } 
            />
        </LocalizationProvider>
    );
};

const DateInput = styled(TextField)(({
    '& .MuiInputBase-input': {
        maxWidth: '3rem',
        cursor: 'pointer',
    },
    '& .MuiOutlinedInput-notchedOutline': {
        border: 'none',
    }
}));

export default index;