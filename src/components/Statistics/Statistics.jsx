import PropTypes from 'prop-types';
import Css from './Statistics.module.css';


export default function Statistics  ({title, stats}){
    return  ( <section className = {Css.statistics} >
    {{ title } && <h2 className={Css.title}>{title}</h2>}
    <ul className = {Css.statList}>
        {stats.map(({ label, percentage, id }) => (
            <li key={id} className={Css.item}>
                <span className={Css.label}>{label}</span>
                <span className={Css.percentage}>{percentage}%</span>
            </li>))
            }
    </ul>
</section>
)
}

Statistics.propTypes = {
    stats: PropTypes.arrayOf(
        PropTypes.shape({
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,
        id: PropTypes.string.isRequired,
        })
    ),
    title: PropTypes.string
};

