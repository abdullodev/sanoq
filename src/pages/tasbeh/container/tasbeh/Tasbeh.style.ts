import styled from "styled-components";

export const TasbehStyled = styled.div`
  max-width: 1800px;
  width: 100%;
  height: 100%;
  margin: 0 auto;

  header {
    height: 120px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 25px;

    .title {
      font-size: 30px;
      font-weight: 600;
      color: #34758a;
    }
    .header_action {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 30px;

      .action_count {
        width: 80px;
        height: 80px;
        font-size: 20px;
        color: #ffffff;
        font-weight: 600;
        background: #924590;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        -webkit-box-shadow: 0px 0px 14px -5px rgba(34, 60, 80, 0.6);
        -moz-box-shadow: 0px 0px 14px -5px rgba(34, 60, 80, 0.6);
        box-shadow: 0px 0px 14px -5px rgba(34, 60, 80, 0.6);
      }

      .action_default .action_default_btn {
        width: 80px;
        height: 80px;
        background: #34758a;
        -webkit-box-shadow: 0px 0px 14px -5px rgba(34, 60, 80, 0.6);
        -moz-box-shadow: 0px 0px 14px -5px rgba(34, 60, 80, 0.6);
        box-shadow: 0px 0px 14px -5px rgba(34, 60, 80, 0.6);

        .action_icon {
          color: #ffffff;
          font-size: 28px;
        }
      }
    }
  }

  .counter-box {
    width: 100%;
    height: 400px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-content: center;
    align-items: center;

    .counter-right,
    .counter-left {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      gap: 60px;
    }
    .counter-right {
      .slide_content {
        width: 240px;
        height: 240px;

        .slick-arrow {
          display: none !important;
        }
        .my_slick_slider {
          width: 100%;
          height: 100%;

          .slide_box {
            width: 240px;
            height: 240px;
            display: flex !important;
            justify-content: center !important;
            align-items: center !important;

            img {
              max-width: 90%;
              max-height: 90%;
              object-fit: cover;
            }
          }
        }
      }

      .all_count {
        font-size: 44px;
        color: #34758a;
        font-weight: 600;
      }
    }
    .counter-left .action_default {
      width: 220px;
      height: 220px;
      background: #34758a;
      font-size: 45px;
      color: #ffffff;
      -webkit-box-shadow: 0px 0px 14px -5px rgba(34, 60, 80, 0.6);
      -moz-box-shadow: 0px 0px 14px -5px rgba(34, 60, 80, 0.6);
      box-shadow: 0px 0px 14px -5px rgba(34, 60, 80, 0.6);
    }
  }

  @media (max-width: 720px) {
    .counter-box {
      grid-template-columns: 1fr;
      gap:80px; 
    }
    .action_count {
      width: 50px;
      height: 50px;
      font-size: 14px;
    }

    .action_default .action_default_btn {
      width: 50px;
      height: 50px;

      .action_icon {
        font-size: 16px;
      }
    }
  }
`;
