'use client';

import { useSession } from 'next-auth/react';
import { usePathname } from 'next/navigation';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { BoxArrowRight, Lock, PersonFill, PersonPlusFill } from 'react-bootstrap-icons';

const NavBar: React.FC = () => {
  const { data: session, status } = useSession();
  const pathName = usePathname();

  if (status === 'loading') return null;

  const currentUser = session?.user?.email;
  const role = session?.user?.role;

  return (
    <Navbar style={{ backgroundColor: '#0d3b66' }} variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="/">digits</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">

          <Nav className="me-auto justify-content-start">
            {currentUser && (
              <>
                <Nav.Link href="/add" active={pathName === '/add'}>
                  Add Contact
                </Nav.Link>
                <Nav.Link href="/list" active={pathName === '/list'}>
                  List Contacts
                </Nav.Link>
              </>
            )}

            {currentUser && role === 'ADMIN' && (
              <Nav.Link href="/admin" active={pathName === '/admin'}>
                Admin
              </Nav.Link>
            )}
          </Nav>

          <Nav className="justify-content-end">
            {session ? (
              <NavDropdown title={currentUser}>
                <NavDropdown.Item href="/api/auth/signout">
                  <BoxArrowRight />
                  {' '}
                  Sign Out
                </NavDropdown.Item>
                <NavDropdown.Item href="/auth/change-password">
                  <Lock />
                  {' '}
                  Change Password
                </NavDropdown.Item>
              </NavDropdown>
            ) : (
              <NavDropdown title="Login">
                <NavDropdown.Item href="/auth/signin">
                  <PersonFill />
                  {' '}
                  Sign in
                </NavDropdown.Item>
                <NavDropdown.Item href="/auth/signup">
                  <PersonPlusFill />
                  {' '}
                  Sign up
                </NavDropdown.Item>
              </NavDropdown>
            )}
          </Nav>

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
