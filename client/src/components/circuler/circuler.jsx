import DefaultIMG from "./../../Assets/proImg.jpg"
import { mediaURL } from "../../apis/auth"

export const Circuler = ({ img, width, height }) => {
  return (
    <div className="circulerContainer" style={{ overflow: "hidden", width: width ?? "50px", height: height ?? "50px", background: "rgba(120, 12, 12, 0.358)", borderRadius: "100%" }}>
      <img style={{ width: "100%", height: "100%", objectFit: "cover" }} src={img ? `${mediaURL}/${img}` : DefaultIMG} alt="" />
    </div>
  )
}
