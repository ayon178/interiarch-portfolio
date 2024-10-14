'use client'

import React from 'react'
import Link from 'next/link' // Import the Link component from Next.js
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import MenuIcon from '@mui/icons-material/Menu'
import Container from '@mui/material/Container'
import Avatar from '@mui/material/Avatar'
import Tooltip from '@mui/material/Tooltip'
import {
  Tabs,
  Tab,
  useMediaQuery,
  useTheme,
  MenuItem,
  Button,
} from '@mui/material'
import InfoIcon from '@mui/icons-material/Info'
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts'
import TimelineIcon from '@mui/icons-material/Timeline'
import CollectionsIcon from '@mui/icons-material/Collections'
import ContactMailIcon from '@mui/icons-material/ContactMail'

import {
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Menu,
} from '@mui/material'

import { Home } from '@mui/icons-material'
import Slide from '@mui/material/Slide' // Import the Slide component from Material-UI
import useScrollTrigger from '@mui/material/useScrollTrigger' // Import the useScrollTrigger hook
import CssBaseline from '@mui/material/CssBaseline'
import myProfilePic from '../assets/l.png'
import logo from '../assets/l.png'
import Image from 'next/image'
import { useState } from 'react'
import { COLORS } from '../constant/constant'
function HideOnScroll(props) {
  const { children } = props
  const trigger = useScrollTrigger()

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  )
}

