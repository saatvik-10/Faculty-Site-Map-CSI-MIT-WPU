import * as React from 'react';
import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import NumbersIcon from '@mui/icons-material/Numbers';
import LooksOneIcon from '@mui/icons-material/LooksOne';
import LooksTwoIcon from '@mui/icons-material/LooksTwo';
import Looks3Icon from '@mui/icons-material/Looks3';
import Looks4Icon from '@mui/icons-material/Looks4';
import Looks5Icon from '@mui/icons-material/Looks5';
import Looks6Icon from '@mui/icons-material/Looks6';

const actions = [
  { icon: <NumbersIcon />, name: 'Ground Floor' },
  { icon: <LooksOneIcon />, name: 'First Floor' },
  { icon: <LooksTwoIcon />, name: 'Second Floor' },
  { icon: <Looks3Icon />, name: 'Third Floor' },
  { icon: <Looks4Icon />, name: 'Forth Floor' },
  { icon: <Looks5Icon />, name: 'Fifth Floor' },
  { icon: <Looks6Icon />, name: 'Sixth Floor' },
];

export default function BasicSpeedDial() {
  return (
    <Box sx={{ height: 320, transform: 'translateZ(0px)', flexGrow: 1 }}>
      <SpeedDial
        ariaLabel="SpeedDial basic example"
        sx={{ position: 'absolute', bottom: 16, right: 16 }}
        icon={<LooksTwoIcon />}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
          />
        ))}
      </SpeedDial>
    </Box>
  );
}
