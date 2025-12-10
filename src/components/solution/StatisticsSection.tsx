import { useEffect, useState } from 'react';
import ExcelJS from 'exceljs';
import {
  ChartContainer,
  ChartsGrid,
  ChartWrapper,
  ErrorMessage,
  LoadingMessage,
  StatisticsInner,
  StatisticsSectionWrapper
} from '@/styles/solution.styles';
import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  type ChartData,
  type ChartOptions,
  Filler,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Title as ChartTitle,
  Tooltip
} from 'chart.js';
import { Chart, Line } from 'react-chartjs-2';
import { getAssetPath } from '@/lib/getAssertPath';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ChartTitle,
  Tooltip,
  Legend,
  Filler
);

type MixedChartType = 'bar' | 'line';
type MixedChartData = ChartData<MixedChartType, number[], string>;
type LineChartData = ChartData<'line', number[], string>;

const safeStringValue = (value: unknown): string => {
  if (value === null || value === undefined) return '';
  if (typeof value === 'string') return value;
  if (typeof value === 'number') return String(value);
  if (typeof value === 'boolean') return String(value);
  return '';
};

const baseColors = {
  barBlue: 'rgba(10, 38, 71, 0.8)',
  barTeal: 'rgba(44, 116, 179, 0.8)',
  lineWhite: '#e74c3c',
  lineAccent: '#e74c3c'
};

const baseChartOptions: ChartOptions<'line' | 'bar'> = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      labels: {
        color: '#252525',
        font: { size: 12 },
        usePointStyle: true,
        boxWidth: 30,
        boxHeight: 4
      }
    },
    tooltip: {
      backgroundColor: 'rgba(255, 255, 255, 0.9)',
      titleColor: '#252525',
      bodyColor: '#252525',
      borderWidth: 1,
      padding: 12
    }
  },
  scales: {
    y: {
      grid: { color: 'rgba(255, 255, 255, 0.06)' },
      ticks: {
        color: '#252525'
      },
      beginAtZero: true
    },
    x: {
      grid: {
        display: false
      },
      ticks: {
        color: '#252525'
      }
    }
  }
};

/**
 * 엑셀 → JSON 배열 변환
 * 1행 = 헤더, 2행~ = 데이터
 */
const parseExcelSheet = (worksheet: ExcelJS.Worksheet): any[] => {
  const jsonData: any[] = [];
  let headers: string[] = [];

  worksheet.eachRow((row, rowNumber) => {
    if (rowNumber === 1) {
      headers = (row.values as any[])?.slice(1).map(safeStringValue) || [];
    } else {
      const obj: Record<string, unknown> = {};
      const values = row.values as any[];

      headers.forEach((header, index) => {
        obj[header] = values?.[index + 1];
      });

      if (Object.keys(obj).length > 0) {
        jsonData.push(obj);
      }
    }
  });

  return jsonData;
};

/**
 * 연도별 해양사고 엑셀 가공
 * - 첫 컬럼: 연도(labels)
 * - 나머지:
 *   * 앞 2개: 막대(bar)
 *   * 이후: 선(line)
 */
const processAccidentData = (jsonData: any[]): MixedChartData => {
  if (jsonData.length === 0) return { labels: [], datasets: [] };

  const firstKey = Object.keys(jsonData[0])[0];
  const labels = jsonData.map(row => String(row[firstKey]));
  const dataKeys = Object.keys(jsonData[0]).slice(1);

  const barKeys = dataKeys.slice(0, 2);
  const lineKeys = dataKeys.slice(2);

  const barDatasets = barKeys.map((key, index) => {
    const color = index === 0 ? baseColors.barBlue : baseColors.barTeal;
    return {
      type: 'bar' as const,
      label: key,
      data: jsonData.map(row => Number(row[key] || 0)),
      backgroundColor: color,
      borderRadius: 2,
      borderSkipped: false,
      order: 1
    };
  });

  const lineDatasets = lineKeys.map(key => {
    const color = baseColors.lineAccent;
    return {
      type: 'line' as const,
      label: key,
      data: jsonData.map(row => Number(row[key] || 0)),
      borderColor: color,
      backgroundColor: 'transparent',
      tension: 0.25,
      borderWidth: 2,
      pointBackgroundColor: '#ffffff',
      pointBorderColor: color,
      pointRadius: 4,
      pointHoverRadius: 6,
      pointBorderWidth: 2,
      yAxisID: 'y',
      order: 0
    };
  });

  return {
    labels,
    datasets: [...barDatasets, ...lineDatasets]
  };
};

