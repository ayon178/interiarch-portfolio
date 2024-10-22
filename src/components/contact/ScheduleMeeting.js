'use client'

import React, { useState } from 'react'
import {
  Box,
  Button,
  Typography,
  Dialog,
  TextField,
  IconButton,
} from '@mui/material'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import CloseIcon from '@mui/icons-material/Close'

// Custom DatePicker component
const CustomDatePicker = ({ selectedDate, onChange, sx }) => {
  return (
    <DatePicker
      selected={selectedDate}
      onChange={onChange}
      dateFormat="MMMM d, yyyy"
      placeholderText="Select Date"
      customInput={<TextField fullWidth variant="outlined" />}
      wrapperClassName="datepicker-wrapper"
      popperPlacement="bottom-start"
      popperProps={{
        style: {
          zIndex: 1000,
        },
      }}
      sx={sx}
    />
  )
}

const ScheduleMeeting = () => {
  const [open, setOpen] = useState(false)
  const [selectedDate, setSelectedDate] = useState(null)
  const [details, setDetails] = useState('')

  const { ref: ctaRef, inView: ctaInView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  })

  const handleClickOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  const handleDateChange = date => setSelectedDate(date)
  const handleDetailsChange = event => setDetails(event.target.value)

  const handleSubmit = () => {
    // Handle form submission logic
    console.log('Selected Date:', selectedDate)
    console.log('Details:', details)
    handleClose()
  }

  const ctaVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  }

  const popupVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  }

  return (
    <Box
      sx={{
        position: 'relative',
        height: '70vh',
        overflow: 'hidden',
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundImage: `url(https://i.ibb.co/9gfq72M/1-2.jpg)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          zIndex: -1,
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.5)', // Black overlay with 50% opacity
          }}
        />
      </Box>
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          height: '100%',
          zIndex: 1,
        }}
      >
        <motion.div
          ref={ctaRef}
          variants={ctaVariants}
          initial="hidden"
          animate={ctaInView ? 'visible' : 'hidden'}
          sx={{ textAlign: 'center' }}
        >
          <Button
            variant="contained"
            color="primary"
            onClick={handleClickOpen}
            sx={{
              py: 2,
              px: 4,
              borderRadius: '8px',
              boxShadow: 3,
              fontWeight: 'bold',
              textTransform: 'none',
              bgcolor: '#007bff',
              backgroundImage: 'linear-gradient(45deg, #007bff, #0056b3)',
              '&:hover': {
                bgcolor: '#0056b3',
                backgroundImage: 'linear-gradient(45deg, #0056b3, #003d80)',
              },
            }}
          >
            Schedule a Meeting
          </Button>
        </motion.div>
      </Box>

      <Dialog
        open={open}
        onClose={handleClose}
        maxWidth="sm"
        fullWidth
        sx={{
          '& .MuiDialog-paper': {
            borderRadius: '16px',
            p: 3,
            boxShadow: 24,
            backgroundColor: '#fff',
          },
        }}
      >
        <motion.div variants={popupVariants} initial="hidden" animate="visible">
          <Box sx={{ position: 'relative' }}>
            <IconButton
              onClick={handleClose}
              sx={{ position: 'absolute', top: 0, right: 16 }}
            >
              <CloseIcon />
            </IconButton>
            <Typography
              variant="h4"
              sx={{
                mb: 3,
                fontWeight: 'bold',
                color: '#333',
                textAlign: 'center',
              }}
            >
              Schedule Your Meeting
            </Typography>
            <Box
              component="form"
              noValidate
              autoComplete="off"
              sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}
            >
              <CustomDatePicker
                selectedDate={selectedDate}
                onChange={handleDateChange}
                sx={{
                  '& .react-datepicker__input-container': {
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 1,
                  },
                  '& .react-datepicker__input': {
                    padding: '12px 16px',
                    borderRadius: '8px',
                    border: '1px solid #ccc',
                    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                    fontSize: '16px',
                    color: '#333',
                    '&:focus': {
                      borderColor: '#007bff',
                      boxShadow: '0 0 0 4px rgba(0, 123, 255, 0.25)',
                    },
                    '&:hover': {
                      borderColor: '#007bff',
                    },
                  },
                }}
              />
              <TextField
                label="Additional Details"
                variant="outlined"
                multiline
                rows={4}
                value={details}
                onChange={handleDetailsChange}
                fullWidth
                sx={{
                  bgcolor: '#f9f9f9',
                  borderRadius: '8px',
                  border: '1px solid #ccc',
                  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                  '& .MuiOutlinedInput-root': {
                    borderRadius: '8px',
                    '&:hover fieldset': {
                      borderColor: '#007bff',
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: '#007bff',
                      boxShadow: '0 0 0 4px rgba(0, 123, 255, 0.25)',
                    },
                  },
                }}
              />
              <Button
                variant="contained"
                color="primary"
                onClick={handleSubmit}
                sx={{ mt: 2, borderRadius: '8px', py: 1.5 }}
              >
                Submit
              </Button>
            </Box>
          </Box>
        </motion.div>
      </Dialog>
    </Box>
  )
}

export default ScheduleMeeting
