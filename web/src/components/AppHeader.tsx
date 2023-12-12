import { AppBar, Box, IconButton, Toolbar } from "@mui/material"
import MenuIcon from '@mui/icons-material/Menu'
import SettingsIcon from '@mui/icons-material/Settings'
import LogoutIcon from '@mui/icons-material/Logout'
import { useProSidebar } from "react-pro-sidebar"

const AppHeader = () => {

    // useProSidebar hook
  const { collapseSidebar, toggleSidebar, broken } = useProSidebar()

  return (
    <AppBar position="sticky" sx={styles.appBar}>
        <Toolbar>
            <IconButton onClick={()=>broken ?toggleSidebar() :collapseSidebar()}>
                <MenuIcon />
            </IconButton>
            <Box
                component={'img'}
                sx={styles.appLogo}
                src="/assets/logo.png" />
            <Box sx={{ flexGrow: 1 }} />
            <IconButton title="Settings" >
                <SettingsIcon />
            </IconButton>
            <IconButton title="Sign Out" >
                <LogoutIcon />
            </IconButton>
        </Toolbar>
    </AppBar>
  )
}

const styles = {
    appBar: {
        // bgcolor: 'neutral.main'
        bgcolor: '#fff'
    },
    appLogo: {
        borderRadius: 2,
        width: 100,
        marginLeft: 2,
        cursor: 'pointer'
    },
}

export default AppHeader