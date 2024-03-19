import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { IconButton, Menu, MenuItem } from "@mui/material";
import PersonIcon from '@mui/icons-material/Person';
import "./Navbar.css"

const Navbar = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const openMenu = Boolean(anchorEl);
    
    const navigate=useNavigate()
    const navigateToProfile=()=>{
        navigate("/my-profile")
    }
    const handleOpenMenu=(event)=>{
        setAnchorEl(event.currentTarget);
    }
    const handleCloseMenu=()=>{
        setAnchorEl(null);
    }
    const handleLogout=()=>{
        console.log("handle logout")
    }
    return (
        <nav className="px-5 z-50 py-[.8rem] bg-[#e91e63] lg:px-20 flex justify-between">
            <div className="flex items-center space-x-4">
                <div  className='lg:mr-10 cursor-pointer flex items-center space-x-4'onClick={()=>navigate("/")}>
                    <li className="logo font-semibold text-gray-300 text-2xl">Delish Delivery</li>
                </div>
            </div>
            <div className="flex items-center space-x-2">
                <IconButton>
                    <SearchIcon sx={{fontSize:"1.5rem"}}/>
                </IconButton>
                {true?<span
                id="basic-button"
                aria-controls={openMenu ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={openMenu  ? 'true' : undefined}
                 onClick={true?handleOpenMenu:navigateToProfile} className="font-semibold cursor-pointer">
                    Roy
                </span>: <IconButton>
                    <PersonIcon sx={{fontSize:"1.5rem"}}/>
                </IconButton>}
                <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={openMenu}
                    onClose={handleCloseMenu}
                    MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
                >
                    <MenuItem onClick={()=>navigate("/admin")}>Profile</MenuItem>
                    <MenuItem onClick={handleLogout}>Logout</MenuItem>
                </Menu>
                
                <IconButton onClick={()=>navigate("/cart")}>
                    <ShoppingCartIcon sx={{fontSize:"1.5rem"}}/>
                </IconButton>
            </div>
        </nav>
    )
}

export default Navbar
