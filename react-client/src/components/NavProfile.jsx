import React from 'react';
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import { Redirect } from 'react-router-dom';


const NavProfile = () => {
  return (
  <SideNav
      onSelect={(selected) => {
        console.log('SELECTED:', selected)
       if(selected === "home"){
         console.log('Blah ')
         return( <Redirect to="/dashboard"/>)
        
       }
      }}
  >
      <SideNav.Toggle />
      <SideNav.Nav defaultSelected="home">
          <NavItem eventKey="home">
              <NavIcon>
                  <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
              </NavIcon>
              <NavText>
                  Home
              </NavText>
          </NavItem>
          <NavItem eventKey="Offered">
              <NavIcon>
                  <i className="fa fa-fw fa-line-chart" style={{ fontSize: '1.75em' }} />
              </NavIcon>
              <NavText>
                  Offered
              </NavText>
          </NavItem>
          <NavItem eventKey="Upcoming">
              <NavIcon>
                  <i className="fa fa-fw fa-line-chart" style={{ fontSize: '1.75em' }} />
              </NavIcon>
              <NavText>
                  Upcoming
              </NavText>
          </NavItem>
          <NavItem eventKey="Taken">
              <NavIcon>
                  <i className="fa fa-fw fa-line-chart" style={{ fontSize: '1.75em' }} />
              </NavIcon>
              <NavText>
                  Taken
              </NavText>
          </NavItem>
          <NavItem eventKey="Favorites">
              <NavIcon>
                  <i className="fa fa-fw fa-line-chart" style={{ fontSize: '1.75em' }} />
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