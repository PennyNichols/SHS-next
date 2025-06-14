import React from 'react';
import ActionButton from '../ReusableComponents/ActionButton/ActionButton';
import { GOOGLE_REVIEW_URL, REVIEW_BUTTON_TEXT } from '../../constants/companyDetails';
import { RateReview } from '@mui/icons-material';

const ReviewButton = () => {
  return <ActionButton text={REVIEW_BUTTON_TEXT} path={GOOGLE_REVIEW_URL} icon={<RateReview />} darkBackground />;
};

export default ReviewButton;
