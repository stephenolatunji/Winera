import React, { Component } from 'react';
import { Form, Button, Divider, Container, Grid } from 'semantic-ui-react';


class SearchPage extends Component {
    






    render(){
        return(
            <Container fluid>
                <Form
                    align='center'
                    style={{
                        padding: '20px',
                        color:'brown'
                    }} >
                    <Form.Field inline>
                        <input placeholder='Enter Wine name'  />
                        <Button content='Search' inverted color='brown' />
                    </Form.Field>
                </Form>
                <Divider />
                <Grid stackable column={4} >

                </Grid>
            </Container>
            
        )
    }
};
export default SearchPage;