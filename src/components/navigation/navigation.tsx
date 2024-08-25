import Box from '@mui/material/Box';
import List from '@mui/material/List';
import React, { FC } from 'react';

import { Icon } from '@/components//icon';
import { NavigationLink } from '@/components/navigation-link';

interface NavigationProps {
  showLabels: boolean;
}

export const Navigation: FC<NavigationProps> = ({ showLabels }) => (
  <Box component="nav">
    <List>
      <NavigationLink
        href="/"
        label="Home"
        showLabels={showLabels}
        icon={<Icon type="home" />}
      />
      <NavigationLink
        href="/games"
        label="Games"
        showLabels={showLabels}
        icon={<Icon type="games" />}
      />
      <NavigationLink
        href="/plays"
        label="Plays"
        showLabels={showLabels}
        icon={<Icon type="plays" />}
      />
      <NavigationLink
        href="/events"
        label="Events"
        showLabels={showLabels}
        icon={<Icon type="events" />}
      />
      <NavigationLink
        href="/tools"
        label="Tools"
        showLabels={showLabels}
        icon={<Icon type="tools" />}
      />
    </List>
  </Box>
);
