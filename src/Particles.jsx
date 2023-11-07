import React from "react";

export default class Particles extends React.Component {
  animationFrameId = null; // To keep track of the requestAnimationFrame

  componentDidMount() {
    window.addEventListener('resize', this.updateCanvasSize);
    this.generateParticles();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateCanvasSize);
    cancelAnimationFrame(this.animationFrameId); // Cancel the animation frame when the component is unmounted
  }

  updateCanvasSize = () => {
    // Cancel any existing animation frame when resizing
    if (this.animationFrameId) {
      cancelAnimationFrame(this.animationFrameId);
    }
    this.generateParticles(); // Regenerate the particles with new sizes and count
  };

  generateParticles = () => {
    const canvas = document.getElementById("particles");
    const ctx = canvas.getContext("2d");
    canvas.width = document.documentElement.clientWidth;
    canvas.height = document.documentElement.clientHeight;

    const numberOfParticles = () => {
      // Define number of particles based on screen size
      const pixels = canvas.width * canvas.height;
      return Math.ceil(pixels / 3000); // Example: one particle per 5000 pixels
    };

    let particles = [];
    // Adjust the size and count of particles based on screen size
    const num = numberOfParticles();
    let size = 0.5;
    let color = "rgba(255, 255, 255, 0.2)";
    let min_speed = 0.1;
    let max_speed = 0.5;
    let line_distance = 60; // Decrease this value to make lines between particles closer
    let connect_distance = 100; // Maximum distance to connect particles with lines

    const distance = (pointA, pointB) => {
      let dx = Math.abs(pointB.x - pointA.x);
      let dy = Math.abs(pointB.y - pointA.y);
      return Math.sqrt(dx * dx + dy * dy);
    };

    const randVelocity = () => {
      return max_speed * Math.random() - min_speed;
    };

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;

        // Random velocities, that will move the particle in a random direction. ex: -1 on the x-plane and 1 on the y-plane.
        this.vx = randVelocity();
        this.vy = randVelocity();

        this.color = color;
        this.radius = Math.random() * 1 + 0.5;
      }
    }

    for (let i = 0; i < num; i++) {
      particles.push(new Particle());
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "#22262a";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Lets draw particles from the array now
      for (let t = 0; t < particles.length; t++) {
        // This particle
        let p = particles[t];

        for (let q = 0; q < particles.length; q++) {
          // Check position distance
          if (distance(particles[q], p) <= line_distance) {
            ctx.beginPath();
            ctx.lineWidth = 0.1;
            ctx.strokeStyle = "#fff";
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(particles[q].x, particles[q].y);
            ctx.stroke();
          }
        }

        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, Math.PI * 2, false);
        ctx.fill();

        p.x += p.vx;
        p.y += p.vy;

        // Invert values if they touch the canvas borders
        if (p.x <= size || p.x >= canvas.width - size) {
          p.vx *= -1;
        }
        if (p.y <= size || p.y >= canvas.height - size) {
          p.vy *= -1;
        }

        // Add logic to connect particles that are close enough
        for (let q = t + 1; q < particles.length; q++) {
          const distanceBetweenParticles = distance(p, particles[q]);
          if (distanceBetweenParticles <= connect_distance) {
            ctx.beginPath();
            ctx.lineWidth = 0.1;
            ctx.strokeStyle = "#fff";
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(particles[q].x, particles[q].y);
            ctx.stroke();
          }
        }
      }

      this.animationFrameId = requestAnimationFrame(draw);
    };

    this.animationFrameId = requestAnimationFrame(draw);
  };

  render() {
    return <canvas id="particles"></canvas>;
  }
}
