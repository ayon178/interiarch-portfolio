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
import axios from 'axios'
import toast from 'react-hot-toast'

const BookingPopup = ({ open, setOpen }) => {
  const handleClose = () => {
    setOpen(false)
  }

  // Function to handle form submission
  const handleForm = async e => {
    e.preventDefault() // Prevent page reload

    // Retrieve data from the form
    const form = e.target
    const name = form.elements.name.value
    const address = form.elements.address.value
    const phone = form.elements.phone.value
    const meetingDate = form.elements.meetingDate.value
    const meetingTime = form.elements.meetingTime.value

    // Construct the form data as a message string
    const formData = `Name: ${name}, Address: ${address}, Phone: ${phone}, Meeting Date: ${meetingDate}, Meeting Time: ${meetingTime}`

    console.log('Form data:', formData) // Log form data to the console

    // API call using Axios
    try {
      const response = await axios.post(
        'https://email-sender-rouge.vercel.app/api/v1/send-email',
        {
          message: formData, // Sending the formData in the 'message' key
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      )

      
      console.log(response.status); // Log the response status
      console.log(response.data);   // Log the response data
  
      // Check the response status
      if (response.status === 200) {
        console.log('Booking sent successfully:', response.data);
  
        toast.success('Booking sent successfully!');
        setOpen(false); // Close the dialog after success
      } else {
        console.error('Failed to send booking:', response.data);
        toast.error(response.data.message || 'Failed to send');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred!');
      toast.error('An error occurred');
    }
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
                  borderRadius: '8px',
                  boxShadow: '0px 5px 15px rgba(0, 0, 0, 0.2)',
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
              <form onSubmit={handleForm}>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Name"
                      variant="outlined"
                      name="name"
                      required
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Address"
                      variant="outlined"
                      name="address"
                      required
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Phone"
                      type="tel"
                      variant="outlined"
                      name="phone"
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
                      name="meetingDate"
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
                      name="meetingTime"
                      required
                    />
                  </Grid>
                </Grid>

                <DialogActions>
                  <Button
                    variant="outlined"
                    onClick={handleClose}
                    color="error"
                  >
                    Cancel
                  </Button>
                  <Button variant="contained" color="primary" type="submit">
                    Confirm Booking
                  </Button>
                </DialogActions>
              </form>
            </DialogContent>
          </Dialog>
        )}
      </AnimatePresence>
    </div>
  )
}

export default BookingPopup
