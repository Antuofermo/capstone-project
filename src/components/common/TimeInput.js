import React from 'react'
import styled from 'styled-components'

export default function TimeInput() {
  return (
    <InputStyled
      name="time"
      placeholder="00:00 hours"
      id="time-input"
      type="time"
      min="0:01"
      max="24:00"
    />
  )
}

const InputStyled = styled.input`
  border: 1px solid black;
  border-radius: 50px;
  padding: 15px 40px;
  margin-bottom: 20px;
  width: 200px;
  height: 48px;

  ::placeholder {
    text-align: center;
  }
`
