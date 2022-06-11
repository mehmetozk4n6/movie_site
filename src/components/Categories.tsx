import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { getGenres, selectGenres } from "../redux/moviesSlice";
import Category from "./Category";

const Categories: React.FC = () => {
  const genres = useAppSelector(selectGenres);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getGenres());
  }, []);

  return (
    <div>
      {genres?.map((category, index: number) => (
        <Category id={category.id} name={category.name} key={index} />
      ))}
    </div>
  );
};

export default Categories;
