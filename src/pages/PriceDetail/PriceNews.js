import React from "react";
import * as Styles from "./PriceDetailStyles";

const PriceNews = props => {
  const results = props.news.results;
  const titles = props.news.results && props.news.results.title;
  console.log(props.news);
  if (props.news.results) {
    return (
      <div>
        <Styles.AsideAssetsHeader pad noMarg gray>
          Lastest News
        </Styles.AsideAssetsHeader>
        {results.map(result => {
          return (
            <Styles.NewsContainer>
              <a href={result.url}>
                <Styles.SourceNewsHeader>
                  {result.source.title}
                </Styles.SourceNewsHeader>
                <Styles.PriceNewsHeader>{result.title}</Styles.PriceNewsHeader>
                <Styles.InfoBody smallMargin>
                  {props.fixDate(result.created_at)}
                </Styles.InfoBody>
              </a>
            </Styles.NewsContainer>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
};

export default PriceNews;
