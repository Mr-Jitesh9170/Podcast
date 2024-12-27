
export const Circuler = ({ img, width, height }) => {
  return (
    <div className="circulerContainer" style={{ overflow: "hidden", width: width ?? "50px", height: height ?? "50px", background: "rgba(120, 12, 12, 0.358)", borderRadius: "100%" }}>
      <img style={{ width: "100%", height: "100%", objectFit: "cover" }} src={img ? `http://localhost:8080/${img}` : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"} alt="" />
    </div>
  )
}
