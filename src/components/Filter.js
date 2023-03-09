function Filter(props) {
  return (
      <div className="filter-wrap">
        <div className="filter-title">{props.category}</div>
        <form name={props.category} >
          {props.items.map(item => (
              <span className="filter-item" key={item}>
            <input type="checkbox" />
            <label>{item}</label>
          </span>
          ))}
        </form>
      </div>
  );
}

export default Filter;
