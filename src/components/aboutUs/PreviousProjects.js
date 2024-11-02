'use client'

import React from 'react'
import {
  Box,
  Grid,
  Card,
  CardMedia,
  CardActionArea,
  Typography,
} from '@mui/material'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import image1 from '../../assets/projects/project_1.png'
import image2 from '../../assets/projects/project_2.jpg'
import image3 from '../../assets/projects/project_3.jpg'
import image4 from '../../assets/projects/project_4.jpg'
import image5 from '../../assets/projects/project_5.png'
import image6 from '../../assets/projects/project_6.jpg'
import image7 from '../../assets/projects/project_7.jpg'
import image8 from '../../assets/projects/project_8.jpg'

// Example project data
const projects = [
  {
    imageSrc: image1,
    link: '/projects/project1',
  },
  {
    imageSrc: image2,
    link: '/projects/project2',
  },
  {
    imageSrc: image3,
    link: '/projects/project3',
  },
  {
    imageSrc: image4,
    link: '/projects/project4',
  },
  {
    imageSrc: image5,
    link: '/projects/project5',
  },
  {
    imageSrc: image6,
    link: '/projects/project6',
  },
  {
    imageSrc: image7,
    link: '/projects/project7',
  },
  {
    imageSrc: image8,
    link: '/projects/project8',
  },
]
const PreviousProjects = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <Box ref={ref} sx={{ padding: 4 }}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8 }}
      >
        <Typography variant="h4" sx={{ marginBottom: 4, fontWeight: 'bold' }}>
          Previous Projects
        </Typography>
        <Grid container spacing={4}>
          {projects.map((project, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                sx={{
                  boxShadow: 3,
                  borderRadius: 2,
                  overflow: 'hidden', // Ensure no overflow from zoom
                  '&:hover .MuiCardMedia-root': {
                    transform: 'scale(1.1)',
                    transition: 'transform 0.5s ease-in-out',
                  },
                }}
              >
                <CardActionArea component="a" href={project.link}>
                  <CardMedia
                    component="img"
                    image={project.imageSrc.src}
                    alt={`Project ${index + 1}`}
                    sx={{
                      height: 200,
                      objectFit: 'cover',
                      transition: 'transform 0.5s ease-in-out', // Smooth zoom effect
                    }}
                  />
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
      </motion.div>
    </Box>
  )
}

export default PreviousProjects
