import * as React from "react";
import {
  Nav,
  INavStyles,
  INavLink,
} from "office-ui-fabric-react";
import {navLinkGroups} from "./StudentPage.menu";
import { withRouter, RouteComponentProps } from "react-router-dom";
import { Dispatch } from "redux";
import { ActionType } from "../../redux/Student/Student.types";
import { changeStudentSection } from "../../redux/Student/Section/section.action";
import { connect } from "react-redux";
import { compose } from "redux";
import { TRootReducer } from "../../redux/rootReducer";
const navStyles: Partial<INavStyles> = {
  root: {
    height: "auto",
    width: "auto",
    overflowY: "auto",
    boxSizing: "border-box",
    border: "1px solid #eee",
    margin: 0,
    padding: 0,
  },
};

class StudentPageSmallMenu extends React.Component<ReduxType> {
  render() {
    const { changeStudentSection } = this.props;
    const { currentLink } = this.props;
    const _onNavLinkClick = (
      ev?: React.MouseEvent<HTMLElement>,
      item?: INavLink
    ) => {
      if (item) {
        if (item.key !== "records") {
          changeStudentSection(`${item.key}`);
          this.props.history.push(`${item.key}`);
        }
      }
    };

    return (
      <div
      className="ms-hiddenMd ms-hiddenXl ms-hiddenLg ms-hiddenXxl"
        style={{
          height: "auto",
          width: "100vw",
          paddingTop: 50,
          position: "absolute",
          zIndex: 2000,
          top: 0,
          bottom: 0,
          backgroundColor: "whitesmoke"
        }}>
        <Nav
          onLinkClick={_onNavLinkClick}
          selectedKey={currentLink}
          styles={navStyles}
          groups={navLinkGroups}
        />
      </div>
    );
  }
}
const mapStateToProps = (state: TRootReducer) => ({
  currentLink: state.studentSection.currentSection,
});
const mapDispatchToProps = (dispatch: Dispatch<ActionType>) => ({
  changeStudentSection: (section: string) =>
    dispatch(changeStudentSection(section)),
});
type ReduxType = ReturnType<typeof mapDispatchToProps> &
  RouteComponentProps &
  ReturnType<typeof mapStateToProps>;
export default compose<React.ComponentType>(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
)(StudentPageSmallMenu);
