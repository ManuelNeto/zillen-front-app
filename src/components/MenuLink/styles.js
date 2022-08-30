import styled, { css } from 'styled-components';

const menuLinkSize = {
  small: (theme) => css`
    font-size: ${theme.font.sizes.small};
  `,
  medium: (theme) => css`
    font-size: ${theme.font.sizes.medium};
  `,
  big: (theme) => css`
    font-size: ${theme.font.sizes.larger};
    ${mediaFont(theme)};
  `,
};

const mediaFont = (theme) => css`
  @media ${theme.media.lteMedium} {
    font-size: ${theme.font.sizes.medium};
  }
`;

export const MenuLink = styled.a`
  ${({ theme, colorDark, size }) => css`
    text-decoration: none !important;
    display: block;
    padding: ${theme.spacings.small};
    color: ${colorDark ? theme.colors.primaryColor : theme.colors.white};
    position: relative;
    ${menuLinkSize[size](theme)};

    &::after {
      content: '';
      position: absolute;
      bottom: 0.76rem;
      left: 50%;
      width: 0;
      height: 0.2rem;
      background: ${theme.colors.secondaryColor};
      transition: all 300ms ease-in-out;
    }

    &:hover::after {
      left: 25%;
      width: 50%;
    }
  `}
`;
