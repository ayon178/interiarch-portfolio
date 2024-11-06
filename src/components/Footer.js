'use client'
// Footer.js
import React from 'react'
import {
  Grid,
  Typography,
  Button,
  Link,
  Container,
  Box,
  IconButton,
} from '@mui/material'
import { Facebook, Twitter, Instagram, LinkedIn } from '@mui/icons-material'
import { COLORS } from '../constant/constant'
import BookingPopup from './popup/BookingPopup'
import { useState } from 'react'

const Footer = () => {
  return (
    <>
      {/* Footer Section */}
      <Box sx={{ backgroundColor: '#333', color: 'white', py: 6 }}>
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            {/* Social Handles Section */}
            <Grid item xs={12} md={4}>
              <Typography variant="h6" gutterBottom>
                Follow Us
              </Typography>

              <IconButton
                color="inherit"
                href="https://www.facebook.com/InteriArchbd"
                target="_blank"
              >
                <Facebook />
              </IconButton>

              {/* <IconButton
                color="inherit"
                href="https://twitter.com"
                target="_blank"
              >
                <Twitter />
              </IconButton> */}

              <IconButton
                color="inherit"
                href=" https://www.instagram.com/interiarch.sel/"
                target="_blank"
              >
                <Instagram />
              </IconButton>

              {/* <IconButton
                color="inherit"
                href="https://linkedin.com"
                target="_blank"
              >
                <LinkedIn />
              </IconButton> */}
            </Grid>

            {/* CTA Section */}
            <Grid item xs={12} md={4}>
              <Typography variant="h6" gutterBottom>
                Contact Information
              </Typography>
              {/* <Typography variant="body2" gutterBottom>
                Join our newsletter to stay up to date with our latest news and
                offers.
              </Typography> */}

              {/* Address */}
              <Typography variant="body2" gutterBottom>
                Address: SEL Centre, 29 West Panthapath, Dhaka, Bangladesh.
              </Typography>

              {/* Phone Number */}
              <Typography variant="body2" gutterBottom>
                Phone: 02-41020906
              </Typography>
              {/* Email */}
              <Typography variant="body2" gutterBottom>
                Email: interiarch.sel1983@gmail.com
              </Typography>

              {/* <Button
                variant="contained"
                href="#subscribe"
                sx={{ mt: 2, background: COLORS.primary }}
              >
                Subscribe
              </Button> */}
            </Grid>

            {/* Sitemap Section */}
            <Grid item xs={12} md={4}>
              <Typography variant="h6" gutterBottom>
                Sitemap
              </Typography>
              <Grid container direction="column">
                <Link href="/" color="inherit" underline="hover">
                  Home
                </Link>
                <Link href="/about-us" color="inherit" underline="hover">
                  About Us
                </Link>
                <Link href="/our-services" color="inherit" underline="hover">
                  Our Services
                </Link>
                <Link href="/portfolio" color="inherit" underline="hover">
                  Portfolio
                </Link>
                <Link href="/contact" color="inherit" underline="hover">
                  Contact
                </Link>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Bottom Bar Section */}
      <Box
        sx={{
          backgroundColor: '#222',
          color: 'white',
          py: 2,
          textAlign: 'center',
        }}
      >
        <Container maxWidth="lg">
          <Typography variant="body2">
            © {new Date().getFullYear()} All rights reserved. |
            <Link href="/terms" color="inherit" underline="hover">
              Terms & Conditions
            </Link>{' '}
            |
            <Link href="/privacy" color="inherit" underline="hover">
              Privacy Policy
            </Link>
          </Typography>
        </Container>
      </Box>
    </>
  )
}

export default Footer