function Navbar(props) {
  const handleOpenNavMenu = event => {
    setAnchorElNav(event.currentTarget)
  }
  const [anchorElNav, setAnchorElNav] = React.useState(null)
  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)

  const handleClick = event => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }

  const theme = useTheme()
  console.log(theme)
  const isMatch = useMediaQuery(theme.breakpoints.down('lg'))
  console.log(isMatch)

  return (
    <React.Fragment>
      <CssBaseline />
      <HideOnScroll {...props}>
        <AppBar
          className="navbar1"
          style={{
            width: '93.5%',
            right: '3.2%',
            // border: '2px solid white',
            borderRadius: '30px',
            background: COLORS.menu,
            marginTop: '18px',
            // 'linear-gradient( 90deg, rgba(78, 78, 246, 0.647) 0%, rgba(247, 90, 216, 0.696) 100% );',
          }}
        >
          <Container maxWidth="xl">
            <Toolbar disableGutters>
              <Typography
                variant="h6"
                noWrap
                component="a"
                href="/"
                sx={{
                  mr: 2,
                  display: { xs: 'none', lg: 'flex' },
                  fontFamily: 'monospace',
                  fontWeight: 700,
                  letterSpacing: '.3rem',
                  color: 'inherit',
                  textDecoration: 'none',
                }}
                className="cursorp"
              >
                {/* <Avatar
                  sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }}
                  className="cursorp Tab8 animate__animated animate__backInLeft"
                > */}
                <Image
                  src={logo}
                  alt="logo"
                  width={150} // Default width for medium devices
                  height={55} // Default height for medium devices
                  sx={{
                    width: { xs: '100px', lg: '150px' }, // Responsive width
                    height: { xs: 'auto', lg: '55px' }, // Responsive height
                  }}
                  loading="lazy"
                />
                {/* </Avatar> */}
              </Typography>

              <Box sx={{ flexGrow: 1, display: { xs: 'flex', lg: 'none' } }}>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleOpenNavMenu}
                  color="inherit"
                >
                  <MenuIcon />
                </IconButton>
              </Box>

              <Typography
                variant="h5"
                noWrap
                component="a"
                href=""
                sx={{
                  mr: 2,
                  display: { xs: 'flex', md: 'none' },
                  flexGrow: 1,
                  fontFamily: 'monospace',
                  fontWeight: 700,
                  letterSpacing: '.3rem',
                  color: 'inherit',
                  textDecoration: 'none',
                }}
              >
                {' '}
                {/* <Avatar sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }}> */}
                {/* <Image
                  src={logo}
                  style={{ width: '100%', height: 'auto' }}
                  alt="logo"
                  width={100}
                  height={100}
                  loading="lazy"
                  sx={{
                    display: { lg: 'none', xs: 'flex' },
                  }}
                /> */}
                {/* </Avatar> */}
              </Typography>
              <Box sx={{ flexGrow: 1, display: { xs: 'none', lg: 'flex' } }}>
                {isMatch ? (
                  <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={handleOpenNavMenu}
                    color="inherit"
                  >
                    <MenuIcon />
                  </IconButton>
                ) : (
                  <>
                    <Tabs centered sx={{ margin: 'auto' }}>
                      {/* Home Tab */}
                      <Tab
                        value="one"
                        label={
                          <Box
                            display="flex"
                            alignItems="center"
                            sx={{
                              fontSize: {
                                xs: '0.8rem',
                                md: '0.9rem',
                              },
                            }}
                          >
                            <Home sx={{ marginRight: 1 }} /> Home
                          </Box>
                        }
                        onClick={() => {
                          window.location.href = '/'
                        }}
                        sx={{
                          textDecoration: 'none',
                          color: 'white',
                          '&:hover': {
                            backgroundColor: 'rgba(0, 0, 0, 0.5)',
                            borderRadius: 20,
                            transition: 'background-color 0.3s ease',
                          },
                        }}
                        className="Tab1 animate__animated animate__zoomIn"
                      />

                      {/* About Tab */}
                      <Tab
                        value="two"
                        label={
                          <Box
                            display="flex"
                            alignItems="center"
                            sx={{
                              fontSize: {
                                xs: '0.8rem',
                                md: '0.9rem',
                              },
                            }}
                          >
                            <InfoIcon sx={{ marginRight: 1 }} /> About Us
                          </Box>
                        }
                        onClick={() => {
                          window.location.href = '/about-us'
                        }}
                        sx={{
                          textDecoration: 'none',
                          color: 'white',
                          '&:hover': {
                            backgroundColor: 'rgba(0, 0, 0, 0.5)',
                            borderRadius: 20,
                            transition: 'background-color 0.3s ease',
                          },
                        }}
                        className="Tab2 animate__animated animate__zoomIn"
                      />

                      {/* Our Services Tab */}
                      <Tab
                        value="three"
                        label={
                          <Box
                            display="flex"
                            alignItems="center"
                            sx={{
                              fontSize: {
                                xs: '0.8rem',
                                md: '0.9rem',
                              },
                            }}
                          >
                            <ManageAccountsIcon sx={{ marginRight: 1 }} /> Our
                            Services
                          </Box>
                        }
                        onClick={() => {
                          window.location.href = '/our-services'
                        }}
                        sx={{
                          textDecoration: 'none',
                          color: 'white',
                          '&:hover': {
                            backgroundColor: 'rgba(0, 0, 0, 0.5)',
                            borderRadius: 20,
                            transition: 'background-color 0.3s ease',
                          },
                        }}
                        className="Tab3 animate__animated animate__zoomIn"
                      />

                      {/* Portfolio Tab */}
                      <Tab
                        value="four"
                        label={
                          <Box
                            display="flex"
                            alignItems="center"
                            sx={{
                              fontSize: {
                                xs: '0.8rem',
                                md: '0.9rem',
                              },
                            }}
                          >
                            <TimelineIcon sx={{ marginRight: 1 }} /> Portfolio
                          </Box>
                        }
                        onClick={() => {
                          window.location.href = '/portfolio'
                        }}
                        sx={{
                          textDecoration: 'none',
                          color: 'white',
                          '&:hover': {
                            backgroundColor: 'rgba(0, 0, 0, 0.5)',
                            borderRadius: 20,
                            transition: 'background-color 0.3s ease',
                          },
                        }}
                        className="Tab4 animate__animated animate__zoomIn"
                      />

                      {/* Contact Tab */}
                      <Tab
                        value="six"
                        label={
                          <Box
                            display="flex"
                            alignItems="center"
                            sx={{
                              fontSize: {
                                xs: '0.8rem',
                                md: '0.9rem',
                              },
                            }}
                          >
                            <ContactMailIcon sx={{ marginRight: 1 }} /> Contact
                          </Box>
                        }
                        onClick={() => {
                          window.location.href = '/contact'
                        }}
                        sx={{
                          textDecoration: 'none',
                          color: 'white',
                          '&:hover': {
                            backgroundColor: 'rgba(0, 0, 0, 0.5)',
                            borderRadius: 20,
                            transition: 'background-color 0.3s ease',
                          },
                        }}
                        className="Tab6 animate__animated animate__zoomIn"
                      />
                    </Tabs>
                  </>
                )}
              </Box>

              <Box sx={{ flexGrow: 0 }}>
                <>
                  <Button
                    variant="outlined" // Change to 'outlined' to use border styles
                    sx={{
                      background: 'white',
                      color: COLORS.primary,
                      borderColor: 'transparent',
                      borderWidth: '1px',
                      borderRadius: '4px', // Optional: adjust border radius if needed
                      textTransform: 'none', // Prevent uppercase text
                      padding: '5px 16px', // Optional: adjust padding for better spacing
                      fontSize: '1rem', // Optional: adjust font size if needed
                      '&:hover': {
                        borderColor: COLORS.primary,
                        background: 'rgba(255, 255, 255, 0.1)', // Optional: change background on hover
                        color: COLORS.primary,
                      },
                    }}
                  >
                    Book a meeting
                  </Button>

                  {/* </IconButton> */}
                  {/* </Tooltip> */}

                  <Menu
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    anchorOrigin={{
                      vertical: 'top',
                      horizontal: 'right',
                    }}
                    transformOrigin={{
                      vertical: 'top',
                      horizontal: 'right',
                    }}
                    sx={{ mt: '45px' }} // Adjust dropdown positioning
                  >
                    <MenuItem onClick={handleClose}>Profile</MenuItem>
                    <MenuItem onClick={handleClose}>My Account</MenuItem>
                    <MenuItem onClick={handleClose}>Settings</MenuItem>
                    <MenuItem onClick={handleClose}>Logout</MenuItem>
                  </Menu>
                </>

                {/* Mobile menu dropdown */}
                <Menu
                  id="menu-appbar-avatar"
                  anchorEl={anchorElNav}
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={Boolean(anchorElNav)}
                  onClose={handleCloseNavMenu}
                  sx={{
                    display: { xs: 'block', md: 'none' },
                  }}
                >
                  {/* <Drawer
                    open={isDrawerOpen}
                    onClose={() => setIsDrawerOpen(false)}
                  > */}
                  <List className="DrawerList">
                    <ListItemButton>
                      <ListItemIcon>
                        <Home />
                      </ListItemIcon>
                      <ListItemText
                        primary={'Home'}
                        onClick={() => {
                          window.location.href = '/'
                        }}
                      />
                    </ListItemButton>

                    <ListItemButton>
                      <ListItemIcon>
                        <InfoIcon />
                      </ListItemIcon>
                      <ListItemText
                        primary={'About'}
                        onClick={() => {
                          window.location.href = '/about-us'
                        }}
                      />
                    </ListItemButton>

                    <ListItemButton>
                      <ListItemIcon>
                        <ManageAccountsIcon />
                      </ListItemIcon>
                      <ListItemText
                        primary={'Room Styles'}
                        onClick={() => {
                          window.location.href = '/room-styles'
                        }}
                      />
                    </ListItemButton>

                    <ListItemButton>
                      <ListItemIcon>
                        <TimelineIcon />
                      </ListItemIcon>
                      <ListItemText
                        primary={'Projects'}
                        onClick={() => {
                          window.location.href = '/projects'
                        }}
                      />
                    </ListItemButton>

                    {/* <ListItemButton>
                      <ListItemIcon>
                        <AddReactionIcon />
                      </ListItemIcon>
                      <ListItemText
                        primary={'Blogs'}
                        onClick={() => {
                          window.location.href = '/blogs'
                        }}
                      />
                    </ListItemButton> */}

                    <ListItemButton>
                      <ListItemIcon>
                        <ContactMailIcon />
                      </ListItemIcon>
                      <ListItemText
                        primary={'Contact'}
                        onClick={() => {
                          window.location.href = '/contact'
                        }}
                      />
                    </ListItemButton>
                  </List>
                </Menu>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      </HideOnScroll>
    </React.Fragment>
  )
}
export default Navbar
