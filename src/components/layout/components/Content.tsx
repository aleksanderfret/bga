import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

export const SIDEBAR_WIDTH = 240;
export const MINI_SIDEBAR_WIDTH = 56;

export const Content = styled(Box)(
  ({ theme: { spacing, transitions, breakpoints, mixins } }) => ({
    flexGrow: 1,
    position: 'relative',
    padding: `${spacing(4.5)} ${spacing(1)}`,
    transition: transitions.create(['margin', 'width'], {
      easing: transitions.easing.sharp,
      duration: transitions.duration.leavingScreen,
    }),

    [breakpoints.up('sm')]: {
      padding: `${spacing(5.5)} ${spacing(2)}`,
    },

    [breakpoints.up('md')]: {
      padding: spacing(3),
      paddingTop: spacing(7),
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
