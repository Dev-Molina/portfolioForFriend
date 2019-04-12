import React from 'react';
import './Portfolio.css'
import { Card } from 'react-bootstrap';
import faceRecognition from '../../assets/screenshot.png';
import GitHubButton from 'react-github-btn';

const Portfolio = () => {
        return (
            <div className='portfolio'>
                <Card style={{ width: '30em' }}>
                    <Card.Img variant="top" src={faceRecognition} />
                    <Card.Body>
                        <Card.Title>Face Recognition</Card.Title>
                        <Card.Text>
                            Detects a face from a picture! Full stack project using PERN and deployed to Heroku!
                        </Card.Text>
                        <GitHubButton href='https://github.com/rubayth/faceRecognition' data-size="large" aria-label="Follow @ntkme on GitHub">View code on GitHub</GitHubButton>
                        <br/>
                        <Card.Link href='https://face-detect-project.herokuapp.com/'>
                            Vist Website
                        </Card.Link>
                    </Card.Body>
                </Card>
            </div>
            )
        }       
export default Portfolio;