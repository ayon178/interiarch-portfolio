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
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const projects = [
  {
    imageSrc: 'https://i.ibb.co/Y8kzMR5/project-7.jpg',
    link: '/projects/project1',
  },
  {
    imageSrc: 'https://i.ibb.co/Y8kzMR5/project-7.jpg',
    link: '/projects/project2',
  },
  {
    imageSrc: 'https://i.ibb.co/Y8kzMR5/project-7.jpg',
    link: '/projects/project3',
  },
  {
    imageSrc: 'https://i.ibb.co/Y8kzMR5/project-7.jpg',
    link: '/projects/project4',
  },
  {
    imageSrc: 'https://i.ibb.co/Y8kzMR5/project-7.jpg',
    link: '/projects/project5',
  },
  {
    imageSrc: 'https://i.ibb.co/Y8kzMR5/project-7.jpg',
    link: '/projects/project6',
  },
  {
    imageSrc: 'https://i.ibb.co/Y8kzMR5/project-7.jpg',
    link: '/projects/project7',
  },
  {
    imageSrc: 'https://i.ibb.co/Y8kzMR5/project-7.jpg',
    link: '/projects/project8',
  },
  {
    imageSrc: 'https://i.ibb.co/Y8kzMR5/project-7.jpg',
    link: '/projects/project9',
  },
]

const PreviousProjects = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <Box sx={{ padding: 4 }}>
      <Typography
        variant="h4"
        sx={{ marginBottom: 4, fontWeight: 'bold', marginTop: 10 }}
      >
        Previous Projects
      </Typography>
      <Grid container spacing={4} ref={ref}>
        {projects.map((project, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 100 }}
              transition={{ duration: 2, delay: index * 0.2 }}
            >
              <Card sx={{ boxShadow: 3, borderRadius: 2, height: '100%' }}>
                <CardActionArea component={Link} href={project.link}>
                  <CardMedia
                    component="img"
                    image={project.imageSrc.src}
                    alt={`Project ${index + 1}`}
                    sx={{ height: 200, objectFit: 'cover' }}
                  />
                </CardActionArea>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}

export default PreviousProjects
