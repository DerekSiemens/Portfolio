import styled from '@emotion/styled'
import { Link } from 'gatsby'

export const NavigationNav = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 15px 0 0 0;
`

export const LeftNavDiv = styled.div`
    margin: 0 20px 0 -10px;
`

export const RightNavDiv = styled.div`
    margin: 0 -10px 0 20px;
`

export const NavButton = styled(Link)`
    display: inline-block;
    padding: 5px 10px;
    border: #fff 1px solid;
    color: #fff;
    font-size: 1.3rem;
    line-height: 1em;
    border-radius: var(--radius);
    opacity: 0.7;
    :hover {
        text-decoration: none;
    }
`

export const NavItem = styled(Link)`
    display: inline-block;
    padding: 5px 10px;
    color: #fff;
    opacity: 0.7;
    :hover {
        text-decoration: none;
        opacity: 1;
    }
`