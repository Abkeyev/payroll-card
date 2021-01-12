import React from "react";
import { Grid } from "@material-ui/core";
import {
  BccTypography,
  BccLink,
  BccButton,
  BccTabs,
  BccTab,
  BccInput,
  BccCollapseTitle,
  BccCollapsePanel,
  BccCollapseDetails,
} from "./BccComponents";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    [theme.breakpoints.between("md", "xl")]: {
      container: {
        backgroundColor: "#ffffff",
      },
      innerContainer: {
        maxWidth: 1280,
        margin: "0 auto",
        width: "100%",
        padding: "64px 48px",
        boxSizing: "border-box",
      },
      tabs: {
        marginTop: 30,
        minHeight: 150,
        fontSize: 16,
        "& > span": {
          color: "#27AE60",
        },
      },
      tab: {
        "& > div > div": {
          borderBottom: "1px solid #F3F3F3",
          overflowX: "scroll",
          position: "relative",
          "&::-webkit-scrollbar": {
            width: 0,
            background: "transparent",
            height: 0,
          },
        },
      },
      benefits: {
        "& > div:first-child": {
          marginBottom: 20,
        },
        "& > div:nth-child(2)": {
          marginBottom: 20,
        },
        "& > div": {
          width: "calc(50% - 16px)",
          borderRadius: 10,
          display: "flex",
          justifyContent: "flex-start",
          backgroundColor: "#FAFAFA",
          padding: 24,
          "& > div:first-child": {
            background: "#FFFFFF",
            boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.08)",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            maxHeight: 80,
            minHeight: 80,
            maxWidth: 80,
            minWidth: 80,
            boxSizing: "border-box",
            padding: "0",
            "& > img": {
              width: 40,
              margin: "0 auto",
            },
          },
          "& > div:last-child": {
            marginLeft: 32,
          },
        },
      },
      docs: {
        marginTop: 24,
        backgroundColor: "#ffffff",
        boxShadow:
          "0px 10px 20px rgba(0, 0, 0, 0.04), 0px 2px 6px rgba(0, 0, 0, 0.04), 0px 0px 1px rgba(0, 0, 0, 0.04)",
        borderRadius: 8,
        "& > div:nth-child(2n)": {
          backgroundColor: "#fafafa",
        },
        "& > div:first-child": {
          display: "block",
        },
        "& > div": {
          width: "100%",
          marginBottom: 0,
          display: "flex",
          boxSizing: "border-box",
          padding: "24px",
          flexWrap: "nowrap",
          alignItems: "center",
          "& > a": {
            color: "#000D1A",
          },
          "& > img": {
            marginRight: 24,
          },
        },
      },
    },
    [theme.breakpoints.down("sm")]: {
      container: {
        backgroundColor: "#ffffff",
      },
      innerContainer: {
        maxWidth: 1280,
        margin: "0 auto",
        width: "100%",
        padding: "32px 20px",
        boxSizing: "border-box",
      },
      tabs: {
        marginTop: 30,
        minHeight: 150,
        fontSize: 16,
        "& > span": {
          color: "#27AE60",
        },
      },
      tab: {
        "& > div > div": {
          borderBottom: "1px solid #F3F3F3",
          overflowX: "scroll",
          position: "relative",
          "&::-webkit-scrollbar": {
            width: 0,
            background: "transparent",
            height: 0,
          },
        },
      },
      benefits: {
        "& > div:first-child": {
          marginBottom: 20,
        },
        "& > div:nth-child(2)": {
          marginBottom: 20,
        },
        "& > div": {
          width: "100%",
          borderRadius: 10,
          display: "flex",
          justifyContent: "flex-start",
          backgroundColor: "#FAFAFA",
          padding: 24,
          "& > div:first-child": {
            background: "#FFFFFF",
            boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.08)",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            maxHeight: 48,
            minHeight: 48,
            maxWidth: 48,
            minWidth: 48,
            boxSizing: "border-box",
            padding: "0",
            "& > img": {
              width: 24,
              margin: "0 auto",
            },
          },
          "& > div:last-child": {
            "& > span:first-child": {
              marginLeft: 16,
              lineHeight: "48px",
            },
            "& > span": {
              marginBottom: "8px!important",
              marginLeft: -48,
            },
          },
        },
      },
      docs: {
        marginTop: 24,
        backgroundColor: "#ffffff",
        boxShadow:
          "0px 10px 20px rgba(0, 0, 0, 0.04), 0px 2px 6px rgba(0, 0, 0, 0.04), 0px 0px 1px rgba(0, 0, 0, 0.04)",
        borderRadius: 8,
        "& > div:nth-child(2n)": {
          backgroundColor: "#fafafa",
        },
        "& > div:first-child": {
          display: "block",
        },
        "& > div": {
          width: "100%",
          marginBottom: 0,
          display: "flex",
          boxSizing: "border-box",
          padding: "24px",
          flexWrap: "nowrap",
          alignItems: "center",
          "& > a": {
            color: "#000D1A",
          },
          "& > img": {
            marginRight: 24,
          },
        },
      },
    },
    [theme.breakpoints.down("xs")]: {},
  })
);

