import React from 'react'
import styled from 'styled-components'
import PrListItem from './pr-list-item'

function PrList({pullRequests, filter, setFilter}) {
  return (
    <List>
      {pullRequests.map((pr, i) => (
        <PrListItem
          key={i}
          setFilter={setFilter}
          filter={filter}
          pr={pr} />
      ))}
    </List>
  )
}

const List = styled.div`
  width: 100%;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;

`

export default PrList
