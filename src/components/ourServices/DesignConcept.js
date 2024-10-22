'use client'

import React from 'react'
import { Box, Typography, IconButton, Container, Grid } from '@mui/material'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Home, Info, ContactMail } from '@mui/icons-material'
import image from '../../assets/cta_bg.jpg'

const DesignConcept = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  })

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  }

  return (
    <Container maxWidth="lg" sx={{ py: 8, mt: 10 }}>
      <Box ref={ref} sx={{ textAlign: 'center' }}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <Typography
            variant="h3"
            sx={{ mb: 3, fontWeight: 'bold', color: '#333' }}
          >
            Our Services
          </Typography>
          <Typography
            variant="body1"
            sx={{
              mb: 4,
              color: '#666',
              lineHeight: 1.6,
              width: {
                xs: '100%',
                md: '60%',
              },
              marginLeft: 'auto',
              marginRight: 'auto',
            }}
          >
            Discover our innovative design concept that combines modern
            aesthetics with functionality. Our approach is tailored to meet the
            highest standards of quality and style.
          </Typography>
          <Box
            component="img"
            src={image.src}
            alt="Design Concept"
            sx={{
              width: '100%',
              maxHeight: '500px',
              objectFit: 'cover',
              borderRadius: '8px',
              mb: 4,
            }}
          />
          <Grid container spacing={2} justifyContent="center">
            <Grid item>
              <IconButton
                href="#home"
                color="primary"
                sx={{
                  borderRadius: '50%',
                  background:
                    'linear-gradient(135deg, #4A90E2 0%, #357ABD 100%)',
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
                  '&:hover': {
                    background:
                      'linear-gradient(135deg, #357ABD 0%, #4A90E2 100%)',
                    transform: 'scale(1.1)',
                    transition: 'transform 0.3s ease, background 0.3s ease',
                  },
                }}
              >
                <Home sx={{ color: '#fff' }} />
              </IconButton>
            </Grid>
            <Grid item>
              <IconButton
                href="#about"
                color="primary"
                sx={{
                  borderRadius: '50%',
                  background:
                    'linear-gradient(135deg, #E94E77 0%, #D33F5F 100%)',
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
                  '&:hover': {
                    background:
                      'linear-gradient(135deg, #D33F5F 0%, #E94E77 100%)',
                    transform: 'scale(1.1)',
                    transition: 'transform 0.3s ease, background 0.3s ease',
                  },
                }}
              >
                <Info sx={{ color: '#fff' }} />
              </IconButton>
            </Grid>
            <Grid item>
              <IconButton
                href="#contact"
                color="primary"
                sx={{
                  borderRadius: '50%',
                  background:
                    'linear-gradient(135deg, #50E3C2 0%, #00B8D4 100%)',
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
                  '&:hover': {
                    background:
                      'linear-gradient(135deg, #00B8D4 0%, #50E3C2 100%)',
                    transform: 'scale(1.1)',
                    transition: 'transform 0.3s ease, background 0.3s ease',
                  },
                }}
              >
                <ContactMail sx={{ color: '#fff' }} />
              </IconButton>
            </Grid>
          </Grid>
        </motion.div>
      </Box>
    </Container>
  )
}

export default DesignConcept
