import React, { Component } from "react";
import { ILivrePossede } from "../../../Iinterface";

interface IProps extends ILivrePossede {}

interface IState {}

export default class LivrePossede extends Component<IProps, IState> {
  render() {
    const {} = this.props;

    return <div className="LivrePossede"></div>;
  }
}
