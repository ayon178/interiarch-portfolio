'use client'

import React from 'react'
import { Box, Typography, Button, Container } from '@mui/material'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { COLORS } from '../constant/constant'

// Motion variant definitions
const variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
}

const ScheduleMeeting = () => {
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.1 })

  return (
    <Container
      ref={ref}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 4,
        backgroundImage: 'url(https://i.ibb.co/Y0dH5zJ/cta-bg.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        borderRadius: 2,
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
        minHeight: '500px',
        marginBottom: 8,
      }}
    >
      {/* Darker black overlay for better visibility of content */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.8)', // Increase opacity to 80%
          zIndex: 1,
        }}
      />

      <motion.div
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        variants={variants}
        transition={{ duration: 0.8, type: 'spring' }}
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          zIndex: 2, // Ensure content is above overlay
          position: 'relative',
        }}
      >
        <Typography
          variant="h4"
          sx={{
            marginBottom: 2,
            fontWeight: 'bold',
            color: 'white',
            fontSize: '2rem', // Slightly larger font size
            textShadow: '3px 3px 6px rgba(0, 0, 0, 0.9)', // Stronger shadow for better contrast
          }}
        >
          Schedule a Meeting
        </Typography>
        <Typography
          variant="body1"
          sx={{
            marginBottom: 4,
            color: 'white',
            maxWidth: '600px',
            fontSize: '1.1rem', // Slightly larger body text
            textShadow: '2px 2px 5px rgba(0, 0, 0, 0.7)', // Stronger shadow for better readability
          }}
        >
          We’re here to help you with any questions or concerns. Click the
          button below to schedule a meeting with one of our experts.
        </Typography>
        <Button
          variant="contained"
          href="/schedule"
          sx={{ mt: 2, background: COLORS.primary }}
        >
          Book Now
        </Button>
      </motion.div>

      <Box
        sx={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: '100%',
          height: '200px',
          borderTopLeftRadius: 100,
          borderTopRightRadius: 100,
          transform: 'rotate(180deg)',
        }}
      />
    </Container>
  )
}

export default ScheduleMeeting
