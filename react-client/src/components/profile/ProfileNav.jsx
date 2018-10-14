import React from 'react';
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import { Redirect } from 'react-router-dom';

const ProfileNav = ({ handleProfileViewChange }) => {
  return (
    <div
      className="nav flex-column nav-pills col-md-3"
      id="v-pills-tab"
      role="tablist"
      aria-orientation="vertical"
    >
      <a
        className="nav-link active"
        id="v-pills-profile-tab"
        data-toggle="pill"
        href="#v-pills-profile"
        role="tab"
        aria-controls="v-pills-profile"
        aria-selected="true"
      >
        Profile Overview
      </a>
      <a
        className="nav-link"
        id="v-pills-offered-tab"
        data-toggle="pill"
        href="#v-pills-offered"
        role="tab"
        aria-controls="v-pills-offered"
        aria-selected="false"
      >
        Offered
      </a>
      <a
        className="nav-link"
        id="v-pills-upcoming-tab"
        data-toggle="pill"
        href="#v-pills-upcoming"
        role="tab"
        aria-controls="v-pills-upcoming"
        aria-selected="false"
      >
        Upcoming
      </a>
      <a
        className="nav-link"
        id="v-pills-taken-tab"
        data-toggle="pill"
        href="#v-pills-taken"
        role="tab"
        aria-controls="v-pills-taken"
        aria-selected="false"
      >
        Taken
      </a>
      <a
        className="nav-link"
        id="v-pills-favorites-tab"
        data-toggle="pill"
        href="#v-pills-favorites"
        role="tab"
        aria-controls="v-pills-favorites"
        aria-selected="false"
      >
        Favorites
      </a>
    </div>

    //   <SideNav
    //       onSelect={(selected) => {
    //         console.log('SELECTED:', selected)
    //         handleProfileViewChange(selected)
    //       }}
    //   >
    //       <SideNav.Toggle />
    //       <SideNav.Nav defaultSelected="home">
    //           <NavItem eventKey="home">
    //               <NavIcon>
    //                   <i className="fa fa-fw fa-home" style={{ fontSize: '2.00em' }} />
    //               </NavIcon>
    //               <NavText>
    //                   Home
    //               </NavText>
    //           </NavItem>
    //           <NavItem eventKey="offeredLessons">
    //               <NavIcon>
    //                   <i className="fa fa-fw fa-line-chart" style={{ fontSize: '2.00em' }} />
    //               </NavIcon>
    //               <NavText>
    //                   Offered
    //               </NavText>
    //           </NavItem>
    //           <NavItem eventKey="upcomingLessons">
    //               <NavIcon>
    //                   <i className="fa fa-fw fa-line-chart" style={{ fontSize: '2.00em' }} />
    //               </NavIcon>
    //               <NavText>
    //                   Upcoming
    //               </NavText>
    //           </NavItem>
    //           <NavItem eventKey="takenLessons">
    //               <NavIcon>
    //                   <i className="fa fa-fw fa-line-chart" style={{ fontSize: '1.75em' }} />
    //               </NavIcon>
    //               <NavText>
    //                   Taken
    //               </NavText>
    //           </NavItem>
    //           <NavItem eventKey="favoriteLessons">
    //               <NavIcon>
    //                   <i className="fa fa-fw fa-line-chart" style={{ fontSize: '2.00em' }} />
    //               </NavIcon>
    //               <NavText>
    //                   Favorites
    //               </NavText>
    //           </NavItem>

    //       </SideNav.Nav>
    //   </SideNav>
  );
};

export default ProfileNav;
