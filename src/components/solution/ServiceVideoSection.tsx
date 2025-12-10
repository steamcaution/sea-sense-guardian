import { useState } from 'react';
import {
  InfoColumn,
  VideoServiceInner,
  VideoLayout,
  VideoServiceWrapper,
  ServiceSubtitle,
  ServiceTitle,
  TabButton,
  TabButtonGroup,
  VideoColumn,
  VideoInfoCard,
  VideoInfoDesc,
  VideoInfoIcon,
  VideoInfoPoint,
  VideoInfoPoints,
  VideoInfoTitle,
  VideoWrapper
} from '@/styles/solution.styles';
import { getAssetPath } from '@/lib/getAssertPath';

interface VideoData {
  id: number;
  icon: string;
  label: string;
  title: string;
  description: string;
  points: string[];
  videoUrl: string;
}

const videoDataList: VideoData[] = [
  {
    id: 1,
    icon: '🚁',
    label: '드론 출동',
    title: '가장 가까운 드론 자동 선택 및 출동',
    description:
      '조난 신고가 들어오는 순간, 시스템이 가장 가까운 드론을 자동으로 선택하고 최단 경로로 현장으로 이동합니다.',
    points: [
      '자동 드론 선택 알고리즘으로 출동 시간 단축',
      '실시간 기상 정보를 반영한 경로 최적화',
      '다중 드론 동시 운영으로 대응력 극대화'
    ],
    videoUrl: '/videos/service_video1.mp4'
  },
  {
    id: 2,
    icon: '📍',
    label: '위치 특정',
    title: '드론 영상을 통한 정확한 위치 파악',
    description:
      '드론이 현장에 도착하면 고해상도 카메라와 센서를 통해 조난자의 정확한 위치와 주변 상황을 실시간으로 파악합니다.',
    points: [
      '4K 고해상도 영상으로 세부 상황 확인',
      'GPS/지자기 센서로 정확한 좌표 계산',
      '실시간 스트리밍으로 관제사가 즉시 판단'
    ],
    videoUrl: '/videos/service_video2.mp4'
  },
  {
    id: 3,
    icon: '🛟',
    label: '구조선 출동',
    title: '정확한 위치 정보로 신속한 구조선 출동',
    description:
      '드론이 확보한 정확한 좌표와 현장 영상 정보를 구조선에 전송하여, 최적 경로로 빠르게 도착할 수 있도록 돕습니다.',
    points: [
      '실시간 좌표 공유로 구조선 출동 지연 최소화',
      '해류, 풍향 등 환경 정보 함께 제공',
      '도착 시간 단축으로 인명 구조 확률 대폭 상승'
    ],
    videoUrl: '/videos/service_video3.mp4'
  }
];

export const ServiceVideoSection = () => {
  const [activeVideoId, setActiveVideoId] = useState(1);
  const activeVideo = videoDataList.find(v => v.id === activeVideoId);

  return (
    <VideoServiceWrapper>
      <VideoServiceInner>
        {/* 헤더 */}
        <div style={{ marginBottom: '40px', textAlign: 'center' }}>
          <ServiceTitle>골든 타임을 지키는 드론 인명 구조</ServiceTitle>
          <ServiceSubtitle>
            조난 발생 즉시 드론이 먼저 출동해 정확한 위치를 확보하고, 구조선이 최단 시간에 도착하도록 돕습니다.
          </ServiceSubtitle>
        </div>

        <VideoLayout>
          <VideoColumn>
            <VideoWrapper>
              <video key={activeVideo.id} autoPlay muted loop playsInline>
                <source src={getAssetPath(activeVideo.videoUrl)} type="video/mp4" />
                브라우저가 영상을 지원하지 않습니다.
              </video>
            </VideoWrapper>

            <TabButtonGroup>
              {videoDataList.map((video, index) => (
                <TabButton
                  key={`video_${video.id}${index}`}
                  isActive={activeVideoId === video.id}
                  onClick={() => setActiveVideoId(video.id)}
                >
                  {video.label}
                </TabButton>
              ))}
            </TabButtonGroup>
          </VideoColumn>

          {/* 오른쪽: 정보 */}
          <InfoColumn>
            <VideoInfoCard>
              <VideoInfoIcon>{activeVideo.icon}</VideoInfoIcon>
              <VideoInfoTitle>{activeVideo.title}</VideoInfoTitle>
              <VideoInfoDesc>{activeVideo.description}</VideoInfoDesc>
              <VideoInfoPoints>
                {activeVideo.points.map(point => (
                  <VideoInfoPoint key={activeVideo.id}>{point}</VideoInfoPoint>
                ))}
              </VideoInfoPoints>
            </VideoInfoCard>

            {/* 최종 결과 강조 */}
            <div
              style={{
                padding: '20px',
                background: '#f0f8f4',
                borderRadius: '12px',
                border: '1px solid #d4edda'
              }}
            >
              <p style={{ fontSize: '14px', fontWeight: '600', color: '#1b5e20', margin: '0 0 8px 0' }}>
                ✅ 초동 시간 단축
              </p>
              <p style={{ fontSize: '13px', color: '#2e7d32', lineHeight: '1.6', margin: 0 }}>
                인명 구조 확률을 극대화합니다. 드론의 신속한 출동과 정확한 위치 파악으로 골든 타임을 확보합니다.
              </p>
            </div>
          </InfoColumn>
        </VideoLayout>
      </VideoServiceInner>
    </VideoServiceWrapper>
  );
};
