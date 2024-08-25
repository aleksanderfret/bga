import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

export const Content = styled(Box)(
  ({ theme: { spacing, transitions, breakpoints, mixins } }) => ({
    flexGrow: 1,
    position: 'relative',
    padding: `${spacing(16)} ${spacing(2)} ${spacing(2)}`,
    transition: transitions.create(['margin', 'width'], {
      easing: transitions.easing.sharp,
      duration: transitions.duration.leavingScreen,
    }),

    [breakpoints.up('sm')]: {
      padding: `${spacing(18)} ${spacing(4)} ${spacing(4)}`,
    },

    [breakpoints.up('md')]: {
      padding: `${spacing(22)} ${spacing(6)} ${spacing(6)}`,
      width: '100%',
      marginLeft: 0,

      '&.open': {
        width: `calc(100% - ${mixins.sidebar.collapsed.width}px)`,
        marginLeft: mixins.sidebar.collapsed.width,

        '&.expanded': {
          width: `calc(100% - ${mixins.sidebar.expanded.width}px)`,
          marginLeft: mixins.sidebar.expanded.width,
        },
      },
    },
  })
);

export default Content;
