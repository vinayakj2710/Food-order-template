import React, {Fragment} from "react";
import classes from "./Header.module.css"
import banner from "../../assets/img/Pizza-scaled.jpg"
import HeaderCartButton from "./HeaderCartButton";

const Header = ( props ) => {
    return(
        <Fragment>
            <header className={classes.header}>
                <h1>Saanvi Cake and Pizza point</h1>
                <HeaderCartButton onShow={props.onShow}/>
            </header>

            <div className={classes["main-image"]}>
                <img src={banner}/>
            </div>
        </Fragment>
    )
}

export default Header;