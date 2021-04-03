import PropTypes from 'prop-types';

export default function Filter({ value, onChange }) {
  return (
    <label>
      <p>Find contacts by name &nbsp;</p>
      <input 
       type="text" 
       value={value} 
       placeholder="Search"
       onChange={onChange} />
    </label>
  );
}

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};