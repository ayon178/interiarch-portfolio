'use client'

import React from 'react'
import { Box, Grid, Typography, styled } from '@mui/material'
import { FaArrowRight } from 'react-icons/fa'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

const images = [
  {
    src: 'https://i.ibb.co/TLC5bDw/project-2.jpg',
    title: 'Bedroom',
    details: 'View our bedroom designs',
  },

  {
    src: 'https://i.ibb.co/m5xxf3X/Kitchen.png',
    title: 'Kitchen',
    details: 'View our kitchen designs',
  },
  {
    src: 'https://i.ibb.co/zbTkKb3/project-1.png',
    title: 'Living Room',
    details: 'View our living room designs',
  },
  {
    src: 'https://i.ibb.co/4284z3t/project-3.jpg',
    title: 'Dining Room',
    details: 'View our dining space designs',
  },

  // {
  //   src: image5,
  //   title: 'Room Style Five',
  //   details: 'Details for Room Style Five',
  // },
]

const HoverDiv = styled(Box)({
  position: 'relative',
  overflow: 'hidden',
  '&:hover .overlay': {
    height: '100%',
  },
  '&:hover .overlay-content, &:hover .image-details': {
    opacity: 1,
  },
})

const Overlay = styled(Box)({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '0%',
  backgroundImage:
    'linear-gradient(to left, rgba(56, 29, 68, .54) 0%, rgba(49, 23, 61, .44) 100%)',
  transition: 'all 0.5s ease-in-out',
})

const OverlayContent = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'start',
  padding: '16px',
  height: '40px',
  opacity: 0,
  transition: 'opacity 0.5s ease-in-out',
})

const ImageDetails = styled(Typography)({
  position: 'absolute',
  bottom: 0,
  left: 0,
  padding: '16px',
  color: 'white',
  opacity: 0,
  transition: 'opacity 0.5s ease-in-out',
})

const Gallery = () => {
  const router = useRouter()

  return (
    <Box
      sx={{
        width: '100%',
        height: '100%',
        backgroundImage: 'url(/assets/design_bg.jpg)',
        backgroundPosition: 'bottom',
        objectFit: 'cover',
        py: 10,
        mt: 1,
      }}
    >
      <Box sx={{ maxWidth: '1000px', mx: 'auto', p: 4 }}>
        <Typography
          variant="h4"
          sx={{ marginBottom: 1, fontWeight: 'bold', textAlign: 'center' }}
        >
          Our Portfolio
        </Typography>
        <Typography
          variant="body2"
          sx={{ marginBottom: 4, fontWeight: 'bold', textAlign: 'center' }}
        >
          InteriArch has accomplished numerous interior projects all over
          Bangladesh
        </Typography>
        {/* Main Grid Layout */}
        <Grid container spacing={2}>
          {/* First Column */}
          <Grid item xs={12} sm={6}>
            <Link href="/portfolio#kitchen" scroll={true}>
              <HoverDiv
                sx={{ height: { md: '300px', xs: '200px' }, cursor: 'pointer' }}
                onClick={() => router.push('/portfolio/#living-space')}
              >
                <Image
                  src={images[0].src}
                  alt={images[0].title}
                  layout="fill"
                  objectFit="cover"
                  objectPosition="top"
                />
                <Overlay className="overlay">
                  <OverlayContent className="overlay-content">
                    <Typography variant="h6" sx={{ color: 'white' }}>
                      {images[0].title}
                    </Typography>
                    <FaArrowRight color="white" />
                  </OverlayContent>
                  <ImageDetails className="image-details">
                    {images[0].details}
                  </ImageDetails>
                </Overlay>
              </HoverDiv>
            </Link>

            <Link href="/portfolio#dining-room" scroll={true}>
              <HoverDiv sx={{ height: '400px', mt: 4, cursor: 'pointer' }}>
                <Image
                  src={images[1].src}
                  alt={images[1].title}
                  layout="fill"
                  objectFit="cover"
                />
                <Overlay
                  className="overlay"
                  // sx={{ backgroundColor: 'rgba(128, 0, 128, 0.7)' }}
                >
                  <OverlayContent className="overlay-content">
                    <Typography variant="h6" sx={{ color: 'white' }}>
                      {images[1].title}
                    </Typography>
                    <FaArrowRight color="white" />
                  </OverlayContent>
                  <ImageDetails className="image-details">
                    {images[1].details}
                  </ImageDetails>
                </Overlay>
              </HoverDiv>
            </Link>
          </Grid>

          {/* Second Column */}
          <Grid item xs={12} sm={6}>
            <Link href="/portfolio#bedroom-designs" scroll={true}>
              <HoverDiv sx={{ height: '400px', cursor: 'pointer' }}>
                <Image
                  src={images[2].src}
                  alt={images[2].title}
                  layout="fill"
                  objectFit="cover"
                />
                <Overlay
                  className="overlay"
                  // sx={{ backgroundColor: 'rgba(128, 0, 128, 0.7)' }}
                >
                  <OverlayContent className="overlay-content">
                    <Typography variant="h6" sx={{ color: 'white' }}>
                      {images[2].title}
                    </Typography>
                    <FaArrowRight color="white" />
                  </OverlayContent>
                  <ImageDetails className="image-details">
                    {images[2].details}
                  </ImageDetails>
                </Overlay>
              </HoverDiv>
            </Link>

            <Link href="/portfolio#kitchen" scroll={true}>
              <HoverDiv
                sx={{
                  height: { md: '300px', xs: '200px' },
                  mt: 4,
                  cursor: 'pointer',
                }}
              >
                <Image
                  src={images[3].src}
                  alt={images[3].title}
                  layout="fill"
                  objectFit="cover"
                />
                <Overlay
                  className="overlay"
                  // sx={{ backgroundColor: 'rgba(128, 0, 128, 0.7)' }}
                >
                  <OverlayContent className="overlay-content">
                    <Typography variant="h6" sx={{ color: 'white' }}>
                      {images[3].title}
                    </Typography>
                    <FaArrowRight color="white" />
                  </OverlayContent>
                  <ImageDetails className="image-details">
                    {images[3].details}
                  </ImageDetails>
                </Overlay>
              </HoverDiv>
            </Link>
          </Grid>
        </Grid>
      </Box>
    </Box>
  )
}

export default Gallery
