'use client'

import React from 'react'
import { Box, Container, Typography } from '@mui/material'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { useInView } from 'react-intersection-observer'

// Example dynamic content
const content = {
  imageSrc: 'https://i.ibb.co/Qpm4LbD/about-us-home.png', // Updated path assuming image is in public/assets
  heading: 'Dynamic Heading',
  paragraph:
    'Welcome to InteriArch, where creativity meets comfort. We aim to transform your spaces into exquisite works of art. A home is a reflection of your unique personality & aspirations, therefore our team is full with skilled designers where they are dedicatedly working to bring your visions to life.',
}

const AboutSummaryInformation = () => {
  const { ref, inView } = useInView({
    triggerOnce: false, // Trigger animation only once
    threshold: 0.1, // Trigger when 10% of the element is in view
  })

  return (
    <Container maxWidth="lg">
      <Box
        ref={ref}
        sx={{
          display: 'flex',
          flexDirection: 'column', // Stack elements vertically
          alignItems: 'center',
          justifyContent: 'center',
          padding: { xs: 2, md: 4 },
          gap: 2,
          textAlign: 'center', // Center the text
          mt: '2rem',
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: -200 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : -50 }}
          transition={{ duration: 2, type: 'spring' }}
          style={{
            position: 'relative',
            width: '100%',
            height: 'auto',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Image
            src={content.imageSrc}
            alt="Summary Image"
            width={400} // Adjust the image width
            height={420} // Adjust the image height
            style={{ borderRadius: '8px' }}
          />
        </motion.div>

        <Box
          sx={{
            mt: 3, // Add margin top for spacing between the image and content
            padding: { xs: 0, lg: '0 3rem' },
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 200 }}
            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
            transition={{ duration: 2, type: 'spring' }}
          >
            <Typography
              variant="h6"
              sx={{
                color: 'text.secondary',
                lineHeight: 1.6,
                textAlign: 'center',
              }}
            >
              {content.paragraph}
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: 'text.secondary',
                textAlign: 'justify',
                marginTop: '15px',
              }}
            >
              As a proud sister concern of SEL and with more than 25 years of
              experience in interior designing, InteriArch is committed to
              excellence and ensures that every design journey is extraordinary.
            </Typography>
          </motion.div>
        </Box>
      </Box>
    </Container>
  )
}

export default AboutSummaryInformation
