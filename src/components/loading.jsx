import styled from 'styled-components';

const Loading = () => {
  return (
    <StyledWrapper>
      <div className="loader" />
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .loader {
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    font-weight: bold;
    font-size: 12px;
    color: #f2df95;
    height: 150px;
    width: 250px;
    background-color: #907A24;
    border-style: solid;
    border-width: 50px 250px 50px 0px;
    border-color: #C9B656 #AD9531 #87621B #AD9531;
    animation: camera_effect 4s infinite linear;
  }

  @keyframes camera_effect {
    0% {
      border-width: 0px 250px 0px 0px;
    }

    10% {
      border-width: 45px 250px 45px 0px;
    }

    20% {
      border-width: 50px 160px 50px 0px;
    }

    30% {
      border-width: 50px 80px 50px 80px;
    }

    45% {
      border-width: 45px 75px 55px 85px;
    }

    55% {
      border-width: 55px 70px 45px 90px;
    }

    65% {
      border-width: 55px 85px 45px 75px;
    }

    70% {
      border-width: 50px 80px 50px 80px;
    }

    80% {
      border-width: 50px 0px 50px 160px;
    }

    90% {
      border-width: 45px 0px 45px 250px;
    }

    100% {
      border-width: 0px 0px 0px 250px;
    }
  }`;

export default Loading;
