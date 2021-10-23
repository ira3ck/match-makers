import React, { Fragment } from 'react'
import { Container } from '@material-ui/core';
import PrimarySearchAppBar from '../components/primaryNavbar';

const index = () => {
    return (
        <Fragment>
            <PrimarySearchAppBar />
            <Container>
            </Container>
        </Fragment>

    )
}

export default index;