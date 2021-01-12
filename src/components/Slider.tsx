import React, { Children } from "react";
import { Grid } from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { BccButton, BccTypography } from "../components/BccComponents";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    [theme.breakpoints.between("md", "xl")]: {
      outerContainer: {
        backgroundSize: "cover",
        position: "relative",
      },
      container: {
        position: "relative",
        margin: "0 auto",
        padding: "0 48px",
        paddingBottom: "32px",
        maxWidth: 1280,
        boxSizing: "border-box",
      },
      slderTitle: {
        marginBottom: 16,
      },
      sliderSubTitle: {
        marginRight: 96,
        marginBottom: 48,
        color: "#4D565F",
      },
      sliderBtn: {
        height: 64,
        fontSize: 18,
        lineHeight: "64px",
        minWidth: 350,
      },
      mainImg: {
        position: "absolute",
        top: 0,
        right: 0,
        left: "50%",
        bottom: 0,
        backgroundColor: "#E9F7EF",
        display: "flex",
        alignItems: "center",
        "& > img:last-child": {
          display: "none",
        },
        "& > img": {
          width: "50%",
          margin: "0 auto",
        },
      },
      cardsText: {
        "& > div": {
          width: "calc(50% - 12px)",
          marginBottom: 48,
        },
        "& > div:first-child": {
          marginBottom: 24,
        },
        "& > div:nth-child(2)": {
          marginBottom: 24,
        },
      },
      header: {
        paddingTop: 48,
      },
      slider: {
        width: "100%",
        overflowX: "hidden",
        "& > div": {
          width: "100%",
          transition: "all .7s ease-in-out",
          "& > div": {
            width: "100%",
          },
        },
      },
      slide: {
        position: "relative",
        "& > div:first-child": {
          width: "calc(60% - 16px)",
          padding: "80px 0 64px",
        },
      },
      sliderSteps: {
        position: "absolute",
        bottom: 0,
        width: 210,
        left: "calc(50% - 105px)",
        display: "flex",
        flexWrap: "nowrap",
        zIndex: 99,
        justifyContent: "space-between",
        alignItems: "center",
      },
      sliderStep: {
        cursor: "pointer",
        width: 10,
        marginRight: 16,
        height: 10,
        borderRadius: "50%",
        boxSizing: "border-box",
        border: "1px solid #27AE60",
        "&:hover": {
          backgroundColor: "#27AE60",
        },
      },
      active: {
        backgroundColor: "#27AE60",
      },
      slideLeft: {
        marginRight: 64,
        cursor: "pointer",
      },
      slideRight: {
        marginLeft: 48,
        cursor: "pointer",
      },
    },
    [theme.breakpoints.down("sm")]: {
      outerContainer: {
        backgroundSize: "cover",
        position: "relative",
      },
      container: {
        position: "relative",
        margin: "0 auto",
        padding: "0 20px",
        paddingBottom: "32px",
        maxWidth: 1280,
        boxSizing: "border-box",
      },
      sliderSubTitle: {
        marginBottom: "20px!important",
        color: "#4D565F",
      },
      sliderBtn: {
        height: 64,
        fontSize: 18,
        lineHeight: "64px",
        minWidth: "auto",
        width: "100%",
      },
      mainImg: {
        position: "relative",
        top: "initial",
        right: "initial",
        left: "initial",
        bottom: "initial",
        backgroundColor: "#E9F7EF",
        display: "flex",
        alignItems: "center",
        "& > img:last-child": {
          display: "block",
        },
        "& > img:first-child": {
          display: "none",
        },
        "& > img": {
          width: "50%",
          margin: "16px auto",
        },
      },
      cardsText: {
        flexWrap: "wrap",
        "& > div": {
          width: "100%",
          marginBottom: 48,
        },
        "& > div:first-child": {
          marginBottom: 24,
        },
        "& > div:nth-child(2)": {
          marginBottom: 24,
        },
      },
      header: {
        display: "none",
      },
      slider: {
        width: "100%",
        overflowX: "hidden",
        "& > div": {
          width: "100%",
          transition: "all .7s ease-in-out",
          "& > div": {
            width: "100%",
          },
        },
      },
      slide: {
        position: "relative",
        "& > div:first-child": {
          width: "100%",
          padding: "24px 0",
        },
        "& > div > span": {
          fontWeight: "normal",
          marginBottom: 8,
        },
      },
      slderTitle: {
        marginBottom: "16px!important",
        fontWeight: "500!important",
      },
      sliderSteps: {
        position: "absolute",
        bottom: 0,
        width: 210,
        left: "calc(50% - 105px)",
        display: "flex",
        flexWrap: "nowrap",
        zIndex: 99,
        justifyContent: "space-between",
        alignItems: "center",
      },
      sliderStep: {
        cursor: "pointer",
        width: 10,
        marginRight: 16,
        height: 10,
        borderRadius: "50%",
        boxSizing: "border-box",
        border: "1px solid #27AE60",
        "&:hover": {
          backgroundColor: "#27AE60",
        },
      },
      active: {
        backgroundColor: "#27AE60",
      },
      slideLeft: {
        marginRight: 64,
        cursor: "pointer",
      },
      slideRight: {
        marginLeft: 48,
        cursor: "pointer",
      },
    },
    [theme.breakpoints.down("xs")]: {},
  })
);

interface SliderStepsProps {
  title: string;
  desc: any;
  img: string;
  btnText: string;
  bgColor?: string;
}

interface SliderProps {
  steps: Array<SliderStepsProps> | SliderStepsProps;
}

const Slider = (props: SliderProps) => {
  const classes = useStyles({});
  return (
    <div className={classes.outerContainer}>
      <div className={classes.mainImg}>
        {!Array.isArray(props.steps) && (
          <>
            <img src={process.env.PUBLIC_URL + props.steps.img} alt="slide1" />
            <img src={process.env.PUBLIC_URL + "/img/bg_m.svg"} alt="slide1" />
          </>
        )}
      </div>
      <div className={classes.container}>
        <div className={classes.slider}>
          <div>
            <Grid container className={classes.header}>
              <Grid item>
                <img src={process.env.PUBLIC_URL + "/img/logo.svg"} />
              </Grid>
            </Grid>
            {!Array.isArray(props.steps) && (
              <Grid
                container
                justify="space-between"
                wrap="nowrap"
                className={classes.slide}
              >
                <Grid item>
                  <BccTypography type="h1" block className={classes.slderTitle}>
                    {props.steps.title}
                  </BccTypography>
                  <BccTypography
                    type="p1"
                    block
                    className={classes.sliderSubTitle}
                  >
                    {props.steps.desc}
                  </BccTypography>
                  <BccTypography type="p2" weight="medium" block mb="24px">
                    Бесплатный выпуск
                  </BccTypography>
                  <BccTypography type="p2" weight="medium" block mb="8px">
                    до 1 000 000 KZT
                  </BccTypography>
                  <BccTypography type="p3" block color="#4D565F" mb="24px">
                    Снятие наличных в любых банкоматах мира
                  </BccTypography>
                  <BccTypography type="p2" weight="medium" block mb="8px">
                    до 200 000 KZT в месяц
                  </BccTypography>
                  <BccTypography type="p3" block color="#4D565F" mb="48px">
                    Переводы на любые карты РК без комиссий
                  </BccTypography>
                  <BccButton
                    variant="contained"
                    color="primary"
                    href="https://www.bcc.kz/socialcard/"
                    target="_blank"
                    className={classes.sliderBtn}
                  >
                    {props.steps.btnText}
                  </BccButton>
                </Grid>
              </Grid>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
