import { NavLink } from "solid-app-router";

/*
---- NOTE ----

this is just a modified version of the regular navbar.jsx element

it's meant to be used when in desktop/landscape mode

--------------
*/

// css
import "../../css/components/Routing/Navbar.css"
import "../../css/components/Routing/NavLinks.css"

export default function DesktopNavbar() {
    // take props from parent (hamburger menu)

    return (
        <div id="navbar" style="position: fixed;">
            {/* actual navbar */}
            <div id="navlink-container">
                {/* home route */}
                <NavLink class="navlink" end href="/">Home</NavLink>

                {/* download route */}
                <NavLink class="navlink" end href="/download">Download</NavLink>

                {/* news route */}
                <NavLink class="navlink" end href="/news">News</NavLink>

                {/* anchor to wiki page - NOT A ROUTE because it sends user to an external website, also open to new tab just for convenience */}
                <a class="navlink inactive" href="https://github.com/rollingrhinoremix/docs/wiki" target="_blank">
                    Wiki
                    <img id="navlink-wiki-image" src="./assets/external-icon.svg"/>
                </a>

                {/* donate route */}
                <NavLink class="navlink" end href="/donate">Donate</NavLink>
            </div>
        </div>
    )
}