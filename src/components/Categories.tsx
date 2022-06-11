import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { getGenres, selectGenres } from "../redux/moviesSlice";
import Category from "./Category";

const Categories: React.FC = () => {
  const genres = useAppSelector(selectGenres);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (genres?.length < 1) {
      dispatch(getGenres());
    }
  }, [genres, dispatch]);

  return (
    <div>
      {genres?.map(
        (category: any, index: number) =>
          //  broken images in 10770  category.id
          category.id !== 10770 && (
            <Category id={category.id} name={category.name} key={index} />
          )
      )}
    </div>
  );
};

export default Categories;
