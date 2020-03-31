import * as React from "react";
import {Button, Container, Grid, Image, Menu, Segment} from "semantic-ui-react";

import {Link} from "react-router-dom";
import logo from "../images/logo.png";

class Footer extends React.Component {
    constructor() {
        super();
        this.state = {color: "red"};
    }
    render() {
        return (
            <Segment basic inverted secondary size={'huge'} textAlign={"center"} style={{
                margin:0,
                padding:'30',
                width:'100',
                height:'80px'
            }}>
                <h4>2020 optimums solution</h4>
            </Segment>
        );
    }
}
export default Footer
