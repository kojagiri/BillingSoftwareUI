// import PropTypes from 'prop-types';
// import { useEffect } from 'react';
// import { Link as RouterLink, useLocation } from 'react-router-dom';
// // material
// import { styled } from '@mui/material/styles';
// import { Box, Link, Button, Drawer, Typography, Avatar, Stack } from '@mui/material';
// // mocks_
// import account from '../../_mocks_/account';
// // hooks
// import useResponsive from '../../hooks/useResponsive';
// // components
// import Logo from '../../components/Logo';
// import Scrollbar from '../../components/Scrollbar';
// import NavSection from '../../components/NavSection';
// //
// import sidebarConfig from './SidebarConfig';

// // ----------------------------------------------------------------------

// const DRAWER_WIDTH = 280;

// const RootStyle = styled('div')(({ theme }) => ({
//   [theme.breakpoints.up('lg')]: {
//     flexShrink: 0,
//     width: DRAWER_WIDTH
//   }
// }));

// const AccountStyle = styled('div')(({ theme }) => ({
//   display: 'flex',
//   alignItems: 'center',
//   padding: theme.spacing(2, 2.5),
//   borderRadius: Number(theme.shape.borderRadius) * 1.5,
//   backgroundColor: theme.palette.grey[500_12]
// }));

// // ----------------------------------------------------------------------

// DashboardSidebar.propTypes = {
//   isOpenSidebar: PropTypes.bool,
//   onCloseSidebar: PropTypes.func
// };

// export default function DashboardSidebar({ isOpenSidebar, onCloseSidebar }) {
//   const { pathname } = useLocation();

//   const isDesktop = useResponsive('up', 'lg');

//   useEffect(() => {
//     if (isOpenSidebar) {
//       onCloseSidebar();
//     }
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [pathname]);

//   const renderContent = (
//     <Scrollbar
//       sx={{
//         height: 1,
//         '& .simplebar-content': { height: 1, display: 'flex', flexDirection: 'column' }
//       }}
//     >
//       <Box sx={{ px: 2.5, py: 3, display: 'inline-flex' }}>
//         <Logo />
//       </Box>

//       <Box sx={{ mb: 5, mx: 2.5 }}>
//         <Link underline="none" component={RouterLink} to="#">
//           <AccountStyle>
//             <Avatar src={account.photoURL} alt="photoURL" />
//             <Box sx={{ ml: 2 }}>
//               <Typography variant="subtitle2" sx={{ color: 'text.primary' }}>
//                 {account.displayName}
//               </Typography>
//               <Typography variant="body2" sx={{ color: 'text.secondary' }}>
//                 {account.role}
//               </Typography>
//             </Box>
//           </AccountStyle>
//         </Link>
//       </Box>

//       <NavSection navConfig={sidebarConfig} />

//       <Box sx={{ flexGrow: 1 }} />

//       <Box sx={{ px: 2.5, pb: 3, mt: 10 }}>
//         <Stack
//           alignItems="center"
//           spacing={3}
//           sx={{ pt: 5, borderRadius: 2, position: 'relative' }}
//         >
//           <Box
//             component="img"
//             src="/static/illustrations/illustration_avatar.png"
//             sx={{ width: 100, position: 'absolute', top: -50 }}
//           />

//           <Box sx={{ textAlign: 'center' }}>
//             <Typography gutterBottom variant="h6">
//               Get more?
//             </Typography>
//             <Typography variant="body2" sx={{ color: 'text.secondary' }}>
//               From only $69
//             </Typography>
//           </Box>

//           <Button
//             href="https://material-ui.com/store/items/minimal-dashboard/"
//             target="_blank"
//             variant="contained"
//           >
//             Upgrade to Pro
//           </Button>
//         </Stack>
//       </Box>
//     </Scrollbar>
//   );

//   return (
//     <RootStyle>
//       {!!isDesktop && (
//         <Drawer
//           open={isOpenSidebar}
//           onClose={onCloseSidebar}
//           PaperProps={{
//             sx: { width: DRAWER_WIDTH }
//           }}
//         >
//           {renderContent}
//         </Drawer>
//       )}

//       {isDesktop && (
//         <Drawer
//           open
//           variant="persistent"
//           PaperProps={{
//             sx: {
//               width: DRAWER_WIDTH,
//               bgcolor: 'background.default',
//               borderRightStyle: 'dashed'
//             }
//           }}
//         >
//           {renderContent}
//         </Drawer>
//       )}
//     </RootStyle>
//   );
// }


import { useEffect } from 'react';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import { Box, Button, Divider, Drawer, Typography, useMediaQuery } from '@mui/material';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { ChartBar as ChartBarIcon } from '../icons/chart-bar';
import { Cog as CogIcon } from '../icons/cog';
import { Lock as LockIcon } from '../icons/lock';
import { Selector as SelectorIcon } from '../icons/selector';
import { ShoppingBag as ShoppingBagIcon } from '../icons/shopping-bag';
import { User as UserIcon } from '../icons/user';
import { UserAdd as UserAddIcon } from '../icons/user-add';
import { Users as UsersIcon } from '../icons/users';
import { XCircle as XCircleIcon } from '../icons/x-circle';
import { Logo } from './logo';
import { NavItem } from './nav-item';

