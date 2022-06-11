import * as React from "react";
import { EmbedProps as Props } from ".";

export default class VirtualLabVideo extends React.Component<Props> {
  static ENABLED = [/^https:\/\/video.nobook.com\/.*\.mp4$/gi];

  render() {
    const { matches } = this.props.attrs;
    const url = matches[0];
    return (
      <video width="100%" height="440px" controls>
        <source src={url} type="video/mp4"></source>
      </video>
    );
  }
}
