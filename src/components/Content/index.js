import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getItemList } from "../../actions";
import Cards from "../Card";

const Content = () => {
  const item = useSelector((state) => state.item);
  const itemError = useSelector((state) => state.itemError);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getItemList());
  }, []);

  return (
    <div className="container">
      <div className="row">
        {item.map((item) => (
          <div
            className="col-lg-3 col-sm-12 col-md-6 col-xs-12 mt-5"
            key={Math.random()}
          >
            <Cards item={item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Content;
