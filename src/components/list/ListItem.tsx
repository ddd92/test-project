import React from 'react';
import moment from 'moment';
import { styled } from '@mui/material/styles';
import {
    Divider,
    ListItem,
    ListItemIcon,
    Checkbox,
    ListItemText,
    IconButton,
} from '@mui/material';
import { RemoveCircle } from '@mui/icons-material';
import { ListItemTypes } from 'types/List';
import { Theme } from '@mui/system';

const index = (props: ListItemTypes) => {
    const { dueDate, content, completed, itemId, deleteListItem, onChangeCheckBox } = props;
    const labelId = `checkbox-list-label-${itemId}`;

    return (
        <ListItemContainer
            secondaryAction={(
                <IconButton edge="end" aria-label="comments" onClick={(e) => deleteListItem(e, itemId)}>
                    <RemoveCircle />
                </IconButton>
            )}
        >
                <ListItemIcon>
                <Checkbox
                    edge="start"
                    checked={completed}
                    tabIndex={-1}
                    disableRipple
                    inputProps={{ 'aria-labelledby': labelId }}
                    onChange={(e, checked) => onChangeCheckBox(e, checked, itemId)}
                />
                </ListItemIcon>
                <CompletedContainer completed={completed.toString()} >
                    <DueDate>
                        {moment(dueDate).format('MM/DD')}
                    </DueDate>
                    <Divider orientation="vertical" variant="middle" flexItem />
                    <TextContent id={labelId} primary={content} />
                </CompletedContainer>
        </ListItemContainer>
    );
};

const ListItemContainer = styled(ListItem)(({
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
}));

const CompletedContainer = styled('div')(({ theme, completed } : { theme?: Theme, completed: string}) => ({
    position: 'relative',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    color: completed === 'true' && `${theme.palette.secondary.light}`,

    '&::after': completed === 'true' &&  {
        position: 'absolute',
        content: '""',
        width: '100%',
        height: '1px',
        left: '0',
        border: `1px solid ${theme.palette.secondary.light}`,
    }
}));

const DueDate = styled('span')(({
    marginRight: '15px',
}));

const TextContent = styled(ListItemText)(({
    marginLeft: '15px',
}));

export default index;
