import React from 'react'

const CalculateScore = (props) => {
  const avg= (props.Total/props.goal).toFixed(2);
    return (
    <div>
      <h2 className="text-danger fw-bold">Student Details</h2>
      <h4 className="text-primary">Name: {props.Name}</h4>
      <h4 className="text-success">School: {props.School}</h4>
      <h4 className="text-warning">Total Score: {props.Total}</h4>
      <h4 className="text-dark">Goal: {props.goal}</h4>
      <h4 className="text-success">Average Score: {avg}</h4>
    </div>
  )
}

export default CalculateScore
