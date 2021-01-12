import React from "react";
import { Grid } from "@material-ui/core";
import {
  BccTypography,
  BccLink,
  BccTabs,
  BccTab,
  BccTable,
  BccTableContainer,
  BccTableCell,
  BccTableRow,
  BccTableBody,
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
        backgroundColor: "#fafafa",
      },
      innerContainer: {
        maxWidth: 1280,
        margin: "0 auto",
        width: "100%",
        padding: "46px 48px 64px",
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
      table: {
        color: "#80868C",
        "& tr > td:first-child": {
          paddingLeft: 0,
          verticalAlign: "top",
        },
        "& tr > td:last-child": {
          paddingRight: 0,
          verticalAlign: "top",
          "& tr:last-child > td": {
            borderBottom: "none",
            verticalAlign: "top",
            padding: "0 64px 0 0",
          },
        },
        "& tr:last-child > td": {
          borderBottom: "none",
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
      docBlock: {
        padding: "12px 36px",
        backgroundColor: "white",
        boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.08)",
        borderRadius: 8,
        display: "flex",
        alignItems: "center",
        width: "max-content",
        "& > a": {
          color: "#000D1A",
          marginLeft: 16,
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
        padding: "0 20px 20px",
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
      table: {
        color: "#80868C",
        "& tr > td:first-child": {
          paddingLeft: 0,
          verticalAlign: "top",
        },
        "& tr > td:last-child": {
          paddingRight: 0,
          verticalAlign: "top",
          "& tr:last-child > td": {
            borderBottom: "none",
            verticalAlign: "top",
            padding: "0 64px 0 0",
          },
        },
        "& tr:last-child > td": {
          borderBottom: "none",
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
      docBlock: {
        padding: "12px 36px",
        backgroundColor: "white",
        boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.08)",
        borderRadius: 8,
        display: "flex",
        alignItems: "center",
        width: "max-content",
        "& > a": {
          color: "#000D1A",
          marginLeft: 16,
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
    link: {
      color: "#27AE60",
      cursor: "pointer",
    },
  })
);

const Tabs = (props: any) => {
  const classes = useStyles({});
  const [index, setIndex] = React.useState(0);
  const goToApp = (e: any) => {
    props.scrollToMobile();
  };

  return (
    <div className={classes.container}>
      <div className={classes.innerContainer}>
        <BccTabs
          value={index}
          onChange={(e: any, i: number) => setIndex(i)}
          className={classes.tab}
        >
          <BccTab label="Тарифы" />
        </BccTabs>
        <div className={classes.tabs}>
          {index === 0 ? (
            <BccTableContainer>
              <BccTable className={classes.table}>
                <BccTableBody>
                  <BccTableRow>
                    <BccTableCell>
                      <BccTypography type="p2" block mb="4px">
                        Выпуск и обслуживание карты
                      </BccTypography>
                    </BccTableCell>
                    <BccTableCell>
                      <BccTypography type="p2" block color="initial" mb="4px">
                        Бесплатно
                      </BccTypography>
                    </BccTableCell>
                  </BccTableRow>
                  <BccTableRow>
                    <BccTableCell>
                      <BccTypography type="p2" block mb="4px">
                        Срочный выпуск карты
                      </BccTypography>
                    </BccTableCell>
                    <BccTableCell>
                      <BccTypography type="p2" block color="initial" mb="12px">
                        3 500 KZT
                      </BccTypography>
                      <BccTypography type="p3" block>
                        Выпускается стильная именная карта.
                        <br />
                        Срок выпуска - 2 рабочих дня (без учета доставки до
                        филиалов)
                      </BccTypography>
                    </BccTableCell>
                  </BccTableRow>
                  <BccTableRow>
                    <BccTableCell>
                      <BccTypography type="p2" block mb="4px">
                        Снятие наличных денег в банкоматах Банка
                      </BccTypography>
                    </BccTableCell>
                    <BccTableCell>
                      <BccTypography type="p2" block color="initial" mb="4px">
                        0 KZT
                      </BccTypography>
                    </BccTableCell>
                  </BccTableRow>
                  <BccTableRow>
                    <BccTableCell>
                      <BccTypography type="p2" block mb="4px">
                        Переводы между своими счетами (на свою карту/счет)
                        внутри Банка
                      </BccTypography>
                    </BccTableCell>
                    <BccTableCell>
                      <BccTableRow>
                        <BccTableCell>
                          <BccTypography
                            type="p2"
                            block
                            color="initial"
                            mb="4px"
                          >
                            0 KZT
                          </BccTypography>
                          <BccTypography
                            type="p3"
                            color="#80868C"
                            block
                            mb="8px"
                          >
                            В{" "}
                            <BccTypography
                              type="p2"
                              color="#27AE60"
                              className={classes.link}
                              onClick={(e: any) => goToApp(e)}
                            >
                              BCC.KZ
                            </BccTypography>
                          </BccTypography>
                        </BccTableCell>
                        <BccTableCell>
                          <BccTypography
                            type="p2"
                            block
                            color="initial"
                            mb="4px"
                          >
                            0 KZT
                          </BccTypography>
                          <BccTypography
                            type="p3"
                            color="#80868C"
                            block
                            mb="4px"
                          >
                            Через Интернет
                          </BccTypography>
                        </BccTableCell>
                      </BccTableRow>
                    </BccTableCell>
                  </BccTableRow>
                  <BccTableRow>
                    <BccTableCell>
                      <BccTypography type="p2" block mb="16px">
                        Подробное описание тарифов
                      </BccTypography>
                      <div className={classes.docBlock}>
                        <img src={process.env.PUBLIC_URL + "/img/pdf.svg"} />
                        <BccLink
                          target="_blank"
                          href={process.env.PUBLIC_URL + "/tarifs.pdf"}
                        >
                          Тарифы по зарплатному проекту
                        </BccLink>
                      </div>
                    </BccTableCell>
                  </BccTableRow>
                </BccTableBody>
              </BccTable>
            </BccTableContainer>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default Tabs;
