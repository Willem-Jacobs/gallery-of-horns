import Badge from "react-bootstrap/Badge";

const Favorite = (props) => {
  return (
    <i
      className="bi-suit-heart ml-2"
      style={{ fontSize: "2rem", color: "red" }}
      onClick={props.onClick}
    >
      <Badge className="ml-2" pill variant="info" style={{ color: "red" }}>
        {props.favoriteCounter ? props.favoriteCounter : ""}
      </Badge>
    </i>
  );
};

export default Favorite;
