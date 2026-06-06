import { useEffect, useRef } from "react";
import "../CSS/CodeAnimation.css";

// Each "line" of fake code is an array of block widths (as % of the content area)
// Varied lengths simulate real code tokens. Red block = keyword.
const CODE_LINES = [
  [{ w: 18, red: true }, { w: 32, red: false }, { w: 14, red: false }],
  [{ w: 24, red: false }, { w: 16, red: false }],
  [{ w: 38, red: false }, { w: 20, red: false }, { w: 12, red: false }],
  [{ w: 28, red: false }, { w: 22, red: false }, { w: 18, red: false }],
  [{ w: 16, red: true }, { w: 44, red: false }],
  [{ w: 30, red: false }, { w: 14, red: false }],
  [{ w: 20, red: false }, { w: 26, red: false }, { w: 16, red: false }],
  [{ w: 36, red: false }, { w: 18, red: false }],
  [{ w: 14, red: true }, { w: 28, red: false }, { w: 20, red: false }],
  [{ w: 22, red: false }, { w: 16, red: false }, { w: 12, red: false }],
  [{ w: 40, red: false }, { w: 14, red: false }],
  [{ w: 18, red: false }, { w: 30, red: false }],
  [{ w: 24, red: true }, { w: 20, red: false }, { w: 16, red: false }],
  [{ w: 32, red: false }, { w: 18, red: false }, { w: 14, red: false }],
  [{ w: 16, red: false }, { w: 24, red: false }],
  [{ w: 28, red: true }, { w: 36, red: false }],
  [{ w: 20, red: false }, { w: 14, red: false }, { w: 22, red: false }],
  [{ w: 34, red: false }, { w: 16, red: false }],
  [{ w: 18, red: false }, { w: 28, red: false }, { w: 12, red: false }],
  [{ w: 22, red: true }, { w: 18, red: false }],
];

const VISIBLE_LINES = 8; // how many lines show at once

const CodeAnimation = () => {
  const containerRef = useRef(null);
  const offsetRef = useRef(0);
  const rafRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const lineHeight = 28; // px per line
    const totalLines = CODE_LINES.length;

    // Build DOM lines once
    const lineEls = [];
    for (let i = 0; i < VISIBLE_LINES + 2; i++) {
      const lineIndex = i % totalLines;
      const row = document.createElement("div");
      row.className = "ca-row";

      // Line number square
      const lineNum = document.createElement("div");
      lineNum.className = "ca-linenum";
      row.appendChild(lineNum);

      // Code blocks
      const blocks = document.createElement("div");
      blocks.className = "ca-blocks";
      CODE_LINES[lineIndex].forEach((block) => {
        const b = document.createElement("div");
        b.className = block.red ? "ca-block ca-block--red" : "ca-block";
        b.style.width = block.w + "%";
        blocks.appendChild(b);
      });
      row.appendChild(blocks);
      container.appendChild(row);
      lineEls.push(row);
    }

    let currentLine = 0;

    const tick = () => {
      offsetRef.current += 0.4; // scroll speed px per frame

      if (offsetRef.current >= lineHeight) {
        offsetRef.current -= lineHeight;
        currentLine = (currentLine + 1) % totalLines;

        // Recycle the top row to the bottom with new content
        const recycled = lineEls.shift();
        const nextLineIndex = (currentLine + VISIBLE_LINES + 1) % totalLines;
        // Update blocks
        const blocksEl = recycled.querySelector(".ca-blocks");
        blocksEl.innerHTML = "";
        CODE_LINES[nextLineIndex].forEach((block) => {
          const b = document.createElement("div");
          b.className = block.red ? "ca-block ca-block--red" : "ca-block";
          b.style.width = block.w + "%";
          blocksEl.appendChild(b);
        });
        container.appendChild(recycled);
        lineEls.push(recycled);
      }

      // Apply translate to the whole container
      container.style.transform = `translateY(-${offsetRef.current}px)`;
      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  return (
    <div className="ca-outer">
      <div className="ca-top-border" />
      <div className="ca-window">
        <div className="ca-inner" ref={containerRef} />
      </div>
    </div>
  );
};

export default CodeAnimation;
