import React from 'react';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { styled } from '@mui/material/styles';
import { Box, Button, Container, Grid, Link, TextField, Typography, Card, Stack } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Facebook as FacebookIcon } from '../../../icons/facebook';
import { Google as GoogleIcon } from '../../../icons/google';
import Page from '../../../components/Page';
import AuthLayout from '../../../layouts/AuthLayout';
import { LoginForm } from '../../../sections/authentication/login';
import AuthSocial from '../../../sections/authentication/AuthSocial';

const RootStyle = styled(Page)(({ theme }) => ({
    [theme.breakpoints.up('md')]: {
        display: 'flex'
    }
}));

const SectionStyle = styled(Card)(({ theme }) => ({
    width: '100%',
    maxWidth: 464,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    margin: theme.spacing(2, 0, 2, 2)
}));

const ContentStyle = styled('div')(({ theme }) => ({
    maxWidth: 480,
    margin: 'auto',
    display: 'flex',
    minHeight: '100vh',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: theme.spacing(12, 0)
}));


export default function LoginPage() {
    const router = useRouter();
    const formik = useFormik({
        initialValues: {
            email: 'demo@devias.io',
            password: 'Password123'
        },
        validationSchema: Yup.object({
            email: Yup
                .string()
                .email(
                    'Must be a valid email')
                .max(255)
                .required(
                    'Email is required'),
            password: Yup
                .string()
                .max(255)
                .required(
                    'Password is required')
        }),
        onSubmit: () => {
            router.push('/');
        }
    });

    return (
        <RootStyle title="Login">
            <AuthLayout>
                Don’t have an account? &nbsp;
                <Link underline="none" variant="subtitle2" to="/register">
                    Get started
                </Link>
            </AuthLayout>

            <SectionStyle sx={{ display: { xs: 'none', md: 'flex' } }}>
                <Typography variant="h3" sx={{ px: 5, mt: 10, mb: 5 }}>
                    Hi, Welcome Back
                </Typography>
                <img src="/static/illustrations/illustration_login.png" alt="login" />
            </SectionStyle>
            <Box
                component="main"
                sx={{
                    alignItems: 'center',
                    display: 'flex',
                    flexGrow: 1,
                    minHeight: '100%'
                }}
            >
                <Container maxWidth="sm">
                    <NextLink
                        href="/"
                        passHref
                    >
                        <Button
                            component="a"
                            startIcon={<ArrowBackIcon fontSize="small" />}
                        >
                            Dashboard
                        </Button>
                    </NextLink>


                    {/* <form onSubmit={formik.handleSubmit}> */}
                    <ContentStyle>
                        <Box sx={{ my: 3 }}>
                            <Typography
                                color="textPrimary"
                                variant="h4"
                            >
                                Sign in
                            </Typography>
                            <Typography
                                color="textSecondary"
                                gutterBottom
                                variant="body2"
                            >
                                Sign in on the internal platform
                            </Typography>
                        </Box>
                        <AuthSocial />

                        <LoginForm />
                    </ContentStyle>
                    {/* </form> */}
                </Container>
            </Box>
        </RootStyle>
    )
}