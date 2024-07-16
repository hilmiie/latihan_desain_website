<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<style>
  body {
    background-color: lightblue;
  }
  #myCanvas {
    border: 1px solid #ef0404;
  }
</style>
<body>
  <img src="toyota-yaris.jpeg" alt="Toyota Yaris" id="myImage" width="200" height="100">
  <canvas id="myCanvas" width="400" height="300"></canvas>
  <p>
    <button id="myCanvasButton">klik</button>
  </p>
  <script>
    function myCanvas() {
      var c = document.getElementById("myCanvas");
      var ctx = c.getContext("2d");
      var img = document.getElementById('myImage');
      ctx.drawImage(img, 10, 10);
    }

    var button = document.getElementById("myCanvasButton");
    button.addEventListener("click", myCanvas);
  </script>
</body>
</html>
