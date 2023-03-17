// Copyright 2020-2021 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0

import React from 'react';
import MeetingForm from '../MeetingForm';
import SIPMeeting from '../SIPMeeting';
import useToggle from '../../hooks/useToggle';
import SIPMeetingProvider from '../../providers/SIPMeetingProvider';
import { StyledDiv, StyledWrapper } from './Styled';

const MeetingFormSelector: React.FC = () => {
  const { isActive } = useToggle(false);
  const formToShow = isActive ? (
    <SIPMeetingProvider>
      <SIPMeeting />
    </SIPMeetingProvider>
  ) : (
    <MeetingForm />
  );
  
  return (
    <StyledWrapper>
      <StyledDiv>{formToShow}</StyledDiv>
    </StyledWrapper>
  );
};

export default MeetingFormSelector;
