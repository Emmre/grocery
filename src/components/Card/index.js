import React, { Fragment, useState } from "react";
import { Card, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getPieceList } from "../../actions";
import s from "./Card.module.css";

const Cards = ({ item }) => {
  const [piece, setPiece] = useState(0);
  const [arr, setArr] = useState([])

  const dispatch = useDispatch();

  const handleChange = (e) => {
    setPiece(e.target.value);
  };

  const getPrice = () => {
    const pricePiece = piece * item.price;
    setArr([pricePiece])
    dispatch(getPieceList(arr));
  };
  console.log(arr,'2');
  
  return (
    <>
      <Card className={s.card}>
        <Card.Img className={s.cardImage} variant="top" src={item.image} />
        <Card.Body>
          <Card.Title className={s.cardTitle}>{item.name}</Card.Title>
          <Card.Text as="h1" className={s.cardText}>
            ${item.price}
          </Card.Text>
          <div className={s.buttonGroup}>
            <Button className={s.item} onClick={() => setPiece(piece - 1)}>
              -
            </Button>
            <input
              type="text"
              name="piece"
              value={piece}
              onChange={handleChange}
              placeholder="0"
            />
            <Button className={s.item} onClick={() => setPiece(piece + 1)}>
              +
            </Button>
          </div>
          <Button className={s.cardLink} onClick={getPrice}>
            ADD TO CARD
          </Button>
        </Card.Body>
      </Card>
    </>
  );
};

export default Cards;
