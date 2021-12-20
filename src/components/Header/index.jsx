import { HeaderContainer, Container, LogoLink } from './styles';

import { FiMoon } from 'react-icons/fi';

const Header = ({ setDarkTheme }) => {
    return (
        <HeaderContainer>
            <Container>
                <LogoLink to='/'>Where in the world?</LogoLink>
                <button
                    onClick={() => setDarkTheme((prevState) => !prevState)}
                    type="button"
                >
                    <FiMoon size={20} />
                    Dark Mode
                </button>
            </Container>
        </HeaderContainer>
    );
};

export default Header;
