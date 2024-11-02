import React from 'react'
import ContactInformation from '../../components/contact/ContactInformation'
import InquiryForm from '../../components/contact/InquiryForm'
import ScheduleMeeting from '../../components/contact/ScheduleMeeting'

const Contact = () => {
  return (
    <>
      <ContactInformation />
      <InquiryForm />
      <ScheduleMeeting />
    </>
  )
}

export default Contact
