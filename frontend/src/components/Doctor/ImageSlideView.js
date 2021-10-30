import React, { Component } from "react"
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/ImageSlideView.css'

export default class ImageSlideView extends Component {
    render() {
        return (
            <Carousel className="image-slide-container">
                <Carousel.Item className="image-slide-item">
                    <img 
                        className="d-block w-100"
                        src="https://images.pexels.com/photos/9849841/pexels-photo-9849841.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className="image-slide-item">
                    <img
                        className="d-block w-100"
                        src="https://images.pexels.com/photos/9849841/pexels-photo-9849841.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className="image-slide-item">
                    <img
                        className="d-block w-100"
                        src="https://images.pexels.com/photos/9849841/pexels-photo-9849841.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        )
    }
}