import "../Scss-files/Upload.scss"
import { useState } from "react"
import { DashboardIcons, UploadSelectionData } from "../AllData/data"

export const Upload = ({ setIsOpen }) => {
  return (
    <div className="upload-container">
      <div className="upload-1">
        <h3>Upload Podcast</h3>
        {/* <----------------------[ cross button ]-----------> */}
        <span onClick={() => setIsOpen((prevState) => ({ ...prevState, isTrue: false }))}>{DashboardIcons.crossIcon}</span>
      </div>
      <p>Podcast details:</p>
      <div className="file-upload">
        <span style={{ width: "40px" }}>{DashboardIcons.uploadIcon}</span>
        <span>Click here to upload thumbnail</span>
        <p>
          <span>or</span>
          <label for="inputUpload">Browse Image</label>
          <input id="inputUpload" type="file" style={{ display: "none" }} />
        </p>
      </div>
      <input type="text" placeholder="Podcast-name* ..." />
      <textarea name="" placeholder="Podcast-descriptions* " id="" cols="20" rows="10" />
      <textarea name="" placeholder="Tags-separated by , " id="" cols="20" rows="10" />

      <div className="upload-selection-box">
        <select name="cars" className="selection-box" required>
          <option value="Audio">Audio</option>
          <option value="Video">Video</option>
        </select>
        <select name="cars" className="selection-box" required>
          {
            UploadSelectionData.map((_) => {
              return <option value={_}>{_}</option>
            })
          }
        </select>
      </div>
      <button>Next</button>
    </div >
  )
}