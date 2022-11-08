import { Card, Title, Info, Chip } from './Event.styled';
import { formatEventDuration, formatEventStart } from 'utils';
import PropTypes from 'prop-types';
import { iconSize } from 'constans';
import {
  FaMapMarkerAlt,
  FaUserAlt,
  FaCalendarAlt,
  FaClock,
} from 'react-icons/fa';
export function Event({ name, location, speaker, start, end, type }) {
  const formatedStart = formatEventStart(start);
  const duraration = formatEventDuration(start, end);
  return (
    <Card>
      <Title>{name}</Title>
      <Info>
        <FaMapMarkerAlt size={iconSize.sm} />
        {location}
      </Info>
      <Info>
        <FaUserAlt size={iconSize.sm} />
        {speaker}
      </Info>
      <Info>
        <FaCalendarAlt size={iconSize.sm} />
        {formatedStart}
      </Info>
      <Info>
        <FaClock size={iconSize.sm} />
        {duraration}
      </Info>
      <Chip eventType={type}>{type}</Chip>
    </Card>
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
