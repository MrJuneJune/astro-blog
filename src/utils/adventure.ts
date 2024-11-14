// Set up WebGL context and objects
const adventure = () => {
  const canvas = document.getElementById("canvas") as HTMLCanvasElement;
  const gl = canvas.getContext("webgl");

  if (!gl) {
    throw new Error("WebGL not supported");
  }

  // Define types for positions
  interface Position {
    x: number;
    y: number;
  }

  // Initialize character and background positions
  let characterPos: Position = { x: 0, y: 0 };
  let backgroundPos: Position = { x: 0, y: 0 };
  const limit = 100; // Define a limit for character movement, adjust as needed

  // Scroll handler
  function onScroll(event: WheelEvent) {
    // Adjust character position based on scroll direction
    characterPos.y += event.deltaY * 0.01;

    // Check if character has reached the limit
    if (characterPos.y >= limit) {
      // Move the background instead
      backgroundPos.y += event.deltaY * 0.01;
    }
    render();
  }

  // Touch handler
  function onTouchMove(event: TouchEvent) {
    // Adjust character position based on touch movement
    const touch = event.touches[0];
    if (touch) {
      characterPos.y += touch.clientY * 0.01;

      if (characterPos.y >= limit) {
        backgroundPos.y += touch.clientY * 0.01;
      }
    }
    render();
  }

  // Render function
  function render() {
    // Clear canvas and draw character and background with updated positions
    gl.clear(gl.COLOR_BUFFER_BIT);
    drawCharacter(characterPos);
    drawBackground(backgroundPos);
  }

  // Placeholder functions for drawing the character and background
  function drawCharacter(position: Position) {
    // WebGL code to draw character at position
    console.log("Drawing character at", position);
  }

  function drawBackground(position: Position) {
    // WebGL code to draw background at position
    console.log("Drawing background at", position);
  }

  // Event listeners
  window.addEventListener("wheel", onScroll);
  canvas.addEventListener("touchmove", onTouchMove);
};

export { adventure };
