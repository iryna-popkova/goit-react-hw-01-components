import { ItemLabel, ItemPercentage, StatisticsTitle, StatisticsWrapper, StatItem, StatList } from './statistics.styled'

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

export const Statistics = ({ title, stats }) => {
  return (
  <StatisticsWrapper>
  <StatisticsTitle>{title}</StatisticsTitle>

  <StatList>
      {stats.map(({ id, label, percentage }) => {
        return (<StatItem key={id}
          style={{ backgroundColor: getRandomHexColor() }}
        >
          <ItemLabel>{label}</ItemLabel>
          <ItemPercentage>{percentage}%</ItemPercentage>
        </StatItem>)
      })
      }
  </StatList>
</StatisticsWrapper>
);
}


