
import React, { useEffect } from 'react'
import { RouteComponentProps, withRouter } from 'react-router-dom'
import Body from './components/Body'
import Header from './shared/Header'


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
    <div>
      <Header user={user} setUser={setUser} open={open} setOpen={setOpen}></Header>
      <Body user={user} setUser={setUser} open={open} setOpen={setOpen} />
    </div>
  )
}

export default withRouter(App);
