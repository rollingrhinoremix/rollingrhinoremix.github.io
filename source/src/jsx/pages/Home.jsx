import Footer from "../components/Footer"

// metadata
import { Title } from "@solidjs/meta"

// css
import "../../css/Home/Home.css"
import "../../css/general.css"

// title string
var pageTitle = "Rolling Rhino Remix | Home";

export default function HomePage() {
    return (
        <div id="home-page" class="page-width">
            {/* metadata */}
            <Title>{pageTitle}</Title>

            {/* spacer */}
            <div class="large-spacer"></div>

            {/* title */}
            <h1 class="home-title gradient">Rolling Rhino Remix</h1>

            {/* title hr */}
            <hr class="title-hr"></hr>

            {/* mini spacer */}
            <div class="mini-spacer"></div>

            {/* laptop image */}
            <img id="home-laptop-image" src="assets/HomePage/laptop.png" alt="Laptop Image"/>

            {/* title */}
            <h1 class="home-title gradient">Ubuntu just got rolling.</h1>

            {/* spacer */}
            <div class="mini-spacer"></div>

            {/* section 1 */}
            <div class="card">
                {/* mini spacer */}
                <div class="mini-spacer"></div>

                {/* header */}
                <h1 id="home-section1-header">So what is it?</h1>

                {/* container for section1 contents */}
                <div id="home-section1-contents">
                    {/* paragraph */}
                    <p id="home-section1-paragraph" style="text-align: left;">
                        Rolling Rhino Remix is an unofficial Ubuntu flavour which converts the Ubuntu operating system into a rolling release Linux distribution by 
                        tracking the devel series. <br></br>
                        A rolling release distribution is a Linux distribution which receives continuous package updates, 
                        and as such there are no major updates (unlike Ubuntu's current release model where there is clear progression between versions). 
                        A rolling release model offers new and experienced users a new way to utilise their desktop PC, without the hassle of major upgrades.
                    </p>
                    
                    {/* image */}
                    <img id="home-image1" src="assets/HomePage/section1.png"/>
                </div>

                <div class="mini-spacer"></div>
            </div>

            {/* section 2 */}
            <div id="home-section2">
                {/* spacer */}
                <div class="mini-spacer"></div>

                {/* header */}
                <h1 id="home-section2-header" class="gradient">Why use Rolling Rhino Remix?</h1>

                {/* paragraph */}
                <p id="home-section2-paragraph">
                    If you prefer the easy-to-use nature of Ubuntu but prefer the style of a rolling release from other distributions such as Arch Linux then 
                    Rolling Rhino Remix might be for you! 
                    <br></br>
                    We work hard to ensure that Rolling Rhino Remix has the best possible user experience.
                    We have created tools and additional repositories to ensure that Ubuntu works smoothly as a Rolling Release distribution.
                </p>

                {/* just a spacer */}
                <div class="spacer"></div>

                {/* flex-box to contain the little grid objects */}
                <div id="home-section2-grid">
                    {/* grid object */}
                    <div class="home-section2-grid-object">
                        {/* image */}
                        <img src="assets/HomePage/EasyInstallation.png"/>
                        {/* text */}
                        <p>
                            Rolling Rhino Remix offers a no-frills, slightly modified version of Ubuntu's Ubiquity installer. 
                            This graphical installer makes the installation of Rolling Rhino Remix simple, easy and intutive and offers different methods of insallation such as 
                            our minimal option which comes with no desktop environment or extra packages, allowing you to customise your system from the ground up.
                        </p>
                    </div>

                    {/* grid object */}
                    <div class="home-section2-grid-object home-section2-end-line-grid-object">
                        {/* image */}
                        <img src="assets/HomePage/Minimal.png"/>
                        {/* text */}
                        <p>
                            Our minimal installation option comes with no un-necessary packages and no Desktop Environment out of the box, 
                            allowing for you to customise your Rolling Rhino Remix system the way that you want it. 
                            Our quality of life tools such as rhino-deinst provide an easy, TUI method to install a desktop environment.
                        </p>
                    </div>

                    {/* grid object */}
                    <div class="home-section2-grid-object home-section2-bottom-row-grid-object">
                        {/* image */}
                        <img src="assets/HomePage/rhino.png"/>
                        {/* text */}
                        <p>
                            Rolling Rhino Remix provides many different quality of life and command-line utilities to 
                            improve the user experience of the Operating System. Many of these utilities were created by 
                            the Rolling Rhino Remix team specifically for the distribution. 
                            You can find information about each of the utilities on our 
                            <a class="paragraph-link" href="https://github.com/rollingrhinoremix/docs/wiki" target="_blank">Wiki</a>. 
                        </p>
                    </div>

                    {/* second row */}

                    {/* grid object */}
                    <div class="home-section2-grid-object home-section2-end-line-grid-object home-section2-bottom-row-grid-object" style="margin-bottom: 0;">
                        {/* image */}
                        <img src="assets/HomePage/partners.png"/>
                        {/* text */}
                        <p>
                            Rolling Rhino Remix has partnered with two large open source projects, Pacstall and Nala. 
                            Pacstall is an AUR-like package manager that brings the experience of the Arch User repository to Rolling Rhino Remix. 
                            Nala is a <span class="code">libapt-pkg</span> frontend which improves the experience of the apt package manager with better output, 
                            parallel downloads and transaction history.
                        </p>
                    </div>
                </div>
            </div>

            {/* spacer */}
            <div class="mini-spacer"></div>

            {/* section 3 */}
            <div class="card">
                {/* argument divs, they're called arguments because they're arguments FOR the operating system */}

                {/* argument 1 */}
                <div class="home-section3-argument">
                    {/* header */}
                    <h1 class="gradient">Open Source</h1>
                    {/* paragraph */}
                    <p>
                        We are entirely dedicated to Free and Open Source Software. All of our utilities are licensed under 
                        the GNU General Public License (v3). Rolling Rhino Remix is based on Ubuntu, which is also a free and open source Linux distribution. 

                        {/* double line break */}
                        <br></br>
                        <br></br>

                        Rolling Rhino Remix joined the Open Inventions Network in April 2022. The Open Invention Network is a 
                        patent non-agression community that supports the freedom of Linux and Open Source software, and helps reduce the risks of patent risks. 
                        All members of the Open Invention Network sign the same agreement to 
                        cross license their Linux System patents royalty free. The Open Invention Network owns 
                        over 2.7 million patents & applications and all members also gain 
                        access to the Open Invention Network's portfolio of 350 intellectual property assets. 
                    </p>
                </div>

                {/* argument 2 */}
                <div class="home-section3-argument">
                    {/* header */}
                    <h1 class="gradient">Unique Tools</h1>
                    {/* paragraph */}
                    <p>
                        We have created our home-grown utility called Rhino. Rhino has three commands, 
                        <span class="code">rhino-update</span>, <span class="code">rhino-deinst</span> and <span class="code">rhino-config</span>.

                        {/* double line break */}
                        <br></br>
                        <br></br>

                        <span class="code">rhino-update</span> is our extensible update utility, which will ensure that the system is updated smoothly. 
                        Due to the extensibility of it, you can use <span class="code">rhino-config</span> to configure the updates you can receive. 
                        You are able to use this tool for an ever-increasing list of features, 
                        such as enabling the installation and upgrades of the latest Linux kernel, 
                        removing and replacing snapd with Flatpaks and enabling Pacstall on your system.

                        {/* double line break */}
                        <br></br>
                        <br></br>
   
                        <a class="paragraph-link" href="https://pacstall.dev/" target="_blank">Pacstall</a> is an AUR-like package manager 
                        for Ubuntu and Ubuntu-based systems, and we have worked closely with the Pacstall developers to integrate it into our distribution. 
                        Pacstall brings the experience of the Arch User Repository directly to 
                        Ubuntu and Ubuntu-based systems with an ever-growing number of user-maintained packages.

                        {/* double line break */}
                        <br></br>
                        <br></br>

                        <a class="paragraph-link" href="https://gitlab.com/volian/nala" target="_blank">Nala</a> is a libapt-pkg 
                        front-end which improves the core functionality of apt. 
                        We have (once again) worked closely with the developers of Nala to integrate it into Rolling Rhino Remix. 
                        Nala provides functionality such as transaction history, parallel downloads and better output formatting. 
                        Nala makes apt much more user-friendly as a result of this. 
                        Please read our <a class="paragraph-link" href="https://github.com/rollingrhinoremix/docs/wiki/nala" target="_blank">Nala documentation</a> to 
                        understand how to utilise it.

                        {/* double line break */}
                        <br></br>
                        <br></br>

                        We have our own Terminal User Interface (TUI) utility to install desktop environments. 
                        This makes the installation of desktop environments on a minimal installation of Rolling Rhino Remix 
                        significantly easier. All that is required is to run <span class="code">rhino-deinst</span>, select the 
                        Desktop Environments or Window Managers you wish to install and the utility 
                        will do the rest. Deinst will also automatically install and enable the required Display Manager.
                    </p>
                </div>

                {/* argument 3 */}
                <div class="home-section3-argument">
                    {/* header */}
                    <h1 class="gradient">Thorough Documentation</h1>
                    {/* paragraph */}
                    <p>
                        We hope to provide the best documentation so that you know how to utilise the distribution as it was intended. 
                        By providing a community-maintained Wiki, we hope to provide users with the 
                        information necessary for them to understand how to utilise our utilities as well as 
                        fix and troubleshoot any common issues that have been found within the distribution. You can view our wiki 
                        <a class="paragraph-link" href="https://github.com/rollingrhinoremix/docs/wiki" target="_blank">here.</a>
                    </p>
                </div>
            </div>

            {/* just a spacer */}
            <div class="spacer"></div>

            {/* instanced footer */}
            <Footer></Footer>

        </div>
    )
}