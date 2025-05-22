import { useEffect, useRef } from "react";

const colors = [
  "#FF6B6B", "#6BCB77", "#4D96FF",
  "#FFD93D", "#845EC2", "#00C9A7",
];

const generateShapes = (width, height, count = 30) => {
  const shapes = [];
  for (let i = 0; i < count; i++) {
    shapes.push({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 40 + 10,
      color: colors[Math.floor(Math.random() * colors.length)],
      dx: (Math.random() - 0.5) * 0.8,
      dy: (Math.random() - 0.5) * 0.8,
    });
  }
  return shapes;
};

const BackgroundAnimation = () => {
  const canvasRef = useRef(null);
  const shapesRef = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animationFrameId;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      shapesRef.current = generateShapes(canvas.width, canvas.height, 30);
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      shapesRef.current.forEach((shape) => {
        shape.x += shape.dx;
        shape.y += shape.dy;

        // To‘siqlarga urilganda teskari harakat
        if (shape.x + shape.radius > canvas.width || shape.x - shape.radius < 0) {
          shape.dx *= -1;
        }
        if (shape.y + shape.radius > canvas.height || shape.y - shape.radius < 0) {
          shape.dy *= -1;
        }

        const gradient = ctx.createRadialGradient(
          shape.x, shape.y, shape.radius * 0.2,
          shape.x, shape.y, shape.radius
        );
        gradient.addColorStop(0, shape.color);
        gradient.addColorStop(1, "transparent");

        ctx.beginPath();
        ctx.arc(shape.x, shape.y, shape.radius, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    resizeCanvas();
    animate();

    window.addEventListener("resize", resizeCanvas);
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-10"
      style={{ backgroundColor: "#0d1117" }}
    />
  );
};

export default BackgroundAnimation;
