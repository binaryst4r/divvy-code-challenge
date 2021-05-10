import React, { useState, useEffect } from 'react';
import axios from 'axios'
import styled, {ThemeProvider} from 'styled-components'
import {themes} from './styles/themes'
import PrList from './components/pull-requests/pr-list'
import Header from './components/pull-requests/header'
const allThemes = themes()
const defaultTheme = allThemes[0]

function App() {
  const [pullRequests, setPullRequests] = useState([])
  const [filter, setFilter] = useState('')
  const [loading, setLoading] = useState('')
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
    <ThemeProvider theme={theme}>
      <PullRequestIndexPage background={theme.background}>
        <Container>
          <ThemeToggler>
            <ThemeSelect onChange={(e) => setTheme(JSON.parse(e.target.value))} value={JSON.stringify(theme)}>
              {allThemes.map((th, i) => {
                return <option value={JSON.stringify(th)}>
                  {th.name}
                </option>
              })}
            </ThemeSelect>
          </ThemeToggler>
          <Header filter={filter} setFilter={setFilter} />
          {loading ? (
            <span>loading...</span>
          ) : (
            <PrList setFilter={setFilter} filter={filter} pullRequests={pullRequests} />
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
`

const ThemeSelect = styled.select`
  margin: auto;
  display: block;
`

const ThemeToggler = styled.div`
  width: 325px;
  margin: auto;
`


const Container = styled.div`
  padding: 15px;
  margin: auto;
  max-width: 800px;
`



export default App;
