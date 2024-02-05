import "../Scss-files/Component/card.scss"
export const Card = () => {
  return (
    <div className="card-container">
      <div className="img"></div>
      <b>This American Life</b>
      <p>This american Life is a Podcast that expolores diffrent expects of life and adventures</p>
      <div className="card-thumbnail-icon">
        <div className="icon-thumbnail">
          <div className="img"></div>
          <span>upasana</span>
        </div>
        <ul>
          <li>55 views</li>
        </ul>
      </div>
    </div>
  )
}