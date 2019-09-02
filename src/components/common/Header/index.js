import styled from "@emotion/styled"

export const SiteHeader = styled.header`
    padding-top: 20px;
    padding-bottom: 20px;
    color: #fff;
    background: #15171A;
`

export const SiteMast = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const SiteMastIcon = styled.div`
    display: flex;
    align-items: center;
    margin-left: -10px;
    :last-child {
        padding-right: 0;
    }
`

export const GitHubLogo = styled.img`
    height: 25px;
    margin: -5px 0 0;
`