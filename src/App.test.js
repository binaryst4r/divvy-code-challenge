import { render, screen } from '@testing-library/react';
import PullRequestListItem from './components/pull-requests/pr-list-item'
import Header from './components/pull-requests/header'
import {themes} from './styles/themes'
import App from './App'
const prStub = {
  title: 'Test Pr Title',
  created_at: Date.now(),
  html_url: 'www.github.com/binaryst4r',
  labels: [
    {
      color: '0e4c73',
      name: 'animals',
      url: 'www.github.com/binaryst4r'
    },
    {
      color: 'a2eeef',
      name: 'enhancement',
      url: 'www.github.com/binaryst4r'
    }

  ]
}

it('renders the app without crashing', () => {
  const div = document.createElement('div');
  render(<App />, div);
});


test('renders the correct header', () => {
  render(
    <Header />
  );
  const prTitle = screen.getByText('Wow, look at these pull requests.');
  expect(prTitle).toBeInTheDocument();
});

test('renders a pull request list item correctly', () => {
  render(
    <PullRequestListItem pr={prStub} theme={themes[0]} />
  );
  const prTitle = screen.getByText(prStub.title);
  expect(prTitle).toBeInTheDocument();

  const prLabels = screen.getAllByRole('label')
  expect(prLabels).toHaveLength(2)
});

test('doesnt render a filtered pull request', () => {
  const {container} = render(
    <PullRequestListItem filter="foo" pr={prStub} theme={themes[0]} />
  );
  expect(container.firstChild).toBeNull()
});
