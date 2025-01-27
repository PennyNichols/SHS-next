import React from 'react';
import { Box, Container, Typography, Link } from '@mui/material';
import { Facebook, Google, Instagram } from '@mui/icons-material';
import SubscribeForm from '../SubscribeForm';
import EstimateRequestButton from '../ActionButtons/EstimateRequestButton';
import Image from 'next/image';
import { EMAIL_ADDRESS, PHONE_NUMBER } from '../../constants/constants';
import { formatPhoneNumber } from '../../functions/utils/utils';
import useStyles from './Footer.styles';
import ShareButton from '../ActionButtons/ShareButton';

const Footer = () => {
    const classes = useStyles();
    return (
        <Box component="footer" className={classes.footerOuterContainer}>
            <Container maxWidth="lg">
                <Box component="section" className={classes.topContainer} >
                    <SubscribeForm />
                    <EstimateRequestButton />
                </Box>
                <Box component="section" className={classes.middleContainer}>
                    <Box className={classes.logoContainer}>
                        <Image src='/images/shs-icon.png' alt="SHS Icon" width={80} height={80} className={classes.logo} />
                        <Box ml={1}>
                            <Typography variant="body2" color="inherit">
                                Serving SW Florida
                            </Typography>
                            <Typography variant="body2" color="inherit">
                                Operating Hours: <br /> M-F 8 AM - 5 PM
                            </Typography>
                        </Box>
                    </Box>


                    <Box className={classes.middleContentContainer}>
                        <Typography variant="h6" color="inherit">
                            Contact Information
                        </Typography>
                        <Typography variant="body2" color="inherit">
                            Phone: {formatPhoneNumber(PHONE_NUMBER)}
                        </Typography>
                        <Typography variant="body2" color="inherit">
                            Email: {EMAIL_ADDRESS}
                        </Typography>
                    </Box>
                    <Box className={classes.middleContentContainer}>
                        <Typography variant="h6" color="inherit">
                            Quick Links
                        </Typography>
                        <Link href="/privacy-policy" color="inherit">
                            Privacy Policy
                        </Link>
                        <br />
                        <Link href="/terms-of-service" color="inherit">
                            Terms of Service
                        </Link>
                    </Box>

                </Box>
                <Box component="section" className={classes.bottomContainer} >

                    <Box className={classes.socialContainer} >
                        <Link href="https://facebook.com" color="inherit" aria-label="Facebook">
                            <Facebook />
                        </Link>
                        <Link href="https://instagram.com" color="inherit" aria-label="Instagram">
                            <Instagram />
                        </Link>
                        <Link href="https://google.com" color="inherit" aria-label="Google">
                            <Google />
                        </Link>
                    </Box>
                    <Typography variant="body2" color="inherit">
                        &copy; 2025 SHS. All rights reserved.
                    </Typography>
                </Box>
            </Container>
        </Box>
    );
};

export default Footer;