/**
 * 연도별 인명피해 엑셀 가공
 * - 첫 컬럼: 연도(labels)
 * - 나머지 전체: 선(line) 그래프
 */
const processCasualtyData = (jsonData: any[]): LineChartData => {
  if (jsonData.length === 0) return { labels: [], datasets: [] };

  const firstKey = Object.keys(jsonData[0])[0];
  const labels = jsonData.map(row => String(row[firstKey]));
  const dataKeys = Object.keys(jsonData[0]).slice(1);

  const colors = ['#2C74B3', '#0A2647', '#e74c3c'];

  const datasets = dataKeys.map((key, index) => {
    const color = colors[index % colors.length];
    const isTotal = index === 2;

    return {
      type: 'line' as const,
      label: key,
      data: jsonData.map(row => Number(row[key] || 0)),
      borderColor: color,
      backgroundColor: 'transparent',
      tension: 0.25,
      borderWidth: 2,
      pointBackgroundColor: '#ffffff',
      pointBorderColor: color,
      pointRadius: 4,
      pointHoverRadius: 6,
      pointBorderWidth: 2,
      borderDash: isTotal ? [4, 4] : undefined
    };
  });

  return { labels, datasets };
};

export const StatisticsSection = () => {
  const [accidentData, setAccidentData] = useState<MixedChartData | null>(null);
  const [casualtyData, setCasualtyData] = useState<LineChartData | null>(null);

  const [loadingAccident, setLoadingAccident] = useState(true);
  const [loadingCasualty, setLoadingCasualty] = useState(true);

  const [errorAccident, setErrorAccident] = useState<string | null>(null);
  const [errorCasualty, setErrorCasualty] = useState<string | null>(null);

  useEffect(() => {
    const loadAccident = async () => {
      try {
        const res = await fetch(getAssetPath('/excel/연도별통계_해양사고.xlsx'));
        const buffer = await res.arrayBuffer();
        const workbook = new ExcelJS.Workbook();
        await workbook.xlsx.load(buffer);

        const sheet = workbook.worksheets[0];
        const json = parseExcelSheet(sheet);
        setAccidentData(processAccidentData(json));
      } catch (e) {
        console.error(e);
        setErrorAccident('해양사고 데이터를 불러오지 못했습니다.');
      } finally {
        setLoadingAccident(false);
      }
    };

    const loadCasualty = async () => {
      try {
        const res = await fetch(getAssetPath('/excel/연도별통계_인명피해.xlsx'));
        const buffer = await res.arrayBuffer();
        const workbook = new ExcelJS.Workbook();
        await workbook.xlsx.load(buffer);

        const sheet = workbook.worksheets[0];
        const json = parseExcelSheet(sheet);
        setCasualtyData(processCasualtyData(json));
      } catch (e) {
        console.error(e);
        setErrorCasualty('인명피해 데이터를 불러오지 못했습니다.');
      } finally {
        setLoadingCasualty(false);
      }
    };

    loadAccident().then(() => {});
    loadCasualty().then(() => {});
  }, []);

  console.log(getAssetPath('/excel/연도별통계_해양사고.xlsx'));
  console.log(globalThis?.location?.href);
  return (
    <StatisticsSectionWrapper>
      <StatisticsInner>
        <ChartsGrid>
          <ChartContainer>
            <h3>연도별 해양사고 발생 추이</h3>
            <ChartWrapper>
              {loadingAccident && <LoadingMessage>해양사고 데이터 로드 중...</LoadingMessage>}
              {!loadingAccident && errorAccident && <ErrorMessage>{errorAccident}</ErrorMessage>}
              {!loadingAccident && !errorAccident && accidentData && (
                <Chart type="bar" data={accidentData} options={baseChartOptions as ChartOptions<MixedChartType>} />
              )}
            </ChartWrapper>
          </ChartContainer>

          <ChartContainer>
            <h3>연도별 인명피해(사망/실종)</h3>
            <ChartWrapper>
              {loadingCasualty && <LoadingMessage>인명피해 데이터 로드 중...</LoadingMessage>}
              {!loadingCasualty && errorCasualty && <ErrorMessage>{errorCasualty}</ErrorMessage>}
              {!loadingCasualty && !errorCasualty && casualtyData && (
                <Line data={casualtyData} options={baseChartOptions as ChartOptions<'line'>} />
              )}
            </ChartWrapper>
          </ChartContainer>
        </ChartsGrid>
      </StatisticsInner>
    </StatisticsSectionWrapper>
  );
};
