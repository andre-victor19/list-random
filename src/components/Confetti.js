import React, { PureComponent } from 'react';
import Confetti from 'react-confetti';
import SizeMe from 'react-sizeme';
import PropTypes from 'prop-types';

const Dimensioned = SizeMe({ monitorHeight: true, monitorWidth: true })(
  class Confettis extends PureComponent {
    static propTypes = {
      size: PropTypes.shape({
        width: PropTypes.number,
        height: PropTypes.number,
      }),
    };
    render() {
      return (
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
          }}
        >
          <Confetti
            recycle={false}
            numberOfPieces={1000}
            {...this.props.size}
          />
        </div>
      );
    }
  },
);

export default Dimensioned;
