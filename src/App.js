import React, { useState, useEffect } from 'react';
import axios from 'axios'
import styled, {ThemeProvider} from 'styled-components'
import {themes} from './styles/themes'
import PrList from './components/pull-requests/pr-list'
import Header from './components/pull-requests/header'
const allThemes = themes
const defaultTheme = allThemes[0]

function App() {
  const [pullRequests, setPullRequests] = useState([])
  const [filter, setFilter] = useState('')
  const [loading, setLoading] = useState(true)
  const [theme, setTheme] = useState(defaultTheme)

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        'https://api.github.com/repos/divvydose/fe-coding-challenge/pulls',
      );

      setLoading(false)
      setPullRequests(result.data);
    };

    fetchData();
  }, []);

  return (
    <ThemeProvider
      theme={theme}>
      <PullRequestIndexPage
        background={theme.background}>
        <Container>
          <ThemeToggler>
            <ThemeSelect
              onChange={(e) => setTheme(JSON.parse(e.target.value))}
              value={JSON.stringify(theme)}>
              {allThemes.map((th, i) => {
                return (
                  <option
                    key={i}
                    value={JSON.stringify(th)}>
                    {th.name}
                  </option>
                )
              })}
            </ThemeSelect>
            <Caret />
          </ThemeToggler>
          <Header
            filter={filter}
            setFilter={setFilter} />
          {loading ? (
            <center>loading pull requests...</center>
          ) : (
            <PrList
              theme={theme}
              setFilter={setFilter}
              filter={filter}
              pullRequests={pullRequests} />
          )}
        </Container>
      </PullRequestIndexPage>
    </ThemeProvider>
  );
}

const PullRequestIndexPage = styled.div`
  width: 100vw;
  background: ${props => props.background};
  min-height: 100vh;
  padding-bottom: 80px;
`

const ThemeSelect = styled.select`
  appearance: none;
  -webkit-appearance: none;
  background: none;
  border: none;
  display: block;
  padding-left: 8px;
  padding-bottom: 4px;
  width: 100%;
  color: ${props => props.theme.link};

  &:focus-visible {
    outline: none;
  }
`

const ThemeToggler = styled.div`
  position: relative;
  width: 100px;
  border-bottom: 1px solid ${props => props.theme.borderColor};
  margin: auto;
`


const Container = styled.div`
  padding: 15px;
  margin: auto;
  max-width: 800px;
`

const Caret = styled.span`
  pointer-events: none;
  top: 5px;
  bottom: 0;
  right: 4px;
  margin: auto;
  position: absolute;
  border-top: 5px solid ${props => props.theme.borderColor};
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
`

export default App;
