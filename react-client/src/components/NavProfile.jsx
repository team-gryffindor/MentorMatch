import React from 'react';
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import { Redirect } from 'react-router-dom';


const NavProfile = ({ handleProfileViewChange }) => {
  return (
  <SideNav
      onSelect={(selected) => {
        console.log('SELECTED:', selected)
        handleProfileViewChange(selected)
      }}
  >
      <SideNav.Toggle />
      <SideNav.Nav defaultSelected="home">
          <NavItem eventKey="home">
              <NavIcon>
                  <i className="fa fa-fw fa-home" style={{ fontSize: '2.00em' }} />
              </NavIcon>
              <NavText>
                  Home
              </NavText>
          </NavItem>
          <NavItem eventKey="offeredLessons">
              <NavIcon>
                  <i className="fa fa-fw fa-line-chart" style={{ fontSize: '2.00em' }} />
              </NavIcon>
              <NavText>
                  Offered
              </NavText>
          </NavItem>
          <NavItem eventKey="upcomingLessons">
              <NavIcon>
                  <i className="fa fa-fw fa-line-chart" style={{ fontSize: '2.00em' }} />
              </NavIcon>
              <NavText>
                  Upcoming
              </NavText>
          </NavItem>
          <NavItem eventKey="takenLessons">
              <NavIcon>
                  <i className="fa fa-fw fa-line-chart" style={{ fontSize: '1.75em' }} />
              </NavIcon>
              <NavText>
                  Taken
              </NavText>
          </NavItem>
          <NavItem eventKey="favoriteLessons">
              <NavIcon>
                  <i className="fa fa-fw fa-line-chart" style={{ fontSize: '2.00em' }} />
              </NavIcon>
              <NavText>
                  Favorites
              </NavText>
          </NavItem>

      </SideNav.Nav>
  </SideNav>
  )
}
export default NavProfile