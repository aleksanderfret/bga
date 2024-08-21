'use client';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import clsx from 'clsx';
import React, { ReactNode, useEffect, useState } from 'react';

import { Content, SideBar, TopBar } from './components';

interface BaseLayoutProps {
  children: ReactNode;
}

export const BaseLayout = ({ children }: BaseLayoutProps) => {
  const theme = useTheme();
  const isMediumScreen = useMediaQuery(theme.breakpoints.up('md'));
  const [open, setIsOpen] = useState<boolean | undefined>();
  const [expanded, setExpanded] = useState(true);

  const handleNavigationExpand = () => {
    setExpanded(previousIsExpanded => !previousIsExpanded);
  };

  const handleNavigationToggle = () => {
    setIsOpen(previousIsOpen => !previousIsOpen);
  };

  const handleNavigationOpen = () => {
    setIsOpen(true);
  };

  const handleNavigationClose = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    if (isMediumScreen && !open) {
      setIsOpen(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isMediumScreen]);

  return (
    <>
      <TopBar
        onClick={isMediumScreen ? handleNavigationToggle : handleNavigationOpen}
      />
      <SideBar
        expanded={expanded}
        onClose={handleNavigationClose}
        onExpand={handleNavigationExpand}
        open={Boolean(open)}
        variant={isMediumScreen ? 'persistent' : 'temporary'}
      />
      <Content component="main" className={clsx({ expanded, open })}>
        {children}
      </Content>
    </>
  );
};
