import { ReactElement } from "react";
import { ImageWrapper, Div } from "../StyledComponents/index";
import { HomeProps } from "../types/index";
import Spinner from "./Spinner";
import { API_STATUS } from "../utils/utils";

const Home = (props: HomeProps): ReactElement => {
  const { picsArray, setIsModalOpen, setPicSrc, apiStatus } = props;

  if (!picsArray.length || apiStatus === API_STATUS.IN_PROGRESS) {
    return <Spinner />;
  }

  return (
    <Div className="container">
      <Div className="row">
        {picsArray.map((i, index) => (
          <ImageWrapper
            key={i}
            className="col-lg-4 col-sm-12 col-md-6"
            onClick={(): void => {
              setIsModalOpen(true);
              setPicSrc(i);
            }}
          >
            <img src={i} alt={`0${index}`} width="200px" />
          </ImageWrapper>
        ))}
      </Div>
    </Div>
  );
};

export default Home;
