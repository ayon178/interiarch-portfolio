'use client'

import React, { useState } from 'react'
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  Grid,
} from '@mui/material'
import { motion, AnimatePresence } from 'framer-motion'

const BookingPopup = ({ open, setOpen }) => {
  const handleClose = () => {
    setOpen(false)
  }

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <AnimatePresence>
        {open && (
          <Dialog
            open={open}
            onClose={handleClose}
            fullWidth
            maxWidth="sm"
            PaperComponent={props => (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0 }}
                transition={{ duration: 0.3 }}
                style={{
                  backgroundColor: '#fff',
                  borderRadius: '8px', // To match the default Paper styling
                  boxShadow: '0px 5px 15px rgba(0, 0, 0, 0.2)', // Optional: adds a shadow for depth
                }}
                {...props}
              />
            )}
          >
            <DialogTitle
              sx={{ textAlign: 'center', fontWeight: 'bold', mb: 2 }}
            >
              Book a Meeting
            </DialogTitle>
            <DialogContent>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Name"
                    variant="outlined"
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Address"
                    variant="outlined"
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Phone"
                    type="tel"
                    variant="outlined"
                    required
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Meeting Date"
                    type="date"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    variant="outlined"
                    required
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Meeting Time"
                    type="time"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    variant="outlined"
                    required
                  />
                </Grid>
              </Grid>
            </DialogContent>
            <DialogActions>
              <Button variant="outlined" onClick={handleClose} color="error">
                Cancel
              </Button>
              <Button variant="contained" color="primary">
                Confirm Booking
              </Button>
            </DialogActions>
          </Dialog>
        )}
      </AnimatePresence>
    </div>
  )
}

export default BookingPopup
