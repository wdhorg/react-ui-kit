import React from "react";
import { DefaultColors } from "../../typings";
import classnames from "classnames";

// @TODO: Add rollup-plugin-scss
import "./button.scss";

type ButtoState = {
  clicked: boolean;
};

export type OnPressFunction = (
  e?: React.TouchEvent | React.MouseEvent | React.KeyboardEvent | Event
) => void;

export interface ButtonProps {
  /**
   * A button can show it is currently the active user selection.
   */
  active?: boolean;

  /**
   * Primary content.
   */
  children?: React.ReactNode;

  /**
   * Additional classes.
   */
  className?: string;

  /**
   * A button can have different colors
   */
  color?: DefaultColors;

  /**
   * A button can show it is currently unable to be interacted with.
   */
  disabled?: boolean;

  /**
   * Called after user's click.
   */
  onClick?: OnPressFunction;

  [key: string]: any;
}

export default class Button extends React.Component<ButtonProps, ButtoState> {
  public static defaultProps = {
    active: false,
    children: null,
    disabled: false,
    onClick: () => {}
  };

  _generateClassName() {
    return classnames({
      "ui-btn": true,
      "ui-btn--active": this.props.active,
      [`ui-btn--${this.props.color}`]: this.props.color,
      [`${this.props.className}`]: this.props.className
    });
  }

  // @TODO: Refactor this shit
  _getOtherProps() {
    const {
      active,
      children,
      disabled,
      onClick,
      color,
      className,
      ...otherProps
    } = this.props;

    return otherProps;
  }

  public render(): JSX.Element {
    const buttonClasses = this._generateClassName();
    const otherProps = this._getOtherProps();

    return (
      <button
        className={buttonClasses}
        disabled={this.props.disabled}
        onClick={this.props.onClick}
        {...otherProps}
      >
        {this.props.children}
      </button>
    );
  }
}
