import React, { Component } from "react"
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/ImageSlideView.css'

export default class ImageSlideView extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Carousel className="image-slide-container">
                {this.props.images.map(image => {
                    return <Carousel.Item className="image-slide-item" key={image.id}>
                        <img
                            className="d-block w-100"
                            src={image.picture_link}
                        />
                        <Carousel.Caption>
                            <p>{image.picture_description}</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                })}
            </Carousel>
        )
    }
}