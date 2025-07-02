
import styled, { keyframes } from 'styled-components';
import about1 from "../../assets/about1.jpg";
import about2 from "../../assets/about2.jpg";
import about3 from "../../assets/about3.jpg";
import about4 from "../../assets/about4.jpg";
import about5 from "../../assets/about5.jpg";
import about6 from "../../assets/about6.jpg";
import about7 from "../../assets/about7.jpg";
import about8 from "../../assets/about6.jpg";


const imageList = [about1, about2, about3,about4, about5, about6, about7, about8];
const Aboutmotion = () => {
  return (
    <StyledWrapper>
      <div className="wrapper">
        <div className="inner">
          {imageList.map((url, index) => (
            <Card key={index} index={index} bgImage={url}>
              <div className="img" />
            </Card>
          ))}
        </div>
        <div className="center-label">TEAM</div>
      </div>
    </StyledWrapper>
  );
};

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translate(-50%, -50%) scale(0.8);
  }
  to {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
  }
`;

const pulse = keyframes`
  0%, 100% {
    text-shadow: 0 0 10px rgba(255,255,255,0.6);
    transform: translate(-50%, -50%) scale(1);
  }
  50% {
    text-shadow: 0 0 20px rgba(255,255,255,1);
    transform: translate(-50%, -50%) scale(1.05);
  }
`;

const Card = styled.div.attrs(({ index }) => ({
  style: {
    '--index': index,
  },
}))`
  position: absolute;
  border: 2px solid #fff;
  border-radius: 12px;
  overflow: hidden;
  inset: 0;
  transform: rotateY(calc((360deg / 10) * var(--index)))
    translateZ(calc((100px + 150px)));

  .img {
    width: 100%;
    height: 100%;
    background-image: url(${props => props.bgImage});
    background-size: cover;
    background-position: center;
  }
`;

const StyledWrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;

  .wrapper {
    position: relative;
    width: 100px;
    height: 150px;
    perspective: 1000px;
  }

  .inner {
    --w: 100px;
    --h: 150px;
    --rotateX: -15deg;
    width: var(--w);
    height: var(--h);
    transform-style: preserve-3d;
    transform: rotateX(var(--rotateX));
    animation: rotating 20s linear infinite;
    position: relative;
  }

  @keyframes rotating {
    from {
      transform: rotateX(var(--rotateX)) rotateY(0deg);
    }
    to {
      transform: rotateX(var(--rotateX)) rotateY(360deg);
    }
  }

  .center-label {
    position: absolute;
    top: 25%;
    left: 50%;
    color: white;
    font-size: 2.5rem;
    font-weight: bold;
    z-index: 5;
    pointer-events: none;
    animation: ${fadeIn} 1.2s ease-out, ${pulse} 2.5s ease-in-out infinite;
    text-shadow: 0 0 10px rgba(0, 0, 0, 0.8);
    transform: translate(-50%, -50%);
  }
`;

export default Aboutmotion;
