import "./Resizer.css";

import { useRef, useEffect } from "react";

export default function Resizer() {
  const ref = useRef(null);
  const refleft = useRef(null);
  const refright = useRef(null);
  const reftop = useRef(null);
  const refbottom = useRef(null);

  useEffect(() => {
    let resizeElem = ref.current;
    let style = window.getComputedStyle(resizeElem);
    let width = parseInt(style.width, 10);
    let height = parseInt(style.height, 10);

    let xCord = 0;
    let yCord = 0;

    resizeElem.style.top = "150px";
    resizeElem.style.left = "150px";

    // top changes
    const topResize = (event) => {
      let dy = event.clientY - yCord;
      height = height - dy;
      yCord = event.clientY;
      resizeElem.style.height = `${height}px`;
    };

    const onMouseupTopResize = () => {
      window.removeEventListener("mousemove", topResize);
    };

    const onMouseDownTopResize = (event) => {
      yCord = event.clientY;
      let style = window.getComputedStyle(resizeElem);
      resizeElem.style.bottom = style.bottom;
      resizeElem.style.top = null;
      window.addEventListener("mousemove", topResize);
      window.addEventListener("mouseup", onMouseupTopResize);
    };

    // right
    const rightResize = (event) => {
      let dx = event.clientX - xCord;
      width = width + dx;
      xCord = event.clientX;
      resizeElem.style.width = `${width}px`;
    };

    const onMouseupRightResize = () => {
      window.removeEventListener("mousemove", rightResize);
    };

    const onMouseDownRightResize = (event) => {
      xCord = event.clientX;
      let style = window.getComputedStyle(resizeElem);
      resizeElem.style.left = style.left;
      resizeElem.style.right = null;
      window.addEventListener("mousemove", rightResize);
      window.addEventListener("mouseup", onMouseupRightResize);
    };

    // left
    const leftResize = (event) => {
      let dx = event.clientX - xCord;
      width = width - dx;
      xCord = event.clientX;
      resizeElem.style.width = `${width}px`;
    };

    const onMouseupLeftResize = () => {
      window.removeEventListener("mousemove", leftResize);
    };

    const onMouseDownLeftResize = (event) => {
      xCord = event.clientX;
      let style = window.getComputedStyle(resizeElem);
      resizeElem.style.right = style.right;
      resizeElem.style.left = null;
      window.addEventListener("mousemove", leftResize);
      window.addEventListener("mouseup", onMouseupLeftResize);
    };

    // bottom
    const bottomResize = (event) => {
      let dy = event.clientY - yCord;
      height = height + dy;
      yCord = event.clientY;
      resizeElem.style.height = `${height}px`;
    };

    const onMouseupBottomResize = () => {
      window.removeEventListener("mousemove", bottomResize);
    };

    const onMouseDownBottomResize = (event) => {
      yCord = event.clientY;
      let style = window.getComputedStyle(resizeElem);
      resizeElem.style.top = style.top;
      resizeElem.style.bottom = null;
      window.addEventListener("mousemove", bottomResize);
      window.addEventListener("mouseup", onMouseupBottomResize);
    };

    // mouse down event listenter
    const resizerRight = refright.current;
    resizerRight.addEventListener("mousedown", onMouseDownRightResize);
    const resizerLeft = refleft.current;
    resizerLeft.addEventListener("mousedown", onMouseDownLeftResize);
    const resizerBottom = refbottom.current;
    resizerBottom.addEventListener("mousedown", onMouseDownBottomResize);
    const resizerTop = reftop.current;
    resizerTop.addEventListener("mousedown", onMouseDownTopResize);
  }, []);

  return (
    <div ref={ref} className="resizable-box">
      <div className="resizable-content">
        <p>This is the content inside the resizable div.</p>
      </div>
      <div ref={refleft} className="resizer rl"></div>
      <div ref={reftop} className="resizer rt"></div>
      <div ref={refright} className="resizer rr"></div>
      <div ref={refbottom} className="resizer rb"></div>
    </div>
  );
}
