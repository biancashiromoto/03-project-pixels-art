import PropTypes from "prop-types";

const Pixel = ({ onClick, color, width, className }) => {
  const widthValue = Math.floor(width);
  return (
    <div
        className={ `${className} pixel border border-dark` }
        onClick={ onClick }
        style={ {
          backgroundColor: color,
          width: `${(widthValue)}px`,
          height: `${(widthValue)}px`,
          padding: 0
        } }
    >
    </div>
  )
}

Pixel.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  width: PropTypes.string
}

export default Pixel;
