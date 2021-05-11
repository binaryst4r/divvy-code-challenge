import React from 'react'
import {darken, lighten} from 'polished'
import styled, {css} from 'styled-components'
import moment from 'moment'
import ArrowSvg from '../svg/arrows'

function PullRequest({pr, filter, setFilter, theme}) {
  const labels = pr.labels.map(l => l.name)
  // if there is a filter and its not included in the labels, return nothing
  if (filter && !labels.includes(filter)) { return null }
  return (
    <PullRequestListItem>
      <PullRequestTitleBar>
        <ArrowSvg theme={theme} />
        <PullRequestTitle href={pr.html_url}>
          {pr.title}
        </PullRequestTitle>
      </PullRequestTitleBar>
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

const PullRequestTitleBar = styled.div`
  display: flex;
  align-items: center;
  #dark,
  #dark2,
  #light {
    transition: all 0.55s ease-in;
    opacity: 0;
  }


  #dark {
    transform: translateX(-100%);
  }

  &:hover #light {
    opacity: 1;
    transform: translateX(20%);
  }

  &:hover #dark2 {
    opacity: 1;
    transform: translateX(40%);
    opacity: 0;
  }

  &:hover #dark {
    opacity: 1;
    transform: translateX(0%);
  }
`

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
  color: ${props => props.theme.body};
`

const PullRequestTitle = styled.a`
  text-align: center;
  line-height: 1.5;
  text-decoration: none;
  color: ${props => props.theme.link};
  font-size: 16px;
`

const PullRequestListItem = styled.div`
  width:  100%;
  padding: 15px 0;
  border-bottom: 1px solid ${props => props.theme.borderColor};
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export default PullRequest
