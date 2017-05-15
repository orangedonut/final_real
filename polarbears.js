var namespace = "http://www.w3.org/2000/svg"
var score = 0;
var scoreLabel = makeText("Score : "+score, 10, 10, 10)
setInterval(updateScore,100)
function updateScore() {
  score = score + 1
  scoreLabel.innerHTML = score
}

var Patrick1 = makeImage("http://bestanimations.com/Animals/Mammals/Bears/polar-bear-animated-gif-1.gif", 1, 120, 30, 30)

var rect1 = makeRect(20, 0, 15, 100, "gold")

var spikes = makeImage("https://static.turbosquid.com/Preview/2014/07/08__15_42_00/spear1.pngad3bf294-952a-43a3-aab9-b7b8f2dc3137Large.jpg", 93, 86, 35, 120)

var Fireball = makeImage("http://www.factslides.com/imgs/whale-shark.jpg", 173, 50, 51, 120)

var Superlazer = makeImage("https://s3.amazonaws.com/user-media.venngage.com/496870-ba632cb36889ec394f9a3ae739b91505.jpg", 173, 30, 31, 80)


function moveStuff() {
  move(rect1, -1, 0)
  move(spikes, -1, 0)
  move(Fireball, -1, 0)
  move(Superlazer, -1, 0)
  var rect1x = getX(rect1)
  if(rect1x < -15) {
    setX(rect1, 300)
  }
  var spikesx = getX(spikes)
  if(spikesx < -15) {
    setX(spikes, 300)
  }
  var Fireballx = getX(Fireball)
  if(Fireballx < -15) {
    setX(Fireball, 300)
  }
  var Superlazerx = getX(Superlazer)
  if(Superlazerx < -15) {
    setX(Superlazer, 300)
    move(Patrick1, 0,15)
    var Y1 = getY(Patrick1)
    if(Y1 < -0)
      setY(patrick1,50)
  }
    if(collides(Patrick1,rect1)){
    alert("Your died,")
    alert("your score is")
    alert(score)
    score=0
  }
  else if(collides(Patrick1,spikes)){
    alert("Your died,")
    alert("your score is")
    alert(score)
    score=0
  }
  else if(collides(Patrick1,Fireball)){
    alert("Your died,")
    alert("your score is")
    alert(score)
    score=0
  }
 else if(collides(Patrick1,Superlazer)){
    alert("Your died,")
    alert("your score is")
    alert(score)
    score=0
  }

  requestAnimationFrame(moveStuff)
}

addEventListener("keydown",Patrick)
function Patrick(event) {
  // YOUR CODE GOES HERE!

  var x =getX(Patrick1)
  var y = getY(Patrick1)
if(event.key=="a"&&x>0){
  move(Patrick1,-10,0)
}else if(event.key=="d"&&x<260) {
move(Patrick1,10,0)
}else if(event.key=="w"&&y>0){
  move(Patrick1,0,-10)
  }else if(event.key=="s"&&y<130){
   move(Patrick1,0,10)
 }
}







// DO NOT EDIT CODE BELOW THIS LINE!
function getX(shape) {
  if (shape.hasAttribute("x")) {
    return parseFloat(shape.getAttribute("x"))
  } else {
    return parseFloat(shape.getAttribute("cx"))
  }
}

function getY(shape) {
  if (shape.hasAttribute("y")) {
    return parseFloat(shape.getAttribute("y"))
  } else {
    return parseFloat(shape.getAttribute("cy"))
  }
}

function setX(shape, x) {
  if (shape.hasAttribute("x")) {
    shape.setAttribute("x", x)
  } else {
    shape.setAttribute("cx", x)
  }
}

function setY(shape, y) {
  if (shape.hasAttribute("y")) {
    shape.setAttribute("y", y)
  } else {
    shape.setAttribute("cy", y)
  }
}

function move(shape, dx, dy) {
  if (shape.hasAttribute("x") && shape.hasAttribute("y")) {
    var x = parseFloat(shape.getAttribute("x"))
    var y = parseFloat(shape.getAttribute("y"))
    shape.setAttribute("x", x + dx)
    shape.setAttribute("y", y + dy)
  } else {
    var cx = parseFloat(shape.getAttribute("cx"))
    var cy = parseFloat(shape.getAttribute("cy"))
    shape.setAttribute("cx", cx + dx)
    shape.setAttribute("cy", cy + dy)
  }
}

