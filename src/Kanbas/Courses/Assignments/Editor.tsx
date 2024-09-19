export default function AssignmentEditor() {
    return (
        <div id="wd-assignments-editor">
            <label htmlFor="wd-name">Assignment Name</label>
            <input id="wd-name" value="A1 - ENV + HTML" /><br /><br />
            <textarea id="wd-description" cols={30} rows={10}>
                The assignment is available online Submit a link to the landing page of your Web application running on Netlify. The landing page should include the following: Your full name and section Links to each of the lab assignments Link to the Kanbas application Links to all relevant source code repositories The Kanbas application should include a link to nvaigate back to the landing page.
            </textarea>
            <br />
            <table>
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-points">Points</label>
                    </td>
                    <td>
                        <input id="wd-points" value={100} />
                    </td>
                </tr>
                <br />
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-group">Assignment Group</label>
                    </td>
                    <td>
                        <select id="wd-group">
                            <option value="ASSIGNMENTS">ASSIGNMENTS</option>
                        </select>
                    </td>
                </tr>
                <br />
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-display-grade-as">Display Grade as</label>
                    </td>
                    <td>
                        <select id="wd-display-grade-as">
                            <option value="Percentage">Percentage</option>
                        </select>
                    </td>
                </tr>
                <br />
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-submission-type">Submission Type</label>
                    </td>
                    <td>
                        <select id="wd-submission-type">
                            <option value="Online">Online</option>
                        </select>
                        <tr>
                            <br />
                            <div>Online Entry Options</div>

                            <input type="checkbox" name="check-entry" id="wd-text-entry" />
                            <label htmlFor="wd-text-entry">Text Entry</label> <br />

                            <input type="checkbox" name="check-entry" id="wd-website-url" />
                            <label htmlFor="wd-website-url">Website URL</label> <br />

                            <input type="checkbox" name="check-entry" id="wd-media-recordings" />
                            <label htmlFor="wd-media-recordings">Media Recordings</label> <br />

                            <input type="checkbox" name="check-entry" id="wd-student-annotation" />
                            <label htmlFor="wd-student-annotation">Student Annotations</label> <br />

                            <input type="checkbox" name="check-entry" id="wd-file-upload" />
                            <label htmlFor="wd-file-upload">File Uploads</label> <br />
                        </tr>
                    </td>
                </tr>
                <br />
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-assign-to">Assign</label>
                    </td>
                    <td>
                        Assign To
                        <br />
                        <input id="wd-assign-to" value={"Everyone"} />
                        <br />
                        <br />
                        Due
                        <input type="date"
                            id="wd-due-date"
                            value="2024-05-13" /><br />
                        <br />
                        <tr>
                            <td>Available from</td>
                            <td>Until</td>
                        </tr>
                        <tr>
                            <td>
                                <input type="date"
                                    id="wd-available-from"
                                    value="2024-05-06" />
                            </td>
                            <td>
                                <input type="date"
                                    id="wd-available-from"
                                    value="2024-05-06" />
                            </td>
                        </tr>
                        <br />
                    </td>
                </tr>
            </table>
            <hr />
            <table align="right">
                <button id="wd-cancel" onClick={() => alert("Canel")} type="button">
                    Cancel
                </button>
                <button id="wd-save" onClick={() => alert("Save")} type="button">
                    Save
                </button>
            </table>
        </div>
    );
}
