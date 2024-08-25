import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Link from 'next/link';
import { FC, ReactNode } from 'react';

interface NavigationLinkProps {
  href: string;
  showLabels: boolean;
  label: ReactNode;
  icon?: ReactNode;
}

export const NavigationLink: FC<NavigationLinkProps> = ({
  href,
  label,
  icon,
  showLabels,
}) => (
  <ListItemButton component={Link} href={href}>
    {icon && <ListItemIcon>{icon}</ListItemIcon>}
    {showLabels && <ListItemText disableTypography primary={label} />}
  </ListItemButton>
);
