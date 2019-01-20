import React, {PureComponent} from 'react';
import styles from './Place.module.scss';
import PropTypes from 'prop-types';


export default class MyGreatPlace extends PureComponent {

    static defaultProps = {
        text: 'example',
    };

    render() {
        return (
            <div className={styles.greatPlaceStyle}>
                {this.props}
            </div>
        );
    }
}

MyGreatPlace.propTypes = {

    text: PropTypes.string,
    lat: PropTypes.number,
    lng: PropTypes.number
};
/*

const Wrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 18px;
  height: 18px;
  background-color: #000;
  border: 2px solid #fff;
  border-radius: 100%;
  user-select: none;
  transform: translate(-50%, -50%);
  cursor: ${props => (props.onClick ? 'pointer' : 'default')};
  &:hover {
    z-index: 1;
  }
`;

const Marker = props => (
    <Wrapper
        alt={props.text}
        {...props.onClick ? { onClick: props.onClick } : {}}
    />
);

Marker.defaultProps = {
    onClick: null,
};

Marker.propTypes = {
    onClick: PropTypes.func,
    text: PropTypes.string.isRequired,
};

export default Marker;*/
