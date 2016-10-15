import React from 'react';
import ContestPreview from './ContestPreview';

const ContestList = ({ contests, onContestClick }) => (
  <div className="ContestList">
    {Object.keys(contests).map(contestId =>
      <ContestPreview
        key={contestId}
        onClick={onContestClick}
        {...contests[contestId]} />
    )}
  </div>
);

ContestList.propTypes = {
  contests: React.PropTypes.object,
  onContestClick: React.PropTypes.func.isRequired,
};

export default ContestList;
