import PropTypes from 'prop-types';
import styled from './Statistics.module.css';

export default function Statistics({ title, stats }) {
  return (
    <section className={styled.statistics}>
      {title && <h2 className={styled.title}>{title}</h2>}
      <ul className={styled.statList}>
        {stats.map(({ label, percentage, id }) => (
          <li key={id} className={styled.item}>
            <span className={styled.label}>{label}</span>
            <span className={styled.percentage}>{percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

Statistics.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
      id: PropTypes.string.isRequired,
    })
  ),
  title: PropTypes.string,
};
