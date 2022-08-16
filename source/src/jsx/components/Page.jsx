import {Title} from "@solidjs/meta";
import {children} from "solid-js";
import Footer from "./Footer";

import "../../css/general.css";
import "../../css/Page/Page.css";

export default function Page(props) {

    const c = children(() => props.children)

    return (
        <div class="page page-width">
            <Title>{`Rolling Rhino Remix | ${props.title}`}</Title>

            {/* spacer */}
            <div class="large-spacer"></div>

            {/* title */}
            <img class="logo" src="../../../assets/logo.png" alt="Rolling Rhino Logo (Light version)" width="150px" height="150px" />
            <h1 class="gradient">Rolling Rhino Remix - {props.title}</h1>
            <hr class={"header-hr"}/>
            {c()}

            {/* spacer */}
            <div class="spacer"></div>

            {/* instance footer */}
            <Footer></Footer>
        </div>
    );
}