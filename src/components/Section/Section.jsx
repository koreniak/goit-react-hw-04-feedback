import PropTypes from 'prop-types';
import { SectionTitle, SectionField } from './Section.styled';

const Section = ({ title, children }) => {
  return (
    <SectionField>
      <SectionTitle>{title}</SectionTitle>
        {children}
    </SectionField>
  );
};

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.element.isRequired
};

export default Section;