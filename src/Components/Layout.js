import React from 'react';
import { makeStyles} from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import { BuildOutlined, Category, ContactSupport, ExitToApp, Home, Person, QuestionAnswer} from '@material-ui/icons';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import { useHistory, useLocation } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';

// menu items 
const menuItems = [
    {
        text: 'Home',
        icon: <Home color="primary" />,
        path: '/'
    },
    {
        text: 'Register Account',
        icon: <PersonAddIcon color="primary" />,
        path: '/AddProfile'
    },
    {
        text: 'My Profile',
        icon: <Person color="primary" />,
        path: '/Profile'
    },
    {
        text: 'Categories',
        icon: <Category color="primary" />,
        path: '/Categories'
    },
    {
        text: 'Enquiry',
        icon: <QuestionAnswer 
        color="default"
        fontSize="small" />,
        path: '/Enquiry'
    },
    {
        text: 'Contact Us',
        icon: <ContactSupport 
        color="default" 
        fontSize="small"/>,
        path: '/Contact'
    },
    {
        text: 'Logout',
        icon: <ExitToApp 
        color="default"
        fontSize="small" />,
        path: ''
    },
]

// custom css 
const drawerWidth = 240;
const useStyles = makeStyles((theme) => {
   return { 
    page: {
        background: '#f9f9f9',
        width: '100%'
    },
    drawer: {
        width: drawerWidth,
        
    },
    drawerPaper: {
        width: drawerWidth,
    },
    base: {
        display: 'flex',
    },
    active: {
        background: '#f4f4f4'
    },
    headBar: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
    },
    toolbar: theme.mixins.toolbar,
    title: {
        flexGrow: 1
    },
    employer: {
        marginLeft: 10,
        background: '#b53d9e'
    }
}
})

// main menu layout 
function Layout({ children }){
    // used for custom css
    const classes = useStyles();
    // used fo navigation between pages
    const history = useHistory();
    // used to highlight current page selected on side bar
    const location = useLocation();

    return (
      // renders top menu bar 
        <div className={classes.base}>
             <AppBar 
             className={classes.headBar}
             elevation={0}>
                 <Toolbar>
                     {/* workforce header */}
                     <Typography 
                     className={classes.title}
                     variant="h5">
                     <BuildOutlined 
                     fontSize="small"/>
                          Workforce 
                     </Typography>
                     {/* Login button */}
                         <Button 
                         variant="contained"
                         color="default"
                         size="large"
                         onClick={()=> { alert('clicky click')}}>
                             Login
                         </Button>
                         <Button 
                         className={classes.employer}
                         variant="contained"
                         color="secondary"
                         size="large"
                         onClick={()=> { alert('clicky click')}}>
                             For Employers
                         </Button>
                 </Toolbar>
             </AppBar>

            <Drawer
            className={classes.drawer}
            variant="permanent"
            acnhor="left"
            classes={{ paper: classes.drawerPaper }}>
                 {/* renders dynamic menu items  */}
                <List>
                    {menuItems.map(item => (
                        <ListItem
                        button
                        key={item.text}
                        onClick={() => history.push(item.path)}
                        className={location.pathname == item.path ?classes.active : null}>
                            <ListItemIcon>{item.icon}</ListItemIcon>
                            <ListItemText primary={item.text} />
                        </ListItem>
                    ))}
                </List>
            </Drawer>
            {/* keeps menu items permanently visible */}
            <div className={classes.page}>
                <div className={classes.toolbar}>

                </div>
            {children}
            </div>
            
        </div>
    );
}

export default Layout;