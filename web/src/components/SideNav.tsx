import { Avatar, Box, Typography } from "@mui/material"
import { Menu, MenuItem, Sidebar, useProSidebar } from "react-pro-sidebar"
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined'
import StyleOutlinedIcon from '@mui/icons-material/StyleOutlined'
import SourceOutlinedIcon from '@mui/icons-material/SourceOutlined'
import AnalyticsOutlinedIcon from '@mui/icons-material/AnalyticsOutlined'
import { Link } from "react-router-dom"

const SideNav = () => {
    
    const { collapsed} = useProSidebar()

    return (
        <Sidebar
            style={{ height: "100%", top: 'auto' }}
            breakPoint="md"
            backgroundColor={'white'}
        >
          
            <Box sx={styles.avatarContainer} >
            <Avatar sx={collapsed ?styles.avatarHidden :styles.avatar} alt="Masoud" src="/assets/profile.jpg" />
            {!collapsed && 
                <Typography variant="body2">Administrator</Typography>
            }
            </Box>

            <Menu
                menuItemStyles={{

                }}>
                <MenuItem component={<Link to="/backend/dashboard" />} icon={<DashboardOutlinedIcon />}> <Typography variant="body2">Dashboard</Typography> </MenuItem>
                <MenuItem component={<Link to="/backend/product" />} icon={<SourceOutlinedIcon />}> <Typography variant="body2">Product </Typography></MenuItem>
                <MenuItem component={<Link to="/backend/report" />} icon={<AnalyticsOutlinedIcon />}> <Typography variant="body2">Report </Typography></MenuItem>
                <MenuItem component={<Link to="/backend/setting" />} icon={<StyleOutlinedIcon />}> <Typography variant="body2">Setting </Typography></MenuItem >
            </Menu >
        </Sidebar >
    )
}

const styles = {
    avatarContainer: {
        display: "flex",
        alignItems: "center",
        flexDirection: 'column',
        my: 5
    },
    avatar: {
        width: '90px',
        height: '90px'
    },
    avatarHidden: {
        width: '40px',
        height: '40px'
    },
    yourChannel: {
        mt: 1
    }
}

export default SideNav