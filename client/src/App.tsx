import { ReactElement, useEffect, useState } from "react";
import "./App.css";
import SearchBar from "./Components/SearchBar";
import Home from "./Components/Home";
import axios from "axios";
import ReactModal from "./Components/Modal";
import { useDebouncedCallback } from "use-debounce";
import {
  API_STATUS,
  params,
  getPicsArray,
  getItemFromLocalStorage,
} from "./utils/utils";

const App = (): ReactElement => {
  const [query, setQuery] = useState<string>("");
  const [suggestions, setSuggestions] = useState<any>([]);
  const [picsArray, setPicsArray] = useState<Array<string>>([]);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [picSrc, setPicSrc] = useState<string>("");
  const [apiStatus, setApiStatus] = useState<number>(0);

  useEffect(() => {
    const arr = getItemFromLocalStorage();
    setSuggestions(arr || []);
    axios
      .get(
        "https://www.flickr.com/services/rest/?method=flickr.photos.getRecent&",
        {
          params,
        }
      )
      .then((res: any) => {
        const tempArray = getPicsArray(res);
        setPicsArray(tempArray);
      });
  }, []);

  const getSearchResult = (value: string): void => {
    setApiStatus(API_STATUS.IN_PROGRESS);
    axios
      .get(
        `https://www.flickr.com/services/rest/?method=flickr.photos.search&tags=${value}`,
        {
          params,
        }
      )
      .then((res: any) => {
        const tempArray = getPicsArray(res);
        setPicsArray(tempArray);
        setApiStatus(API_STATUS.SUCCESS);
      });
  };

  const onClearSuggestion = (): void => {
    window.localStorage.removeItem("mindpeers");
    setSuggestions([]);
  };

  useEffect(() => {
    if (query === "") {
      setPicsArray([]);
    } else {
      getSearchResult(query);
      const arr: Array<string> = getItemFromLocalStorage();
      arr.push(query);
      window.localStorage.setItem("mindpeers", JSON.stringify(arr));
    }
  }, [query, suggestions]);

  const handleSuggestionListClick = (value: string): void => {
    getSearchResult(value);
  };

  // delaying the API call
  const debounced = useDebouncedCallback((value) => {
    setQuery(value);
  }, 500);

  return (
    <div className="App">
      <SearchBar
        onChange={(val: string) => {
          debounced(val);
        }}
        suggestions={suggestions}
        handleSuggestionListClick={handleSuggestionListClick}
        onClearSuggestion={onClearSuggestion}
      />
      <Home
        picsArray={picsArray}
        setIsModalOpen={setIsModalOpen}
        setPicSrc={setPicSrc}
        apiStatus={apiStatus}
      />
      <ReactModal
        isModalOpen={isModalOpen}
        onRequestClose={(): void => setIsModalOpen(false)}
        src={picSrc}
      />
    </div>
  );
};

export default App;
