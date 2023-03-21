import {useRecoilState} from "recoil";
import {FilterState} from "store/filterState";
import * as S from "./styles";

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
      <div>
        <S.FilterTitle>{props.name}</S.FilterTitle>
        <S.LabelWrap name={props.category}>
          {props.items.map(item => (
              <span key={item} onClick={(e) => handleFilterItems(e)}>
               <S.Checkbox label={item} id={item} />
               <S.Label htmlFor={item}>{item}</S.Label>
              </span>
          ))}
        </S.LabelWrap>
      </div>
  );
}

export default Filter;
