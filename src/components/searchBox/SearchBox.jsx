import { useId } from "react";
import css from "./SearchBox.module.css";
import { changeFilter } from "../../redux/filtersSlice";
import { useDispatch } from "react-redux";

export default function SearchBox() {
  const dispatch = useDispatch();

  const filterId = useId();
  return (
    <div className={css.container}>
      <label name="filters" htmlFor={filterId}>
        Find contacts by name
      </label>
      <input
        name="filters"
        onChange={(e) => dispatch(changeFilter(e.target.value))}
        id={filterId}
        className={css.search}
      />
    </div>
  );
}
