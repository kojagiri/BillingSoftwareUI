// import PropTypes from 'prop-types';
// // material
// import { alpha, styled } from '@mui/material/styles';
// import { Box, Stack, AppBar, Toolbar, IconButton } from '@mui/material';
// // components
// import Iconify from '../../components/Iconify';
// //
// import Searchbar from './Searchbar';
// import AccountPopover from './AccountPopover';
// import LanguagePopover from './LanguagePopover';
// import NotificationsPopover from './NotificationsPopover';

// // ----------------------------------------------------------------------

// const DRAWER_WIDTH = 280;
// const APPBAR_MOBILE = 64;
// const APPBAR_DESKTOP = 92;

// const RootStyle = styled(AppBar)(({ theme }) => ({
//   boxShadow: 'none',
//   backdropFilter: 'blur(6px)',
//   WebkitBackdropFilter: 'blur(6px)', // Fix on Mobile
//   backgroundColor: alpha(theme.palette.background.default, 0.72),
//   [theme.breakpoints.up('lg')]: {
//     width: `calc(100% - ${DRAWER_WIDTH + 1}px)`
//   }
// }));

// const ToolbarStyle = styled(Toolbar)(({ theme }) => ({
//   minHeight: APPBAR_MOBILE,
//   [theme.breakpoints.up('lg')]: {
//     minHeight: APPBAR_DESKTOP,
//     padding: theme.spacing(0, 5)
//   }
// }));

// // ----------------------------------------------------------------------

// DashboardNavbar.propTypes = {
//   onOpenSidebar: PropTypes.func
// };

// export default function DashboardNavbar({ onOpenSidebar }) {
//   return (
//     <RootStyle>
//       <ToolbarStyle>
//         <IconButton
//           onClick={onOpenSidebar}
//           sx={{ mr: 1, color: 'text.primary', display: { lg: 'none' } }}
//         >
//           <Iconify icon="eva:menu-2-fill" />
//         </IconButton>

//         <Searchbar />
//         <Box sx={{ flexGrow: 1 }} />

//         <Stack direction="row" alignItems="center" spacing={{ xs: 0.5, sm: 1.5 }}>
//           <LanguagePopover />
//           <NotificationsPopover />
//           <AccountPopover />
//         </Stack>
//       </ToolbarStyle>
//     </RootStyle>
//   );
// }

import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { AppBar, Avatar, Badge, Box, IconButton, Toolbar, Tooltip } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import { Bell as BellIcon } from '../../icons/bell';
import { UserCircle as UserCircleIcon } from '../../icons/user-circle';
import { Users as UsersIcon } from '../../icons/users';

const DashboardNavbarRoot = styled(AppBar)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  boxShadow: theme.shadows[3]
}));

export default function DashboardNavbar (props) {
  const { onOpenSidebar, ...other } = props;

  return (
    <>
      <DashboardNavbarRoot
        sx={{
          left: {
            lg: 280
          },
          width: {
            lg: 'calc(100% - 280px)'
          }
        }}
        {...other}>
        <Toolbar
          disableGutters
          sx={{
            minHeight: 64,
            left: 0,
            px: 2
          }}
        >
          <IconButton
            onClick={onOpenSidebar}
            sx={{
              display: {
                xs: 'inline-flex',
                lg: 'none'
              }
            }}
          >
            <MenuIcon fontSize="small" />
          </IconButton>
          <Tooltip title="Search">
            <IconButton sx={{ ml: 1 }}>
              <SearchIcon fontSize="small" />
            </IconButton>
          </Tooltip>
          <Box sx={{ flexGrow: 1 }} />
          <Tooltip title="Contacts">
            <IconButton sx={{ ml: 1 }}>
              <UsersIcon fontSize="small" />
            </IconButton>
          </Tooltip>
          <Tooltip title="Notifications">
            <IconButton sx={{ ml: 1 }}>
              <Badge
                badgeContent={4}
                color="primary"
                variant="dot"
              >
                <BellIcon fontSize="small" />
              </Badge>
            </IconButton>
          </Tooltip>
          <Avatar
            sx={{
              height: 40,
              width: 40,
              ml: 1
            }}
            src="/static/images/avatars/avatar_1.png"
          >
            <UserCircleIcon fontSize="small" />
          </Avatar>
        </Toolbar>
      </DashboardNavbarRoot>
    </>
  );
};

DashboardNavbar.propTypes = {
  onOpenSidebar: PropTypes.func
};
