import React from "react";
import Tab from "./tab";

class Tabs extends React.Component {
  constructor(props) {
    super(props);
    console.log("this.props", this.props);
    this.state = {
      activeTab: Array.isArray(this.props.children)
        ? this.props.children[0].props.label
        : this.props.children.props.label
    };
  }

  onTabClick = tab => {
    this.setState({
      activeTab: tab
    });
  };
  render() {
    const { activeTab } = this.state;
    return (
      <div>
        <div className="tab-list">
          {React.Children.map(this.props.children, child => {
            return (
              <Tab
                activeTab={activeTab}
                label={child.props.label}
                key={child.props.label}
                onClick={this.onTabClick}
              />
            );
          })}
        </div>
        <div className="tab-content">
          {React.Children.map(this.props.children, child => {
            if (child.props.label !== activeTab) return null;
            return child.props.children;
          })}
        </div>
      </div>
    );
  }
}

export default Tabs;
