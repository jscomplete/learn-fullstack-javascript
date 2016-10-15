import React from 'react';
import PropTypes from 'prop-types';
import ContestPreview from './ContestPreview';

const ContestList = ({ contests, onContestClick }) => (
  <div className="ContestList">
    {contests.map(contest =>
      <ContestPreview
        key={contest.id}
        onClick={onContestClick}
        {...contest} />
    )}
  </div>
);

ContestList.propTypes = {
  contests: PropTypes.array,
  onContestClick: PropTypes.func.isRequired,
};

export default ContestList;
