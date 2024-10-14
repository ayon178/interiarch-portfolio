import React from 'react'
import PreviousProjects from '../../components/previousProject/PreviousProjects'
import DesignSection from '../../components/portfolio/DesignSection'
import Banner from '../../components/portfolio/Banner'

import stackedImage from '../../assets/projects/Living.jpg'
import kitchen from '../../assets/projects/Kitchen.PNG'
import dining from '../../assets/projects/Dining.jpg'
import DesignSection2 from '../../components/portfolio/DesignSection2'

const PreviousProject = () => {
  return (
    <>
      {/* <PortfolioSummary /> */}
      <Banner />
      <DesignSection
        heading="Living Space"
        image={stackedImage}
        para="View our living space designs."
        imgRight={false}
        uri="living-space"
      />
      {/* <Gallery /> */}
      <PreviousProjects />
      <DesignSection2
        heading="Bedroom Designs"
        image={'https://i.ibb.co.com/WpcRFkL/Bedroom.jpg'}
        para="View our living bedroom designs."
        imgRight={true}
        uri="bedroom-designs"
      />
      <PreviousProjects />
      <DesignSection
        heading="Kitchen"
        image={kitchen}
        para="View our living kitchen designs."
        imgRight={false}
        uri="kitchen"
      />
      <PreviousProjects />
      <DesignSection2
        heading="Dining room Designs"
        image={dining}
        para="View our living dining room designs."
        imgRight={true}
        uri="dining-room"
      />
      <PreviousProjects />
      {/* <RoomCategory /> */}
    </>
  )
}

export default PreviousProject
