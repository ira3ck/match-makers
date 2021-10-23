import React, { Fragment } from 'react'
import Welcome from '../components/Welcome'

const profile = () => {
    return (
        <Fragment>
            <div>
                Ahora te encuentras en el perfil
            </div>
            <Welcome></Welcome>
        </Fragment>
    )
}

export default profile;
