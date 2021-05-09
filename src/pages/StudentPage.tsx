import * as React from "react";
import StudentPageMenu from "../components/StudentPageComponents/StudentPage.menu";
import { TRootReducer } from "../redux/rootReducer";
import { connect } from "react-redux";
import { Route, Switch } from "react-router-dom";
import Home from "./HomePage";
import Attendance from "./AttendancePage";
import CourseReports from "./CourseReportsPage";
import Messages from "./MessagesPage";
import Courses from "./Courses";
import Account from "./StudentAccountPage";
import { IIconProps, IconButton } from "office-ui-fabric-react";
import { toggleMenu } from "../redux/Student/Section/section.action";
import StudentPageSmallMenu from "../components/StudentPageComponents/StudentPage.SmallMenu";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { compose } from "redux";
class StudentPage extends React.Component<PropsTypes> {
  componentDidMount() {
    this.props.history.push(`${this.props.currentSection}`);
  }
  render() {
    const { toggleMenu, toggle } = this.props;
    const menuIcon: IIconProps = {
      iconName: toggle ? "Cancel" : "CollapseMenu",
    };
    return (
      <React.Fragment>
        <div
          className="ms-hiddenMd ms-hiddenXl ms-hiddenLg ms-hiddenXxl"
          style={{
            position: "absolute",
            paddingTop: 5,
            paddingLeft: 6,
            zIndex: 2001,
            backgroundColor: `${toggle ? "white" : ""}`,
            width: `${toggle ? "auto" : ""}`
          }}>
          <IconButton
            iconProps={menuIcon}
            checked={true}
            onClick={() => toggleMenu()}
          />
        </div>
        {toggle && <StudentPageSmallMenu />}
        <div className="ms-Grid" dir="ltr">
          <div className="ms-Grid-row" style={{ height: "auto" }}>
            <div
              className="ms-Grid-col ms-md2 ms-lg2 ms-hiddenSm centerEverything"
              style={{ padding: 0 }}>
              <StudentPageMenu />
            </div>
            <div className="ms-Grid-col  ms-sm12 ms-md10 ms-lg10 centerEverything">
              <Switch>
                <Route path="/home" component={Home} />
                <Route path="/messages" component={Messages} />
                <Route path="/account" component={Account} />
                <Route path="/courses" component={Courses} />
                <Route path="/attendence" component={Attendance} />
                <Route path="/reports" component={CourseReports} />
              </Switch>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
const mapStateToProps = (state: TRootReducer) => ({
  currentSection: state.studentSection.currentSection,
  toggle: state.studentSection.toggle,
});
const mapDispatchToProps = (dispatch: Function) => ({
  toggleMenu: () => dispatch(toggleMenu()),
});
type PropsTypes = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps> &
  RouteComponentProps;
export default compose<React.ComponentType>(withRouter,
  connect(mapStateToProps, mapDispatchToProps)
)(StudentPage);
