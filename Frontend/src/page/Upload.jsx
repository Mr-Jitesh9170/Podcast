import "../styles/Upload.scss"
import { DashboardIcons, UploadSelectionData } from "../data/data"
import { useContext } from "react";
import { IsLogginedContext } from "../context/isLogined";

export const Upload = () => {
  const { isClosed, setClosed } = useContext(IsLogginedContext);

  const handleClosed = () => {
    isClosed ? setClosed(false) : setClosed(true)
  }
  
  return (
    <div className="upload-container">
      <div className="upload-1">
        <h3>Upload Podcast</h3>
        <span onClick={handleClosed}>{DashboardIcons.crossIcon}</span>
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