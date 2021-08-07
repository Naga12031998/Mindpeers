export type SearchBarProps = {
  onChange: Function;
  suggestions: Array<any>;
  handleSuggestionListClick: Function;
  onClearSuggestion: Function
};

export type SuggestionBoxProps = {
  active: number;
  length: number;
};

export type ModalProps = {
  isModalOpen: boolean;
  onRequestClose: Function;
  src: string;
};

export type HomeProps = {
  picsArray: Array<string>;
  setIsModalOpen: Function;
  setPicSrc: Function;
  apiStatus: number;
};

export type IconImageProps = {
  padding?: boolean;
};
