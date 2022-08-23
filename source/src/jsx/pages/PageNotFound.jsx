import { NavLink } from "solid-app-router"
import Footer from "../components/Footer"

// metadata
import { Title } from "@solidjs/meta"

// css
import "../../css/PageNotFound/PageNotFound.css"
import "../../css/general.css"

// title string
var pageTitle = "Rolling Rhino Remix | 404";

export default function PageNotFound() {
    return (
        <div id="error404">
            {/* metadata */}
            <Title>{pageTitle}</Title>

            {/* spacer */}
            <div class="large-spacer"></div>

            {/* header */}
            <h1 class="gradient">Error 404: Page Not found</h1>

            {/* title hr */}
            <hr class="title-hr"></hr>

            {/* spacer */}
            <div class="spacer"></div>

            {/* header 2 */}
            <h2>Are you sure you've entered the correct address?</h2>

            {/* mini spacer */}
            <div class="mini-spacer"></div>

            {/* 404 page image */}
            <img src="./assets/place-holder.png" alt="xxx"/>

            {/* mini spacer */}
            <div class="mini-spacer"></div>

            {/* wrap link in paragraph */}
            <p>
                {/* click to return to home */}
                <NavLink class="paragraph-link" href="/">Return to Home.</NavLink>
            </p>

            {/* spacer */}
            <div class="spacer"></div>

            {/* footer */}
            <Footer></Footer>
        </div>
    )
}