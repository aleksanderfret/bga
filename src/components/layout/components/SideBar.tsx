import { DrawerProps } from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import { useTheme } from '@mui/material/styles';
import clsx from 'clsx';
import React, { FC } from 'react';

import Navigation from './Navigation';
import { CloseButton, Drawer, ExpandIconBox, NavHeader } from './SideBarStyles';

interface SideBarProps extends DrawerProps {
  expanded: boolean;
  open: boolean;
  onClose: () => void;
  onExpand: () => void;
}

export const SideBar: FC<SideBarProps> = ({
  expanded,
  onClose,
  onExpand,
  open,
  variant,
  ...props
}) => {
  const theme = useTheme();

  return (
    <Drawer
      ModalProps={{
        keepMounted: true,
        disablePortal: true,
      }}
      anchor={theme.direction === 'rtl' ? 'right' : 'left'}
      className={clsx({ expanded, open })}
      onClose={onClose}
      open={open}
      variant={variant}
      {...props}
    >
      <>
        <NavHeader className={clsx({ expanded })}>
          {/* <Logo offset={LogoOffset.NONE} size="tiny" variant="mixed" /> */}
          <CloseButton onClick={onClose}>C</CloseButton>
        </NavHeader>
        <Navigation showLabels={expanded} />
        <ExpandIconBox className={clsx({ expanded })}>
          <IconButton onClick={onExpand}>E</IconButton>
        </ExpandIconBox>
      </>
    </Drawer>
  );
};
