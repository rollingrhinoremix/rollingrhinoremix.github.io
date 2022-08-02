import { NavLink } from "solid-app-router"
import Footer from "../components/Footer"

// metadata
import { Title } from "@solidjs/meta"

// css
import "../../css/PageNotFound/PageNotFound.css"
import "../../css/general.css"

// title string
var pageTitle = "Rolling Rhino Remix // 404";

export default function PageNotFound() {
    return (
        <div id="error404">
            {/* metadata */}
            <Title>{pageTitle}</Title>

            {/* spacer */}
            <div class="large-spacer"></div>

            {/* header */}
            <h1 class="gradient">Error 404: Page Not found</h1>

            {/* paragraph */}
            <p>
                Are you sure you've entered the correct address?

                <br></br>
                <br></br>

                {/* click to return to home */}
                <NavLink class="paragraph-link" href="/">Click to return to Home.</NavLink>
            </p>

            {/* spacer */}
            <div class="spacer"></div>

            {/* footer */}
            <Footer></Footer>
        </div>
    )
}