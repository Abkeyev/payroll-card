import React from "react";
import { Grid, Select, MenuItem } from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { BccTypography, BccButton } from "./BccComponents";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    [theme.breakpoints.between("md", "xl")]: {
      outerContainer: {
        backgroundColor: "#ffffff",
      },
      title: {
        marginBottom: 48,
      },
      container: {
        maxWidth: 1280,
        boxSizing: "border-box",
        padding: "72px 48px",
        margin: "0 auto",
      },
      cards: {
        "& > div:nth-child(3)": {
          display: "flex",
          alignItems: "flex-end",
          borderRadius: 8,
        },
        "& > div": {
          width: "calc(25% - 22px)",
          color: "white",
          "& > span": {
            padding: 16,
            width: "70%",
          },
          "& > div": {
            height: 220,
            display: "flex",
            alignItems: "flex-end",
            borderRadius: 8,
            color: "white",
            "& > span": {
              padding: 16,
              width: "70%",
            },
          },
        },
      },
    },
    [theme.breakpoints.down("sm")]: {
      outerContainer: {
        backgroundColor: "#ffffff",
      },
      title: {
        marginBottom: 24,
      },
      container: {
        maxWidth: 1280,
        boxSizing: "border-box",
        padding: "32px 20px",
        margin: "0 auto",
      },
      cards: {
        flexWrap: "wrap",
        "& > div:nth-child(3)": {
          display: "flex",
          alignItems: "flex-end",
          borderRadius: 8,
        },
        "& > div:last-child": {
          "& > div:last-child": {
            marginBottom: 0,
          },
        },
        "& > div": {
          width: "calc(50% - 12px)",
          color: "white",
          "& > span": {
            padding: 16,
            width: "70%",
          },
          "& > div": {
            height: 220,
            backgroundPositionY: "center!important",
            display: "flex",
            marginBottom: 24,
            alignItems: "flex-end",
            borderRadius: 8,
            color: "white",
            "& > span": {
              padding: 16,
              width: "70%",
            },
          },
        },
      },
    },
    [theme.breakpoints.down("xs")]: {},
  })
);

const Cashback = (props: any) => {
  const classes = useStyles({});
  return (
    <div className={classes.outerContainer}>
      <div className={classes.container}>
        <BccTypography type="h2" block className={classes.title}>
          Оплачивайте покупки и зарабатывайте кэшбэки
        </BccTypography>
        <Grid
          container
          justify="space-between"
          wrap="nowrap"
          className={classes.cards}
        >
          <Grid item container direction="column">
            <Grid
              item
              style={{
                background: `url(${
                  process.env.PUBLIC_URL + "/img/cat1.png"
                }) no-repeat`,
                backgroundSize: "cover",
                marginBottom: 30,
              }}
            >
              <BccTypography type="p1" block>
                Сети заправок
              </BccTypography>
            </Grid>
            <Grid
              item
              style={{
                background: `url(${
                  process.env.PUBLIC_URL + "/img/cat2.png"
                }) no-repeat`,
                backgroundSize: "cover",
              }}
            >
              <BccTypography type="p1" block>
                Супермаркеты
              </BccTypography>
            </Grid>
          </Grid>
          <Grid item container direction="column">
            <Grid
              item
              style={{
                background: `url(${
                  process.env.PUBLIC_URL + "/img/cat3.png"
                }) no-repeat`,
                backgroundSize: "cover",
                marginBottom: 30,
              }}
            >
              <BccTypography type="p1" block>
                Отели и билеты по всему миру
              </BccTypography>
            </Grid>
            <Grid
              item
              style={{
                background: `url(${
                  process.env.PUBLIC_URL + "/img/cat4.png"
                }) no-repeat`,
                backgroundSize: "cover",
              }}
            >
              <BccTypography type="p1" block>
                Рестораны и кафе
              </BccTypography>
            </Grid>
          </Grid>
          <Grid
            item
            style={{
              background: `url(${
                process.env.PUBLIC_URL + "/img/cat5.png"
              }) no-repeat`,
              backgroundSize: "cover",
            }}
          >
            <BccTypography type="p1" block>
              Аптеки
            </BccTypography>
          </Grid>
          <Grid item container direction="column">
            <Grid
              item
              style={{
                background: `url(${
                  process.env.PUBLIC_URL + "/img/cat6.png"
                }) no-repeat`,
                marginBottom: 30,
                backgroundSize: "cover",
              }}
            >
              <BccTypography type="p1" block>
                Такси
              </BccTypography>
            </Grid>
            <Grid
              item
              style={{
                background: `url(${
                  process.env.PUBLIC_URL + "/img/cat7.png"
                }) no-repeat`,
                backgroundSize: "cover",
              }}
            >
              <BccTypography type="p1" block>
                Магазины одежды
              </BccTypography>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Cashback;
