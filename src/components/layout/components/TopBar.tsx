import MuiAppBar, { AppBarProps } from '@mui/material/AppBar';
import IconButton from '@mui/material/IconButton';
// import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import React, { FC } from 'react';

const MenuButton = styled(IconButton)(
  ({ theme: { spacing, breakpoints } }) => ({
    marginRight: spacing(1.5),

    [breakpoints.up('md')]: {
      display: 'none',
    },
  })
);

const AppBar = styled(MuiAppBar)(
  ({ theme: { mixins, breakpoints, transitions, zIndex } }) => ({
    height: mixins.appBar.mobile.height,
    [breakpoints.up('md')]: {
      height: mixins.appBar.desktop.height,
      transition: transitions.create(['margin', 'width'], {
        easing: transitions.easing.sharp,
        duration: transitions.duration.leavingScreen,
      }),
      flexShrink: 0,
      zIndex: zIndex.drawer + 1,
    },
  })
);

interface TopBarProps extends AppBarProps {
  onClick: () => void;
}

export const TopBar: FC<TopBarProps> = ({ onClick, ...props }) => (
  <AppBar position="fixed" {...props}>
    <Toolbar>
      <MenuButton
        aria-label="open navigation"
        color="inherit"
        edge="start"
        onClick={onClick}
      >
        M
      </MenuButton>
      <Typography component="div" noWrap variant="h5">
        BGA
      </Typography>
    </Toolbar>
  </AppBar>
);
