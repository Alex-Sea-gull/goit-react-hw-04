import s from "./SearchBox.module.css";

const SearchBox = ({ filterContact, onChange }) => {
  return (
    <div className={s.wrapperSearchBox}>
      <form className={s.formSearchBox}>
        <label className={s.labelSearchBox}>Find contacts by name</label>
        <input
          className={s.inputSearchBox}
          type="text"
          value={filterContact}
          onChange={onChange}
        />
      </form>
    </div>
  );
};

export default SearchBox;
