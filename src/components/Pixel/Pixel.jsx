import PropTypes from "prop-types"
import './Pixel.css';

const Pixel = ({ onClick, color, width }) => {
  const widthValue = Math.floor(width);
  return (
    <div
        className={ `pixel border border-dark` }
        onClick={ onClick }
        style={ {
          backgroundColor: color,
          width: `${(widthValue)}px`,
          height: `${(widthValue)}px`,
        } }
    >
    </div>
  )
}

Pixel.propTypes = {
  color: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  width: PropTypes.number
}

export default Pixel;
