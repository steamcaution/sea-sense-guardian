import { useRef, useState, useEffect } from 'react';
import {
  ProblemSectionWrapper,
  ProblemContainer,
  ProblemTitle,
  ProblemsGrid,
  ProblemCard,
  CardIcon,
  CardTitle,
  CardContent
} from '@/styles/solution.styles';

const problems = [
  {
    id: 1,
    icon: '👤',
    title: '인력의 한계',
    items: ['제한된 관제 인력으로 전국 해역을 24시간 모니터링하기 어려움']
  },
  {
    id: 2,
    icon: '⚙️',
    title: '기술의 한계',
    items: ['주로 "현재 상황 모니터링"과 "사후 대응"에만 초점', '데이터 기반 "예측"과 "자동 의사결정 지원" 부족']
  },
  {
    id: 3,
    icon: '⏱️',
    title: '시간의 한계',
    items: ['악천후·야간에는 실시간 감시 품질 급격히 하락', '초동 대응까지 평균 30분 이상 소요']
  }
];

export const ProblemSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.3
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  return (
    <ProblemSectionWrapper ref={containerRef}>
      <ProblemContainer>
        <ProblemTitle>
          해양 관제 시스템의 <span>필요성</span>
        </ProblemTitle>

        <ProblemsGrid>
          {problems.map((problem, index) => (
            <ProblemCard key={`problem_${problem.id}`} isVisible={isVisible} delay={index}>
              <CardIcon>{problem.icon}</CardIcon>
              <CardTitle>{problem.title}</CardTitle>
              <CardContent>
                {problem.items.map(item => (
                  <li key={`problem_content_${problem.id}`}>{item}</li>
                ))}
              </CardContent>
            </ProblemCard>
          ))}
        </ProblemsGrid>
      </ProblemContainer>
    </ProblemSectionWrapper>
  );
};
