/* eslint-disable no-unused-expressions */
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import { withRouter, RouteComponentProps} from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
   

}));

const EditProfile: React.FC<RouteComponentProps> =  ({ history })  =>  {
    const styles = useStyles(); 

    return (
        <React.Fragment>
        <CssBaseline />
        <Container maxWidth="sm">
            <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '100vh' }} />
        </Container>
        </React.Fragment>
    );
    
}

export default withRouter(EditProfile);






