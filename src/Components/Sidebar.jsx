import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';

const drawerWidth          = 264;
const collapsedDrawerWidth = 52; // ← tightened: just enough for the arrow icon

const menuItems = [
  { text: 'Dashboard',          icon: '/Images/Drawer/1.svg' },
  { text: 'Account',            icon: '/Images/Drawer/2.svg' },
  { text: 'Buy',                icon: '/Images/Drawer/8.svg' },
  { text: 'Latest News',        icon: '/Images/Drawer/3.svg' },
  { text: 'Trade Web3Fund NFT', icon: '/Images/Drawer/4.svg' },
  { text: 'Chat',               icon: '/Images/Drawer/5.svg' },
];

const secondaryItems = [
  { text: 'Help',     icon: '/Images/Drawer/6.svg' },
  { text: 'Feedback', icon: '/Images/Drawer/7.svg' },
];

const toolbarIcons = [
  { src: '/Images/Drawer/top3.svg',         alt: 'Notifications' },
  { src: '/Images/Drawer/Notification.svg', alt: 'Settings' },
  { src: '/Images/Drawer/image 329.png',    alt: 'Profile' },
];

function ResponsiveDrawer(props) {
  const { window, desktopCollapsed, onDesktopToggle } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isClosing, setIsClosing]   = React.useState(false);
  const [activeItem, setActiveItem] = React.useState('Dashboard');

  const handleDrawerClose         = () => { setIsClosing(true); setMobileOpen(false); };
  const handleDrawerTransitionEnd = () => { setIsClosing(false); };
  const handleDrawerToggle        = () => { if (!isClosing) setMobileOpen(!mobileOpen); };
  const handleLogout              = () => { console.log('Logout clicked'); };

  const drawer = (
    <Box
      sx={{
        display:       'flex',
        flexDirection: 'column',
        height:        '100%',
        width:         '100%',
        overflow:      'hidden',
      }}
    >
      {/* ── ① Logo area + arrow toggle ── */}
      <Box
        sx={{
          flexShrink:     0,
          display:        'flex',
          alignItems:     'center',
          // When collapsed: center the arrow. When expanded: logo left, arrow right.
          justifyContent: 'space-between',
          '@media (min-width: 1024px)': {
            justifyContent: desktopCollapsed ? 'center' : 'space-between',
          },
          px: '10px',
          '@media (min-width: 1024px)': {
            px: desktopCollapsed ? 0 : '10px',
          },
          pt:             '10px',
          pb:             1,
          gap:            1,
        }}
      >
        {/* Logo — always visible on mobile, hidden on desktop when collapsed */}
        <Box
          component="img"
          src="/Images/Drawer/logo.png"
          alt="Web3Fund logo"
          sx={{
            display: 'block',
            '@media (min-width: 1024px)': {
              display: desktopCollapsed ? 'none' : 'block',
            },
            width:   '163px',
            height:  'auto',
            padding: '10px 16px',
          }}
        />

        {/* Arrow toggle — always visible on desktop, hidden on mobile */}
        <IconButton
          onClick={onDesktopToggle}
          aria-label={desktopCollapsed ? 'expand sidebar' : 'collapse sidebar'}
          size="small"
          sx={{
            display: 'none',
            '@media (min-width: 1024px)': {
              display: 'flex',
            },
            '&:hover': { backgroundColor: '#f5f5f5' },
          }}
        >
          <img
            src={desktopCollapsed
              ? '/Images/Drawer/arrow-right.svg'
              : '/Images/Drawer/arrow-left.svg'}
            alt={desktopCollapsed ? 'expand' : 'collapse'}
            width={30}
            height={30}
          />
        </IconButton>
      </Box>

      {/* ── ② Menu area — entirely hidden when collapsed ── */}
      {/*
        KEY CHANGE: when desktopCollapsed is true on desktop (sm+),
        we hide the entire scrollable menu section so only the arrow shows.
        On mobile the drawer is always full-width so we always show the menu.
      */}
      <Box
        sx={{
          flex:      1,
          overflowY: 'auto',
          overflowX: 'hidden',
          // Hide menu content on desktop when collapsed
          display: 'block',
          '@media (min-width: 1024px)': {
            display: desktopCollapsed ? 'none' : 'block',
          },
        }}
      >
        {/* GENERAL MENU label */}
        <List sx={{ pb: 0 }}>
          <ListItem
            sx={{
              color:         '#667085',
              fontSize:      '12px',
              fontFamily:    'Montserrat',
              fontWeight:    400,
              lineHeight:    '160%',
              letterSpacing: '0px',
              px:            '32px',
              py:            '20px',
            }}
          >
            GENERAL MENU
          </ListItem>
        </List>

        <List sx={{ pt: 0, px: 1 }}>
          {menuItems.map(({ text, icon }) => (
            <ListItem key={text} disablePadding sx={{ mb: 0.5 }}>
              <ListItemButton
                onClick={() => setActiveItem(text)}
                sx={{
                  borderRadius:    '8px',
                  color:           activeItem === text ? '#1565c0' : '#667085',
                  fontWeight:      activeItem === text ? 600 : 400,
                  '&:hover':       { backgroundColor: '#f5f5f5' },
                  backgroundColor: 'transparent',
                  px:              2,
                }}
              >
                <ListItemIcon sx={{ minWidth: 36, justifyContent: 'center' }}>
                  <img
                    src={icon}
                    alt={text}
                    width={24}
                    height={24}
                    style={{
                      opacity: activeItem === text ? 1 : 0.55,
                      filter:  activeItem === text
                        ? 'invert(23%) sepia(96%) saturate(1200%) hue-rotate(200deg)'
                        : 'none',
                    }}
                  />
                </ListItemIcon>
                <ListItemText
                  primary={text}
                  sx={{ m: 0 }}
                  slotProps={{
                    primary: {
                      fontSize:   '13.5px',
                      fontWeight: activeItem === text ? 600 : 400,
                      color:      activeItem === text ? '#1565c0' : '#667085',
                      whiteSpace: 'nowrap',
                    },
                  }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>

        {/* OTHER MENU label */}
        <List sx={{ pt: 1, pb: 0 }}>
          <ListItem
            sx={{
              color:         '#667085',
              fontSize:      '12px',
              fontFamily:    'Montserrat',
              fontWeight:    400,
              lineHeight:    '160%',
              letterSpacing: '0px',
              px:            '32px',
              py:            '20px',
            }}
          >
            OTHER MENU
          </ListItem>
        </List>

        <List sx={{ pt: 0, px: 1 }}>
          {secondaryItems.map(({ text, icon }) => (
            <ListItem key={text} disablePadding sx={{ mb: 0.5 }}>
              <ListItemButton
                onClick={() => setActiveItem(text)}
                sx={{
                  borderRadius:    '8px',
                  color:           activeItem === text ? '#1565c0' : '#888888',
                  '&:hover':       { backgroundColor: '#f5f5f5' },
                  backgroundColor: 'transparent',
                  px:              2,
                }}
              >
                <ListItemIcon sx={{ minWidth: 36, justifyContent: 'center' }}>
                  <img
                    src={icon}
                    alt={text}
                    width={24}
                    height={24}
                    style={{
                      opacity: activeItem === text ? 1 : 0.5,
                      filter:  activeItem === text
                        ? 'invert(23%) sepia(96%) saturate(1200%) hue-rotate(200deg)'
                        : 'none',
                    }}
                  />
                </ListItemIcon>
                <ListItemText
                  primary={text}
                  sx={{ m: 0 }}
                  slotProps={{
                    primary: {
                      fontSize:   '13.5px',
                      fontWeight: activeItem === text ? 600 : 400,
                      color:      activeItem === text ? '#1565c0' : '#888888',
                      whiteSpace: 'nowrap',
                    },
                  }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>

      {/* ── ③ Logout — also hidden when collapsed on desktop ── */}
      <Box
        sx={{
          flexShrink: 0,
          px:         1,
          py:         1.5,
          borderTop:  '1px solid #eceff5',
          // Hide logout section on desktop when collapsed
          display: 'block',
          '@media (min-width: 1024px)': {
            display: desktopCollapsed ? 'none' : 'block',
          },
        }}
      >
        <ListItemButton
          onClick={handleLogout}
          sx={{
            borderRadius: '8px',
            fontWeight:   500,
            fontSize:     '14px',
            fontFamily:   'Montserrat',
            color:        '#F04A4A',
            px:           2,
            '&:hover':    { backgroundColor: '#fff4f4' },
          }}
        >
          <ListItemIcon sx={{ minWidth: 36, justifyContent: 'center' }}>
            <img
              src="/Images/Drawer/logout.svg"
              alt="Logout"
              width={24}
              height={24}
              style={{ objectFit: 'contain', display: 'block' }}
            />
          </ListItemIcon>
          <ListItemText
            primary="Logout"
            sx={{ m: 0 }}
            slotProps={{
              primary: {
                fontSize:   '13.5px',
                fontWeight: 500,
                color:      'inherit',
                whiteSpace: 'nowrap',
              },
            }}
          />
        </ListItemButton>
      </Box>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />

      {/* ── AppBar ── */}
      <AppBar
        position="fixed"
        sx={{
          width: '100%',
          ml: 0,
          '@media (min-width: 1024px)': {
            width: desktopCollapsed ? `calc(100% - ${collapsedDrawerWidth}px)` : `calc(100% - ${drawerWidth}px)`,
            ml: desktopCollapsed ? `${collapsedDrawerWidth}px` : `${drawerWidth}px`,
          },
          backgroundColor: '#ffffff',
          color:           '#242838',
          boxShadow:       'none',
          borderBottom:    '1px solid #eceff5',
          transition:      'width 0.25s ease, margin 0.25s ease',
        }}
      >
        <Toolbar
          sx={{
            justifyContent: 'space-between',
            minHeight:      '70px !important',
            // Tighter padding on 700–850px range (md breakpoint = 900 in MUI,
            // so we use a custom value via sx responsive array)
            px: { xs: 1.5, sm: 2, md: 2.5 },
            gap: 1,
          }}
        >
          {/* ── Left: mobile arrow toggle + welcome text ── */}
          <Box
            sx={{
              display:    'flex',
              alignItems: 'center',
              gap:        { xs: 0.5, sm: 1 },
              minWidth:   0,
              flex:       '1 1 auto',
              overflow:   'hidden',
            }}
          >
            {/* Mobile-only arrow toggle */}
            <IconButton
              color="inherit"
              aria-label={mobileOpen ? 'close drawer' : 'open drawer'}
              edge="start"
              onClick={handleDrawerToggle}
              sx={{
                display: 'flex',
                '@media (min-width: 1024px)': { display: 'none' },
                flexShrink: 0,
                p:          0.5,
              }}
            >
              <img
                src={mobileOpen
                  ? '/Images/Drawer/arrow-left.svg'
                  : '/Images/Drawer/arrow-right.svg'}
                alt={mobileOpen ? 'close sidebar' : 'open sidebar'}
                width={28}
                height={28}
              />
            </IconButton>

            {/* Welcome text — scales down on 700–850px screens */}
            <Box sx={{ overflow: 'hidden', minWidth: 0 }}>
              <Box
                component="span"
                sx={{
                  // xs: 13px, sm (600–850px): 15px, md (900px+): 18px
                  fontSize:     { xs: '13px', sm: '15px', md: '18px' },
                  fontWeight:   700,
                  color:        '#242838',
                  lineHeight:   1.2,
                  whiteSpace:   'nowrap',
                  overflow:     'hidden',
                  textOverflow: 'ellipsis',
                  display:      'block',
                }}
              >
                Welcome Back Jake! 👋
              </Box>
            </Box>
          </Box>

          {/* ── Right: icon buttons + logout button ── */}
          <Box
            sx={{
              display:    'flex',
              alignItems: 'center',
              // Tighter gap on 700–850px
              gap:        { xs: 0.25, sm: 0.5, md: 1 },
              flexShrink: 0,
            }}
          >
            {toolbarIcons.map((icon) => (
              <IconButton
                key={icon.alt}
                color="inherit"
                aria-label={icon.alt}
                sx={{
                  // Slightly smaller hit area on 700–850px
                  width:     { xs: '32px', sm: '34px', md: '40px' },
                  height:    { xs: '32px', sm: '34px', md: '40px' },
                  padding:   0,
                  '&:hover': { backgroundColor: '#f4f6fb' },
                }}
              >
                <img
                  src={icon.src}
                  alt={icon.alt}
                  style={{
                    width:     '20px',
                    height:    '20px',
                    objectFit: 'contain',
                    display:   'block',
                  }}
                />
              </IconButton>
            ))}

            <Button
              onClick={handleLogout}
              variant="outlined"
              size="small"
              sx={{
                fontFamily:      'Montserrat',
                color:           '#ffffff',
                borderColor:     '#0F68FF',
                borderRadius:    '8px',
                backgroundColor: '#0F68FF',
                lineHeight:      '130%',
                // Font + padding scale: xs → sm (700–850px) → md (850px+)
                fontSize:  { xs: '11px', sm: '11px', md: '12px' },
                fontWeight: 600,
                padding:   { xs: '6px 12px', sm: '7px 18px', md: '8px 40px' },
                minWidth:  { xs: 'unset', sm: 'unset', md: '140px' },
                whiteSpace: 'nowrap',
                '&:hover': {
                  color:           '#0F68FF',
                  borderColor:     '#FFFFFF',
                  backgroundColor: '#FFFFFF',
                },
              }}
            >
              Log out
            </Button>
          </Box>
        </Toolbar>
      </AppBar>

      {/* ── Nav drawer ── */}
      <Box
        component="nav"
        sx={{
          width: 0,
          '@media (min-width: 1024px)': {
            width: desktopCollapsed ? collapsedDrawerWidth : drawerWidth,
          },
          flexShrink: 0,
          transition: 'width 0.25s ease',
        }}
        aria-label="sidebar navigation"
      >
        {/* Mobile drawer — always full width, shows full menu */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onTransitionEnd={handleDrawerTransitionEnd}
          onClose={handleDrawerClose}
          sx={{
            display: 'block',
            '@media (min-width: 1024px)': { display: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width:     drawerWidth,
            },
          }}
          slotProps={{ root: { keepMounted: true } }}
          ModalProps={{
            BackdropProps: {
              sx: {
                backdropFilter: 'blur(4px)',
                backgroundColor: 'rgba(0, 0, 0, 0.2)',
              },
            },
          }}
        >
          {drawer}
        </Drawer>

        {/* Desktop drawer */}
        <Drawer
          variant="permanent"
          sx={{
            display: 'none',
            '@media (min-width: 1024px)': { display: 'block' },
            '& .MuiDrawer-paper': {
              boxSizing:  'border-box',
              width:      desktopCollapsed ? collapsedDrawerWidth : drawerWidth,
              transition: 'width 0.25s ease',
              overflowX:  'hidden',
              height:     '100%',
              zIndex:     (theme) => theme.zIndex.drawer + 2,
              boxShadow:  desktopCollapsed ? 'none' : '4px 0 15px rgba(0,0,0,0.08)',
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}

ResponsiveDrawer.propTypes = {
  desktopCollapsed: PropTypes.bool,
  onDesktopToggle:  PropTypes.func,
  window:           PropTypes.func,
};

export default ResponsiveDrawer;