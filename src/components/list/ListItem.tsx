import React from 'react';
import moment from 'moment';
import { styled } from '@mui/material/styles';
import {
  Divider, ListItem, ListItemIcon, Checkbox, ListItemText, ListItemButton, IconButton,
} from '@mui/material';
import { RemoveCircle } from '@mui/icons-material';
import { ListItemTypes } from 'types/List';

const index = (props: ListItemTypes) => {
  const { dueDate, content, key } = props;
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

  const labelId = `checkbox-list-label-${key}`;

  return (
    <ListItemContainer
      secondaryAction={(
        <IconButton edge="end" aria-label="comments">
          <RemoveCircle />
        </IconButton>
              )}
    >
      <ListItemContent onClick={handleToggle(key)}>
        <ListItemIcon>
          <Checkbox
            edge="start"
            checked={checked.indexOf(key) !== -1}
            tabIndex={-1}
            disableRipple
            inputProps={{ 'aria-labelledby': labelId }}
          />
        </ListItemIcon>
        <span>
          {moment(dueDate).format('MM/DD')}
        </span>
        <Separator orientation="vertical" variant="middle" flexItem />
        <ListItemText id={labelId} primary={content} />
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
  width: '100%',
}));

const Separator = styled(Divider)(({
  padding: '0 10px',
}));

export default index;
