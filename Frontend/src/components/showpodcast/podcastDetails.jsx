import { useParams } from "react-router-dom";

const PodcastDetails = () => {
    const { id } = useParams();
    return (
        <div>{id}</div>
    )
}

export default PodcastDetails;