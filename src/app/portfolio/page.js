import React from 'react'
import PreviousProjects from '../../components/previousProject/PreviousProjects'
import DesignSection from '../../components/portfolio/DesignSection'
import Banner from '../../components/portfolio/Banner'

import DesignSection2 from '../../components/portfolio/DesignSection2'

const PreviousProject = () => {
  return (
    <>
      {/* <PortfolioSummary /> */}
      <Banner />
      <DesignSection
        heading="Living Space"
        image={'https://i.ibb.co/wRZYqb6/Living.jpg'}
        para="View our living space designs."
        imgRight={false}
        uri="living-space"
      />
      {/* <Gallery /> */}
      <PreviousProjects />
      <DesignSection2
        heading="Bedroom Designs"
        image={'https://i.ibb.co/WpcRFkL/Bedroom.jpg'}
        para="View our living bedroom designs."
        imgRight={true}
        uri="bedroom-designs"
      />
      <PreviousProjects />
      <DesignSection
        heading="Kitchen"
        image="https://i.ibb.co/N244cMm/Kitchen.png"
        para="View our living kitchen designs."
        imgRight={false}
        uri="kitchen"
      />
      <PreviousProjects />
      <DesignSection2
        heading="Dining room Designs"
        image={'https://i.ibb.co/dWh2JFr/Dining.jpg'}
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