const items = [
  {
    href: '/',
    icon: (<ChartBarIcon fontSize="small" />),
    title: 'Dashboard'
  },
  {
    href: '/customers',
    icon: (<UsersIcon fontSize="small" />),
    title: 'Customers'
  },
  {
    href: '/products',
    icon: (<ShoppingBagIcon fontSize="small" />),
    title: 'Products'
  },
  {
    href: '/account',
    icon: (<UserIcon fontSize="small" />),
    title: 'Account'
  },
  {
    href: '/settings',
    icon: (<CogIcon fontSize="small" />),
    title: 'Settings'
  },
  {
    href: '/login',
    icon: (<LockIcon fontSize="small" />),
    title: 'Login'
  },
  {
    href: '/register',
    icon: (<UserAddIcon fontSize="small" />),
    title: 'Register'
  },
  {
    href: '/404',
    icon: (<XCircleIcon fontSize="small" />),
    title: 'Error'
  }
];

export default function DashboardSidebar (props) {
  const { open, onClose } = props;
  const router = useRouter();
  const lgUp = useMediaQuery((theme) => theme.breakpoints.up('lg'), {
    defaultMatches: true,
    noSsr: false
  });

  useEffect(
    () => {
      if (!router.isReady) {
        return;
      }

      if (open) {
        onClose?.();
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [router.asPath]
  );

  const content = (
    <>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          height: '100%'
        }}
      >
        <div>
          <Box sx={{ p: 3 }}>
            <NextLink
              href="/"
              passHref
            >
              <a>
                <Logo
                  sx={{
                    height: 42,
                    width: 42
                  }}
                />
              </a>
            </NextLink>
          </Box>
          <Box sx={{ px: 2 }}>
            <Box
              sx={{
                alignItems: 'center',
                backgroundColor: 'rgba(255, 255, 255, 0.04)',
                cursor: 'pointer',
                display: 'flex',
                justifyContent: 'space-between',
                px: 3,
                py: '11px',
                borderRadius: 1
              }}
            >
              <div>
                <Typography
                  color="inherit"
                  variant="subtitle1"
                >
                  Acme Inc
                </Typography>
                <Typography
                  color="neutral.400"
                  variant="body2"
                >
                  Your tier
                  {' '}
                  : Premium
                </Typography>
              </div>
              <SelectorIcon
                sx={{
                  color: 'neutral.500',
                  width: 14,
                  height: 14
                }}
              />
            </Box>
          </Box>
        </div>
        <Divider
          sx={{
            borderColor: '#2D3748',
            my: 3
          }}
        />
        <Box sx={{ flexGrow: 1 }}>
          {items.map((item) => (
            <NavItem
              key={item.title}
              icon={item.icon}
              href={item.href}
              title={item.title}
            />
          ))}
        </Box>
        <Divider sx={{ borderColor: '#2D3748' }} />
        <Box
          sx={{
            px: 2,
            py: 3
          }}
        >
          <Typography
            color="neutral.100"
            variant="subtitle2"
          >
            Need more features?
          </Typography>
          <Typography
            color="neutral.500"
            variant="body2"
          >
            Check out our Pro solution template.
          </Typography>
          <Box
            sx={{
              display: 'flex',
              mt: 2,
              mx: 'auto',
              width: '160px',
              '& img': {
                width: '100%'
              }
            }}
          >
            <img
              alt="Go to pro"
              src="/static/images/sidebar_pro.png"
            />
          </Box>
          <NextLink
            href="https://material-kit-pro-react.devias.io/"
            passHref
          >
            <Button
              color="secondary"
              component="a"
              endIcon={(<OpenInNewIcon />)}
              fullWidth
              sx={{ mt: 2 }}
              variant="contained"
            >
              Pro Live Preview
            </Button>
          </NextLink>
        </Box>
      </Box>
    </>
  );

  if (lgUp) {
    return (
      <Drawer
        anchor="left"
        open
        PaperProps={{
          sx: {
            backgroundColor: 'neutral.900',
            color: '#FFFFFF',
            width: 280
          }
        }}
        variant="permanent"
      >
        {content}
      </Drawer>
    );
  }

  return (
    <Drawer
      anchor="left"
      onClose={onClose}
      open={open}
      PaperProps={{
        sx: {
          backgroundColor: 'neutral.900',
          color: '#FFFFFF',
          width: 280
        }
      }}
      sx={{ zIndex: (theme) => theme.zIndex.appBar + 100 }}
      variant="temporary"
    >
      {content}
    </Drawer>
  );
};

DashboardSidebar.propTypes = {
  onClose: PropTypes.func,
  open: PropTypes.bool
};
