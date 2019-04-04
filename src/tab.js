import React from "react";

class Tab extends React.Component {
  handleClick = () => {
    const { label, onClick } = this.props;
    onClick(label);
  };
  render() {
    let className = "tab-list-item ";
    if (this.props.label === this.props.activeTab) {
      className += "tab-list-active-item";
    }
    return (
      <li className={className} onClick={this.handleClick}>
        {this.props.label}
      </li>
    );
  }
}

export default Tab;
