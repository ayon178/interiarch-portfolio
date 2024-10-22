'use client'

import React, { useEffect, useState } from 'react'
import { gsap } from 'gsap'
import Image from 'next/image'
import { Box, Typography, Button } from '@mui/material'
import { styled } from '@mui/system'

const images = [
  'https://i.ibb.co/VYDJgRG/slider-1.jpg',
  'https://i.ibb.co/C1KT065/slider-2.jpg',
  'https://i.ibb.co/Chb6gRT/slider-3.jpg',
]

const SlideImage = styled(Box)(({ theme }) => ({
  position: 'absolute',
  inset: 0,
  transition: 'opacity 1s ease-in-out',
  '&.active': {
    opacity: 1,
  },
  '&.inactive': {
    opacity: 0,
  },
}))

const ImageContainer = styled(Box)({
  position: 'absolute',
  width: '100%',
  height: '100%',
  overflow: 'hidden', // This ensures the zoom effect stays within the container
})

const ContentContainer = styled(Box)(({ theme }) => ({
  position: 'absolute',
  width: '100%',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  padding: theme.spacing(10, 2),
  color: '#fff',
  textAlign: 'center',
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(4, 10),
    textAlign: 'start',
    '&.rightAlign': {
      alignItems: 'flex-end',
      textAlign: 'right',
    },
  },
}))

const BannerSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const nextSlide = (currentSlide + 1) % images.length
    const timer = setTimeout(() => setCurrentSlide(nextSlide), 3605)

    gsap.fromTo(
      `.slide-image-${currentSlide} img`, // Targeting only the image
      { scale: 1 }, // Start scale
      {
        scale: 1.2, // Zoom effect
        duration: 3.5,
        ease: 'power2.out',
      }
    )

    return () => clearTimeout(timer)
  }, [currentSlide])

  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        height: '100vh',
        overflow: 'hidden',
      }}
    >
      {images.map((src, index) => (
        <SlideImage
          key={index}
          className={`slide-image-${index} ${
            index === currentSlide ? 'active' : 'inactive'
          }`}
        >
          <ImageContainer>
            <Image
              src={src}
              alt={`Slide ${index}`}
              layout="fill"
              className="slide-image"
            />
          </ImageContainer>
          {/* overlay on image */}
          <Box
            sx={{
              position: 'absolute',
              inset: 0,
              background:
                'linear-gradient(to left, rgba(5,32,73,0.3), rgba(5,32,73,0.8))',
            }}
          ></Box>
          {/* content */}
          <ContentContainer
            className={
              index === 1 ? 'rightAlign' : index === 2 ? 'leftAlign' : ''
            }
          >
            <Typography
              variant="h1"
              sx={{
                fontSize: '2rem',
                fontWeight: 'bold',
                textTransform: 'uppercase',
                color: 'white',
                marginRight: index === 2 && 'auto',
              }}
            >
              {index === 0 ? (
                <span className="text-slate-300">
                  WHERE CREATIVITY MEETS COMFORT
                </span>
              ) : (
                <>
                  <span className="text-slate-300 text-right">
                    GOING BEYOND AESTHETICS
                  </span>
                  <br />
                  <span className="text-slate-300 text-right">
                    TO HUMAN CENTRIC NEEDS
                  </span>
                </>
              )}
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: '#D9D9D9',
                fontWeight: 'normal',
                marginTop: 2,
                textAlign:
                  index === 1 ? 'right' : index === 2 ? 'left' : 'center',
                width: {
                  xs: '100%',
                  md: '70%',
                  lg: '50%',
                },
                marginLeft: index === 2 ? '0' : 'auto',
                marginRight: index === 1 ? '0' : 'auto',
              }}
            >
              {index === 0
                ? 'A thoughtfully designed interior contributes to the well being and comfort of occupants. InteriArch is aimed at designing the right interior for you and your family, according to your needs.'
                : 'Interior design addresses our daily needs, as well as solve our practical problems. InteriArch promises to go the extra mile & get you right interior solutions for human centric functional problems in your space.'}
            </Typography>
            <Button
              variant="contained"
              sx={{
                backgroundColor: '#D1D5DB',
                color: '#1F2937',
                textTransform: 'uppercase',
                fontWeight: 'bold',
                fontSize: '0.75rem',
                padding: '0.5rem 1rem',
                borderRadius: '0.375rem',
                marginTop: 2,
                marginRight: index === 2 && 'auto',
              }}
            >
              View Portfolio
            </Button>
          </ContentContainer>
        </SlideImage>
      ))}
    </Box>
  )
}

export default BannerSlider
