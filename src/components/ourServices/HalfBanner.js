'use client'

import React from 'react'
import { Box, Typography } from '@mui/material'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'

const HalfBanner = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  })

  const bannerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  }

  const textBoxVariants = {
    hidden: { opacity: 0, y: 100 }, // Start from below the screen
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.6 } }, // Slide up and fade in
  }

  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        height: '60vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        backgroundColor: '#f5f5f5',
      }}
      ref={ref}
    >
      {/* Image Wrapper */}
      <motion.div
        variants={bannerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
        }}
      >
        <Image
          src={'https://i.ibb.co/0Dwm3g7/Testimonial-BG.jpg'}
          alt="About Banner"
          layout="fill"
          objectFit="cover"
          priority
        />
      </motion.div>

      {/* Overlay */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          zIndex: 1,
        }}
      />

      {/* Text Box */}
      <motion.div
        variants={textBoxVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        style={{
          zIndex: 2,
          textAlign: 'center',
          color: '#fff',
          padding: 2,
          borderRadius: 1,
          mt: 10,
        }}
      >
        <Typography variant="h2" sx={{ fontWeight: 'bold' }}>
          Our Services
        </Typography>
      </motion.div>
    </Box>
  )
}

export default HalfBanner
