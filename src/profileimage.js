import React from "react";
import { connect } from "react-redux";
import { uploadProfileImage } from "./actions";

class ProfileImageUploader extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.upload = this.upload.bind(this);
        this.closeUploader = this.closeUploader.bind(this);
    }
    closeUploader() {
        location.replace("/profile");
    }
    upload(e) {
        e.preventDefault();
        console.log(this.file);
        const formData = new FormData();
        formData.append("file", e.target.files[0]);
        this.props.dispatch(uploadProfileImage(formData));
    }
    render() {
        return (
            <div id="uploaderOverlay">
                <div id="imageUploader">
                    <div id="uploaderClose" onClick={this.closeUploader}>
                        X
                    </div>
                    <h2>Upload new image </h2>
                    <input
                        type="file"
                        name="file"
                        id="file"
                        className="inputfile"
                        onChange={this.upload}
                    />
                    <label htmlFor="file">Choose a file</label>
                </div>
            </div>
        );
    }
}

export default connect(null)(ProfileImageUploader);
