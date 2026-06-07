import { useEffect, useRef } from "react";
import "../CSS/CodeAnimation.css";

// Block widths in px. Wider blocks = more realistic code line feel.
// Red = keyword/accent token.
const CODE_LINES = [
  [{ w: 80, red: false }, { w: 50, red: false }],
  [{ w: 100, red: false }, { w: 60, red: false }, { w: 90, red: true }],
  [{ w: 160, red: false }],
  [{ w: 55, red: false }],
  [{ w: 70, red: false }, { w: 50, red: false }, { w: 80, red: false }],
  [{ w: 110, red: false }, { w: 55, red: false }],
  [{ w: 90, red: false }, { w: 40, red: false }],
  [{ w: 65, red: false }, { w: 75, red: false }, { w: 50, red: false }],
  [{ w: 120, red: true }, { w: 60, red: false }],
  [{ w: 85, red: false }],
  [{ w: 55, red: false }, { w: 90, red: false }],
  [{ w: 70, red: false }, { w: 50, red: false }, { w: 110, red: false }],
  [{ w: 95, red: false }, { w: 45, red: true }],
  [{ w: 130, red: false }],
  [{ w: 60, red: false }, { w: 40, red: false }],
  [{ w: 80, red: true }, { w: 70, red: false }, { w: 55, red: false }],
  [{ w: 100, red: false }, { w: 60, red: false }],
  [{ w: 75, red: false }, { w: 85, red: false }],
  [{ w: 55, red: false }, { w: 40, red: false }, { w: 70, red: false }],
  [{ w: 90, red: false }, { w: 50, red: true }],
];

const VISIBLE_LINES = 7;
const LINE_HEIGHT = 28;

const CodeAnimation = () => {
  const containerRef = useRef(null);
  const rafRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const totalLines = CODE_LINES.length;
    const lineEls = [];
    let currentLine = 0;

    // Build initial rows
    for (let i = 0; i < VISIBLE_LINES + 2; i++) {
      const lineIndex = i % totalLines;
      lineEls.push(buildRow(CODE_LINES[lineIndex]));
      container.appendChild(lineEls[lineEls.length - 1]);
    }

    let offset = 0;

    const tick = () => {
      offset += 0.5;

      if (offset >= LINE_HEIGHT) {
        offset -= LINE_HEIGHT;
        currentLine = (currentLine + 1) % totalLines;

        // Recycle top row to bottom with new content
        const recycled = lineEls.shift();
        const nextIndex = (currentLine + VISIBLE_LINES + 1) % totalLines;
        updateRow(recycled, CODE_LINES[nextIndex]);
        container.appendChild(recycled);
        lineEls.push(recycled);
      }

      container.style.transform = `translateY(-${offset}px)`;
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

function buildRow(lineData) {
  const row = document.createElement("div");
  row.className = "ca-row";

  const gutter = document.createElement("div");
  gutter.className = "ca-linenum";
  row.appendChild(gutter);

  const blocks = document.createElement("div");
  blocks.className = "ca-blocks";
  lineData.forEach((b) => {
    const el = document.createElement("div");
    el.className = b.red ? "ca-block ca-block--red" : "ca-block";
    el.style.width = b.w + "px";
    blocks.appendChild(el);
  });
  row.appendChild(blocks);
  return row;
}

function updateRow(row, lineData) {
  const blocks = row.querySelector(".ca-blocks");
  blocks.innerHTML = "";
  lineData.forEach((b) => {
    const el = document.createElement("div");
    el.className = b.red ? "ca-block ca-block--red" : "ca-block";
    el.style.width = b.w + "px";
    blocks.appendChild(el);
  });
}

export default CodeAnimation;
