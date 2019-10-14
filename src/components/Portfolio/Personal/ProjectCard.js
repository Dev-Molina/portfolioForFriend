import React from 'react';
import { Card, Button } from 'react-bootstrap';
import GitHubButton from 'react-github-btn';


const ProjectCard = ({ image , title, description, githubLink, websiteLink }) => {
        return (
            <div className='portfolio'>
                <Card 
                    style={{ 
                        width: '20em'
                        }} 
                    border='dark'>
                    <Card.Img style={{height:'160px', width:'auto'}} variant="top" src={image} />
                    <Card.Body>
                        <Card.Title>{title}</Card.Title>
                        <Card.Text> {description} </Card.Text>
                        <GitHubButton href={githubLink} data-size="large" aria-label="Follow @Rubayth on GitHub">View code on GitHub</GitHubButton>
                        <br/>
                        <Button
                            style={{color:'white'}}
                            variant="primary" 
                            onClick= { () => window.open(websiteLink)}
                            >Visit website
                        </Button>
                    </Card.Body>
                </Card>
            </div>
            )
        }       
export default ProjectCard;