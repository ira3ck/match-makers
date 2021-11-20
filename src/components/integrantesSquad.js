import { Typography } from '@material-ui/core';
import React from 'react'
import Avatar from '@material-ui/core/Avatar';

const integrantesSquad = (x) => {
    return (
        <div>       
            <Typography style={{fontSize: 40}}>
                Integrantes
            </Typography>
            <div style = {{backgroundColor: "#5b5763", padding: 10, width: '15rem'}}>
                <div style = {{display: 'inline-flex'}}>
                    <Avatar alt="Remy Sharp" src="https://pbs.twimg.com/media/EiNYM5CWAAAh9PV?format=png&name=240x240" />
                    <Typography style={{fontSize: 20, marginLeft: 7}}>
                    polluelo
                    </Typography>
                </div>
            </div>
            <div style = {{backgroundColor: "#5b5763", padding: 10, width: '15rem'}}>
                <div style = {{display: 'inline-flex'}}>
                    <Avatar alt="Remy Sharp" src="https://pbs.twimg.com/media/EiNYM5CWAAAh9PV?format=png&name=240x240" />
                    <Typography style={{fontSize: 20, marginLeft: 7}}>
                    gallo
                    </Typography>
                </div>
            </div>
            <div style = {{backgroundColor: "#5b5763", padding: 10, width: '15rem'}}>
                <div style = {{display: 'inline-flex'}}>
                    <Avatar alt="Remy Sharp" src="https://pbs.twimg.com/media/EiNYM5CWAAAh9PV?format=png&name=240x240" />
                    <Typography style={{fontSize: 20, marginLeft: 7}}>
                    paloma
                    </Typography>
                </div>
            </div>
        </div>
            
    )
}

export default integrantesSquad;