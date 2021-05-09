import * as React from "react";
import {
  Nav,
  INavStyles,
  INavLinkGroup,
  INavLink,
} from "office-ui-fabric-react";
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
    padding: 0
  },
};

export const navLinkGroups: INavLinkGroup[] = [
  {
    links: [
      {
        url: "",
        name: "Home",
        icon: "Home",
        key: "home",
        ariaLabel: "Home",
      },
      {
        url: "",
        name: "Messages",
        icon: "Message",
        key: "messages",
        ariaLabel: "Messages",
      },
      {
        url: "",
        name: "Courses",
        icon: "BookAnswers",
        key: "courses",
        ariaLabel: "Courses",
      },
      {
        url: "",
        name: "Records",
        key: "records",
        links: [
          {
            name: "Attendence",
            url: "",
            icon: "PublicContactCardMirrored",
            key: "attendence",
            ariaLabel: "Attendence",
          },
          {
            name: "Course Reports",
            url: "",
            icon: "BookmarkReport",
            key: "reports",
            ariaLabel: "Reports",
          },
        ],
      },
      {
        url: "",
        name: "Account",
        icon: "Contact",
        key: "account",
        ariaLabel: "Account",
      },
    ],
  },
];

class StudentPageMenu extends React.Component<ReduxType> {
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
        style={{
          height: "100vh",
          width: "100%",
          display: "block",
          position: "absolute",
          top: 0,
          left: 0
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
)(StudentPageMenu);
