import PropTypes from 'prop-types';
import s from '../PageTitle/PageTitle.module.css';
export default function PageTitle({ title }) {
  return <h1 className={s.title}>{title}</h1>;
}

PageTitle.propTypes = {
  title: PropTypes.string.isRequired,
};
