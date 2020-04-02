import CssBaseline from '@material-ui/core/CssBaseline'
import Divider from '@material-ui/core/Divider'
import Drawer from '@material-ui/core/Drawer'
import IconButton from '@material-ui/core/IconButton'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import { createStyles, makeStyles, Theme, useTheme } from '@material-ui/core/styles'
import AccountBoxIcon from '@material-ui/icons/AccountBox'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import FileCopyIcon from '@material-ui/icons/FileCopy'
import HomeIcon from '@material-ui/icons/Home'
import clsx from 'clsx'
import React from 'react'
import { withRouter } from 'react-router-dom'


export type SidebarProps = {
    open: boolean,
    setOpen: (boolean: boolean) => void,
    history: any
}

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
        },
        appBar: {
            zIndex: theme.zIndex.drawer + 1,
            transition: theme.transitions.create(['width', 'margin'], {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen,
            }),
        },
        appBarShift: {
            marginLeft: drawerWidth,
            width: `calc(100% - ${drawerWidth}px)`,
            transition: theme.transitions.create(['width', 'margin'], {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen,
            }),
        },
        menuButton: {
            marginRight: 36,
        },
        hide: {
            display: 'none',
        },
        drawer: {
            width: drawerWidth,
            flexShrink: 0,
            whiteSpace: 'nowrap',
        },
        drawerOpen: {
            width: drawerWidth,
            transition: theme.transitions.create('width', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen,
            }),
        },
        drawerClose: {
            transition: theme.transitions.create('width', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen,
            }),
            overflowX: 'hidden',
            width: '60px !important',
            [theme.breakpoints.up('sm')]: {
                width: theme.spacing(9) + 1,
            },
        },
        toolbar: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
            padding: theme.spacing(0, 1),
            ...theme.mixins.toolbar,
        },
        content: {
            flexGrow: 1,
            padding: theme.spacing(3),
        },
        paper: {
            background: theme.palette.primary.main,
            color: theme.palette.secondary.main
        },
        iconButton: {
            color: theme.palette.secondary.main,
            fontSize: "24px",
        }
    })
);

const Sidebar: React.FC<any> = ({ open, setOpen, user, setUser, history }) => {

    const classes = useStyles();
    // eslint-disable-next-line
    const theme = useTheme();

    const handleDrawerClose = () => {
        setOpen(!open);
    };

    const route = (routeName: string) => {
        history.push(routeName);
    }

    return (
        <div className={classes.root} >
            <CssBaseline>
                <Drawer
                    variant='permanent'
                    className={clsx(classes.drawer, {
                        [classes.drawerOpen]: open,
                        [classes.drawerClose]: !open,
                    })}
                    classes={{
                        paper: clsx(classes.paper, {
                            [classes.drawerOpen]: open,
                            [classes.drawerClose]: !open,
                        }),
                    }}
                >
                    <div className={classes.toolbar}>
                        <IconButton onClick={handleDrawerClose} >
                            {open ? <ChevronLeftIcon className={classes.iconButton}/> : <ChevronRightIcon className={classes.iconButton}/>}
                        </IconButton>
                    </div>
                    <Divider />
                    <List >
                        {[{ label: 'Dashboard', component: <HomeIcon className={classes.iconButton}/>, route: '/dashboard' }, { label: 'Account', component: <AccountBoxIcon className={classes.iconButton}/>, route: '/account' }, { label: 'Profile', component: <FileCopyIcon className={classes.iconButton}/>, route: '/profile' }].map((listItem, index) => (
                            <ListItem button key={index} >
                                <ListItemIcon onClick={() => { route(listItem.route) } }>{listItem.component}</ListItemIcon>
                                <ListItemText primary={listItem.label} color="inherit" />
                            </ListItem>
                        ))}
                    </List>
                </Drawer>
            </CssBaseline>
        </div>
    )
}

export default withRouter(Sidebar);