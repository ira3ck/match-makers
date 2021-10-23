import React, { Fragment } from 'react'
import { AppBar, Container, Toolbar, Typography } from '@material-ui/core';
import PrimarySearchAppBar from '../components/primaryNavbar'
import Posteo from '../components/posteo'

const index = () => {
    return (
        <Fragment>
            <PrimarySearchAppBar />
                <Container style={{width: '68rem',backgroundColor: '#4b3773', margin: '1rem'}}>
                    <Container style={{width: '62rem',backgroundColor: '#4b3773', margin: '1rem'}}>
                        <Posteo></Posteo>
                    </Container>
                    <Container style={{width: '62rem',backgroundColor: '#4b3773', margin: '1rem'}}>
                        <Posteo></Posteo>
                    </Container>
                    <Container style={{width: '62rem',backgroundColor: '#4b3773', margin: '1rem'}}>
                        <Posteo></Posteo>
                    </Container>
                </Container>
            </Fragment>

    )
}

export default index;
