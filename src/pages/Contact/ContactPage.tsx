import { Alert, AlertColor, Box, Grid, Snackbar, Typography } from '@mui/material'
import React, { ChangeEvent, FC, useState } from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import { ButtonStyled, ContactField, TextFieldStyled } from './styles';
import { FadeIn } from '../../HOC/FadeIn';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../../../firebase.config';

interface ContactInfo {
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber?: string;
    message: string;
}

interface Notification {
    on: boolean;
    type: AlertColor | undefined;
    message: string;
}

export const ContactPage: FC = () => {
    const [contactInfo, setContactInfo] = useState<ContactInfo>({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        message: ''
    });
    const [notification, setNotification] = useState<Notification>({
        on: false,
        type: undefined,
        message: ''
    })
    
    const handleOnChange = (field: string, value: string) => {
        setContactInfo({
            ...contactInfo,
            [field]: value
        })
    }
    const handleSubmit = async () => {
        if(contactInfo.firstName === '' || 
            contactInfo.lastName === '' ||
            contactInfo.email === '' ||
            contactInfo.message === '') {
            setNotification({
                on: true,
                type: 'error',
                message: 'Please fill out all required fields'
            })
            return;
        }
        try {
            const contactCollection = collection(db, 'contact');
            await addDoc(contactCollection, contactInfo);
            setNotification({
                on: true,
                type: 'success',
                message: 'Thanks for sending message'
            })
        } catch(error) {
            console.log(error);
        }
    }
  return (
    <FadeIn>
        <Box sx={{width: '100%'}} display="flex" flexDirection="column" gap={2} justifyContent="center">
        <Snackbar 
            open={notification.on} 
            autoHideDuration={6000} 
            onClose={() => setNotification({...notification, on: false})}
        >
            <Alert 
                onClose={() => setNotification({...notification, on: false})} 
                severity={notification.type} 
                sx={{ width: '100%' }}
            >
              {notification.message}
            </Alert>
        </Snackbar>
            <Typography textAlign="center" variant="h4" fontWeight="bold">Contact</Typography>
            <Grid container my={4}>
                <ContactField item xs={12} md={4} textAlign="center">
                    <Typography variant="h6" fontWeight="light">Phone Number</Typography>
                    <Typography variant="h5" fontWeight="bold" mt={1}>+1 (431) 289 - 0132</Typography>
                </ContactField>
                <ContactField item xs={12} md={4} textAlign="center">
                    <Typography variant="h6" fontWeight="light">Email</Typography>
                    <Typography variant="h5" fontWeight="bold" mt={1}>maithienphuc0102@gmail.com</Typography>
                </ContactField>
                <ContactField item xs={12} md={4} textAlign="center">
                    <Typography variant="h6">Social Media</Typography>
                    <Box display="flex" alignItems="center" gap={2} justifyContent="center" mt={1}>
                        <GitHubIcon />
                        <LinkedInIcon />
                        <FacebookIcon />
                        <InstagramIcon />
                    </Box>
                </ContactField>
            </Grid>
            <Typography textAlign="center" variant="h4" fontWeight="bold" mb={4}>Reach Out</Typography>
            <Grid container rowGap={4} columnSpacing={4} px={8}>
                <Grid item xs={12} md={6}>
                    <TextFieldStyled 
                        required
                        label="First Name"
                        placeholder="Enter your first name..."
                        fullWidth
                        onChange={(e: ChangeEvent<HTMLInputElement>) => {
                            handleOnChange('firstName', e.target.value)
                        }}
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextFieldStyled 
                        required
                        label="Last Name"
                        placeholder="Enter your last name..."
                        fullWidth
                        onChange={(e: ChangeEvent<HTMLInputElement>) => {
                            handleOnChange('lastName', e.target.value)
                        }}
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextFieldStyled 
                        required
                        label="Email"
                        placeholder="Enter your email..."
                        fullWidth
                        type="email"
                        onChange={(e: ChangeEvent<HTMLInputElement>) => {
                            handleOnChange('email', e.target.value)
                        }}
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextFieldStyled 
                        label="Phone Number"
                        placeholder="Enter your phone number..."
                        fullWidth
                        onChange={(e: ChangeEvent<HTMLInputElement>) => {
                            handleOnChange('phoneNumber', e.target.value)
                        }}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextFieldStyled
                        multiline
                        rows={4} 
                        required
                        label="Message"
                        placeholder="Write your message here..."
                        fullWidth
                        onChange={(e: ChangeEvent<HTMLInputElement>) => {
                            handleOnChange('message', e.target.value)
                        }}
                    />
                </Grid>  
                <Grid item textAlign="center" xs={12}>
                    <ButtonStyled
                        variant="contained"
                        onClick={handleSubmit}
                        fullWidth
                    >
                        Submit
                    </ButtonStyled>
                </Grid>
            </Grid>
        </Box>
    </FadeIn>
  )
}
