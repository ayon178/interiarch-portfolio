'use client'

import React from 'react'
import { Box, Typography, Container } from '@mui/material'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import portfolioImage from '../../assets/port_half.jpg' // Replace with your actual image path

const PortfolioSummary = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  const containerVariants = {
    hidden: { opacity: 0, y: 80 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  }

  const textVariants = {
    hidden: { opacity: 0, y: -60 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, delay: 0.4 } },
  }

  const imageVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, delay: 0.8 } },
  }

  return (
    <Container maxWidth="lg" sx={{ py: 8, px: { xs: 2, sm: 4 }, pt: 14 }}>
      <Box ref={ref} sx={{ textAlign: 'center' }}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <motion.div
            variants={textVariants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
          >
            <Typography
              variant="h2"
              sx={{
                mb: 3,
                fontWeight: 'bold',
                color: '#333',
                textAlign: 'center',
              }}
            >
              Portfolio Summary
            </Typography>
            <Typography
              variant="body1"
              sx={{
                mb: 6,
                color: '#666',
                lineHeight: 1.6,
                width: { xs: '100%', md: '70%' },
                marginLeft: 'auto',
                marginRight: 'auto',
              }}
            >
              Explore our portfolio showcasing a range of projects that
              highlight our expertise and creativity. From innovative designs to
              successful implementations, our work speaks for itself and
              demonstrates our commitment to excellence.
            </Typography>
          </motion.div>
          <motion.div
            variants={imageVariants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
          >
            <Box
              component="img"
              src={portfolioImage.src}
              alt="Portfolio Summary"
              sx={{
                width: '100%',
                maxHeight: '500px',
                objectFit: 'cover',
                borderRadius: '8px',
                boxShadow: 3,
              }}
            />
          </motion.div>
        </motion.div>
      </Box>
    </Container>
  )
}

export default PortfolioSummary
