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
const collapsedDrawerWidth = 88;

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

      {/* ── ① Logo + Toggle arrow ── */}
      <Box
        sx={{
          flexShrink:     0,
          display:        'flex',
          alignItems:     'center',
          justifyContent: desktopCollapsed ? 'center' : 'space-between',
          px:             desktopCollapsed ? 0 : '10px',
          pt:             '10px',
          pb:             1,
          gap:            1,
        }}
      >
        {/* Logo — hidden when sidebar is collapsed */}
        <img
          src="/Images/Drawer/logo.png"
          alt="Web3Fund logo"
          style={{
            width:      '163px',
            height:     'auto',
            padding:    '10px 16px',
            transition: 'all 0.25s ease',
            display:    desktopCollapsed ? 'none' : 'block',
          }}
        />

        {/* Arrow toggle — always visible */}
        <IconButton
          onClick={onDesktopToggle}
          aria-label={desktopCollapsed ? 'expand sidebar' : 'collapse sidebar'}
          size="small"
          sx={{ '&:hover': { backgroundColor: '#f5f5f5' } }}
        >
          <img
            src={desktopCollapsed ? '/Images/Drawer/arrow-right.svg' : '/Images/Drawer/arrow-left.svg'}
            alt={desktopCollapsed ? 'expand' : 'collapse'}
            width={30}
            height={30}
          />
        </IconButton>
      </Box>

      {/* ── ② Scrollable menu area ── */}
      <Box sx={{ flex: 1, overflowY: 'auto', overflowX: 'hidden' }}>

        {/* GENERAL MENU label */}
        <List
          sx={{
            display: { xs: 'block', sm: desktopCollapsed ? 'none' : 'block' },
            pb: 0,
          }}
        >
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

        {/* General menu items */}
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
                  justifyContent:  desktopCollapsed ? 'center' : 'flex-start',
                  px:              desktopCollapsed ? 1 : 2,
                }}
              >
                <ListItemIcon
                  sx={{ minWidth: desktopCollapsed ? 'unset' : 36, justifyContent: 'center' }}
                >
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
                  sx={{
                    display: { xs: 'block', sm: desktopCollapsed ? 'none' : 'block' },
                    m: 0,
                  }}
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
        <List
          sx={{
            display: { xs: 'block', sm: desktopCollapsed ? 'none' : 'block' },
            pt: 1,
            pb: 0,
          }}
        >
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

        {/* Secondary menu items */}
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
                  justifyContent:  desktopCollapsed ? 'center' : 'flex-start',
                  px:              desktopCollapsed ? 1 : 2,
                }}
              >
                <ListItemIcon
                  sx={{ minWidth: desktopCollapsed ? 'unset' : 36, justifyContent: 'center' }}
                >
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
                  sx={{
                    display: { xs: 'block', sm: desktopCollapsed ? 'none' : 'block' },
                    m: 0,
                  }}
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

      {/* ── ③ Logout — pinned at the very bottom ── */}
      <Box
        sx={{
          flexShrink: 0,
          px:         1,
          py:         1.5,
          borderTop:  '1px solid #eceff5',
        }}
      >
        <ListItemButton
          onClick={handleLogout}
          sx={{
            borderRadius:   '8px',
            lineHeight:     '120%',
            fontWeight:     500,
            fontSize:       '14px',
            fontFamily:     'Montserrat',
            color:          '#F04A4A',
            justifyContent: desktopCollapsed ? 'center' : 'flex-start',
            px:             desktopCollapsed ? 1 : 2,
            '&:hover':      { backgroundColor: '#fff4f4' },
          }}
        >
          <ListItemIcon
            sx={{ minWidth: desktopCollapsed ? 'unset' : 36, justifyContent: 'center' }}
          >
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
            sx={{
              display: { xs: 'block', sm: desktopCollapsed ? 'none' : 'block' },
              m: 0,
            }}
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
          width:           { sm: `calc(100% - ${desktopCollapsed ? collapsedDrawerWidth : drawerWidth}px)` },
          ml:              { sm: `${desktopCollapsed ? collapsedDrawerWidth : drawerWidth}px` },
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
            px:             { xs: 1.5, sm: 2.5 },
          }}
        >
          {/* Left: mobile hamburger + welcome text */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 1, display: { sm: 'none' } }}
            >
              <img
                src={mobileOpen ? '/Images/Drawer/arrow-left.svg' : '/Images/Drawer/arrow-right.svg'}
                alt={mobileOpen ? 'close sidebar' : 'open sidebar'}
                width={30}
                height={30}
              />
            </IconButton>
            <div
              style={{
                fontSize:   '18px',
                fontWeight: 700,
                color:      '#242838',
                lineHeight: 1.1,
              }}
            >
              Welcome Back Jake! 👋
            </div>
          </Box>

          {/* Right: icon buttons + logout button */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            {toolbarIcons.map((icon) => (
              <IconButton
                key={icon.alt}
                color="inherit"
                aria-label={icon.alt}
                sx={{
                  width:     '40px',
                  height:    '40px',
                  padding:   0,
                  '&:hover': { backgroundColor: '#f4f6fb' },
                }}
              >
                <img
                  src={icon.src}
                  alt={icon.alt}
                  style={{
                    width:      '24px',
                    height:     '24px',
                    objectFit:  'contain',
                    display:    'block',
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
                fontSize:        '12px',
                fontWeight:      600,
                padding:         '8px 40px',
                minWidth:        '140px',
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
          width:      { sm: desktopCollapsed ? collapsedDrawerWidth : drawerWidth },
          flexShrink: { sm: 0 },
          transition: 'width 0.25s ease',
        }}
        aria-label="sidebar navigation"
      >
        {/* Mobile drawer */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onTransitionEnd={handleDrawerTransitionEnd}
          onClose={handleDrawerClose}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width:     drawerWidth,
            },
          }}
          slotProps={{ root: { keepMounted: true } }}
        >
          {drawer}
        </Drawer>

        {/* Desktop drawer */}
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': {
              boxSizing:  'border-box',
              width:      desktopCollapsed ? collapsedDrawerWidth : drawerWidth,
              transition: 'width 0.25s ease',
              overflowX:  'hidden',
              height:     '100%',
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