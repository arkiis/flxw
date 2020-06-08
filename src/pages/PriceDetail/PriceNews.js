import React from "react";
import * as Styles from "./PriceDetailStyles";
import Skeleton from "react-loading-skeleton";

const PriceNews = props => {
  const results = props.news.results;
  const url =
    "https://dynamic-assets.coinbase.com/ab1e12937bc930bbb51363499ed8d1d4e47c89255cca28671231120e17b6475c95f5f8ae4ce0a9aea7479772fe6f02ba1c0b9f7b5f1f6da2725542ee4753d720/news_article_images/28c41d0a24939126319eee1788a19714197812cfb3edff24439a8c1c25ad64c2.jpg";
  const titles = props.news.results && props.news.results.title;
  console.log(props.news);
  if (props.news.results) {
    return (
      <div>
        <Styles.AsideAssetsHeader pad noMarg gray>
          Lastest News
        </Styles.AsideAssetsHeader>
        {results.map((result, index) => {
          return (
            <Styles.NewsContainer key={index}>
              <a href={result.url} style={{ maxWidth: "600px" }}>
                <Styles.SourceNewsHeader>
                  {result.source.title}
                </Styles.SourceNewsHeader>
                <Styles.PriceNewsHeader>{result.title}</Styles.PriceNewsHeader>
                <Styles.InfoBody smallMargin>
                  {props.fixDate(result.created_at)}
                </Styles.InfoBody>
              </a>
              <Styles.NewsImg src={url}>
                {url ? null : <Skeleton height={40} width={50} />}
              </Styles.NewsImg>
            </Styles.NewsContainer>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
};

export default React.memo(PriceNews);
