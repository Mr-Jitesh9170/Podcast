import "../styles/Upload.scss"
import { DashboardIcons, UploadSelectionData } from "../data/data"
import { IoMdCloudUpload } from "react-icons/io";
import { useContext, useState } from "react";
import { IsLogginedContext } from "../context/isLogined";
import { ToastContainer, toast } from 'react-toastify';
import { alert } from "../utils/alert";
import 'react-toastify/dist/ReactToastify.css';
import { createPodcast } from "../apis/upload";
import { Navigate, useNavigate } from "react-router-dom";


export const Upload = () => {
  const navigate = useNavigate()
  const { setClosed } = useContext(IsLogginedContext);
  const [next, setNext] = useState(true);
  const [uploadPod, setUploadPod] = useState(
    {
      userId: localStorage.getItem("userId"),
      episodeImgPath: "",
      podcastName: "",
      podcastDescription: "",
      tagSeperatedBy: "",
      isMedia: "",
      podcastCategory: "",
      episodeName: "",
      episodeVideoPath: "",
      episodeDescription: ""
    }
  )

  // upload podcast =>
  const handleUpload = async () => {
    for (let data in uploadPod) {
      if (!uploadPod[data]) {
        return toast.error(`${data} is missing!`, alert)
      }
    }
    console.log(uploadPod)
    let uploadPodData = new FormData();
    for (let data in uploadPod) {
      if (data === "episodeImgPath" || data === "episodeVideoPath") {
        uploadPodData.append(`imgAndVideo`, uploadPod[data])
      } else {
        uploadPodData.append(`${data}`, uploadPod[data])
      }
    }
    let resPod = await createPodcast("/podcast/create", uploadPodData);
    if (resPod) {
      toast.success("Podcast uploaded!")
      navigate("/podcast/profile")
    } else {
      toast.warning("Something went wrong!")
    }
  }

  // upload podcast change =>
  let uploadHandleChange = (e) => {
    let { value, name, files } = e.target;
    if (files) {
      setUploadPod({ ...uploadPod, [name]: files[0] });
    } else {
      setUploadPod({ ...uploadPod, [name]: value })
    }
  }

  const handleNext = () => {
    setNext(false)
  }
  const handlePrev = () => {
    setNext(true)
  }
  const handleClosed = () => {
    setClosed("")
  }
  return (
    <div className="uploadVideoAudio">
      <ToastContainer />
      <div className="upload-1">
        <h3>Upload Podcast</h3>
        <span onClick={handleClosed}>{DashboardIcons.crossIcon}</span>
      </div>
      {
        next ? (
          <div className="upload-container">
            <p>Podcast details:</p>
            <div className="file-upload">
              <span style={{ width: "40px" }}>{DashboardIcons.uploadIcon}</span>
              <span>Click here to upload thumbnail</span>
              <p>
                <span>or</span>
                <label for="inputUpload" >Browse Image</label>
                <input name="episodeImgPath" id="inputUpload" type="file" style={{ display: "none" }} onChange={uploadHandleChange} />
              </p>
            </div>
            <input name="podcastName" type="text" placeholder="Podcast-name* ..." value={uploadPod.podcastName} onChange={uploadHandleChange} />
            <textarea name="podcastDescription" placeholder="Podcast-descriptions* " value={uploadPod.podcastDescription} onChange={uploadHandleChange} id="" cols="20" rows="10" />
            <textarea name="tagSeperatedBy" placeholder="Tags-separated by , " value={uploadPod.tagSeperatedBy} onChange={uploadHandleChange} id="" cols="20" rows="10" />

            <div className="upload-selection-box">
              <select name="isMedia" className="selection-box" value={uploadPod.isMedia} onChange={uploadHandleChange} required>
                <option value="Audio" >Audio</option>
                <option value="Video">Video</option>
              </select>
              <select name="podcastCategory" className="selection-box" value={uploadPod.podcastCategory} onChange={uploadHandleChange} required>
                {
                  UploadSelectionData.map((_, i) => {
                    return <option key={i} value={_}>{_}</option>
                  })
                }
              </select>
            </div>
            <button onClick={handleNext}>Next</button>
          </div >
        )
          : (
            <div className="podVideoContainer">
              <p>Episode details:</p>
              <div className="file-upload">
                <IoMdCloudUpload width={40} height={40} />
                <p>
                  <label for="inputUpload">Select audio/video</label>
                  <input name="episodeVideoPath" id="inputUpload" type="file" style={{ display: "none" }} onChange={uploadHandleChange} />
                </p>
              </div>
              <input name="episodeName" type="text" placeholder="Episode-name* ..." value={uploadPod.episodeName} onChange={uploadHandleChange} />
              <textarea name="episodeDescription" placeholder="Episode-descriptions* " id="" cols="20" rows="10" value={uploadPod.episodeDescription} onChange={uploadHandleChange} />
              <button >Delete</button>
              <button >Preview Episode</button>
              <div className="buttons">
                <button onClick={handlePrev}>Back</button>
                <button onClick={handleUpload}>Create</button>
              </div>
            </div>
          )
      }
    </div>
  )
}