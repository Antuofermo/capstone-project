import React from 'react'
import styled from 'styled-components'

export default function TimeInput({ onChange }) {
  return (
    <InputStyled
      onChange={onChange}
      name="hours"
      placeholder="0.0"
      id="hours-input"
      type="number"
      step="0.10"
      min="0.10"
      max="24"
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