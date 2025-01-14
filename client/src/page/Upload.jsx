import "../styles/upload.scss"
import { podcastCategories } from "../data/data"
import { useContext, useState } from "react";
import { OpenContext, UserContext } from "../context/context";
import { ToastContainer, toast } from 'react-toastify';
import { alert } from "../utils/alert";
import 'react-toastify/dist/ReactToastify.css';
import { createPodcast } from "../apis/upload";
import { useNavigate } from "react-router-dom";
import { RxCross2 } from "react-icons/rx";
import { MdCloudUpload } from "react-icons/md";
import { Button } from "../components/button/button";


const Upload = () => {
  const { closeUploadTab } = useContext(OpenContext)
  const { isUser } = useContext(UserContext)
  const navigate = useNavigate()
  const [next, setNext] = useState(true);
  const [uploadPod, setUploadPod] = useState(
    {
      userId: isUser ?? "",
      episodeImgPath: "",
      isMedia: "Audio",
      podcastCategory: "Culture",
      episodeName: "",
      episodeVideoPath: "",
      episodeDescription: ""
    }
  )
  const [preview, setPreview] = useState(
    {
      imgPreview: "",
      videoPreview: ""
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
      toast.success("Podcast uploaded!", alert)
      navigate("/podcast/profile")
      closeUploadTab();
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
      } else if (name === "episodeVideoPath") {
        const videoUrl = URL.createObjectURL(files[0]);
        setPreview({ ...preview, videoPreview: videoUrl })
      }
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

  const handleReset = () => {
    setUploadPod({
      userId: isUser,
      episodeImgPath: "",
      isMedia: "Audio",
      podcastCategory: "Culture",
      episodeName: "",
      episodeVideoPath: "",
      episodeDescription: ""
    })
  }

  return (
    <>
      <div className="uploadContainer">
        <div className="uploadVideoAudio">
          <div className="upload-1">
            <h2>Upload Podcast</h2>
            <span onClick={closeUploadTab}>
              <RxCross2 size={27} color="#a64d79" />
            </span>
          </div>
          {
            next ? (
              <div className="upload-container">
                <p>Podcast details:</p>
                <div className="file-upload">
                  {
                    uploadPod.episodeImgPath ? (
                      <img src={preview.imgPreview} alt="" />
                    ) :
                      (
                        <>
                          <span style={{ width: "40px" }}>
                            <MdCloudUpload size={60} color="#a64d79" />
                          </span>
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
                <div className="upload-selection-box">
                  <select name="isMedia" className="selection-box" value={uploadPod.isMedia} onChange={uploadHandleChange}  >
                    <option value="Audio"  >Audio</option>
                    <option value="Video">Video</option>
                  </select>
                  <select name="podcastCategory" className="selection-box" value={uploadPod.podcastCategory} onChange={uploadHandleChange}  >
                    {
                      podcastCategories.map(({ name }, i) => {
                        return <option key={i} value={name}>{name}</option>
                      })
                    }
                  </select>
                </div>
                <Button name={"Next"} btnClick={handleNext} />
              </div >
            )
              : (
                <div className="podVideoContainer">
                  <p>Episode details:</p>
                  <div className="file-upload">
                    {
                      uploadPod.episodeVideoPath ?
                        (
                          <video controls autoPlay>
                            <source src={preview.videoPreview} type="video/mp4" />
                            Your browser does not support the video tag.
                          </video>
                        ) : (
                          <>
                            <MdCloudUpload size={50} color="#a64d79" />
                            <span>Click here to upload episode!</span>
                            <p>
                              <label for="uploadVideo">Select audio/video</label>
                              <input name="episodeVideoPath" id="uploadVideo" type="file" style={{ display: "none" }} onChange={uploadHandleChange} />
                            </p>
                          </>
                        )
                    }
                  </div>
                  <input name="episodeName" type="text" placeholder="Episode-name*" value={uploadPod.episodeName} onChange={uploadHandleChange} />
                  <textarea name="episodeDescription" placeholder="Episode-descriptions* " id="" cols="20" rows="10" value={uploadPod.episodeDescription} onChange={uploadHandleChange} />
                  <Button name={"Reset"} btnClick={handleReset} />
                  <div className="buttons">
                    <Button name={"Back"} btnClick={handlePrev} />
                    <Button name={"Create"} btnClick={handleUpload} />
                  </div>
                </div>
              )
          }
        </div >
      </div>
      <ToastContainer />
    </>
  )
}

export default Upload