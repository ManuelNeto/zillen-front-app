import { Heading } from '../../components/Heading';
import { MenuLink } from '../../components/MenuLink';
import { Text } from '../../components/Text';
import * as Styled from './styles';

function Home() {
  return (
    <div className="App">
      <Styled.Wrapper>
        <Heading> O texto que eu quero </Heading>
        <Text> lleklerkjglerkjlk </Text>
        <MenuLink> </MenuLink>
      </Styled.Wrapper>
    </div>
  );
}

export default Home;
