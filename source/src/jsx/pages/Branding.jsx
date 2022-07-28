import Footer from "../components/Footer"

// metadata
import { Title } from "@solidjs/meta"

// css
import "../../css/Branding/Branding.css"
import "../../css/general.css"

// title string
var pageTitle = "Rolling Rhino Remix // Branding";

export default function BrandingPage() {
    return (
        <div id="branding-page" class="page-width">
            {/* metadata */}
            <Title>{pageTitle}</Title>

            {/* spacer */}
            <div class="spacer"></div>

            {/* title */}
            <h1 id="branding-page-title" class="gradient">Rolling Rhino Remix - Brand Guidelines</h1>

            {/* mini spacer */}
            <div class="mini-spacer"></div>
        
            {/* second mini title */}
            <h3 id="branding-page-title2">
                Rolling Rhino Remix is <span class="gradient">YOUR </span>
                Linux operating system
            </h3>

            {/* paragraph */}
            <p id="branding-page-paragraph">
                Our set of Brand Guidelines exist so that Rolling Rhino Remix is communicated with the same precision we used to create it. <br></br>

                These guidelines and assets provide everything that builds the Rolling Rhino Remix brand. To help ensure the continued success of Rolling Rhino Remix, please use them as instructed.

                Our logos, wallpapers and assets are licensed under <a class="paragraph-link" href="https://creativecommons.org/licenses/by-sa/4.0/" target="_blank">CC BY-SA 4.0</a>. Rolling Rhino Remix itself is licensed under the GNU General Public License v3.0. <br></br>

                <br></br>

                Color palette can be found <a class="paragraph-link" href="https://design.ubuntu.com/brand/colour-palette/" target="_blank">here.</a>
            </p>

            {/* mini spacer */}
            <div class="mini-spacer"></div>

            {/* sections for logos */}
            <div id="branding-page-logos-section">
                {/* title */}
                <h3>Our logo</h3>

                {/* paragraph */}
                <p>
                    There are a handful of variants of the Rolling Rhino Remix logo.
                    We feel that it is integral to stick to the colour palette as much as possibile. 
                    The logo has a purple splotch behind the rhino, this is the same shade as the Ubuntu 
                    purple utilised in the gradient effect, separating the pieces.
                </p>

                {/* mini spacer */}
                <div class="mini-spacer"></div>

                {/* container (flexbox) for logo images */}
                <div id="branding-page-logos-images-container" class="card">
                    <div class="mini-spacer"></div>

                    <img class="branding-logo" src="assets/BrandingPage/Logos/logoLight.png" alt="Logo variation"/>
                    <img class="branding-logo" src="assets/BrandingPage/Logos/logoDark.png" alt="Logo variation"/>
                    <img class="branding-logo" src="assets/BrandingPage/Logos/logoGray.png" alt="Logo variation" style="margin: 0;"/>
                
                    <div class="mini-spacer"></div>
                </div>

                {/* spacer */}
                <div class="spacer"></div>

                {/* container (flexbox) for logo banners  */}
                <div id="branding-page-logos-banners-container" class="card">
                    <div class="mini-spacer"></div>

                    <img class="branding-banner-logo" src="assets/BrandingPage/Logos/logoBannerLight.png" alt="Banner logo variation"/>
                    <img class="branding-banner-logo" src="assets/BrandingPage/Logos/logoBannerDark.png" alt="Banner logo variation" style="margin-bottom: 0;"/>

                    <div class="mini-spacer"></div>
                </div>
            </div>

            {/* spacer */}
            <div class="spacer"></div>

            {/* sections for wallpapers */}
            <div id="branding-page-wallpapers-section">
                {/* title */}
                <h3>Our wallpapers</h3>

                {/* paragraph */}
                <p>
                    The desktop wallpaper is one of the <b>first things</b> a new user will notice about their operating system. 
                    This is why we have designed two unique wallpapers to match our branding. 
                    The wallpapers will automatically change depending on whether the user is using light or dark mode.
                </p>

                {/* mini spacer */}
                <div class="mini-spacer"></div>

                <div id="branding-page-wallpapers-container" class="card">
                    <div class="mini-spacer"></div>

                    <img class="branding-wallpaper" src="assets/BrandingPage/Wallpapers/wallpaperLight.png" alt="Wallpaper variation"/>
                    <img class="branding-wallpaper" src="assets/BrandingPage/Wallpapers/wallpaperDark.png" alt="Wallpaper variation" style="margin-bottom: 0;"/>
                
                    <div class="mini-spacer"></div>
                </div>
            </div>

            {/* spacer */}
            <div class="spacer"></div>

            {/* instance footer */}
            <Footer></Footer>
        </div>
    )
}