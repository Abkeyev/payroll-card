import React from "react";
import { Grid, Select, MenuItem } from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { BccTypography, BccButton } from "./BccComponents";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    [theme.breakpoints.between("md", "xl")]: {
      outerContainer: {
        backgroundColor: "#fafaffa",
      },
      container: {
        maxWidth: 1280,
        boxSizing: "border-box",
        padding: "64px 48px",
        margin: "0 auto",
      },
      card: {
        padding: "0 32px",
        "& > div:first-child": {
          width: 350,
        },
        "& > div:nth-child(2)": {
          marginLeft: 120,
          "& > div": {
            marginBottom: 36,
            display: "flex",
            alignItems: "center",
            "& > img": {
              marginRight: 16,
            },
          },
        },
      },
      btn: {
        minWidth: 320,
        marginTop: 8,
      },
    },
    [theme.breakpoints.down("sm")]: {
      outerContainer: {
        backgroundColor: "#fafaffa",
      },
      container: {
        maxWidth: 1280,
        boxSizing: "border-box",
        padding: "32px 20px",
        margin: "0 auto",
      },
      card: {
        padding: "0 32px",
        flexWrap: "wrap",
        flexDirection: "column",
        "& > div:first-child": {
          width: "100%",
          marginBottom: 72,
        },
        "& > div:nth-child(2)": {
          width: "100%",
          "& > div": {
            marginBottom: 16,
            display: "flex",
            alignItems: "center",
            "& > img": {
              marginRight: 16,
            },
          },
        },
      },
      btn: {
        minWidth: "auto",
        width: "100%",
        marginTop: 8,
      },
    },
    [theme.breakpoints.down("xs")]: {},
    btn: {},
  })
);

const Card = (props: any) => {
  const classes = useStyles({});
  return (
    <div className={classes.outerContainer}>
      <div className={classes.container}>
        <Grid
          container
          justify="flex-start"
          wrap="nowrap"
          alignItems="center"
          className={classes.card}
        >
          <Grid item>
            <img src={process.env.PUBLIC_URL + "/img/termin.svg"} />
          </Grid>
          <Grid item>
            <div>
              <img src={process.env.PUBLIC_URL + "/img/card-mark.svg"} />{" "}
              <BccTypography type="p2">
                Монохромная карта с ярким, стильным дизайном и Вашим собственным
                именем
              </BccTypography>
            </div>
            <div>
              <img src={process.env.PUBLIC_URL + "/img/card-mark.svg"} />{" "}
              <BccTypography type="p2">
                Бесконтактные платежи с Apple Pay и Samsung Pay
              </BccTypography>
            </div>
            <div>
              <img src={process.env.PUBLIC_URL + "/img/card-mark.svg"} />{" "}
              <BccTypography type="p2">
                Специальные предложения по картам
              </BccTypography>
            </div>
            <div>
              <BccButton
                variant="contained"
                color="primary"
                href="https://www.bcc.kz/socialcard/"
                target="_blank"
                className={classes.btn}
              >
                Открыть карту
              </BccButton>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Card;
