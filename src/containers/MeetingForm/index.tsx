// Copyright 2020-2021 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0

import React, { ChangeEvent, useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import {
  DeviceLabels,
  Flex,
  FormField,
  Heading,
  Input,
  Modal,
  ModalBody,
  ModalHeader,
  PrimaryButton,
  Select,
  useMeetingManager,
} from 'amazon-chime-sdk-component-library-react';
import {
  MeetingSessionConfiguration,
} from 'amazon-chime-sdk-js';

import { getErrorContext } from '../../providers/ErrorProvider';
import routes from '../../constants/routes';
import Card from '../../components/Card';
import DevicePermissionPrompt from '../DevicePermissionPrompt';
import { useAppState } from '../../providers/AppStateProvider';
import { MeetingMode, VideoFiltersCpuUtilization } from '../../types';
import { MeetingManagerJoinOptions } from 'amazon-chime-sdk-component-library-react/lib/providers/MeetingProvider/types';
import meetingConfig from '../../meetingConfig';
import { JOIN_INFO } from '../../constants';

const VIDEO_TRANSFORM_FILTER_OPTIONS = [
  { value: VideoFiltersCpuUtilization.Disabled, label: 'Disable Video Filter' },
  {
    value: VideoFiltersCpuUtilization.CPU10Percent,
    label: 'Video Filter CPU 10%',
  },
  {
    value: VideoFiltersCpuUtilization.CPU20Percent,
    label: 'Video Filter CPU 20%',
  },
  {
    value: VideoFiltersCpuUtilization.CPU40Percent,
    label: 'Video Filter CPU 40%',
  },
];

const MeetingForm: React.FC = () => {
  const meetingManager = useMeetingManager();
  const {
    meetingId,
    meetingMode,
    enableSimulcast,
    priorityBasedPolicy,
    keepLastFrameWhenPaused,
    isWebAudioEnabled,
    videoTransformCpuUtilization: videoTransformCpuUtilization,
    setJoinInfo,
    setMeetingMode,
    setMeetingId,
    setLocalUserName,
    setRegion,
  } = useAppState();
  const { errorMessage, updateErrorMessage } = useContext(getErrorContext());
  const history = useHistory();


  useEffect(()=>{
    handleJoinMeeting();
  },[])

  const handleJoinMeeting = async () => {

    try {
      const JoinInfo:any = {...JOIN_INFO}
      console.log('Meeting Join Info', JoinInfo);
      setJoinInfo(JoinInfo);
      setMeetingId(JoinInfo.Meeting.MeetingId);
      setLocalUserName('Pushpendu Ghosh');
      const meetingSessionConfiguration:any = new MeetingSessionConfiguration(
        JoinInfo?.Meeting,
        JoinInfo?.Attendee
      );
      if (
        meetingConfig.postLogger &&
        meetingSessionConfiguration.meetingId &&
        meetingSessionConfiguration.credentials &&
        meetingSessionConfiguration.credentials.attendeeId
      ) {
        const existingMetadata = meetingConfig.postLogger.metadata;
        meetingConfig.postLogger.metadata = {
          ...existingMetadata,
          meetingId: meetingSessionConfiguration.meetingId,
          attendeeId: meetingSessionConfiguration.credentials.attendeeId,
        };
      }

      setRegion(JoinInfo.Meeting.MediaRegion);
      meetingSessionConfiguration.enableSimulcastForUnifiedPlanChromiumBasedBrowsers = enableSimulcast;
      if (priorityBasedPolicy) {
        meetingSessionConfiguration.videoDownlinkBandwidthPolicy = priorityBasedPolicy;
      }
      meetingSessionConfiguration.keepLastFrameWhenPaused = keepLastFrameWhenPaused;
      const options: MeetingManagerJoinOptions = {
        deviceLabels:
          meetingMode === MeetingMode.Spectator
            ? DeviceLabels.None
            : DeviceLabels.AudioAndVideo,
        enableWebAudio: isWebAudioEnabled,
      };

      await meetingManager.join(meetingSessionConfiguration, options);
      if (meetingMode === MeetingMode.Spectator) {
        await meetingManager.start();
        history.push(`${routes.MEETING}/${meetingId}`);
      } else {
        setMeetingMode(MeetingMode.Attendee);
        history.push(routes.DEVICE);
      }
    } catch (error) {
      updateErrorMessage((error as Error).message);
    }
  };

  const closeError = (): void => {
    updateErrorMessage('');
    setMeetingId('');
    setLocalUserName('');
  };

  return (
    <form>
      <Heading tag="h1" level={4} css="margin-bottom: 1rem">
        Join a meeting
      </Heading>
      {errorMessage && (
        <Modal size="md" onClose={closeError}>
          <ModalHeader title={`Meeting ID: ${meetingId}`} />
          <ModalBody>
            <Card
              title="Unable to join meeting"
              description="There was an issue finding that meeting. The meeting may have already ended, or your authorization may have expired."
              smallText={errorMessage}
            />
          </ModalBody>
        </Modal>
      )}
      <DevicePermissionPrompt />
    </form>
  );
};

export default MeetingForm;
