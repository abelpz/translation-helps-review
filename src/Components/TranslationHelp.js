import React, { useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import { Card, useContent, useCardState } from "translation-helps-rcl";
import { useRsrc } from "scripture-resources-rcl";

export const TranslationHelp = () => {
  const [selectedQuote, setQuote] = useState({});
  const rsrc = useRsrc({
    config: {
      server: "https://git.door43.org",
      httpConfig: {}
    },
    reference: {
      verse: 2,
      chapter: 1,
      filePath: "",
      projectId: "luk",
      ref: "master"
    },
    resourceLink: `unfoldingWord/en/tn/master`
  });
  console.log(JSON.stringify(rsrc, undefined, 1));
  return <></>;
  const languageId = "en";
  const { markdown, items, isLoading } = useContent({
    chapter: 1,
    verse: 2,
    languageId,
    projectId: "luk",
    listRef: "master",
    resourceId: "tn",
    owner: "unfoldingWord",
    server: "https://git.door43.org"
  });

  const {
    state: { item, headers, filters, fontSize, itemIndex, markdownView },
    actions: { setFilters, setFontSize, setItemIndex, setMarkdownView }
  } = useCardState({
    items
  });
  const showSaveChangesPrompt = () => {
    return new Promise((resolve, reject) => {
      resolve();
    });
  };

  return isLoading ? (
    <CircularProgress />
  ) : (
    <Card
      items={items}
      title={"Notes"}
      headers={headers}
      filters={filters}
      fontSize={fontSize}
      itemIndex={itemIndex}
      setFilters={setFilters}
      setFontSize={setFontSize}
      setItemIndex={setItemIndex}
      markdownView={markdownView}
      setMarkdownView={setMarkdownView}
      showSaveChangesPrompt={showSaveChangesPrompt}
    >
      <CardContent
        item={item}
        filters={filters}
        fontSize={fontSize}
        markdown={markdown}
        isLoading={isLoading}
        languageId={languageId}
        markdownView={markdownView}
        selectedQuote={selectedQuote}
        setQuote={setQuote}
        showSaveChangesPrompt={showSaveChangesPrompt}
      />
    </Card>
  );
};
