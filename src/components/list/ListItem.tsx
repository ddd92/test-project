import React from 'react';
import moment from 'moment';
import { styled } from '@mui/material/styles';
import {
    Divider,
    ListItem,
    ListItemIcon,
    Checkbox,
    ListItemText,
    ListItemButton,
    IconButton,
} from '@mui/material';
import { RemoveCircle } from '@mui/icons-material';
import { ListItemTypes } from 'types/List';

const index = (props: ListItemTypes) => {
    const { dueDate, content, itemId, deleteListItem } = props;
    const [checked, setChecked] = React.useState([0]);

    const handleToggle = (value: number) => () => {
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];

        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }

        setChecked(newChecked);
    };

    const labelId = `checkbox-list-label-${itemId}`;

    return (
        <ListItemContainer
            secondaryAction={(
                <IconButton edge="end" aria-label="comments" onClick={(e) => deleteListItem(e, itemId)}>
                    <RemoveCircle />
                </IconButton>
            )}
        >
            <ListItemContent onClick={handleToggle(itemId)}>
                <ListItemIcon>
                <Checkbox
                    edge="start"
                    checked={checked.indexOf(itemId) !== -1}
                    tabIndex={-1}
                    disableRipple
                    inputProps={{ 'aria-labelledby': labelId }}
                    />
                </ListItemIcon>
                <DueDate>
                    {moment(dueDate).format('MM/DD')}
                </DueDate>
                <Divider orientation="vertical" variant="middle" flexItem />
                <TextContent id={labelId} primary={content} />
            </ListItemContent>
        </ListItemContainer>
    );
};

const ListItemContainer = styled(ListItem)(({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'start',
    width: '100%',
}));

const ListItemContent = styled(ListItemButton)(({
    justifyContent: 'start',
    width: '100%',
}));

const DueDate = styled('span')(({
    marginRight: '15px',
}));

const TextContent = styled(ListItemText)(({
    marginLeft: '15px',
}));

export default index;
