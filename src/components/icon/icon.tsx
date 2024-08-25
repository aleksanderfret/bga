'use client';
import {
  mdiCalendarOutline,
  mdiCardsPlayingOutline,
  mdiDice6Outline,
  mdiHomeOutline,
  mdiTools,
} from '@mdi/js';
import MuiSvgIcon, {
  SvgIconProps as MuiSvgIconProps,
} from '@mui/material/SvgIcon';
import { styled } from '@mui/material/styles';
import React, { forwardRef } from 'react';

import { constSize } from '@/utils';

export type IconType =
  | 'home'
  | 'games'
  | 'plays'
  | 'events'
  | 'settings'
  | 'tools';

type SvgIconProps = Omit<MuiSvgIconProps, 'color'> & {
  color?: string;
};

interface IconProps extends SvgIconProps {
  type: IconType;
}

const SvgIcon = styled(MuiSvgIcon)<SvgIconProps>(({ theme }) => ({
  '&.MuiSvgIcon-root': {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    ...constSize(theme.spacing(6)),
  },
}));

const getIconPath = (type: IconType): string => {
  switch (type) {
    case 'home':
    default:
      return mdiHomeOutline;
    case 'games':
      return mdiDice6Outline;
    case 'events':
      return mdiCalendarOutline;
    case 'plays':
      return mdiCardsPlayingOutline;
    case 'tools':
      return mdiTools;
  }
};

export const Icon = forwardRef<SVGSVGElement, IconProps>(
  ({ color = 'inherit', path, type, ...props }, ref): JSX.Element => (
    <SvgIcon ref={ref} sx={{ color }} {...props}>
      <path d={getIconPath(type)} />
    </SvgIcon>
  )
);

Icon.displayName = 'Icon';
