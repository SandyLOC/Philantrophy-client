import * as React from 'react';
import { Popover, Typography, Button } from '@mui/material';
import Toggle from './ToggleButton';


export default function PopOver(props) {

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <div>
      <Button aria-describedby={id} onClick={handleClick}>
        Achievements
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
      >
        <div className="badges" >
            <Toggle {...props}/>
            
        </div>
        <Typography sx={{ p: 2 }}>Pick a badge.</Typography>
      </Popover>
    </div>
  );
}
