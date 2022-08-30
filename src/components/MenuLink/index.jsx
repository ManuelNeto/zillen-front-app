import P from 'prop-types';
import * as Styled from './styles';

export const MenuLink = ({
  children,
  link,
  newTab = false,
  colorDark = true,
  size = 'big',
}) => {
  const target = newTab ? '_blank' : '_self';
  return (
    <Styled.MenuLink
      href={link}
      newTab={target}
      size={size}
      colorDark={colorDark}
    >
      {children}
    </Styled.MenuLink>
  );
};

MenuLink.propTypes = {
  children: P.node.isRequired,
  link: P.string.isRequired,
  newTab: P.bool.isRequired,
  colorDark: P.bool,
  size: P.oneOf(['small', 'medium', 'big']),
};
