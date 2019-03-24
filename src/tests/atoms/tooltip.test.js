import React from 'react';
import { mount, shallow } from 'enzyme';
import Tooltip from '../../components/atoms/tooltip';

/** @test {Tooltip} */
describe('Tooltip', () => {

  it('should be defined', () => {
    expect(Tooltip).toBeDefined();
  });

  let tooltipWrapper;

  it('should render correctly', () => {

    tooltipWrapper = shallow(
      <Tooltip
        id="tooltip"
        text="Lorem ipsum dolor sit amet"/>
    );
    expect(tooltipWrapper).toMatchSnapshot();

    tooltipWrapper.unmount();
  });

  let defaultWrapper;

  beforeEach(() => {

    defaultWrapper = mount(
      <Tooltip
        id="default"
        text="Lorem ipsum dolor sit amet"/>
    );
  });

  describe('Mouse events', () => {

    let tooltipButton, tooltipContent, tooltipClose, spy;

    beforeEach(() => {

      spy = jest.spyOn(defaultWrapper.instance(), "handleClick");

      defaultWrapper.instance().forceUpdate();

      tooltipButton = defaultWrapper.find('.tooltip__target');
      tooltipContent = defaultWrapper.find('.tooltip__content');
      tooltipClose = defaultWrapper.find('.tooltip__close');
    });

    it('should call handleClick when clicking the target', () => {
      tooltipButton.at(0).simulate('click');
      expect(spy).toHaveBeenCalled();
    });

    it('should toggle the tooltip visibility', () => {
      expect(defaultWrapper.state('isVisible')).toEqual(false);
      tooltipButton.at(0).simulate('click');
      expect(defaultWrapper.state('isVisible')).toEqual(true);
      tooltipButton.at(0).simulate('click');
      expect(defaultWrapper.state('isVisible')).toEqual(false);
    });

    it('should call handleClick when clicking the close button', () => {
      tooltipClose.at(0).simulate('click');
      expect(spy).toHaveBeenCalled();
    });

    it('should open and close the tooltip', () => {
      expect(defaultWrapper.state('isVisible')).toEqual(false);
      tooltipButton.at(0).simulate('click');
      expect(defaultWrapper.state('isVisible')).toEqual(true);
      tooltipClose.at(0).simulate('click');
      expect(defaultWrapper.state('isVisible')).toEqual(false);
    });
  });

  describe('Keyboard events', () => {

    let tooltipButton, tooltipContent, tooltipClose, spyKeyDown, spyToggle, spyHide;

    beforeEach(() => {

      spyKeyDown = jest.spyOn(defaultWrapper.instance(), "handleKeyDown");
      spyToggle = jest.spyOn(defaultWrapper.instance(), "toggleVisibility");
      spyHide = jest.spyOn(defaultWrapper.instance(), "hideTooltip");

      defaultWrapper.instance().forceUpdate();

      tooltipButton = defaultWrapper.find('.tooltip__target');
      tooltipContent = defaultWrapper.find('.tooltip__content');
      tooltipClose = defaultWrapper.find('.tooltip__close');
    });

    it('should call toggleVisibility when pressing enter', () => {
      tooltipButton.at(0).simulate('keyDown', { keyCode: 13 });
      expect(spyToggle).toHaveBeenCalled();
    });

    it('should toggle the tooltip visibility', () => {
      expect(defaultWrapper.state('isVisible')).toEqual(false);
      tooltipButton.at(0).simulate('keyDown', { keyCode: 13 });
      expect(defaultWrapper.state('isVisible')).toEqual(true);
      tooltipButton.at(0).simulate('keyDown', { keyCode: 13 });
      expect(defaultWrapper.state('isVisible')).toEqual(false);
    });

    it('should call toggleVisibility when pressing enter on the close button', () => {
      tooltipClose.at(0).simulate('keyDown', { keyCode: 13 });
      expect(spyToggle).toHaveBeenCalled();
    });

    it('should open and close the tooltip', () => {
      expect(defaultWrapper.state('isVisible')).toEqual(false);
      tooltipButton.at(0).simulate('keyDown', { keyCode: 13 });
      expect(defaultWrapper.state('isVisible')).toEqual(true);
      tooltipClose.at(0).simulate('keyDown', { keyCode: 13 });
      expect(defaultWrapper.state('isVisible')).toEqual(false);
    });

    it('should call hideTooltip when pressing escape', () => {
      tooltipClose.at(0).simulate('keyDown', { keyCode: 27 });
      expect(spyHide).toHaveBeenCalled();
    });

    it('should allow the user to tab away from element', () => {
      expect(defaultWrapper.state('isVisible')).toEqual(false);
      tooltipButton.at(0).simulate('keyDown', { keyCode: 9 });
      expect(defaultWrapper.state('isVisible')).toEqual(false);
    });

  });

});
