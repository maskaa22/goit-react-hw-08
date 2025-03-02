import { useId } from "react";
import css from "./SearchBox.module.css";

import { useDispatch } from "react-redux";
import { changeFilter } from "../../redux/filters/slice";

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
