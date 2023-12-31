

import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Route, Routes, useNavigate } from "react-router-dom";
import MessageIcon from "@mui/icons-material/Message";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Trash from "./Dashboardscreens/Trash";
import Inbox from "./Dashboardscreens/Inbox";
import Email from "./Dashboardscreens/Email";
import Message from "./Dashboardscreens/Message";
import Notification from "./Dashboardscreens/Notification";
import EmailIcon from '@mui/icons-material/Email';
import DeleteIcon from '@mui/icons-material/Delete';
// import InboxIcon from '@mui/icons-material/Inbox';


const drawerWidth = 240;
function FigmaDashboard(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const [pagesArr, setPagesArr] = React.useState([
        {
            name: "Message",
            route: "message",
            icon: <MessageIcon />,
        },
        {
            name: "Notification",
            route: "notification",
            icon: <NotificationsIcon />,
        },
        {
            name: "Inbox",
            route: "Inbox",
            icon: <InboxIcon />,
        },
        {
            name: "Trash",
            route: "Trash",
            icon: <DeleteIcon />,
        },
        {
            name: "Email",
            route: "Email",
            icon: <EmailIcon />,
        },
    ]);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };
    const navigate = useNavigate();

    const openPage = (route) => {
        navigate(`/figmadashboard/${route}`);
    };

    const drawer = (
        <div>
            <Toolbar />
            <Divider />
            <List>
                {pagesArr.map((x, index) => (
                    <ListItem key={index} disablePadding>
                        <ListItemButton onClick={() => openPage(x.route)}>
                            <ListItemIcon>{x.icon ? x.icon : <MailIcon />}</ListItemIcon>
                            <ListItemText primary={x.name} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </div>
    );

    const container =
        window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: "flex" }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: "none" } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        Responsive drawer
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: "block", sm: "none" },
                        "& .MuiDrawer-paper": {
                            boxSizing: "border-box",
                            width: drawerWidth,
                        },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: "none", sm: "block" },
                        "& .MuiDrawer-paper": {
                            boxSizing: "border-box",
                            width: drawerWidth,
                        },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{
                    flexGrow: 1,
                    p: 3,
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                }}
            >
                <Toolbar />
                <Routes>
                    <Route path="Message" element={<Message />} />
                    <Route path="Notification" element={<Notification />} />
                    <Route path="Trash" element={<Trash />} />
                    <Route path="Inbox" element={<Inbox />} />
                    <Route path="Email" element={<Email />} />
                </Routes>
            </Box>
        </Box>
    );
}

FigmaDashboard.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default FigmaDashboard;
