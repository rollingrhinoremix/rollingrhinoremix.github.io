import Footer from "../components/Footer"

// import JSON info
import downloadInfo from "../../../JSON/Download.json"

// css
import "../../css/Download/Download.css"
import "../../css/general.css"

// version
const version = downloadInfo.version;

// get all mirror links from JSON

// google drive
const googleDriveLink = downloadInfo.mirrors.googleDrive;

// mega.nz
const meganzLink = downloadInfo.mirrors.meganz;

// mediafire
const mediafireLink = downloadInfo.mirrors.mediafire;

// archive.org
const archiveorgLink = downloadInfo.mirrors.archiveorg;

export default function DownloadPage() {
    return (
        <div id="download" class="page-width">
            {/* spacer */}
            <div class="spacer"></div>

            {/* title */}
            <h1 id="download-title" class="gradient">Download Rolling Rhino Remix</h1>

            {/* spacer */}
            <div class="spacer"></div>

            {/* section 1 */}
            <div class="card">
                {/* mini spacer */}
                <div class="mini-spacer"></div>

                {/* titles for download mirrors */}
                <h1 class="download-section1-title">Release Information</h1>

                {/* paragraph*/}
                <p class="download-section1-text">
                    The image can be burned to a CD, mounted as an ISO file, or be directly written to a USB stick using a utility like dd. <br></br>
                    It is intended for new installations only; an existing Rolling Rhino system can always be updated with rhino-update.
                </p>

                {/* a few links */}
                <p class="download-section1-text">
                    <b>Current release - {version}</b>
                    
                    <br></br><br></br>

                    <a class="paragraph-link" href={downloadInfo.releaseAnnouncement}>Release Announcement</a>
                    
                    <br></br><br></br>

                    <a class="paragraph-link" href="https://github.com/rollingrhinoremix/docs/wiki/Installation-guide" target="_blank">Installation Guide</a>
                </p>

                <br></br>

                {/* titles for download mirrors */}
                <h1 class="download-section1-title">Download Mirrors</h1>

                {/* download mirrors */}
                <div class="download-section1-text">
                    {/* download mirror 1 - google drive */}
                    <p>
                        <b>Google Drive:</b>
                        <br></br>
                        <a class="paragraph-link" href={googleDriveLink} target="_blank">Download Rolling Rhino {version}</a>
                    </p>

                    {/* download mirror 2 - mega.nz */}
                    <p>
                        <b>Mega.nz:</b>
                        <br></br>
                        <a class="paragraph-link" href={meganzLink} target="_blank">Download Rolling Rhino {version}</a>
                    </p>

                    {/* download mirror 3 - mediafire */}
                    <p>
                        <b>Mediafire:</b>
                        <br></br>
                        <a class="paragraph-link" href={mediafireLink} target="_blank">Download Rolling Rhino {version}</a>
                    </p>

                    {/* download mirror 4 - archive.org */}
                    <p>
                        <b>Archive.org:</b>
                        <br></br>
                        <a class="paragraph-link" href={archiveorgLink} target="_blank">Download Rolling Rhino {version}</a>
                    </p>
                </div>

                {/* mini spacer */}
                <div class="mini-spacer"></div>
            </div>

            {/* spacer */}
            <div class="spacer"></div>

            {/* footer */}
            <Footer></Footer>
        </div>
    )
}