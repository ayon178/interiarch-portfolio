'use client'

import React from 'react'
import Slider from 'react-slick'
import { Box, Typography, Card, CardContent, CardMedia } from '@mui/material'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

// Example content for sliders
const slides = [
  {
    imageSrc: "'https://i.ibb.co/Y8kzMR5/project-7.jpg'",
    title: 'Modern Living Room',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel molestias, magnam doloribus repellendus eum accusamus facere nulla iusto maxime culpa.',
  },
  {
    imageSrc: "'https://i.ibb.co/Y8kzMR5/project-7.jpg'",
    title: 'Classic Bedroom',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel molestias, magnam doloribus repellendus eum accusamus facere nulla iusto maxime culpa.',
  },
  {
    imageSrc: "'https://i.ibb.co/Y8kzMR5/project-7.jpg'",
    title: 'Sleek Kitchen',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel molestias, magnam doloribus repellendus eum accusamus facere nulla iusto maxime culpa.',
  },
  // Add more room styles as needed
]

const RoomStyles = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
  }

  return (
    <Box
      sx={{
        width: '100%',
        padding: 4,
      }}
    >
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="slide-item">
            <Card
              sx={{
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
                boxShadow: 3,
                borderRadius: 2,
              }}
            >
              <CardMedia
                component="img"
                height="200"
                image={slide.imageSrc.src}
                alt={slide.title}
                sx={{ objectFit: 'cover' }}
              />
              <CardContent>
                <Typography variant="h5" component="div" gutterBottom>
                  {slide.title}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ textAlign: 'justify' }}
                >
                  {slide.description}
                </Typography>
              </CardContent>
            </Card>
          </div>
        ))}
      </Slider>
    </Box>
  )
}

export default RoomStyles
