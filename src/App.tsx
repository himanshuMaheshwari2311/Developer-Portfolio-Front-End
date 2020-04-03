import { createMuiTheme, ThemeProvider } from '@material-ui/core'
import { blue, grey } from '@material-ui/core/colors'
import React, { useEffect } from 'react'
import { RouteComponentProps, withRouter } from 'react-router-dom'
import Body from './components/Body'
import Header from './shared/Header'

// eslint-disable-next-line
const dark = createMuiTheme({
  palette: {
    primary: {
      main: grey[800],
    },
    secondary: {
      main: grey[50],
    },
    background: {
      default: grey[700],
      paper: grey[500],
    },
  },
});

// eslint-disable-next-line
const light = createMuiTheme({
  palette: {
    primary: {
      main: blue[600],
    },
    secondary: {
      main: blue[50],
    },
    background: {
      default: blue[50],
      paper: blue[100],
    }
  },
});


const App: React.FC<RouteComponentProps> = ({ history }) => {

  const [open, setOpen] = React.useState(false);
  const [user, setUser] = React.useState('');

  useEffect(() => {
    const userId = localStorage.getItem("userId");
    if (userId == null) {
      history.push("/login");
    }
    else {
      setUser(userId);
      history.push("/");
    }
  }, [history])

 

  return (
    <ThemeProvider theme={light}>
        <Header user={user} setUser={setUser} open={open} setOpen={setOpen}></Header>
        <Body user={user} setUser={setUser} open={open} setOpen={setOpen} />
    </ThemeProvider>
  )
}

export default withRouter(App);
