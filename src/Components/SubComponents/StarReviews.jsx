import ReactStars from "react-stars";

const StarReviews = ({ rating, size }) => {
    return (
        <ReactStars
            value={rating}
            size={size}
            color2={"#FFA000"}
            color1={"white"}
            half={true}
            edit={false}
        />
    )
}
const BadStarReviews = ({ rating, size }) => {
    return (
        <ReactStars
            value={rating}
            size={size}
            color2="#ff0000"
            color1={"white"}
            half={true}
            edit={false}
        />
    )
}

export default StarReviews;
export { BadStarReviews };