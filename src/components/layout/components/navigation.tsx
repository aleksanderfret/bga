import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
// import {
//   EventsIcon,
//   GamesIcon,
//   HomeIcon,
//   PlaysIcon,
//   ToolsIcon,
// } from 'ui/Icons';
import Link from 'next/link';
import React, { FC } from 'react';

interface NavigationProps {
  showLabels: boolean;
}

export const Navigation: FC<NavigationProps> = ({ showLabels }) => (
  <Box component="nav">
    <List>
      <ListItemButton component={Link} href="/">
        <ListItemIcon>H</ListItemIcon>
        {showLabels && <ListItemText disableTypography primary="Home" />}
      </ListItemButton>
      <ListItemButton component={Link} href="/games">
        <ListItemIcon>G</ListItemIcon>
        {showLabels && <ListItemText disableTypography primary="Games" />}
      </ListItemButton>
      <ListItemButton component={Link} href="/plays">
        <ListItemIcon>P</ListItemIcon>
        {showLabels && <ListItemText disableTypography primary="Plays" />}
      </ListItemButton>
      <ListItemButton component={Link} href="/events">
        <ListItemIcon>E</ListItemIcon>
        {showLabels && <ListItemText disableTypography primary="Events" />}
      </ListItemButton>
      <ListItemButton component={Link} href="/tools">
        <ListItemIcon>T</ListItemIcon>
        {showLabels && <ListItemText disableTypography primary="Tools" />}
      </ListItemButton>
    </List>
  </Box>
);
