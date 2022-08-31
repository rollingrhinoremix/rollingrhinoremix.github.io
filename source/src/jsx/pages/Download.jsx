import Footer from "../components/Footer"

// metadata
import { Title } from "@solidjs/meta"

// import JSON info
import downloadInfo from "../../../JSON/Download.json"

// css
import "../../css/Download/Download.css"
import "../../css/general.css"

// title string
var pageTitle = "Rolling Rhino Remix | Download";

// version
const version = downloadInfo.version;

// iso size
const ISOSize = downloadInfo.ISOSize;

// kernel
const kernel = downloadInfo.kernel;

// checksum
const checksum = downloadInfo.checksum;

// get all mirror links from JSON

// jovark OS
const jovarkOSLink = downloadInfo.mirrors.jovarkOS;

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
            {/* metadata */}
            <Title>{pageTitle}</Title>

            {/* spacer */}
            <div class="large-spacer"></div>

            {/* title */}
            <h1 id="download-title" class="gradient">Rolling Rhino Remix - Download</h1>

            {/* title hr */}
            <hr class="title-hr"></hr>

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
                    The image can be burned to a CD, mounted as an ISO file, or be directly written to a USB stick using a utility like <span class="code">dd</span>.
                    It is intended for new installations only; an existing Rolling Rhino system can always be updated with <span class="code">rhino-update</span>.
                </p>

                {/* a few links */}
                <p class="download-section1-text">
                    <b>Current release: {version}</b>
                    
                    <br></br>

                    <a class="paragraph-link" href={downloadInfo.releaseAnnouncement}>Release Announcement</a>
                    
                    <br></br>

                    <b>ISO Size: {ISOSize}</b>

                    <br></br>

                    <b>Included Kernel: {kernel}</b>

                    <br></br>

                    <a class="paragraph-link" href="https://github.com/rollingrhinoremix/docs/wiki/Installation-guide" target="_blank">Installation Guide</a>

                    <br></br>

                    {/* set word wrap here to allow breaking of words because the checksum is a very long "word" that wont fit on one line, 
                        and to prevent it from overflowing i changed this parameter specifically for just this piece of text */}
                    <b style="word-wrap: break-word;">Checksum (Sha256sum): {checksum}</b>
                </p>

                <br></br>

                {/* titles for download mirrors */}
                <h1 class="download-section1-title">Download Mirrors</h1>

                {/* download mirrors */}
                <div class="download-section1-text">
                    {/* download mirror 1 - google drive */}
                    <p>
                        <b>JovarkOS:</b>
                        <br></br>
                        <a class="paragraph-link" href={jovarkOSLink} target="_blank">Download rolling-{version.replaceAll(".", "-")}.iso</a> {/* replace . with - */}
                    </p>
                    {/* download mirror 3 - google drive */}
                    <p>
                        <b>Google Drive:</b>
                        <br></br>
                        <a class="paragraph-link" href={googleDriveLink} target="_blank">Download rolling-{version.replaceAll(".", "-")}.iso</a> {/* replace . with - */}
                    </p>

                    {/* download mirror 3 - mega.nz */}
                    <p>
                        <b>Mega.nz:</b>
                        <br></br>
                        <a class="paragraph-link" href={meganzLink} target="_blank">Download rolling-{version.replaceAll(".", "-")}.iso</a>
                    </p>

                    {/* download mirror 4 - mediafire */}
                    <p>
                        <b>Mediafire:</b>
                        <br></br>
                        <a class="paragraph-link" href={mediafireLink} target="_blank">Download rolling-{version.replaceAll(".", "-")}.iso</a>
                    </p>

                    {/* download mirror 5 - archive.org */}
                    <p>
                        <b>Archive.org:</b>
                        <br></br>
                        <a class="paragraph-link" href={archiveorgLink} target="_blank">Download rolling-{version.replaceAll(".", "-")}.iso</a>
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