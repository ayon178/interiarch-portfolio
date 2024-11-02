'use client'

import {
  Box,
  Button,
  Typography,
  Grid,
  Container,
  useTheme,
} from '@mui/material'
import React from 'react'
import HomeWorkIcon from '@mui/icons-material/HomeWork'
import ConstructionIcon from '@mui/icons-material/Construction'
import DatasetIcon from '@mui/icons-material/Dataset'
import TableChartIcon from '@mui/icons-material/TableChart'
import TableRestaurantIcon from '@mui/icons-material/TableRestaurant'
import { COLORS } from '../constant/constant'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const ServiceList = () => {
  const theme = useTheme()
  const { ref, inView } = useInView({
    triggerOnce: false, // Trigger animation only once
    threshold: 0.1, // Trigger when 10% of the element is in view
  })

  return (
    <Box
      ref={ref}
      sx={{
        width: '100%',
        height: '100%',
        backgroundImage: 'url(/assets/service_bg.jpg)',
        backgroundPosition: 'bottom',
        objectFit: 'cover',
        py: 3,
        mt: 10,
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            padding: {
              xs: '0.5rem',
              md: '4rem',
            },
          }}
        >
          <Grid container spacing={7} alignItems="center">
            {/* Left Section: Heading and Paragraph */}
            <Grid item xs={12} md={5}>
              <motion.div
                initial={{ opacity: 0, x: -200 }}
                animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -50 }}
                transition={{ duration: 2, type: 'spring' }}
              >
                <Typography
                  variant="h4"
                  sx={{
                    fontWeight: 'bold',
                    marginBottom: 2,
                  }}
                >
                  Our Services
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: '1rem',
                    color: 'text.secondary',
                    textAlign: 'justify',
                  }}
                >
                  At InteriArch, we provide both interior design & necessary
                  implementation with construction works, renovation, floor
                  finishing, building cabinet & wall panel, developing custom
                  furniture as per the choice & vision of our client.
                  <br />
                  <br />
                  Our services are not only for the sake of the luxury &
                  aesthetic beauty, also it solves all necessary functionalities
                  & practical human centric needs of your space.
                </Typography>
              </motion.div>
            </Grid>

            {/* Right Section: Cards with Icons and Titles */}
            <Grid item xs={12} md={7}>
              {/* 3 Cards horizontally aligned */}
              <motion.div
                initial={{ opacity: 0, y: 200 }}
                animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
                transition={{ duration: 2, type: 'spring' }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    gap: '1rem',
                    flexWrap: 'nowrap', // Default (no wrapping) for larger screens
                    [theme.breakpoints.down('md')]: {
                      flexWrap: 'wrap', // Enable flex-wrap for screens smaller than md
                    },
                  }}
                >
                  <Button sx={cardStyles}>
                    <HomeWorkIcon
                      sx={{ fontSize: '3.2rem', color: COLORS.iconColor }}
                    />
                    <Typography
                      variant="body2"
                      sx={{
                        marginTop: '0.5rem',
                        color: COLORS.iconColor,
                        textTransform: 'none',
                        fontWeight: 'bold',
                      }}
                    >
                      Interior
                    </Typography>
                    <Typography
                      sx={{
                        color: COLORS.iconColor,
                        textTransform: 'none',
                        fontWeight: 'bold',
                      }}
                      variant="body2"
                    >
                      Design
                    </Typography>
                  </Button>

                  <Button sx={cardStyles}>
                    <ConstructionIcon
                      sx={{ fontSize: '3.2rem', color: COLORS.iconColor }}
                    />
                    <Typography
                      variant="body2"
                      sx={{
                        marginTop: '0.5rem',
                        color: COLORS.iconColor,
                        textTransform: 'none',
                        fontWeight: 'bold',
                      }}
                    >
                      Construction
                    </Typography>
                    <Typography
                      sx={{
                        color: COLORS.iconColor,
                        textTransform: 'none',
                        fontWeight: 'bold',
                      }}
                      variant="body2"
                    >
                      {' '}
                      & Renovation
                    </Typography>
                  </Button>

                  <Button sx={cardStyles}>
                    <DatasetIcon
                      sx={{ fontSize: '3.2rem', color: COLORS.iconColor }}
                    />
                    <Typography
                      variant="body2"
                      sx={{
                        marginTop: '0.5rem',
                        color: COLORS.iconColor,
                        textTransform: 'none',
                        fontWeight: 'bold',
                      }}
                    >
                      Floor
                    </Typography>
                    <Typography
                      sx={{
                        color: COLORS.iconColor,
                        textTransform: 'none',
                        fontWeight: 'bold',
                      }}
                      variant="body2"
                    >
                      Finishing
                    </Typography>
                  </Button>
                </Box>

                {/* 2 Cards Right-Aligned and Centered */}
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'center', // Align cards to the right
                    gap: '1rem',
                    marginTop: '2rem',
                    flexWrap: 'nowrap', // Default (no wrapping) for larger screens
                    [theme.breakpoints.down('md')]: {
                      flexWrap: 'wrap', // Enable flex-wrap for screens smaller than md
                    },
                  }}
                >
                  <Button sx={cardStyles}>
                    <TableChartIcon
                      sx={{ fontSize: '3.2rem', color: COLORS.iconColor }}
                    />
                    <Typography
                      variant="body2"
                      sx={{
                        marginTop: '0.5rem',
                        color: COLORS.iconColor,
                        textTransform: 'none',
                        fontWeight: 'bold',
                      }}
                    >
                      Cabinet &
                    </Typography>
                    <Typography
                      sx={{
                        color: COLORS.iconColor,
                        textTransform: 'none',
                        fontWeight: 'bold',
                      }}
                      variant="body2"
                    >
                      Wall Panel
                    </Typography>
                  </Button>

                  <Button sx={cardStyles}>
                    <TableRestaurantIcon
                      sx={{ fontSize: '3.4rem', color: COLORS.iconColor }}
                    />
                    <Typography
                      variant="body2"
                      sx={{
                        marginTop: '0.5rem',
                        color: COLORS.iconColor,
                        textTransform: 'none',
                        fontWeight: 'bold',
                      }}
                    >
                      Custom
                    </Typography>
                    <Typography
                      sx={{
                        color: COLORS.iconColor,
                        textTransform: 'none',
                        fontWeight: 'bold',
                      }}
                      variant="body2"
                    >
                      Furniture
                    </Typography>
                  </Button>
                </Box>
              </motion.div>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  )
}

// Reusable card style
const cardStyles = {
  paddingX: '1.5rem',
  paddingY: '0.8rem',
  borderRadius: '0.575rem',
  cursor: 'pointer',
  height: '150px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  width: '185px',
  boxShadow: '0 6px 12px rgba(0, 0, 0, 0.15)', // Increased shadow
  transition: 'box-shadow 0.3s ease',
  '&:hover': {
    boxShadow: '0 12px 24px rgba(0, 0, 0, 0.25)', // Darker shadow on hover
  },
}

export default ServiceList
