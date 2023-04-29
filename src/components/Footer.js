import React from 'react';
import './Footer.css';
import logo from '../assets/img/logo.png'
import {
    MDBFooter,
    MDBContainer,
    MDBIcon,
    MDBInput,
    MDBCol,
    MDBRow,
    MDBBtn
} from 'mdb-react-ui-kit';

export const Footer = () => {
    return (
        <div className='footer' id='footer'>
            <MDBFooter className='text-center' color='white' bgColor='dark'>
                <MDBContainer className='p-4'>
                    <section className='mb-4'>
                        <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
                            <MDBIcon fab icon='facebook-f' />
                        </MDBBtn>

                        <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
                            <MDBIcon fab icon='twitter' />
                        </MDBBtn>

                        <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
                            <MDBIcon fab icon='google' />
                        </MDBBtn>

                        <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
                            <MDBIcon fab icon='instagram' />
                        </MDBBtn>

                        <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
                            <MDBIcon fab icon='linkedin-in' />
                        </MDBBtn>

                        <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
                            <MDBIcon fab icon='github' />
                        </MDBBtn>
                    </section>

                    <section className=''>
                        <form action=''>
                            <MDBRow className='d-flex justify-content-center'>
                                <MDBCol size="auto">
                                    <p className='pt-2'>
                                        <strong>Sign up for our newsletter</strong>
                                    </p>
                                </MDBCol>

                                <MDBCol md='5' start>
                                    <MDBInput contrast type='email' className='mb-4' label='Email' />
                                </MDBCol>


                                <MDBCol size="auto">
                                    <MDBBtn outline color='light' type='submit' className='mb-4'>
                                        Subscribe
                                    </MDBBtn>
                                </MDBCol>
                            </MDBRow>
                        </form>
                    </section>
                    <hr />
                    <section className='mb-4'>
                        <p>
                            We are a non-profit organization dedicated to connecting volunteers,
                            non-profits and foodbanks to help end food insecurity.
                            Our platform makes it easy for anyone to get involved and make a
                            difference in their community. With our reward system, you can earn points
                            for your volunteer work and food donations, which can be used for tax
                            concessions. Join us today and help us make a positive impact on the world,
                            one meal at a time.
                        </p>
                    </section>
                    <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                        © 2023 Made with &#10084; &#65039; by<img src={logo} width={70} alt='logo'/>
                    </div>
                </MDBContainer>

            </MDBFooter>
        </div>
    );
}