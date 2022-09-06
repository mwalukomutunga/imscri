import React from "react";
import {
  Button,
  Form,
  Grid,
  Header,
  Image,
  Message,
  Segment,
} from "semantic-ui-react";

const Home = () => {
  const HandleOnClick = () => {
    window.location.href = "http://staging.crionline.africa";
  };
  const HandleCRIOnClick = () => {
    window.location.href = "https://training.crionline.africa";
  };
  return (
    <Grid textAlign="center" style={{ height: "70vh" }} verticalAlign="middle">
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as="h2" color="teal" textAlign="center">
          {/* <Image src='/logo.png' size='large'/>  */}
          Insurance Management System
        </Header>
        <Form size="large">
          <Segment stacked>
            {/* <Form.Input fluid icon='user' iconPosition='left' placeholder='E-mail address' />
          <Form.Input
            fluid
            icon='lock'
            iconPosition='left'
            placeholder='Password'
            type='password'
          /> */}

            <Button
              onClick={HandleOnClick}
              style={{ margin: "5px" }}
              color="teal"
              fluid
              size="large"
            >
              IMS
            </Button>
            <Button onClick={HandleCRIOnClick} style={{ margin: "5px" }} color="teal" fluid size="large">
              CRI
            </Button>
          </Segment>
        </Form>
        {/* <Message>
        New to us? <a href='#'>Sign Up</a>
      </Message> */}
      </Grid.Column>
    </Grid>
  );
};

export default Home;
