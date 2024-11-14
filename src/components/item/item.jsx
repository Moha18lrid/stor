import React, { useEffect, useState } from "react";
import './item.css'
import { Link } from "react-router-dom";
function getTwoMainColors(imgElement) {
  return new Promise((resolve, reject) => {
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");

    // Set canvas dimensions to match the image
    canvas.width = imgElement.width;
    canvas.height = imgElement.height;

    // Draw the image on the canvas
    context.drawImage(imgElement, 0, 0, imgElement.width, imgElement.height);

    // Get pixel data
    const imageData = context.getImageData(0, 0, canvas.width, canvas.height);
    const data = imageData.data;

    // Color map to store frequency of each color
    const colorMap = {};

    for (let i = 0; i < data.length; i += 4) {
      const red = data[i];
      const green = data[i + 1];
      const blue = data[i + 2];

      // Create a color key by rounding values to group similar colors
      const colorKey = `${Math.round(red / 50) * 50},${Math.round(green / 50) * 50},${Math.round(blue / 50) * 50}`;

      // Count color frequency
      colorMap[colorKey] = (colorMap[colorKey] || 0) + 1;
    }

    // Sort colors by frequency and get the top 2
    const sortedColors = Object.entries(colorMap).sort((a, b) => b[1] - a[1]);
    const topColors = sortedColors.slice(0, 2).map(([color]) => color);

    // Convert RGB color string to hex format
    const hexColors = topColors.map((color) => {
      const [r, g, b] = color.split(",").map(Number);
      return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`;
    });

    resolve(hexColors);
  });
}

const Item = (props) => {
  const [colors, setColors] = useState([]);

  useEffect(() => {
    const img = new Image();
    img.crossOrigin = "anonymous"; // Ensure CORS is handled for external images
    img.src = props.imag;
    img.onload = () => {
      getTwoMainColors(img).then((hexColors) => setColors(hexColors));
    };
    img.onerror = () => console.error("Image could not be loaded.");
  }, [props.imag]);

  const gradientBackground = colors.length === 2
    ? `linear-gradient(45deg, ${colors[0]}, ${colors[1]})`
    : "#fff"; // Default background color if colors are not yet loaded

  return (
    <div className="item" id="item" style={{ background: gradientBackground }}>
      <Link to={`/product/${props.id}`}><img onclick={window.scrollTo(0,0)} src={props.imag} alt="" /></Link>
      <div className="discription">
        <p>{props.titel}</p>
        <div className="price">
          <p className="new_price">{props.new_price}$</p>
          <p className="old_price">{props.old_price}$</p>
        </div>
      </div>
    </div>
  );
};

export default Item;
