'use client'

import React, { useState } from 'react'
import {
  Box,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
} from '@mui/material'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import image1 from '../../assets/1.2.jpg'
import image2 from '../../assets/1.2.jpg'
import image3 from '../../assets/1.2.jpg'
import { COLORS } from '../../constant/constant'

const Description = () => {
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.1 })

  // State to track which card is expanded
  const [expandedCard, setExpandedCard] = useState(null)

  // Function to toggle the expansion of a card
  const toggleCard = cardId => {
    setExpandedCard(prev => (prev === cardId ? null : cardId))
  }

  return (
    <Box ref={ref} sx={{ padding: 4 }}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8 }}
      >
        <Typography
          variant="h4"
          sx={{
            marginBottom: 2,
            fontWeight: 'bold',
            textAlign: 'center',
            color: COLORS.main,
            mt: 2,
          }}
        >
          We believe in quality.
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={4}>
            <Card
              sx={{ boxShadow: 3, borderRadius: 2, cursor: 'pointer' }}
              onClick={() => toggleCard('values')}
            >
              <CardMedia
                component="img"
                image={image1.src}
                alt="Dynamic Image 1"
                sx={{ height: 200, objectFit: 'cover' }}
              />
              <CardContent>
                <Typography variant="h6">Our Values</Typography>
                <motion.div
                  initial={{ height: 0 }}
                  animate={{ height: expandedCard === 'values' ? 'auto' : 0 }}
                  transition={{ duration: 0.5 }}
                  style={{ overflow: 'hidden' }}
                >
                  {expandedCard === 'values' && (
                    <Typography variant="body2" sx={{ marginTop: 2 }}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Curabitur vehicula efficitur quam, ac placerat justo.
                    </Typography>
                  )}
                </motion.div>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Card
              sx={{ boxShadow: 3, borderRadius: 2, cursor: 'pointer' }}
              onClick={() => toggleCard('mission')}
            >
              <CardMedia
                component="img"
                image={image2.src}
                alt="Dynamic Image 2"
                sx={{ height: 200, objectFit: 'cover' }}
              />
              <CardContent>
                <Typography variant="h6">Our Mission</Typography>
                <motion.div
                  initial={{ height: 0 }}
                  animate={{ height: expandedCard === 'mission' ? 'auto' : 0 }}
                  transition={{ duration: 0.5 }}
                  style={{ overflow: 'hidden' }}
                >
                  {expandedCard === 'mission' && (
                    <Typography variant="body2" sx={{ marginTop: 2 }}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Curabitur vehicula efficitur quam, ac placerat justo.
                    </Typography>
                  )}
                </motion.div>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Card
              sx={{ boxShadow: 3, borderRadius: 2, cursor: 'pointer' }}
              onClick={() => toggleCard('impact')}
            >
              <CardMedia
                component="img"
                image={image3.src}
                alt="Dynamic Image 3"
                sx={{ height: 200, objectFit: 'cover' }}
              />
              <CardContent>
                <Typography variant="h6">Our Impact</Typography>
                <motion.div
                  initial={{ height: 0 }}
                  animate={{ height: expandedCard === 'impact' ? 'auto' : 0 }}
                  transition={{ duration: 0.5 }}
                  style={{ overflow: 'hidden' }}
                >
                  {expandedCard === 'impact' && (
                    <Typography variant="body2" sx={{ marginTop: 2 }}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Curabitur vehicula efficitur quam, ac placerat justo.
                    </Typography>
                  )}
                </motion.div>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </motion.div>
    </Box>
  )
}

export default Description
