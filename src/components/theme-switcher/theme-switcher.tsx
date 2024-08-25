'use client';
import { Paper } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useColorScheme } from '@mui/material/styles';
import { useEffect, useState } from 'react';

import { Mode } from '@/types';

export const ThemeSwitcher = () => {
  const { mode, setMode } = useColorScheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleChange = (event: SelectChangeEvent) => {
    setMode(event.target.value as Mode);
  };

  if (!mounted) {
    // for server-side rendering
    // learn more at https://github.com/pacocoursey/next-themes#avoid-hydration-mismatch
    return null;
  }

  return (
    <Paper>
      <Select value={mode} label="Theme" onChange={handleChange}>
        <MenuItem value="light">Light</MenuItem>
        <MenuItem value="dark">Dark</MenuItem>
        <MenuItem value="system">System</MenuItem>
      </Select>
    </Paper>
  );
};
