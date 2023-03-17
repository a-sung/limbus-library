import {useRecoilState} from "recoil";
import {FilterState} from "store/filterState";

function Filter(props) {
  const [filters, setFilters] = useRecoilState(FilterState);
  const handleFilterItems = (e) => {
    if (e.target.id === '') return;

    let newFilters = { ...filters };
    const hasItem = newFilters[props.category].find(item => item === e.target.id);

    newFilters[props.category] =
        hasItem
        ? newFilters[props.category].filter(item => item !== e.target.id)
        : [...newFilters[props.category], e.target.id];

    setFilters(newFilters);
  }

  return (
      <div className="filter-wrap">
        <div className="filter-title">{props.name}</div>
        <form name={props.category} >
          {props.items.map(item => (
              <span className="filter-item" key={item} onClick={(e) => handleFilterItems(e)}>
               <input type="checkbox" label={item} id={item} />
               <label for={item}>{item}</label>
              </span>
          ))}
        </form>
      </div>
  );
}

export default Filter;
