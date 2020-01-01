import React from 'react';
// import { Container, Card, CardMedia, CardActionArea} from '@material-ui/core';
// import ImageOne from '../../Assets/ImageOne.jpeg';
import wineCellar from '../../Assets/wineCellar.jpg';
import { Container, Card, Image } from 'semantic-ui-react';


const LandingPage = (classes) => {
    return(
        <Container fluid>
            <Card fluid color='black'>
                <Image src={wineCellar} />   
            </Card>
        </Container>
    )
}
export default LandingPage;