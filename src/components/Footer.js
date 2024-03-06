import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/system';

// Styled component for the FooterWrapper
const FooterWrapper = styled('div')({
  width: '100%',
  height: '150px',
  backgroundColor: '#22356F',
  color: '#fff',
  display: 'flex',
  justifyContent: 'space-between',
  padding: '40px',
  marginTop: '30px',
  borderRadius: '1px', // Adjusts the radius
});

// Styles for links
const linkStyles = {
  cursor: 'pointer',
  '&:hover': {
    textDecoration: 'underline',
  },
};

// Styles for different content sections
const useStyles = {
  leftContent: {
    textAlign: 'left',
    alignItems: 'flex-start',
    fontFamily: 'Montserrat, sans-serif', 
    ...linkStyles,
  },
  centerContent: {
    textAlign: 'center',
    alignItems: 'center',
    marginLeft: '50px',
    fontFamily: 'Montserrat, sans-serif', 
    ...linkStyles,
  },
  rightContent: {
    textAlign: 'right',
    alignItems: 'flex-start',
    fontFamily: 'Montserrat, sans-serif', 
    ...linkStyles,
  },
  linkText: {
    fontSize: '12px',
    marginBottom: '5px',
  },
};

const Footer = () => {
  return (
    <FooterWrapper>
      {/* Left Content */}
      <div style={useStyles.leftContent}>
        <Typography variant="h6">Main Links</Typography>
        {/* Space for links */}
        <Typography variant="body2" sx={useStyles.linkText}>About Us</Typography>
        <Typography variant="body2" sx={useStyles.linkText}>Resources</Typography>
        <Typography variant="body2" sx={useStyles.linkText}>Login/SignUp</Typography>
      </div>

      {/* Center Content */}
      <div style={useStyles.centerContent}>
        <Typography variant="h6">Secondary Links</Typography>
        {/* Space for Links */}
        <Typography variant="body2" sx={useStyles.linkText}>Find a teacher</Typography>
        <Typography variant="body2" sx={useStyles.linkText}>Book an Appointment</Typography>
        <Typography variant="body2" sx={useStyles.linkText}>Appointment Status</Typography>
      </div>

      {/* Right Content */}
      <div style={useStyles.rightContent}>
        <Typography variant="h6">Created By CSI</Typography>
        {/* Spce for Links */}
      </div>
    </FooterWrapper>
  );
}

export default Footer;
