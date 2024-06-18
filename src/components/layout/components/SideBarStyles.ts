import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
// import ChevronLeft from '@mui/icons-material/ChevronLeft';
import { styled } from '@mui/material/styles';

export const Drawer = styled(MuiDrawer)(
  ({ theme: { mixins, breakpoints, transitions } }) => ({
    [breakpoints.up('md')]: {
      position: 'absolute',
      marginLeft: mixins.sidebar.collapsed.width || 0 * -1,

      '&.open': {
        marginLeft: 0,
      },

      '&.expanded:not(.open)': {
        marginLeft: mixins.sidebar.expanded.width || 0 * -1,
      },
    },

    '& .MuiDrawer-paper': {
      boxSizing: 'border-box',
      overflow: 'hidden',
      width: mixins.sidebar.collapsed.width,
      transition: `${transitions.create(['transform', 'width', 'margin'], {
        easing: transitions.easing.easeOut,
        duration: transitions.duration.enteringScreen,
      })} !important`,
    },

    '&.expanded .MuiDrawer-paper': {
      width: mixins.sidebar.expanded.width,
    },
  })
);

export const NavHeader = styled(Box)(
  ({ theme: { breakpoints, spacing, mixins } }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 0,
    height: mixins.appBar.mobile.height,

    '& > div': {
      display: 'none',

      [breakpoints.up('md')]: {
        display: 'inline-block',
      },
    },

    '&.expanded': {
      justifyContent: 'space-between',
      padding: spacing(0, 1),

      '& > div': {
        display: 'inline-block',
      },
    },

    [breakpoints.up('md')]: {
      margin: '0 auto',
      height: mixins.appBar.mobile.height,
    },
  })
);

export const CloseButton = styled(IconButton)(({ theme: { breakpoints } }) => ({
  [breakpoints.up('md')]: {
    display: 'none',
  },
}));

export const ExpandIconBox = styled(Box)(({ theme: { spacing } }) => ({
  padding: spacing(0.5, 0),
  marginTop: 'auto',
  display: 'flex',
  justifyContent: 'center',

  '&.expanded': {
    justifyContent: 'flex-end',
    padding: spacing(0.5, 1),
  },
}));

// const ExpandIcon = styled(MenuOpenRounded)<ExpandIconProps>(
//   ({ theme, expanded }) => ({
//     transform: expanded ? "rotate(0)" : "rotate(180deg)",
//     transition: theme.transitions.create(["transform"], {
//       easing: theme.transitions.easing.easeOut,
//       duration: theme.transitions.duration.standard,
//     }),
//   })
// );
