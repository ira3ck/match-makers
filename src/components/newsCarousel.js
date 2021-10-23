import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@material-ui/core'

const newsCarousel = (props) => {
    var items = [
        {
            name: "Random Name #1",
            description: "Probably the most random thing you have ever seen!",
            image: "./public/img/654978.jpg"
        },
        {
            name: "Random Name #2",
            description: "Hello World!",
            image: "./public/img/AnYp3Wd-studio-ghibli-wallpaper.jpg"
        }
    ]

    return (
        <Carousel>
            {
                items.map((item, i) => <Item key={i} item={item} />)
            }
        </Carousel>
    )
}

function Item(props) {
    return (
        <Paper>
            <h2>{props.item.name}</h2>
            <p>{props.item.description}</p>

            <Button className="CheckButton">
                Check it out!
            </Button>
        </Paper>
    )
}

export default newsCarousel;