import React from "react";
import { Grid, Select, MenuItem } from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { BccTypography, BccLink } from "./BccComponents";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    [theme.breakpoints.between("md", "xl")]: {
      outerContainer: {
        backgroundColor: "#ffffff",
      },
      title: {
        marginBottom: 32,
      },
      subTitle: {
        marginBottom: 56,
      },
      container: {
        maxWidth: 1280,
        boxSizing: "border-box",
        padding: "72px 48px",
        margin: "0 auto",
      },
      cards: {
        "& > div": {
          width: "40%",
          "& > div:first-child": {
            fontSize: 64,
            lineHeight: "75px",
            fontWeight: "bold",
            marginRight: 32,
          },
        },
      },
    },
    [theme.breakpoints.down("sm")]: {
      outerContainer: {
        backgroundColor: "#ffffff",
      },
      title: {
        marginBottom: 32,
      },
      subTitle: {
        marginBottom: 16,
      },
      container: {
        maxWidth: 1280,
        boxSizing: "border-box",
        padding: "32px 20px",
        margin: "0 auto",
      },
      stepsContainer: {
        backgroundColor: "#fafafa",
        borderRadius: 8,
        "& > span:first-child": {
          marginBottom: 20,
        },
      },
      cards: {
        flexWrap: "wrap",
        "& > div:last-child": { marginBottom: 0 },
        "& > div": {
          width: "100%",
          justifyContent: "flex-start",
          alignItems: "flex-start",
          background: "#FFFFFF",
          boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.08)",
          borderRadius: 10,
          padding: 16,
          marginBottom: 16,
          "& > div:first-child": {
            fontSize: 64,
            lineHeight: "75px",
            fontWeight: "bold",
            marginRight: 32,
          },
          "& > div:last-child": {
            "& > span": {
              paddingTop: 8,
            },
          },
        },
      },
    },
    [theme.breakpoints.down("xs")]: {},
    link: {
      color: "#27AE60!important",
    },
  })
);

const HowToGet = (props: any) => {
  const classes = useStyles({});
  return (
    <div className={classes.outerContainer}>
      <div className={classes.container}>
        <BccTypography type="h2" block className={classes.title}>
          Как получить карту
        </BccTypography>
        <BccTypography
          type="h5"
          weight="normal"
          block
          className={classes.subTitle}
        >
          Выберите один из двух способов получения карты:
        </BccTypography>
        <Grid
          container
          justify="space-around"
          wrap="nowrap"
          className={classes.cards}
        >
          <Grid
            item
            container
            alignItems="center"
            wrap="nowrap"
            justify="space-between"
          >
            <Grid item>1</Grid>
            <Grid item>
              <BccTypography type="p2l" block color="#5B5B5B">
                Обратитесь к Вашему работодателю для оформления зарплатного
                проекта
              </BccTypography>
            </Grid>
          </Grid>
          <Grid
            item
            container
            alignItems="center"
            wrap="nowrap"
            justify="space-between"
          >
            <Grid item>2</Grid>
            <Grid item>
              <BccTypography type="p2l" block color="#5B5B5B">
                <BccLink
                  className={classes.link}
                  href="https://www.bcc.kz/socialcard/"
                  target="_blank"
                >
                  Подайте
                </BccLink>{" "}
                заявку на сайте. Переведите зарплату из Вашей организации на
                Вашу новую карту
              </BccTypography>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default HowToGet;
