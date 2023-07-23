import { Canvas } from "@react-three/fiber";
import SpaceBoi from "@/components/SpaceBoi";
import { useElementSize } from "@mantine/hooks";
import { useDraw } from "@/utils/useDraw";

const about = () => {
  const { ref, width, height } = useElementSize();
  const { canvasRef, onMouseDown, clear } = useDraw(drawLine);

  // drawing canvas logic
  function drawLine({ prevPoint, currentPoint, ctx }) {
    const { x: currX, y: currY } = currentPoint;
    const lineColor = "#0091f7";
    const lineWidth = 5;

    let startPoint = prevPoint ?? currentPoint;
    ctx.beginPath();
    ctx.lineWidth = lineWidth;
    ctx.strokeStyle = lineColor;
    ctx.moveTo(startPoint.x, startPoint.y);
    ctx.lineTo(currX, currY);
    ctx.stroke();

    ctx.fillStyle = lineColor;
    ctx.beginPath();
    ctx.arc(startPoint.x, startPoint.y, 2, 0, 2 * Math.PI);
    ctx.fill();
  }

  return (
    // background
    <>
      <div className="h-screen flex justify-start items-center w-screen bg-black fixed top-0 ">
        <Canvas>
          <SpaceBoi />
        </Canvas>
      </div>
      {/* drawing area  */}
      <div>
        <canvas
          ref={canvasRef}
          onMouseDown={onMouseDown}
          width={width}
          height={height}
          className="absolute cursor-pen top-0 z-10"
        />
        <img
          onClick={clear}
          className="fixed top-6 right-6 z-50 cursor-pointer"
          src="/erase.svg"
          alt="erase"
        />
      </div>
      <div
        ref={ref}
        className={`absolute top-0  flex justify-end items-center w-screen overflow-x-hidden`}
      >
        <div className="h-screen mr-20 flex flex-col gap-6 justify-center items-center w-1/2 ">
          <p>
            The name is kamal (which is short for kamal kumar or kamal kashyap,
            depending on where you know me from). I am a 19-year-old North
            Indian with a tech sort of background and a lot to say about the
            trends and direction of the scientific world.
          </p>
          <p>
            I'm very dedicated to learn new things and to truly belive that you
            should never stop learning. I enjoy creating different things,
            whether that be websites, application or even non technical stuff
            like paintings and sketches.
          </p>
        </div>
      </div>
    </>
  );
};

export default about;
