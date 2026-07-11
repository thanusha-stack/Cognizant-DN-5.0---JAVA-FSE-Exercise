import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
const DashBoard = () => {
    const Cohorts=[
        {
    id: 1,
    Title: "React Bootcamp",
    startDate: "01-07-2026",
    status: "Ongoing",
    coach: "John",
    trainer: "David"
  },
  {
    id: 2,
    Title: "Java Full Stack",
    startDate: "10-07-2026",
    status: "Upcoming",
    coach: "Peter",
    trainer: "James"
  },
   {
    id: 3,
    Title: "Javascript Full Stack",
    startDate: "14-02-2026",
    status: "Completed",
    coach: "Peter",
    trainer: "James"
  },

    ];

  return (
    <Container>
        <h3>Cohorts Details</h3>
        <Row>{Cohorts.map((cohort)=>(
            <Col md={4} key={cohort.id} style={{border:"1px solid gray", borderRadius:"8px", padding:"15px", marginBottom:"15px", backgroundColor:"#f8f8f8"}}>
                <h5 className="text-success">{cohort.Title}</h5>
                <h6>Started On: {cohort.startDate}</h6>
                <h6>Current Status: {cohort.status}</h6>
                <h6>Coach: {cohort.coach}</h6>
                <h6>Trainer: {cohort.trainer}</h6>
            </Col>
              ))}
        </Row>
    </Container>
  )
}

export default DashBoard
