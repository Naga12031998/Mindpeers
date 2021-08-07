import {
  ReactElement,
  useState,
  ChangeEvent,
  KeyboardEvent,
  useRef,
  MutableRefObject,
} from "react";
import {
  SearchBarWrapper,
  Input,
  IconImage,
  RightSide,
  SuggestionBox,
  Div,
  H1,
  H6,
} from "../StyledComponents/index";
import { SearchBarProps } from "../types/index";

const SearchBar = (props: SearchBarProps): ReactElement => {
  const {
    suggestions,
    onChange,
    handleSuggestionListClick,
    onClearSuggestion,
  } = props;
  const [q, setQ] = useState<string>("");
  const [active, setActive] = useState<number>(0);
  const scrollRef = useRef() as MutableRefObject<HTMLInputElement>;

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setQ(e.target.value);
    onChange(e.target.value);
  };

  const handleClear = (): void => {
    setQ("");
  };

  const handleChangeActiveSuggestions = (
    e: KeyboardEvent<HTMLInputElement>
  ): void => {
    switch (e.keyCode) {
      case 40: {
        if (active >= suggestions.length) {
          setActive(0);
        } else {
          setActive((prev) => prev + 1);
        }
        if (active > 4) {
          if (scrollRef && scrollRef.current) {
            scrollRef.current.scrollTop += 30;
          }
        }
        break;
      }
      case 38: {
        if (active === 1) {
          setActive(0);
        } else if (active <= 0) {
          setActive(suggestions.length);
        } else {
          setActive((prev) => prev - 1);
        }
        break;
      }
      case 13: {
        handleSuggestionListClick(suggestions[active - 1]);
        break;
      }
      default: {
        return;
      }
    }
  };

  return (
    <Div className="container">
      <H1>Search Photos</H1>
      <SearchBarWrapper onKeyUp={handleChangeActiveSuggestions}>
        <IconImage
          src="https://image.flaticon.com/icons/png/512/49/49116.png"
          alt="icon"
          padding
        />
        <Input value={q} onChange={handleChange} />
        <RightSide>{q && <H6 onClick={handleClear}>X</H6>}</RightSide>
        {q && suggestions.length ? (
          <IconImage
            src="https://image.flaticon.com/icons/png/512/66/66934.png"
            alt="clear"
            onClick={(): void => onClearSuggestion()}
          />
        ) : null}
      </SearchBarWrapper>
      {q && (
        <SuggestionBox
          ref={scrollRef}
          length={suggestions.length}
          active={active}
        >
          {suggestions.map((item, index) => (
            <H6
              key={item}
              onMouseOver={(): void => setActive(index + 1)}
              onClick={(): void => handleSuggestionListClick(item)}
            >
              {item}
            </H6>
          ))}
        </SuggestionBox>
      )}
      <Div style={{ margin: "10px" }} />
    </Div>
  );
};

export default SearchBar;
