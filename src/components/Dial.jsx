import * as React from 'react';
import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';

const actions = [
  { icon: <DeleteForeverIcon />, name: 'Delete' },
  { icon: <EditIcon />, name: 'Edit' },

];

export default function Dial(props) {

  const { deleteId, edit } = props

    
  return (
    <Box sx={{ height: 80, transform: 'translateZ(0px)', flexGrow: 1, color:'yellow' }}>
      <SpeedDial
        ariaLabel="SpeedDial"
        sx={{ position: 'absolute', bottom: 16, right: 16 }}
        icon={<SpeedDialIcon />}
      >
          
          <SpeedDialAction
            icon={actions[0].icon}
            tooltipTitle={actions[0].name}
            onClick={deleteId}
          />
          
          
          <SpeedDialAction
            icon={actions[1].icon}
            tooltipTitle={actions[1].name}
            onClick={edit}
          /> 
          

      </SpeedDial>
    </Box>
  );
}