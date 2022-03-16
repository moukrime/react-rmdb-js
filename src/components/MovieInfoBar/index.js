import React from "react";
import PropTypes from "prop-types";

// Helper
import { calcTime, convertMoney } from "../../helpers";

// styles
import { Content, Wrapper } from "./MovieInfoBar.styles";

const MovieInfoBar = ({ time, budget, revenue }) => (
  <Wrapper>
    <Content>
      <div className="colum">
        <p>Running Time:{calcTime(time)}</p>
      </div>
      <div className="colum">
        <p>Budget:{convertMoney(budget)}</p>
      </div>
      <div className="colum">
        <p>Revenue:{convertMoney(revenue)}</p>
      </div>
    </Content>
  </Wrapper>
);

MovieInfoBar.propTypes = {
  time: PropTypes.number,
  budget: PropTypes.number,
  revenue: PropTypes.number,
};
export default MovieInfoBar;
