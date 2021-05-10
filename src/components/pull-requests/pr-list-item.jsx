import React from 'react'
import {darken, lighten} from 'polished'
import styled, {css} from 'styled-components'
import moment from 'moment'

function PullRequest({pr, filter, setFilter}) {
  const labels = pr.labels.map(l => l.name)
  // if there is a filter and its not included in the labels, return nothing
  if (filter && !labels.includes(filter)) { return null }

  return (
    <PullRequestListItem>
      <PullRequestTitle href={pr.html_url}>
        {pr.title}
      </PullRequestTitle>
      <PullRequestsOpenedDate>
        Opened: {moment(pr.created_at).format('MMMM Do YYYY, h:mm:ss a')}
      </PullRequestsOpenedDate>
      <PullRequestLabels>
        {pr.labels.map((label, i) => (
          <Label
            onClick={() => setFilter(label.name)}
            color={label.color}>
            {label.name}
          </Label>
        ))}
      </PullRequestLabels>
    </PullRequestListItem>
  )
}

const Label = styled.span`
  cursor: pointer;
  font-size: 13px;
  font-weight: bold;
  padding: 3px 10px;
  border: 1px solid #${props => props.color};
  border-radius: 3px;
  ${props => props.color && css`
    background: ${darken(0.4, `#${props.color}`)};
    color: ${lighten(0.4, `#${props.color}`)}
  `}
`

const PullRequestLabels = styled.div`
  margin-top: 6px;
  display: flex;
  justify-content: center;
  width: 60%;
`


const PullRequestsOpenedDate = styled.span`
  display: block;
  font-size: 13px;
  line-height: 1.2;
  color: #6d6d6d;
`

const PullRequestTitle = styled.a`
  text-align: center;
  line-height: 1.5;
  text-decoration: none;
  color: #58a6ff;
  font-size: 16px;

  &:hover {
    color: ${darken(0.2, '#58a6ff')}
  }
`

const PullRequestListItem = styled.div`
  width:  100%;
  padding: 15px 0;
  border-bottom: 1px solid #ddd;
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;

`

export default PullRequest
