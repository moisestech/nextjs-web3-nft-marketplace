import styled from 'styled-components';

const FeatureStyles = styled.section`
  min-width: 0;
  display: flex;
  flex: 1;
  max-width: 1600px;
  margin: 0 auto;
  padding: 0 24px;
  z-index: 50;
  .feature-wrapper {
    margin: 0;
    min-width: 0;
    display: grid;
    grid-gap: 3px;
    gap: 0;
    min-height: calc(80vh - 86px);
  }
  @media screen and (min-width: 52em) {
    .feature-wrapper {
      padding-top: 64px;
      grid-template-columns: repeat(2, 1fr);
      gap: 32px;
      -webkit-align-items: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
    }
  }
  @media screen and (min-width: 64em) {
    .feature-wrapper {
      padding-top: 96px;
      gap: 48px;
    }
  }
  @media screen and (min-width: 72em) {
    .feature-wrapper {
      gap: 96px;
    }
  }
  a.feature-asset-container {
    width: 100%;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
  }
  @media screen and (min-width: 52em) {
    a.feature-asset-container {
      max-height: 400px;
    }
  }
  @media screen and (min-width: 52em) {
    a.feature-asset-container {
      max-width: 640px;
      margin-left: auto;
    }
  }
  .feature-asset-wrapper {
    box-sizing: border-box;
    margin: 0;
    min-width: 0;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    width: 100%;
    max-width: 100%;
    margin: auto;
  }
  @media screen and (min-width: 52em) {
    .feature-asset-wrapper {
      max-height: 400px;
    }
  }
  .feature-asset-wrapper-inner {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    position: relative;
  }
  .feature-asset-wrapper-inner video {
    width: 100%;
    height: 100%;
    margin-left: auto;
    margin-right: auto;
    transition: filter 0.3s ease-in-out 0s;
    cursor: default;
    filter: drop-shadow(rgba(0, 0, 0, 0.25) 0px 5px 8px);
    z-index: 50;
  }
  @media screen and (min-width: 40em) {
    .feature-wrapper-inner video {
      filter: drop-shadow(rgba(0, 0, 0, 0.25) 0px 20px 20px);
    }
  }
  .feature-info-container {
    box-sizing: border-box;
    margin: 0;
    min-width: 0;
  }
  @media screen and (min-width: 64em) {
    .feature-info-container {
      padding-bottom: 24px;
    }
  }
  .feature-info-wrapper {
    box-sizing: border-box;
    margin: 0;
    min-width: 0;
    display: grid;
    grid-gap: 24px;
  }
  @media screen and (min-width: 64em) {
    .feature-info-wrapper {
      grid-gap: 32px;
    }
  }
  .feature-info-title {
    box-sizing: border-box;
    margin: 0;
    min-width: 0;
    padding-top: 16px;
    z-index: 50;
  }
  .feature-info-title h2 {
    color: white;
  }
  .feature-info-title h3 {
    box-sizing: border-box;
    margin: 0;
    min-width: 0;
    font-family: heading;
    font-weight: 200;
    line-height: heading;
    font-family: 'TechProphecy', -apple-system, BlinkMacSystemFont, 'Segoe UI',
      Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',
      'Segoe UI Symbol';
    font-size: 36px;
    line-height: 1;
    -webkit-letter-spacing: -0.02em;
    -moz-letter-spacing: -0.02em;
    -ms-letter-spacing: -0.02em;
    letter-spacing: -0.02em;
    font-size: 46px;
    color: white;
  }
  @media screen and (min-width: 52em) {
    .feature-info-title h3 {
      font-size: 46px;
    }
  }
  @media screen and (min-width: 52em) {
    .feature-info-title h3 {
      font-size: 56px;
    }
  }
  @media screen and (min-width: 64em) {
    .feature-info-title h3 {
      font-size: 56px;
    }
  }
`;

export default function Feature() {
  return (
    <FeatureStyles>
      <div className="feature-wrapper">
        <a className="feature-asset-container" href="">
          <div className="feature-asset-wrapper">
            <div className="feature-asset-wrapper-inner">
              <video
                src="https://res.cloudinary.com/react-graphql-store/video/upload/v1633133436/61_keyboard_over_man_with_arms_and_computer_head_udhzus.mp4"
                poster="https://assets.foundation.app/b3/9a/Qmaz5dfqm2iqPchw9aXG8woTyFGfaeLnhKGovyiWszb39a/nft.jpg"
                loop
                autoPlay
                playsInline
              />
            </div>
          </div>
        </a>
        <div className="feature-info-container">
          <div className="feature-info-wrapper">
            <div className="feature-info-title">
              <h2>Tech Prophecy #87</h2>
              <h3>
                Even thou I scroll through the uncanny valley of neural
                capitalism, I will fear no AI for your upvotes are with me, your
                likes, your replies they comfort me.
              </h3>
            </div>
          </div>
        </div>
      </div>
    </FeatureStyles>
  );
}
