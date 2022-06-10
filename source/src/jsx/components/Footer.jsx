import { NavLink } from "solid-app-router"


// css
import "../../css/components/Footer/Footer.css"
import "../../css/general.css"

export default function Footer() {
    return (
        <div id="footer">
            {/* horizontal line */}
            <hr class="footer-hr"></hr>

            {/* main text */}
            <p style="text-align: center;">
                Made with love from all of our developers & contributors, and a large thank you to Martin Wimpress who's 
                Rolling Rhino script has inspired the development of this distribution. <br></br>
                We would also like to thank Martin for 
                his permission to use the name “Rolling Rhino Remix”.

                {/* skip lines */}
                <br></br><br></br>

                {/* smaller grayer text that shows a few disclaimers */}
                <span id="footer-disclaimer">
                    • Ubuntu and Canonical are registered trademarks of Canonical Ltd. Rolling Rhino Remix is not affiliated with the Ubuntu Project. <br></br>
                    • Linux is the registered trademark of Linus Torvalds.
                </span>
            </p>

            {/* another horizontal line */}
            <hr class="footer-hr"></hr>

            {/* skip a couple lines */}
            <br></br><br></br>

            {/* flex box to contain some info */}
            <p style="
                display: flex;
                flex-direction: ltr;
                flex-wrap: nowrap;

                justify-content: space-evenly;
            ">
                {/* copyright */}
                <span id="footer-copyright">&copy Rolling Rhino Remix</span>
                
                {/* footer links */}
                <span id="footer-links">
                    {/* anchor to github page */}
                    <a class="footer-link" href="https://github.com/rollingrhinoremix" target="_blank">Github</a>

                    {" | "}

                    {/* route to branding page */}
                    <NavLink class="footer-link" end href="/branding">Branding</NavLink>

                    {" | "}

                    {/* route to info page */}
                    <NavLink class="footer-link" end href="/info">Info</NavLink>
                </span>
            </p>

            {/* just a small spacer to create some distance between the copyright and the bottom of the screen */}
            <div class="mini-spacer"></div>
        </div>
    )
}