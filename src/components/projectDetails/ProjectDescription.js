'use client'

import React from 'react'
import { Box, Typography, Container } from '@mui/material'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const ProjectDescription = () => {
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.1 })

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  }

  const textVariants = {
    hidden: { opacity: 0, y: -100 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.2 } },
  }

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, delay: 0.4 },
    },
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
            sx={{ mb: 6 }}
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
              Project Description
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
              Discover the details of our latest project, showcasing our
              innovative approach and dedication to quality. From concept to
              completion, this project highlights our commitment to excellence
              and our ability to deliver exceptional results. Explore the
              features and benefits that make this project stand out and see how
              our solutions can make a difference.
            </Typography>
          </motion.div>
          <motion.div
            variants={imageVariants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            sx={{ mb: 6 }}
          >
            <Box
              component="img"
              src="https://i.ibb.co/9gfq72M/1-2.jpg"
              alt="Project"
              sx={{
                width: '100%',
                height: 'auto',
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

export default ProjectDescription
