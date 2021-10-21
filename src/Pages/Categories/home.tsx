import React, { useEffect } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import CategorieCard from "../../components/Categorie/CategorieCard";
import { fetchAllCategory } from "../../redux/category/category_api_slice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import "./style.scss";

const Page2 = () => {
  const dispatch = useAppDispatch();

  const products = useAppSelector((state) => state.category.category);
  const user = useAppSelector((state) => state.auth.auth);
  const location = useLocation();
  const history = useHistory();
  useEffect(() => {
    dispatch(fetchAllCategory());
  }, []);
  return (
    <div>
      <div className="add-button">
        <button
          onClick={() => {
            history.push("/AddCategory");
          }}
        >
          Add new categorie
        </button>
      </div>
      <div className="text-xl mx-20">Existing Categories:</div>
      <div className="mx-12">
        {products.map((product) => {
          return (
            <CategorieCard
              image={product.image}
              name={product.title}
              description={product.description}
              categorie={product.title}
              clickAction={() => {
                history.push("/");
              }}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Page2;
