import { NavLink } from "solid-app-router"
import Footer from "../components/Footer"

// metadata
import { Title } from "@solidjs/meta"

// css
import "../../css/PageNotFound/PageNotFound.css"
import "../../css/general.css"
import Page from "../components/Page";

// title string
const pageTitle = "404";

export default function PageNotFound() {
    return (
        <Page title={pageTitle}>
            <div class="error-404">
                {/* paragraph */}
                <p>
                    Are you sure you've entered the correct address?

                    <br></br>
                    <br></br>

                    {/* click to return to home */}
                    <NavLink class="paragraph-link" href="/">Click to return to Home.</NavLink>
                </p>
            </div>
        </Page>
    )
}