function makeCircle(cx, cy, r, fill, opacity) {
  var circle = document.createElementNS(namespace, "circle")
  circle.setAttribute("cx", cx)
  circle.setAttribute("cy", cy)
  circle.setAttribute("r", r)
  circle.setAttribute("fill", fill)
  circle.setAttribute("opacity", opacity)

  var canvas2 = document.getElementById("canvas2")
  canvas2.appendChild(circle)
  return circle
}

function makeRect(x, y, width, height, fill, opacity) {
  var rect = document.createElementNS(namespace, "rect")
  rect.setAttribute("x", x)
  rect.setAttribute("y", y)
  rect.setAttribute("width", width)
  rect.setAttribute("height", height)
  rect.setAttribute("fill", fill)
  rect.setAttribute("opacity", opacity)

  var canvas2 = document.getElementById("canvas2")
  canvas2.appendChild(rect)
  return rect
}

function makeEllipse(cx, cy, rx, ry, fill, opacity) {
  var ellipse = document.createElementNS(namespace, "ellipse")
  ellipse.setAttribute("cx", cx)
  ellipse.setAttribute("cy", cy)
  ellipse.setAttribute("rx", rx)
  ellipse.setAttribute("ry", ry)
  ellipse.setAttribute("fill", fill)
  ellipse.setAttribute("opacity", opacity)

  var canvas2 = document.getElementById("canvas2")
  canvas2.appendChild(ellipse)
  return ellipse
}

function makeLine(x1, y1, x2, y2, stroke, strokeWidth, opacity) {
  var line = document.createElementNS(namespace, "line")
  line.setAttribute("x1", x1)
  line.setAttribute("y1", y1)
  line.setAttribute("x2", x2)
  line.setAttribute("y2", y2)
  line.setAttribute("stroke", stroke)
  line.setAttribute("stroke-width", strokeWidth)
  line.setAttribute("opacity", opacity)

  var canvas2 = document.getElementById("canvas2")
  canvas2.appendChild(line)
  return line
}

function makePolyline(points, stroke, strokeWidth, opacity) {
  var polyline = document.createElementNS(namespace, "polyline")
  polyline.setAttribute("points", points)
  polyline.setAttribute("stroke", stroke)
  polyline.setAttribute("stroke-width", strokeWidth)
  polyline.setAttribute("opacity", opacity)
  polyline.setAttribute("fill", "none")

  var canvas2 = document.getElementById("canvas2")
  canvas2.appendChild(polyline)
  return polyline
}

function makePolygon(points, fill, opacity) {
  var polygon = document.createElementNS(namespace, "polygon")
  polygon.setAttribute("points", points)
  polygon.setAttribute("opacity", opacity)
  polygon.setAttribute("fill", fill)

  var canvas2 = document.getElementById("canvas2")
  canvas2.appendChild(polygon)
  return polygon
}

function makeText(message, x, y, fontSize, fontFamily, fill, opacity) {
  var text = document.createElementNS(namespace, "text")
  text.innerHTML = message
  text.setAttribute("x", x)
  text.setAttribute("y", y)
  text.setAttribute("font-size", fontSize)
  text.setAttribute("font-family", fontFamily)
  text.setAttribute("fill", fill)
  text.setAttribute("opacity", opacity)

  var canvas2 = document.getElementById("canvas2")
  canvas2.appendChild(text)
  return text
}

function makeImage(url, x, y, width, height, opacity) {
  var image = document.createElementNS(namespace, "image")
  image.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", url)
  image.setAttribute("x", x)
  image.setAttribute("y", y)
  image.setAttribute("width", width)
  image.setAttribute("height", height)
  image.setAttribute("opacity", opacity)

  var canvas2 = document.getElementById("canvas2")
  canvas2.appendChild(image)
  return image
}

function collides(rect1, rect2) {
  var centerX = getX(rect1) + parseFloat(rect1.getAttribute("width"))/2
  var centerY = getY(rect1) + parseFloat(rect1.getAttribute("height"))/2
  return (centerX > getX(rect2) &&
          centerX < getX(rect2) + parseFloat(rect2.getAttribute("width")) &&
         centerY > getY(rect2) &&
         centerY < getY(rect2) + parseFloat(rect2.getAttribute("height")))
}
