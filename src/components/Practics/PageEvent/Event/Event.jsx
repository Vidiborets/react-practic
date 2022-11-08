import s from '../Event/Event.module.css';
import { formatEventDuration, formatEventStart } from 'utils';
import PropTypes from 'prop-types';
import { iconSize } from 'constans';
import {
  FaMapMarkerAlt,
  FaUserAlt,
  FaCalendarAlt,
  FaClock,
} from 'react-icons/fa';
export default function Event({ name, location, speaker, start, end, type }) {
  const formatedStart = formatEventStart(start);
  const duraration = formatEventDuration(start, end);
  return (
    <div className={s.event}>
      <h2 className={s.title}>{name}</h2>
      <p className={s.info}>
        <FaMapMarkerAlt className={s.icon} size={iconSize.sm} />
        {location}
      </p>
      <p className={s.info}>
        <FaUserAlt className={s.icon} size={iconSize.sm} />
        {speaker}
      </p>
      <p className={s.info}>
        <FaCalendarAlt className={s.icon} size={iconSize.sm} />
        {formatedStart}
      </p>
      <p className={s.info}>
        <FaClock className={s.icon} size={iconSize.sm} />
        {duraration}
      </p>
      <span className={`${s.chip} ${s[type]}`}>{type}</span>
    </div>
  );
}

Event.propType = {
  name: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  speaker: PropTypes.string.isRequired,
  start: PropTypes.string.isRequired,
  end: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};
