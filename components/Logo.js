import styled from 'styled-components';

const LogoStyles = styled.div`
  background: red;
  box-sizing: border-box;
  margin: 0;
  min-width: 0;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  color: var(--theme-ui-colors-black-100, #000000);
  .logo-wrapper {
    height: 33px;
    width: 98px;
  }
  .logo {
  }
`;

export default function Logo() {
  return (
    <LogoStyles>
      <div className="logo-wrapper" />
    </LogoStyles>
  );
}
