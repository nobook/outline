import * as React from "react";
import Frame from "../components/Frame";
import { EmbedProps as Props } from ".";

export default class PhysicsLab extends React.Component<Props> {
  static ENABLED = [
    /^https:\/\/share-(wuli|huaxue).nobook.com\/\?sharedata=.*/gi,
  ];

  render() {
    const { matches } = this.props.attrs;
    const url = matches[0];
    console.log(url);
    return (
      <Frame
        {...this.props}
        src={`${url}&editor-share-hide=1&mouse-wheel-lock=1`}
        title="NOBOOK"
        width="100%"
        height="500px"
      />
    );
  }
}
