export const themes = () => {
  const lightTheme = {
    name: 'light',
    background: '#fff',
    title: '#000',
    body: '#6d6d6d',
    link: '#58a6ff',
    borderColor: '#ddd'
  }

  const darkTheme = {
    name: 'dark',
    background: '#000',
    title: '#f6f6f6',
    body: '#6d6d6d',
    link: '',
  }

  return [lightTheme, darkTheme]
}
