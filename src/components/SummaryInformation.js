'use client'

import React from 'react'
import { Box, Container, Typography } from '@mui/material'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { useInView } from 'react-intersection-observer'

// Example dynamic content
const content = {
  imageSrc: 'https://i.ibb.co/Qpm4LbD/about-us-home.png',
  heading: 'Dynamic Heading',
  paragraph:
    'Welcome to InteriArch, where creativity meets comfort. We aim to transform your spaces into exquisite works of art. A home is a reflection of your unique personality & aspirations, therefore our team is full with skilled designers where they are dedicatedly working to bring your visions to life.',
}

const SummaryInformation = () => {
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
          flexDirection: { xs: 'column', md: 'row' }, // Stack vertically on mobile
          alignItems: 'center',
          justifyContent: 'center',
          padding: { xs: 2, md: 4, lg: 6 }, // Adjust padding for large screens
          gap: 2,
          textAlign: { xs: 'center', md: 'left' },
          mt: '5rem',
        }}
      >
        <motion.div
          initial={{ opacity: 0, x: -200 }}
          animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -50 }}
          transition={{ duration: 2, type: 'spring' }}
          style={{
            flex: 1,
            position: 'relative',
            width: '100%',
            height: 'auto',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: { xs: 2, md: 0 }, // Adjust bottom margin on smaller screens
          }}
        >
          <Image
            src={content.imageSrc}
            alt="Summary Image"
            width={400}
            height={420} // Reduced height for better responsiveness
            style={{ borderRadius: '8px', width: '100%', height: 'auto' }} // Ensure responsive image size
          />
        </motion.div>

        <Box
          sx={{
            flex: 1,
            paddingRight: {
              xs: 0,
              lg: '3rem', // Right padding for larger screens
            },
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 200 }}
            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
            transition={{ duration: 2, type: 'spring' }}
          >
            <Typography
              variant="h4"
              component="h2"
              sx={{
                marginBottom: 2,
                fontWeight: 'bold',
                color: 'text.primary',
                textAlign: 'center',
                fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' }, // Adjust font size for different screen sizes
              }}
            >
              {/* {content.heading} */}
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: 'text.secondary',
                lineHeight: 1.6,
                textAlign: 'center',
                fontSize: { xs: '0.775rem', sm: '.85rem', md: '1.1rem' }, // Font size adjustments
              }}
            >
              Welcome to InteriArch,
              <br /> where creativity meets comfort. We aim to transform your
              spaces into exquisite works of art. A home is a reflection of your
              unique personality & aspirations, therefore our team is full with
              skilled designers where they are dedicatedly working to bring{' '}
              <br />
              your visions to life.
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: 'text.secondary',
                textAlign: 'center',
                marginTop: '25px',
                fontSize: { xs: '0.775rem', sm: '.85rem', md: '1.1rem' }, // Font size adjustments
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

export default SummaryInformation
