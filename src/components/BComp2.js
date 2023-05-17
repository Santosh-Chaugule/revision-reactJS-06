//1Import area

import { Component } from "react";



//2 Class Defination area
class BComp2 extends Component {
    //1.Properties/variabvles

    que = "?"


    //2.Constructor


    //3.methods

    //Every Class componets must have render method
    render() {
        return <span>Hello {this.props.oklabs} How are you{this.que}</span>

    }

}

//3 Export Area
export default BComp2