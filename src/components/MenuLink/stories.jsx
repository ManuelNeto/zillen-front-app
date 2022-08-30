import { MenuLink } from './index';

export default {
  title: 'MenuLink',
  component: MenuLink,
  args: {
    children: 'Não sei',
    link: 'https://www.google.com.br/',
  },
  argTypes: {
    children: { type: 'string' },
  },
};

export const Template = (args) => {
  return (
    <div style={{ display: 'flex' }}>
      <MenuLink {...args} />
    </div>
  );
};