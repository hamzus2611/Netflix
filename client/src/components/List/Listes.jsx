import { useRef, useState } from "react";
import ListItem from "../ListItem/ListItem";
import "./list.scss";
import {
  ArrowBackIosOutlined,
  ArrowForwardIosOutlined,
} from "@mui/icons-material";

function Listes({ list }) {
  const listRef = useRef();
  const [IsMoved, setIsMoved] = useState(false);
  const [SlideNumber, setSlideNumber] = useState(0);
  const handleClick = (direction) => {
    let distance = listRef.current.getBoundingClientRect().x - 50;
    setIsMoved(true);
    if (direction === "left" && SlideNumber > 0) {
      listRef.current.style.transform = `translateX(${230 + distance}px)`;
      setSlideNumber(SlideNumber - 1);
    }
    if (direction === "right" && SlideNumber < 5) {
      listRef.current.style.transform = `translateX(${-230 + distance}px)`;
      setSlideNumber(SlideNumber + 1);
    }
    console.log(distance);
  };
  return (
    <div className="list">
      <span className="listTitle">{list.title}</span>
      {console.log(list)}
      <div className="wapper">
        <ArrowBackIosOutlined
          className="Arrow left"
          onClick={() => handleClick("left")}
          style={{ dispaly: !IsMoved && "none" }}
        />
        <div className="container" ref={listRef}>
          {list.content.map((el, index) => (
            <ListItem index={index} item={el} key={index} />
          ))}
        </div>
        <ArrowForwardIosOutlined
          className="Arrow right"
          onClick={() => handleClick("right")}
        />
      </div>
    </div>
  );
}

export default Listes;
