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
                Are you sure you've entered the correct address?

                <br></br>
                <br></br>

                {/* click to return to home */}
                <NavLink id="error403-return-link" href="/">Click to return to Home.</NavLink>
            </p>

            {/* spacer */}
            <div class="spacer"></div>

            {/* footer */}
            <Footer></Footer>
        </div>
    )
}