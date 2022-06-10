import { NavLink } from "solid-app-router"
import Footer from "../components/Footer"

// css
import "../../css/PageNotFound/PageNotFound.css"
import "../../css/general.css"

export default function PageNotFound() {
    return (
        <div id="error404">
            {/* header */}
            <h1>Error 404: Page Not found</h1>

            {/* paragraph */}
            <p>
                Are you sure you typed in the correct address?
            </p>

            {/* click to return to home */}
            <NavLink id="error404-return-link" href="/">Click to return to Home.</NavLink>

            {/* spacer */}
            <div class="spacer"></div>

            {/* footer */}
            <Footer></Footer>
        </div>
    )
}