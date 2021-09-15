import React from "react";
import {connect} from "react-redux";
import { sellLaptop } from "../redux/actions/laptopActions";

const LaptopComp = (props) => {
    console.log(props)
    return (
        <div className="container">
            <h2>Laptops [Pure Redux]</h2>
            <h3>
                Number of Laptops :
                <span className="number">{props.laptops}</span>
            </h3>
            <button onClick={props.sellLaptops}>Sell Laptop</button>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        laptops: state.laptop.numberOfLaptops
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        sellLaptops: () => dispatch(sellLaptop()) 
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(LaptopComp);
