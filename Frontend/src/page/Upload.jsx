import "../styles/Upload.scss"
import { DashboardIcons, categories } from "../data/data"
import { IoMdCloudUpload } from "react-icons/io";
import { useContext, useState } from "react";
import { IsLogginedContext, isUserContext } from "../context/isLogined";
import { ToastContainer, toast } from 'react-toastify';
import { alert } from "../utils/alert";
import 'react-toastify/dist/ReactToastify.css';
import { createPodcast } from "../apis/upload";
import { useNavigate } from "react-router-dom";


const Upload = () => { 
  const { isUser } = useContext(isUserContext)
  const navigate = useNavigate()
  const { setClosed } = useContext(IsLogginedContext);
  const [next, setNext] = useState(true);
  const [uploadPod, setUploadPod] = useState(
    {
      userId: isUser,
      episodeImgPath: "",
      podcastName: "",
      podcastDescription: "",
      isMedia: "Audio",
      podcastCategory: "Culture",
      episodeName: "",
      episodeVideoPath: "",
      episodeDescription: ""
    }
  )
  const [preview, setPreview] = useState(
    {
      imgPreview: ""
    }
  )
  const handleUpload = async () => {
    for (let data in uploadPod) {
      if (!uploadPod[data]) {
        return toast.error(`${data} is missing!`, alert)
      }
    }
    let uploadPodData = new FormData();
    for (let data in uploadPod) {
      if (data === "episodeImgPath" || data === "episodeVideoPath") {
        uploadPodData.append(`imgAndVideo`, uploadPod[data])
      } else {
        uploadPodData.append(`${data}`, uploadPod[data])
      }
    }
    let resPod = await createPodcast(uploadPodData);
    if (resPod) {
      toast.success("Podcast uploaded!")
      navigate("/podcast/profile")
      setClosed("")
    } else {
      toast.warning("Something went wrong!")
    }
  }
  let uploadHandleChange = (e) => {
    let { value, name, files } = e.target;
    if (files) {
      setUploadPod({ ...uploadPod, [name]: files[0] });
      if (name === "episodeImgPath") {
        const imgUrl = URL.createObjectURL(files[0]);
        setPreview({ ...preview, imgPreview: imgUrl })
      }
    } else {
      console.log(value)

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
              {
                uploadPod.episodeImgPath ? (
                  <>
                    <img src={preview.imgPreview} alt="" />
                  </>
                ) :
                  (
                    <>
                      <span style={{ width: "40px" }}>{DashboardIcons.uploadIcon}</span>
                      <span>Click here to upload thumbnail</span>
                      <p>
                        <span>or</span>
                        <label for="inputUpload" >Browse Image</label>
                        <input name="episodeImgPath" id="inputUpload" type="file" style={{ display: "none" }} onChange={uploadHandleChange} />
                      </p>
                    </>
                  )
              }
            </div>
            <input name="podcastName" type="text" placeholder="Podcast-name*" value={uploadPod.podcastName} onChange={uploadHandleChange} />
            <textarea name="podcastDescription" placeholder="Podcast-descriptions* " value={uploadPod.podcastDescription} onChange={uploadHandleChange} id="" cols="20" rows="10" />

            <div className="upload-selection-box">
              <select name="isMedia" className="selection-box" value={uploadPod.isMedia} onChange={uploadHandleChange}  >
                <option value="Audio"  >Audio</option>
                <option value="Video">Video</option>
              </select>
              <select name="podcastCategory" className="selection-box" value={uploadPod.podcastCategory} onChange={uploadHandleChange}  >
                {
                  categories.map((_, i) => {
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
              <input name="episodeName" type="text" placeholder="Episode-name*" value={uploadPod.episodeName} onChange={uploadHandleChange} />
              <textarea name="episodeDescription" placeholder="Episode-descriptions* " id="" cols="20" rows="10" value={uploadPod.episodeDescription} onChange={uploadHandleChange} />
              <button >Delete</button>
              <div className="buttons">
                <button onClick={handlePrev}>Back</button>
                <button onClick={handleUpload}>Create</button>
              </div>
            </div>
          )
      }
    </div >
  )
}


export default Upload