import { createMuiTheme, ThemeProvider } from '@material-ui/core'
import { blue, grey } from '@material-ui/core/colors'
import React, { useEffect } from 'react'
import { RouteComponentProps, withRouter } from 'react-router-dom'
import Body from './components/Body'
import Header from './shared/Header'
import axios from 'axios'


axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
axios.defaults.headers.common['Content-Type'] = `application/json`;
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
      main: '#fff',
    },
    background: {
      default: blue[50],
      paper: blue[100],
    }
  },
});


const App: React.FC<RouteComponentProps> = ({ history }) => {
   
  const [open, setOpen] = React.useState(false);
  const [userInfo, setUserInfo] = React.useState({ 
    userToken: '', userEmailId: ''
  });

  useEffect(() => {
    const userToken = localStorage.getItem("userToken") || '';
    const userEmailID = localStorage.getItem("userEmailID") || '';
    if(userToken == null) 
      history.push("/login");
    else {

      setUserInfo({userToken: userToken, userEmailId: userEmailID});
      history.push("/");
    }
  }, [history])

  useEffect(() => {
    const userId = localStorage.getItem("userEmailId");
    const userToken = localStorage.getItem("userToken");
    const userData= {
      emailId : userId
    } 
    if(userId !== null && userInfo.userToken!=='') {
      axios.post('http://localhost:5000/v1/fetch/user-data', userData, {headers: {"Authorization" : `Bearer ${userToken}`}}).then((response) => {
       console.log(response.data)
      }).catch((error) => {
      })
    }  
  }, [userInfo]);

  return (
  
    <ThemeProvider theme={light}> 
     
        <Header userInfo={userInfo} setUserInfo={setUserInfo} open={open} setOpen={setOpen}></Header>
        <Body userInfo={userInfo} setUserInfo={setUserInfo} open={open} setOpen={setOpen} />
    </ThemeProvider>
  )
}

export default withRouter(App);
