import React, { useEffect } from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import Body from './components/Body';

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
    <Body user={user} setUser={setUser} open={open} setOpen={setOpen} />
  )
}

export default withRouter(App);
