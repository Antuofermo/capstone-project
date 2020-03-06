import React from 'react'
import { uid } from 'react-uid'
import styled from 'styled-components/macro'
import Activity from './Activity'
import Category from './Category'

export default function Cards({ activities, categories }) {
  return categories.map(category => (
    <CardStyled key={uid(category)}>
      <Category
        category={category}
        hoursSum={sumHoursByCategory(activities, category)}
      />
      <ActivitySection>
        {activities
          .filter(activity => activity.category === category)
          .map(activity => (
            <Activity activity={activity} key={uid(activity)} />
          ))}
      </ActivitySection>
    </CardStyled>
  ))

  function sumHoursByCategory(activities, category) {
    const sum = activities.reduce(
      (acc, cur) => (cur.category === category ? (acc = acc + cur.hours) : acc),
      0
    )
    return sum
  }
}

const ActivitySection = styled.div`
  overflow-y: scroll;
  border-top: 1px solid black;
  border-radius: 0 0 4px 4px;
  box-shadow: 0 3px 2px goldenrod inset;
`
const CardStyled = styled.div`
  display: grid;
  grid-template-rows: 48px auto;
  border: 1px solid black;
  margin: 30px 0;
  height: 180px;
  border-radius: 4px;
`
