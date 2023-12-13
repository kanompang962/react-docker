import { Avatar, Box, Typography } from "@mui/material"
import { Menu, MenuItem, Sidebar, useProSidebar } from "react-pro-sidebar"
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined'
import StyleOutlinedIcon from '@mui/icons-material/StyleOutlined'
import SourceOutlinedIcon from '@mui/icons-material/SourceOutlined'
import AnalyticsOutlinedIcon from '@mui/icons-material/AnalyticsOutlined'
import { Link } from "react-router-dom"
import { DASHBOARD_PATH, PRODUCT_PATH, REPORT_PATH, SETTING_PATH } from "../config/constants"

const SideNav = () => {
    
    const { collapsed, toggleSidebar} = useProSidebar()

    const handleMenuClick = () => {
        toggleSidebar();
    }

    return (
        <Sidebar
            style={{ height: "100%", top: 'auto' }}
            breakPoint="md"
            backgroundColor={'white'}
        >
          
          <Box sx={styles.avatarContainer}>
                <Avatar sx={styles.avatar} alt="Masoud" src="/assets/profile.jpeg" />
                {!collapsed ? <Typography variant="body2" sx={styles.yourChannel}>Samit Koyom</Typography> : null }
                {!collapsed ? <Typography variant="body2">Administrator</Typography> : null }
            </Box>

            <Menu
                menuItemStyles={{
                   
                }}>
                <MenuItem active={true} onClick={()=>handleMenuClick()} component={<Link to={DASHBOARD_PATH} />} icon={<DashboardOutlinedIcon />}> <Typography variant="body2">Dashboard</Typography> </MenuItem>
                <MenuItem onClick={()=>handleMenuClick()} component={<Link to={PRODUCT_PATH} />} icon={<SourceOutlinedIcon />}> <Typography variant="body2">Product </Typography></MenuItem>
                <MenuItem onClick={()=>handleMenuClick()} component={<Link to={REPORT_PATH} />} icon={<AnalyticsOutlinedIcon />}> <Typography variant="body2">Report </Typography></MenuItem>
                <MenuItem onClick={()=>handleMenuClick()} component={<Link to={SETTING_PATH} />} icon={<StyleOutlinedIcon />}> <Typography variant="body2">Setting </Typography></MenuItem >
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
        width: '40%',
        height: 'auto'
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