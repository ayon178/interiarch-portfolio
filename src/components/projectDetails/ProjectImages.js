'use client'

import React from 'react'
import { Box, Grid, Typography, Container } from '@mui/material'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const projectImages = [
  { src: 'https://i.ibb.co/9gfq72M/1-2.jpg', alt: 'Project Image 1' },
  { src: 'https://i.ibb.co/9gfq72M/1-2.jpg', alt: 'Project Image 2' },
  { src: 'https://i.ibb.co/9gfq72M/1-2.jpg', alt: 'Project Image 3' },
  { src: 'https://i.ibb.co/9gfq72M/1-2.jpg', alt: 'Project Image 4' },
]

const ProjectImages = () => {
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.1 })

  const gridVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  }

  return (
    <Container maxWidth="lg" sx={{ py: 8, px: { xs: 2, sm: 4 } }}>
      <Box ref={ref} sx={{ textAlign: 'center' }}>
        <motion.div
          variants={gridVariants}
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
            Project Images
          </Typography>
          <Grid container spacing={4} justifyContent="center">
            {projectImages.map((image, index) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                <Box
                  sx={{
                    position: 'relative',
                    overflow: 'hidden',
                    borderRadius: '8px',
                    boxShadow: 3,
                  }}
                >
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                    sx={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      overflow: 'hidden',
                    }}
                  >
                    <Box
                      component="img"
                      src={image.src.src}
                      alt={image.alt}
                      sx={{
                        width: '100%',
                        height: 'auto',
                        borderRadius: '8px',
                        objectFit: 'cover',
                        transition: 'transform 0.3s ease-in-out',
                      }}
                    />
                  </motion.div>
                </Box>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Box>
    </Container>
  )
}

export default ProjectImages
