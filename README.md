# Criterion Releases Chrome Extension

A Chrome extension that converts Criterion Collection's release grid into a convenient Markdown table format.

## Features

- Converts the Criterion Collection release table into Markdown format
- Extracts key film information including:
  - Spine number
  - Cover art image
  - Film title
  - Director
  - Country of origin
  - Release year
- One-click copying to clipboard

## Installation

1. Clone this repository or download the source code
2. Open Chrome and navigate to `chrome://extensions/`
3. Enable "Developer mode" in the top right corner
4. Click "Load unpacked" and select the directory containing the extension files

## Usage

1. Visit the Criterion Collection website's release page
2. Click the extension icon in your Chrome toolbar
3. Click the "Convert Table" button
4. The formatted Markdown table will be automatically copied to your clipboard

## Example Output

The extension converts the HTML table into a Markdown table format like this:

| Spine | Image                      | Title        | Director       | Country       | Year |
| ----- | -------------------------- | ------------ | -------------- | ------------- | ---- |
| 1246  | ![The Grifters](image_url) | The Grifters | Stephen Frears | United States | 1990 |

## Requirements

- Google Chrome browser
- Access to the Criterion Collection website
