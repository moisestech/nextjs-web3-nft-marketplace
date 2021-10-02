import styled from 'styled-components';

const WalletStyles = styled.div`
  .connect-wallet-container {
    box-sizing: border-box;
    margin: 0;
    min-width: 0;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
  }
  .connect-wallet-wrapper {
    box-sizing: border-box;
    margin: 0px;
    min-width: 0px;
    -webkit-box-align: center;
    align-items: center;
    display: none;
  }
  @media screen and (min-width: 52em) {
    .connect-wallet-wrapper {
      display: flex;
    }
  }
  button.connect-wallet:hover {
    background-color: var(--theme-ui-colors-black-100, #000000);
    color: var(--theme-ui-colors-white-100, #ffffff);
    box-shadow: rgb(0 0 0 / 25%) 0px 8px 15px;
    transform: translateY(-2px);
  }
  button.connect-wallet {
    margin: 0px;
    min-width: 0px;
    appearance: none;
    text-align: center;
    line-height: inherit;
    text-decoration: none;
    will-change: transform;
    font-weight: 600;
    padding: 16px 24px;
    transition: all 300ms cubic-bezier(0.23, 1, 0.32, 1) 0s;
    cursor: pointer;
    outline: none;
    background-color: var(--theme-ui-colors-black-100, #000000);
    color: var(--theme-ui-colors-white-100, #ffffff);
    border-width: 2px;
    border-style: solid;
    border-image: initial;
    border-color: var(--theme-ui-colors-black-90, #1a1a1a);
    font-size: 18px;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    border-radius: 999px;
    min-height: 46px;
    max-height: 46px;
  }
  @media screen and (min-width: 52em) {
    button.connect-wallet {
      min-height: 54px;
      max-height: 54px;
      padding-left: 32px;
      padding-right: 32px;
    }
  }
  @media screen and (min-width: 52em) {
    button.connect-wallet {
      padding: 16px 24px;
    }
  }
`;

export default function Wallet() {
  return (
    <WalletStyles>
      <div className="connect-wallet-wrapper">
        <button className="connect-wallet">Connect Wallet</button>
      </div>
    </WalletStyles>
  );
}