const Benefits = (props: any) => {
  const classes = useStyles({});
  const [index, setIndex] = React.useState(0);

  return (
    <div className={classes.container} style={{ backgroundColor: "white" }}>
      <div className={classes.innerContainer}>
        <BccTypography type="h2" block mb="40px">
          {props.title}
        </BccTypography>

        <Grid
          container
          justify="space-between"
          wrap="wrap"
          className={classes.benefits}
        >
          <Grid item container wrap="nowrap" justify="space-between">
            <Grid item>
              <img src={process.env.PUBLIC_URL + "/img/b1.svg"} />
            </Grid>
            <Grid item>
              <BccTypography type="h5" block mb="20px">
                Бесплатно
              </BccTypography>
              <BccTypography type="p2l" block>
                - Выпуск и годовое обслуживание карты
                <br />
                - Безналичные оплаты
                <br />- Внутрибанковский перевод на карту другого клиента
              </BccTypography>
            </Grid>
          </Grid>
          <Grid item container wrap="nowrap" justify="space-between">
            <Grid item>
              <img src={process.env.PUBLIC_URL + "/img/b2.svg"} />
            </Grid>
            <Grid item>
              <BccTypography type="h5" block mb="20px">
                Cashback
              </BccTypography>
              <BccTypography type="p2l" block>
                - Зачисление кэшбэка в размере 1% на любые покупки
                <br />- Начисление кэшбека на Вашу карту происходит реальными
                деньгами
              </BccTypography>
            </Grid>
          </Grid>
          <Grid item container wrap="nowrap" justify="space-between">
            <Grid item>
              <img src={process.env.PUBLIC_URL + "/img/b3.svg"} />
            </Grid>
            <Grid item>
              <BccTypography type="h5" block mb="8px">
                Льготное кредитование
              </BccTypography>
              <BccTypography type="p3" block mb="12px">
                для всех держателей карточек зарплатного проекта
              </BccTypography>
              <BccTypography type="p2l" block>
                - Получайте зарплату и пользуйтесь кредитными средствами по
                заниженным процентным ставкам
              </BccTypography>
            </Grid>
          </Grid>
          <Grid item container wrap="nowrap" justify="space-between">
            <Grid item>
              <img src={process.env.PUBLIC_URL + "/img/b4.svg"} />
            </Grid>
            <Grid item>
              <BccTypography type="h5" block mb="20px">
                Мобильность
              </BccTypography>
              <BccTypography type="p2l" block>
                - Снятие наличных в любом ближайшем банкомате бесплатно до 1 000
                000 тенге
              </BccTypography>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Benefits;
