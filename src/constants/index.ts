// Copyright 2020-2021 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0

import { LogLevel } from 'amazon-chime-sdk-js';

export const AMAZON_CHIME_VOICE_CONNECTOR_PHONE_NUMDER = '+17035550122';

export const VIDEO_INPUT = {
  NONE: 'None',
  BLUE: 'Blue',
  SMPTE: 'SMPTE Color Bars',
};

export const AUDIO_INPUT = {
  NONE: 'None',
  440: '440 Hz',
};

export const MAX_REMOTE_VIDEOS = 25;

export const AVAILABLE_AWS_REGIONS = {
  'us-east-1': 'United States (N. Virginia)',
  'af-south-1': 'Africa (Cape Town)',
  'ap-northeast-1': 'Japan (Tokyo)',
  'ap-northeast-2': 'Korea (Seoul)',
  'ap-south-1': 'India (Mumbai)',
  'ap-southeast-1': 'Singapore',
  'ap-southeast-2': 'Australia (Sydney)',
  'ca-central-1': 'Canada',
  'eu-central-1': 'Germany (Frankfurt)',
  'eu-north-1': 'Sweden (Stockholm)',
  'eu-south-1': 'Italy (Milan)',
  'eu-west-1': 'Ireland',
  'eu-west-2': 'United Kingdom (London)',
  'eu-west-3': 'France (Paris)',
  'sa-east-1': 'Brazil (São Paulo)',
  'us-east-2': 'United States (Ohio)',
  'us-west-1': 'United States (N. California)',
  'us-west-2': 'United States (Oregon)',
};

export const VIDEO_INPUT_QUALITY = {
  '360p': '360p (nHD) @ 15 fps (600 Kbps max)',
  '540p': '540p (qHD) @ 15 fps (1.4 Mbps max)',
  '720p': '720p (HD) @ 15 fps (1.4 Mbps max)',
};

export const SDK_LOG_LEVELS = {
  debug: LogLevel.DEBUG,
  info: LogLevel.INFO,
  warn: LogLevel.WARN,
  error: LogLevel.ERROR,
  off: LogLevel.OFF,
};

export const DATA_MESSAGE_LIFETIME_MS = 300000;
export const DATA_MESSAGE_TOPIC = 'ChimeComponentLibraryDataMessage';

export const JOIN_INFO = {
      "Title": "pushpendughosh12345",
      "Meeting": {
        "MeetingId": "c9745b8f-f840-41bb-8a19-17fd9f430706",
        "ExternalMeetingId": "pushpendughosh12345",
        "MediaPlacement": {
          "AudioHostUrl": "f326e822051defdbb80addadb53f5664.k.m1.ao1.app.chime.aws:3478",
          "AudioFallbackUrl": "wss://haxrp.m1.ao1.app.chime.aws:443/calls/c9745b8f-f840-41bb-8a19-17fd9f430706",
          "ScreenDataUrl": "wss://bitpw.m1.ao1.app.chime.aws:443/v2/screen/c9745b8f-f840-41bb-8a19-17fd9f430706",
          "ScreenSharingUrl": "wss://bitpw.m1.ao1.app.chime.aws:443/v2/screen/c9745b8f-f840-41bb-8a19-17fd9f430706",
          "ScreenViewingUrl": "wss://bitpw.m1.ao1.app.chime.aws:443/ws/connect?passcode=null&viewer_uuid=null&X-BitHub-Call-Id=c9745b8f-f840-41bb-8a19-17fd9f430706",
          "SignalingUrl": "wss://signal.m1.ao1.app.chime.aws/control/c9745b8f-f840-41bb-8a19-17fd9f430706",
          "TurnControlUrl": "https://ccp.cp.ue1.app.chime.aws/v2/turn_sessions",
          "EventIngestionUrl": "https://data.svc.ue1.ingest.chime.aws/v1/client-events"
        },
        "MediaRegion": "ap-south-1"
      },
      "Attendee": {
        "ExternalUserId": "589ca482-4adb-45e9-8b87-e6ffbf9384f6",
        "AttendeeId": "f7a90f9d-f2cb-3e06-d53d-8caa8265106b",
        "JoinToken": "ZjdhOTBmOWQtZjJjYi0zZTA2LWQ1M2QtOGNhYTgyNjUxMDZiOjcyZDk4YWQxLTlkODEtNDVhYi04ZDEyLTc4OTg1Mjk0ZTdhMA"
  }
};
