function tableToMarkdown(table) {
  let markdown = "";
  const rows = table.querySelectorAll("tr");

  // Add headers manually since we're getting specific fields
  markdown += "| Spine | Image | Title | Director | Country | Year |\n";
  markdown += "| --- | --- | --- | --- | --- | --- |\n";

  // Extract headers
  // const headers = rows[0].querySelectorAll("th");
  // markdown += "|";
  // headers.forEach((header) => {
  //   markdown += ` ${header.textContent.trim()} |`;
  // });
  // markdown += "\n";

  // Add separator
  // markdown += "|";
  // headers.forEach(() => {
  //   markdown += " --- |";
  // });
  // markdown += "\n";

  // Extract rows
  // for (let i = 1; i < rows.length; i++) {
  //   const cells = rows[i].querySelectorAll("td");
  //   markdown += "|";
  //   cells.forEach((cell) => {
  //     markdown += ` ${cell.textContent.trim()} |`;
  //   });
  //   markdown += "\n";
  // }

  // Extract rows
  rows.forEach((row) => {
    // console.log(row);
    // const link = row.querySelector(".g-link")?.getAttribute("href") || "";
    const spine = row.querySelector(".g-spine")?.textContent.trim() || "";
    const image = row.querySelector(".g-img img")?.getAttribute("src") || "";
    const title = row.querySelector(".g-title")?.textContent.trim() || "";
    const director = row.querySelector(".g-director")?.textContent.trim() || "";
    // For country, there might be an extra comma at the end. Need to remove it
    const country =
      row.querySelector(".g-country")?.textContent.trim().replace(/,$/, "") ||
      "";
    const year = row.querySelector(".g-year")?.textContent.trim() || "";

    markdown += `| ${spine} | ![${title}](${image}) | ${title} | ${director} | ${country} | ${year} |\n`;
  });

  return markdown;
}

function convertTableToMarkdown() {
  const table = document.querySelector("table#gridview");
  if (table) {
    const markdownTable = tableToMarkdown(table);
    chrome.runtime.sendMessage({ markdown: markdownTable });
  } else {
    chrome.runtime.sendMessage({ error: "No table found with ID 'gridview'." });
  }
}

// Run the conversion
convertTableToMarkdown();
