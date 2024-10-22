'use client'

import React from 'react'
import Slider from 'react-slick'
import {
  Box,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Divider,
} from '@mui/material'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

// Example testimonial data
const testimonials = [
  {
    image: [
      'https://i.ibb.co/j8vWWWH/Syed-Shakil-Hossain.png',
      'https://i.ibb.co/tmbhjkD/Lara-Begum.png',
    ],
    name: 'Syed Shakil Hossain<br/> & Lara Begum',
    testimonial:
      'We received timely handover with our interior project which was a major thing for us. The whole project expereicnce was so good for us all.',
  },
  {
    image: [
      'https://i.ibb.co.com/JjnQFXx/Kishor-Kumar-Saha-family.png',
      'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png',
    ],
    name: 'Kishor Kumar Saha & family',
    testimonial:
      'InteriArch supported us professionally and cordially. All our requirements was handled with care throughout the project, felt like they we all were part of one team. ',
  },
  {
    image: [
      'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png',
      'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png',
    ],
    name: 'Alice Johnson',
    testimonial:
      'Exceeded my expectations in every way. Will definitely use again.',
  },
]

// Slick Slider settings
const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000,
  arrows: false,
}

const ClientTestimonial = () => {
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.1 })

  return (
    <Box
      sx={{
        padding: 4,
        background: `url(https://i.ibb.co.com/kgNgMhm/cta-bg.jpg)`,
        borderRadius: 2,
        marginTop: 10,
        marginBottom: 10,
      }}
    >
      <Typography
        variant="h4"
        sx={{
          textAlign: 'center',
          fontWeight: 'bold',
          // color: 'white',
          marginBottom: 1,
        }}
      >
        What Our Clients Say
      </Typography>
      <Typography
        variant="body1"
        gutterBottom
        sx={{
          textAlign: 'center',
          marginBottom: 4,
          // color: 'white',
        }}
      >
        Making our clients delighted with elegant design is our achievement.
      </Typography>
      <Box ref={ref} sx={{ position: 'relative' }}>
        <Slider {...sliderSettings}>
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: inView ? 1 : 0, scale: inView ? 1 : 0.95 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              style={{ display: 'flex', justifyContent: 'center' }}
            >
              <Card
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  boxShadow: 6,
                  borderRadius: 4,
                  overflow: 'hidden',
                  textAlign: 'center',
                  maxWidth: 350,
                  margin: 'auto',
                }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    gap: 0, // Adds space between the images
                    marginTop: 2,
                  }}
                >
                  <CardMedia
                    component="img"
                    image={testimonial.image[0]}
                    alt={testimonial.name}
                    sx={{
                      height: index === 1 ? 100 : 80,
                      width: index === 1 ? 115 : 80,
                      borderRadius: index === 1 ? '10%' : '50%',
                      objectFit: 'cover',
                      border: '4px solid #fff',
                    }}
                  />
                  {index !== 1 && index !== 2 && (
                    <CardMedia
                      component="img"
                      image={testimonial.image[1]}
                      alt={testimonial.name}
                      sx={{
                        height: 80,
                        width: 80,
                        borderRadius: '50%',
                        objectFit: 'cover',
                        border: '4px solid #fff',
                      }}
                    />
                  )}
                </Box>

                <CardContent sx={{ padding: 3 }}>
                  <Typography
                    variant="h6"
                    component="div"
                    gutterBottom
                    dangerouslySetInnerHTML={{ __html: testimonial.name }}
                  />

                  <Divider sx={{ marginY: 2, backgroundColor: '#e0e0e0' }} />
                  <Typography variant="body2" color="text.secondary">
                    {testimonial.testimonial}
                  </Typography>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </Slider>
      </Box>
    </Box>
  )
}

export default ClientTestimonial
