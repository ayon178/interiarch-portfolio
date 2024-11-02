'use client'

import React, { useState } from 'react'
import {
  Box,
  Typography,
  Grid,
  Card,
  CardMedia,
  Dialog,
  IconButton,
} from '@mui/material'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import CloseIcon from '@mui/icons-material/Close'
import image1 from '../../assets/1.1.jpg'
import image2 from '../../assets/1.1.jpg'
import image3 from '../../assets/1.1.jpg'

const roomImages = [
  {
    src: image1,
    alt: 'Room 1',
  },
  {
    src: image2,
    alt: 'Room 2',
  },
  {
    src: image3,
    alt: 'Room 3',
  },
]

const RoomCategory = () => {
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.1 })
  const [open, setOpen] = useState(false)
  const [selectedImage, setSelectedImage] = useState('')

  const handleClickOpen = imageSrc => {
    setSelectedImage(imageSrc)
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
    setSelectedImage('')
  }

  const containerVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  }

  const imageVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, delay: 0.5 } },
  }

  return (
    <Box ref={ref} sx={{ py: 8, px: { xs: 2, sm: 4 }, textAlign: 'center' }}>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
      >
        <Typography
          variant="h3"
          sx={{ mb: 3, fontWeight: 'bold', color: '#333' }}
        >
          Room Categories
        </Typography>
        <Typography
          variant="body1"
          sx={{
            mb: 6,
            color: '#666',
            lineHeight: 1.6,
            width: { xs: '100%', md: '60%' },
            marginLeft: 'auto',
            marginRight: 'auto',
          }}
        >
          Explore our elegant room categories designed to provide comfort and
          style. Click on the images below to view each room in detail.
        </Typography>
      </motion.div>

      <motion.div
        variants={imageVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
      >
        <Grid container spacing={4} justifyContent="center">
          {roomImages.map((image, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card sx={{ boxShadow: 3, borderRadius: 2, overflow: 'hidden' }}>
                <Box
                  sx={{
                    position: 'relative',
                    overflow: 'hidden',
                    '&:hover .zoom-img': {
                      transform: 'scale(1.1)',
                      transition: 'transform 0.5s ease',
                    },
                  }}
                >
                  <CardMedia
                    component="img"
                    image={image.src.src}
                    alt={image.alt}
                    className="zoom-img"
                    sx={{
                      height: 200,
                      objectFit: 'cover',
                      transition: 'transform 0.5s ease',
                      cursor: 'pointer',
                    }}
                    onClick={() => handleClickOpen(image.src.src)}
                  />
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
      </motion.div>

      <Dialog
        open={open}
        onClose={handleClose}
        maxWidth="md"
        fullWidth
        sx={{ '& .MuiDialog-paper': { borderRadius: '16px', p: 2 } }}
      >
        <IconButton
          edge="end"
          color="inherit"
          onClick={handleClose}
          sx={{ position: 'absolute', top: 8, right: 8 }}
        >
          <CloseIcon />
        </IconButton>
        <Box
          component="img"
          src={selectedImage}
          alt="Selected Room"
          sx={{
            width: '100%',
            height: 'auto',
            maxHeight: '80vh',
            objectFit: 'contain',
          }}
        />
      </Dialog>
    </Box>
  )
}

export default RoomCategory
