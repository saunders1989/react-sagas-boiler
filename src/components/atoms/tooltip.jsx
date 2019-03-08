import React from 'react';
import PropTypes from 'prop-types';
import classHelper from 'classnames';

/**
 * A tooltip to provide additional information to the user
 */

class Tooltip extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isVisible: false,
      isBelow: false,
      isLeft: false,
      isRight: false,
    };

    window.addEventListener('keydown', this.handleKeyDown);
    window.addEventListener('resize', this.updatePosition);
    window.addEventListener('scroll', this.updatePosition);
    window.addEventListener('click', this.handleWindowClick);
  }

  componentDidUpdate(prevProps, prevState) {
    const { isVisible } = this.state;
    if (prevState.isVisible !== isVisible) {
      if (isVisible) this.close.focus();
    }
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
    window.removeEventListener('resize', this.updatePosition);
    window.removeEventListener('scroll', this.updatePosition);
    window.removeEventListener('click', this.handleWindowClick);
  }

  updatePosition = /* istanbul ignore next */ () => {
    if (this.target) {
      const viewportOffset = this.target.getBoundingClientRect();

      this.setState({
        isBelow: viewportOffset.top < this.content.offsetHeight,
        isLeft: viewportOffset.left < 160,
        isRight: viewportOffset.right + 160 > window.innerWidth,
      });
    }
  }

  toggleVisibility = () => {
    const { isVisible } = this.state;

    isVisible ? this.hideTooltip() : this.showTooltip();
  }

  showTooltip = () => {
    this.setState({
      isVisible: true,
    }, () => this.updatePosition());
  }

  hideTooltip = () => {
    this.setState({
      isVisible: false,
    });
  }

  handleClick = e => {
    if (e.currentTarget === this.close) {
      this.hideTooltip();
      this.target.focus();
    } else {
      this.toggleVisibility();
      this.target.blur();
    }
  };

  handleKeyDown = e => {
    if (e.keyCode === 13 || e.keyCode === 32) { // enter or space
      /* istanbul ignore else */
      if (e.currentTarget === this.target || e.currentTarget === this.close) {
        this.toggleVisibility();
        this.target.focus();
        e.preventDefault();
      }
    } else if (e.keyCode === 27) { // esc
      this.hideTooltip();
      this.target.focus();
      e.preventDefault();
    }
  };

  handleWindowClick = /* istanbul ignore next */ e => {
    if (e.target.closest('.tooltip') === this.element) return;
    this.hideTooltip();
  };

  render() {
    const { icon, id, text } = this.props;
    const {
      isVisible, isBelow, isLeft, isRight,
    } = this.state;

    const classNames = classHelper('tooltip', {
      'tooltip--visible': isVisible,
      'tooltip--below': isBelow,
      'tooltip--left': isLeft,
      'tooltip--right': isRight,
    });

    return (
      <div
        className={classNames}
        ref={elem => { this.element = elem; }}
      >
        <button
          type="button"
          aria-controls={id}
          aria-label="info"
          className="tooltip__target"
          ref={elem => { this.target = elem; }}
          onClick={this.handleClick}
          onKeyDown={this.handleKeyDown}
        >
          Open me
          <i className={icon} />
        </button>
        <span
          className="tooltip__content"
          id={id}
          ref={elem => { this.content = elem; }}
          role="tooltip"
          hidden={!isVisible}
        >
          <button
            type="button"
            aria-label="close"
            className="tooltip__close"
            ref={elem => { this.close = elem; }}
            onClick={this.handleClick}
            onKeyDown={this.handleKeyDown}
          >
            <i className="icon-close" />
          </button>
          {text}
        </span>
      </div>
    );
  }
}

Tooltip.propTypes = {
  /** name of icon */
  icon: PropTypes.string,
  /** identifier */
  id: PropTypes.string.isRequired,
  /** text for the tooltip */
  text: PropTypes.string.isRequired,
};

Tooltip.defaultProps = {
  icon: 'icon-info',
};

export default Tooltip;
