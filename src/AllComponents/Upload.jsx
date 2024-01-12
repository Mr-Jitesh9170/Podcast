import "../Scss-files/Upload.scss"
import { createContext, useState } from "react"
import { DashboardIcons, UploadSelectionData } from "../AllData/data"

export const Upload = ({ onGetdata }) => {
  // const [send, setSend] = useState(true);
  // const sendDataToParent = () => {
  //   send ? setSend(false) : setSend(true)
  // }
  // onGetdata(send)


  return (
    <div className="upload-container">
      <div className="upload-1">
        <h3>Upload Podcast</h3>
        {/* <----------------------[ cross button ]-----------> */}
        <span>{DashboardIcons.crossIcon}</span>
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