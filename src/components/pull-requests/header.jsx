import React from 'react'
import styled from 'styled-components'
import {darken} from 'polished'

function PageHeader({setFilter, filter}) {
  return (
    <Header>
      <PageTitle>
        Wow, look at these pull requests.
      </PageTitle>
      {filter &&
        <CurrentFilter>
          <span>Filtering: {filter}</span>
          <ClearFilterButton onClick={() => setFilter('')}>Clear</ClearFilterButton>
        </CurrentFilter>
      }
    </Header>
  )
}


const Header = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 40px 0;
`

const PageTitle = styled.h2`
  font-size: 30px;
  line-height: 1.25;
  text-align: center;
  color: ${props => props.theme.title}
`

const ClearFilterButton = styled.button`
  appearance: none;
  -webkit-appearance: none;
  border: none;
  background: none;
  font-size: 13px;
  cursor: pointer;
  color: #58a6ff;
  &:hover {
    color: ${darken(0.2, '#58a6ff')}
  }
`

const CurrentFilter = styled.div`
  color: ${props => props.theme.body}
`

export default PageHeader
