// import PropTypes from 'prop-types';
// import CssStyle from './Statistic.module.css';


// export const Statistics = ({title, stats}) =>{
//     return  ( <section className = {CssStyle.statistics} >
//     {{ title } && <h2 className={CssStyle.title}>{title}</h2>}
//     <ul className = {CssStyle.statList}>
//         {stats.map(({ label, percentage, id }) => (
//             <li key={id} className={CssStyle.item}>
//                 <span className={CssStyle.label}>{label}</span>
//                 <span className={CssStyle.percentage}>{percentage}%</span>
//             </li>))
//             }
//     </ul>
// </section>
// )
// }

// Statistics.PropTypes={
//     stats: PropTypes.arrayOf(
//         PropTypes.shape({
//         label: PropTypes.string.isRequired,
//         percentage: PropTypes.number.isRequired,
//         id: PropTypes.string.isRequired,
//         })
//     ),
//     title: PropTypes.string
// };

// export default Statistics