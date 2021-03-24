var cvs = document.createElement('canvas'),
    context = cvs.getContext("2d"),
    centerPt = {x:0, y:0};
cvs.className = 'cliff'

document.body.appendChild(cvs);

function init(){

  for(var p=0; p<points.length; p++){
    points[p] = {
      x: points[p][0],
      y: points[p][1],
      z: points[p][2]
    }
  }
  
  update();
}

var ang = Math.random()*Math.PI;

function update(){
  
  // clear canvas
  context.clearRect(0, 0, cvs.width, cvs.height);
  
  drawObject(ang, cvs.height/500);
  //drawObject(ang2, 250);
  // rotate
  ang += 0.0025;
  
  window.requestAnimationFrame(update);
}

function drawObject(_ang, size){
  var n = points.length,
      _context = context,
      pt, new_pt, ln,
      mat;
  
  // create a matrix with current rotation
  mat = createRotateMatrix(_ang);
  
  // position points
  while(n--){
    pt = points[n];
    new_pt = pt_x_matrix(pt, mat);
    pt._x = centerPt.x + (new_pt.x*size);
    pt._y = centerPt.y - (new_pt.y*size);
  }
  
  n = edges.length;
  while(n--){
    ln = edges[n];
    drawLine(_context, points[ln[0]], points[ln[1]]);
  }
  
  n = points.length;
  while(n--){
    pt = points[n];
    drawPoint(_context, pt);
  }
  
}

function drawPoint(_context, pt){
  _context.fillStyle = "#c4e1ee";
  _context.fillRect(pt._x-2, pt._y-2, 4, 4);
}

function drawLine(_context, ptA, ptB){
  _context.beginPath();
  _context.moveTo(ptA._x, ptA._y);
  _context.lineTo(ptB._x, ptB._y);
  _context.lineWidth = 1;
  _context.strokeStyle = "#3e7690";
  _context.stroke();
  _context.closePath();
}
function pt_x_matrix(pt, matrix){
  return {
    x: (pt.x*matrix[0])+(pt.z*matrix[1]),
    y: pt.y
  };
  // full return version
  /*return {
    x: (pt.x*matrix[0])+(pt.y*matrix[3])+(pt.z*matrix[6]),
    y: (pt.x*matrix[1])+(pt.y*matrix[4])+(pt.z*matrix[7]),
    z: (pt.x*matrix[2])+(pt.y*matrix[5])+(pt.z*matrix[8]),
  };*/
}

function createRotateMatrix(ang){
  // shortened because I didn't need the other values
  return [
    Math.cos(ang), Math.sin(ang) 
  ];
  /*return [
    Math.cos(ang),   0,    -Math.sin(ang),
    0,               1,    0,
    Math.sin(ang),   0,    Math.cos(ang) 
  ];*/
}

function resizeHandler(){
  var box = cvs.getBoundingClientRect();
  var w = box.width;
  var h = box.height;
  cvs.width = w;
  cvs.height = h;
  centerPt.x = Math.round(w/2);
  centerPt.y = Math.round(h*0.47);
}

resizeHandler();
window.onresize = resizeHandler;

var points = [[-300.0, -197.5, -300.0], [-260.0, -197.5, -300.0], [-220.00000000000003, -197.5, -300.0], [-180.0, -197.5, -300.0], [-140.0, -197.5, -300.0], [-100.00000000000001, -197.5, -300.0], [-59.999999999999986, -197.5, -300.0], [-19.999999999999996, -197.5, -300.0], [19.999999999999996, -197.5, -300.0], [59.999999999999986, -197.5, -300.0], [99.999999999999972, -197.5, -300.0], [139.99999999999997, -197.5, -300.0], [180.00000000000003, -197.5, -300.0], [220.00000000000003, -197.5, -300.0], [260.0, -197.5, -300.0], [300.0, -197.5, -300.0], [-300.0, -197.5, -260.0], [-260.0, -193.38942876410181, -260.0], [-220.00000000000003, -190.68885175178099, -260.0], [-180.0, -184.72489463599817, -260.0], [-140.0, -179.95704132534303, -260.0], [-100.00000000000001, -178.00014177150092, -260.0], [-59.999999999999986, -182.55321427019973, -260.0], [-19.999999999999996, -183.18027276489192, -260.0], [19.999999999999996, -178.83997059068906, -260.0], [59.999999999999986, -173.3200193362897, -260.0], [99.999999999999972, -181.28275924852011, -260.0], [139.99999999999997, -182.97391382455493, -260.0], [180.00000000000003, -192.76048300078943, -260.0], [220.00000000000003, -196.24978258810737, -260.0], [260.0, -196.31815241651663, -260.0], [300.0, -197.5, -260.0], [-300.0, -197.5, -220.00000000000003], [-260.0, -190.50545616231301, -220.00000000000003], [-220.00000000000003, -172.85913256298832, -220.00000000000003], [-180.0, -157.75755447733926, -220.00000000000003], [-140.0, -149.80743775425154, -220.00000000000003], [-100.00000000000001, -139.34311968722395, -220.00000000000003], [-59.999999999999986, -162.12561847581335, -220.00000000000003], [-19.999999999999996, -161.51483927625486, -220.00000000000003], [19.999999999999996, -119.99940506307159, -220.00000000000003], [59.999999999999986, -109.71865357181125, -220.00000000000003], [99.999999999999972, -135.67080044958308, -220.00000000000003], [139.99999999999997, -165.19010521460271, -220.00000000000003], [180.00000000000003, -190.05686982661322, -220.00000000000003], [220.00000000000003, -194.48402472799592, -220.00000000000003], [260.0, -195.86379250895035, -220.00000000000003], [300.0, -197.5, -220.00000000000003], [-300.0, -197.5, -180.0], [-260.0, -187.10414994227523, -180.0], [-220.00000000000003, -153.57191615093086, -180.0], [-180.0, -139.69069158612399, -180.0], [-140.0, -132.26596947371019, -180.0], [-100.00000000000001, -88.96471921958738, -180.0], [-59.999999999999986, -83.530696735261003, -180.0], [-19.999999999999996, -68.860924330728807, -180.0], [19.999999999999996, -9.6468607262481783, -180.0], [59.999999999999986, -40.638777781217868, -180.0], [99.999999999999972, -55.127927208004365, -180.0], [139.99999999999997, -157.9483416526059, -180.0], [180.00000000000003, -184.83345379390479, -180.0], [220.00000000000003, -180.83690515268518, -180.0], [260.0, -190.17341067862597, -180.0], [300.0, -197.5, -180.0], [-300.0, -197.5, -140.0], [-260.0, -187.49940543177624, -140.0], [-220.00000000000003, -145.60995096418677, -140.0], [-180.0, -99.865339380854905, -140.0], [-140.0, -116.16098994256068, -140.0], [-100.00000000000001, -92.893188851126354, -140.0], [-59.999999999999986, 7.967977980490474, -140.0], [-19.999999999999996, 68.152432561934859, -140.0], [19.999999999999996, -9.6793278626140875, -140.0], [59.999999999999986, -48.453632440549171, -140.0], [99.999999999999972, 15.757087495691451, -140.0], [139.99999999999997, -119.3095453754265, -140.0], [180.00000000000003, -158.37611587468916, -140.0], [220.00000000000003, -158.87485694094357, -140.0], [260.0, -187.2278658287436, -140.0], [300.0, -197.5, -140.0], [-300.0, -197.5, -100.00000000000001], [-260.0, -185.505609301921, -100.00000000000001], [-220.00000000000003, -145.63329829278607, -100.00000000000001], [-180.0, -92.184596352428187, -100.00000000000001], [-140.0, -16.911493057818376, -100.00000000000001], [-100.00000000000001, -22.398627594356327, -100.00000000000001], [-59.999999999999986, 67.561051465355206, -100.00000000000001], [-19.999999999999996, 95.149299492064586, -100.00000000000001], [19.999999999999996, -8.9420514878046617, -100.00000000000001], [59.999999999999986, -72.435882608258197, -100.00000000000001], [99.999999999999972, -50.126725372677527, -100.00000000000001], [139.99999999999997, -18.674213930506966, -100.00000000000001], [180.00000000000003, -87.859263710081621, -100.00000000000001], [220.00000000000003, -135.77900957624772, -100.00000000000001], [260.0, -175.98433481522144, -100.00000000000001], [300.0, -197.5, -100.00000000000001], [-300.0, -197.5, -59.999999999999986], [-260.0, -175.64520453102992, -59.999999999999986], [-220.00000000000003, -142.46340150233436, -59.999999999999986], [-180.0, -130.78467968731866, -59.999999999999986], [-140.0, -19.843453703962524, -59.999999999999986], [-100.00000000000001, 55.547875187092586, -59.999999999999986], [-59.999999999999986, 122.29501322511339, -59.999999999999986], [-19.999999999999996, 106.77245821702286, -59.999999999999986], [19.999999999999996, 83.02626671368256, -59.999999999999986], [59.999999999999986, -65.601905447251198, -59.999999999999986], [99.999999999999972, -69.953318615148063, -59.999999999999986], [139.99999999999997, -52.989813507435514, -59.999999999999986], [180.00000000000003, -30.660960449691657, -59.999999999999986], [220.00000000000003, -130.67908763828345, -59.999999999999986], [260.0, -174.25423754958607, -59.999999999999986], [300.0, -197.5, -59.999999999999986], [-300.0, -197.5, -19.999999999999996], [-260.0, -179.82495818783792, -19.999999999999996], [-220.00000000000003, -90.681188116998626, -19.999999999999996], [-180.0, -56.582389086245314, -19.999999999999996], [-140.0, -40.894410036187082, -19.999999999999996], [-100.00000000000001, 84.641018419617581, -19.999999999999996], [-59.999999999999986, 138.37192277198358, -19.999999999999996], [-19.999999999999996, 87.513291624440171, -19.999999999999996], [19.999999999999996, 29.565462538576895, -19.999999999999996], [59.999999999999986, 123.83360241032494, -19.999999999999996], [99.999999999999972, -1.8493366398016633, -19.999999999999996], [139.99999999999997, -40.725137653970307, -19.999999999999996], [180.00000000000003, -80.353552822875557, -19.999999999999996], [220.00000000000003, -122.34800640317606, -19.999999999999996], [260.0, -174.14986185863111, -19.999999999999996], [300.0, -197.5, -19.999999999999996], [-300.0, -197.5, 19.999999999999996], [-260.0, -186.76617551119182, 19.999999999999996], [-220.00000000000003, -119.38618793409906, 19.999999999999996], [-180.0, -36.456084534339539, 19.999999999999996], [-140.0, 54.102482970802498, 19.999999999999996], [-100.00000000000001, 80.338754664940211, 19.999999999999996], [-59.999999999999986, 119.34681420869708, 19.999999999999996], [-19.999999999999996, 81.158288276463111, 19.999999999999996], [19.999999999999996, 7.8091914243443341, 19.999999999999996], [59.999999999999986, -5.1545234493859482, 19.999999999999996], [99.999999999999972, 27.737383412590361, 19.999999999999996], [139.99999999999997, -21.097786311277247, 19.999999999999996], [180.00000000000003, -94.266075163457657, 19.999999999999996], [220.00000000000003, -140.62976559928225, 19.999999999999996], [260.0, -176.24755979747161, 19.999999999999996], [300.0, -197.5, 19.999999999999996], [-300.0, -197.5, 59.999999999999986], [-260.0, -179.52810845800317, 59.999999999999986], [-220.00000000000003, -111.90441447743062, 59.999999999999986], [-180.0, -39.341081981103798, 59.999999999999986], [-140.0, 41.222741346790031, 59.999999999999986], [-100.00000000000001, -18.987013324407229, 59.999999999999986], [-59.999999999999986, -46.744906913791084, 59.999999999999986], [-19.999999999999996, 166.61396556291385, 59.999999999999986], [19.999999999999996, -42.087624078081689, 59.999999999999986], [59.999999999999986, -6.3029555155075343, 59.999999999999986], [99.999999999999972, -5.9413599681508913, 59.999999999999986], [139.99999999999997, -39.153017766648532, 59.999999999999986], [180.00000000000003, -115.0403772900566, 59.999999999999986], [220.00000000000003, -145.52951795297338, 59.999999999999986], [260.0, -180.90155008376337, 59.999999999999986], [300.0, -197.5, 59.999999999999986], [-300.0, -197.5, 99.999999999999972], [-260.0, -179.36582821556115, 99.999999999999972], [-220.00000000000003, -137.97355973662329, 99.999999999999972], [-180.0, -72.901720463081446, 99.999999999999972], [-140.0, 0.62475180906005789, 99.999999999999972], [-100.00000000000001, -10.706712906485649, 99.999999999999972], [-59.999999999999986, -5.5821436486173184, 99.999999999999972], [-19.999999999999996, 99.675517816691638, 99.999999999999972], [19.999999999999996, -4.1930913857137, 99.999999999999972], [59.999999999999986, -24.664375690230287, 99.999999999999972], [99.999999999999972, -19.513394037309183, 99.999999999999972], [139.99999999999997, -113.11150482143691, 99.999999999999972], [180.00000000000003, -130.04516230235299, 99.999999999999972], [220.00000000000003, -146.62895720525268, 99.999999999999972], [260.0, -181.05137647176844, 99.999999999999972], [300.0, -197.5, 99.999999999999972], [-300.0, -197.5, 139.99999999999997], [-260.0, -186.40865661066474, 139.99999999999997], [-220.00000000000003, -150.36574882018078, 139.99999999999997], [-180.0, -112.56696307274018, 139.99999999999997], [-140.0, -39.575779843537163, 139.99999999999997], [-100.00000000000001, -17.402158472455682, 139.99999999999997], [-59.999999999999986, 2.119413299740188, 139.99999999999997], [-19.999999999999996, -29.024102117849793, 139.99999999999997], [19.999999999999996, -105.29482310179348, 139.99999999999997], [59.999999999999986, -66.342539700732459, 139.99999999999997], [99.999999999999972, -70.999833592606151, 139.99999999999997], [139.99999999999997, -139.32824467040143, 139.99999999999997], [180.00000000000003, -142.1906101577255, 139.99999999999997], [220.00000000000003, -152.49511721911728, 139.99999999999997], [260.0, -184.34317605474598, 139.99999999999997], [300.0, -197.5, 139.99999999999997], [-300.0, -197.5, 180.00000000000003], [-260.0, -190.1694289735762, 180.00000000000003], [-220.00000000000003, -184.25152120206695, 180.00000000000003], [-180.0, -157.83739040719132, 180.00000000000003], [-140.0, -113.76571590698181, 180.00000000000003], [-100.00000000000001, -69.984409923800129, 180.00000000000003], [-59.999999999999986, -27.92586861111252, 180.00000000000003], [-19.999999999999996, -101.51468893952335, 180.00000000000003], [19.999999999999996, -173.7735358866405, 180.00000000000003], [59.999999999999986, -161.02839522833256, 180.00000000000003], [99.999999999999972, -134.9241606308608, 180.00000000000003], [139.99999999999997, -140.80076027332785, 180.00000000000003], [180.00000000000003, -150.80422394651703, 180.00000000000003], [220.00000000000003, -171.28509538934887, 180.00000000000003], [260.0, -190.9223205100717, 180.00000000000003], [300.0, -197.5, 180.00000000000003], [-300.0, -197.5, 220.00000000000003], [-260.0, -196.80402170259785, 220.00000000000003], [-220.00000000000003, -194.43274074156705, 220.00000000000003], [-180.0, -188.46691794209144, 220.00000000000003], [-140.0, -170.87718158462326, 220.00000000000003], [-100.00000000000001, -139.99470667583532, 220.00000000000003], [-59.999999999999986, -114.85043941856424, 220.00000000000003], [-19.999999999999996, -116.60426937359996, 220.00000000000003], [19.999999999999996, -148.96197137796585, 220.00000000000003], [59.999999999999986, -178.64748143680589, 220.00000000000003], [99.999999999999972, -193.62010847884622, 220.00000000000003], [139.99999999999997, -190.13238214848036, 220.00000000000003], [180.00000000000003, -181.52258615581292, 220.00000000000003], [220.00000000000003, -177.79233568689006, 220.00000000000003], [260.0, -193.28518365781088, 220.00000000000003], [300.0, -197.5, 220.00000000000003], [-300.0, -197.5, 260.0], [-260.0, -196.86844180807287, 260.0], [-220.00000000000003, -196.0518743658854, 260.0], [-180.0, -192.9240665769488, 260.0], [-140.0, -186.25823286479957, 260.0], [-100.00000000000001, -177.12600839209063, 260.0], [-59.999999999999986, -172.58026879115482, 260.0], [-19.999999999999996, -176.46094043017132, 260.0], [19.999999999999996, -175.82815316384313, 260.0], [59.999999999999986, -178.20688162264085, 260.0], [99.999999999999972, -190.78507731476361, 260.0], [139.99999999999997, -197.5, 260.0], [180.00000000000003, -196.74282665484182, 260.0], [220.00000000000003, -193.06934475117825, 260.0], [260.0, -194.92812192238117, 260.0], [300.0, -197.5, 260.0], [-300.0, -197.5, 300.0], [-260.0, -197.5, 300.0], [-220.00000000000003, -197.5, 300.0], [-180.0, -197.5, 300.0], [-140.0, -197.5, 300.0], [-100.00000000000001, -197.5, 300.0], [-59.999999999999986, -197.5, 300.0], [-19.999999999999996, -197.5, 300.0], [19.999999999999996, -197.5, 300.0], [59.999999999999986, -197.5, 300.0], [99.999999999999972, -197.5, 300.0], [139.99999999999997, -197.5, 300.0], [180.00000000000003, -197.5, 300.0], [220.00000000000003, -197.5, 300.0], [260.0, -197.5, 300.0], [300.0, -197.5, 300.0]]; var edges = [[0, 16], [16, 17], [17, 0], [1, 17], [17, 18], [18, 1], [2, 18], [18, 19], [19, 2], [3, 19], [19, 20], [20, 3], [4, 20], [20, 21], [21, 4], [5, 21], [21, 22], [22, 5], [6, 22], [22, 23], [23, 6], [7, 23], [23, 24], [24, 7], [8, 24], [24, 25], [25, 8], [9, 25], [25, 26], [26, 9], [10, 26], [26, 27], [27, 10], [11, 27], [27, 28], [28, 11], [12, 28], [28, 29], [29, 12], [13, 29], [29, 30], [30, 13], [14, 30], [30, 31], [31, 14], [16, 32], [32, 33], [33, 16], [17, 33], [33, 34], [34, 17], [18, 34], [34, 35], [35, 18], [19, 35], [35, 36], [36, 19], [20, 36], [36, 37], [37, 20], [21, 37], [37, 38], [38, 21], [22, 38], [38, 39], [39, 22], [23, 39], [39, 40], [40, 23], [24, 40], [40, 41], [41, 24], [25, 41], [41, 42], [42, 25], [26, 42], [42, 43], [43, 26], [27, 43], [43, 44], [44, 27], [28, 44], [44, 45], [45, 28], [29, 45], [45, 46], [46, 29], [30, 46], [46, 47], [47, 30], [32, 48], [48, 49], [49, 32], [33, 49], [49, 50], [50, 33], [34, 50], [50, 51], [51, 34], [35, 51], [51, 52], [52, 35], [36, 52], [52, 53], [53, 36], [37, 53], [53, 54], [54, 37], [38, 54], [54, 55], [55, 38], [39, 55], [55, 56], [56, 39], [40, 56], [56, 57], [57, 40], [41, 57], [57, 58], [58, 41], [42, 58], [58, 59], [59, 42], [43, 59], [59, 60], [60, 43], [44, 60], [60, 61], [61, 44], [45, 61], [61, 62], [62, 45], [46, 62], [62, 63], [63, 46], [48, 64], [64, 65], [65, 48], [49, 65], [65, 66], [66, 49], [50, 66], [66, 67], [67, 50], [51, 67], [67, 68], [68, 51], [52, 68], [68, 69], [69, 52], [53, 69], [69, 70], [70, 53], [54, 70], [70, 71], [71, 54], [55, 71], [71, 72], [72, 55], [56, 72], [72, 73], [73, 56], [57, 73], [73, 74], [74, 57], [58, 74], [74, 75], [75, 58], [59, 75], [75, 76], [76, 59], [60, 76], [76, 77], [77, 60], [61, 77], [77, 78], [78, 61], [62, 78], [78, 79], [79, 62], [64, 80], [80, 81], [81, 64], [65, 81], [81, 82], [82, 65], [66, 82], [82, 83], [83, 66], [67, 83], [83, 84], [84, 67], [68, 84], [84, 85], [85, 68], [69, 85], [85, 86], [86, 69], [70, 86], [86, 87], [87, 70], [71, 87], [87, 88], [88, 71], [72, 88], [88, 89], [89, 72], [73, 89], [89, 90], [90, 73], [74, 90], [90, 91], [91, 74], [75, 91], [91, 92], [92, 75], [76, 92], [92, 93], [93, 76], [77, 93], [93, 94], [94, 77], [78, 94], [94, 95], [95, 78], [80, 96], [96, 97], [97, 80], [81, 97], [97, 98], [98, 81], [82, 98], [98, 99], [99, 82], [83, 99], [99, 100], [100, 83], [84, 100], [100, 101], [101, 84], [85, 101], [101, 102], [102, 85], [86, 102], [102, 103], [103, 86], [87, 103], [103, 104], [104, 87], [88, 104], [104, 105], [105, 88], [89, 105], [105, 106], [106, 89], [90, 106], [106, 107], [107, 90], [91, 107], [107, 108], [108, 91], [92, 108], [108, 109], [109, 92], [93, 109], [109, 110], [110, 93], [94, 110], [110, 111], [111, 94], [96, 112], [112, 113], [113, 96], [97, 113], [113, 114], [114, 97], [98, 114], [114, 115], [115, 98], [99, 115], [115, 116], [116, 99], [100, 116], [116, 117], [117, 100], [101, 117], [117, 118], [118, 101], [102, 118], [118, 119], [119, 102], [103, 119], [119, 120], [120, 103], [104, 120], [120, 121], [121, 104], [105, 121], [121, 122], [122, 105], [106, 122], [122, 123], [123, 106], [107, 123], [123, 124], [124, 107], [108, 124], [124, 125], [125, 108], [109, 125], [125, 126], [126, 109], [110, 126], [126, 127], [127, 110], [112, 128], [128, 129], [129, 112], [113, 129], [129, 130], [130, 113], [114, 130], [130, 131], [131, 114], [115, 131], [131, 132], [132, 115], [116, 132], [132, 133], [133, 116], [117, 133], [133, 134], [134, 117], [118, 134], [134, 135], [135, 118], [119, 135], [135, 136], [136, 119], [120, 136], [136, 137], [137, 120], [121, 137], [137, 138], [138, 121], [122, 138], [138, 139], [139, 122], [123, 139], [139, 140], [140, 123], [124, 140], [140, 141], [141, 124], [125, 141], [141, 142], [142, 125], [126, 142], [142, 143], [143, 126], [128, 144], [144, 145], [145, 128], [129, 145], [145, 146], [146, 129], [130, 146], [146, 147], [147, 130], [131, 147], [147, 148], [148, 131], [132, 148], [148, 149], [149, 132], [133, 149], [149, 150], [150, 133], [134, 150], [150, 151], [151, 134], [135, 151], [151, 152], [152, 135], [136, 152], [152, 153], [153, 136], [137, 153], [153, 154], [154, 137], [138, 154], [154, 155], [155, 138], [139, 155], [155, 156], [156, 139], [140, 156], [156, 157], [157, 140], [141, 157], [157, 158], [158, 141], [142, 158], [158, 159], [159, 142], [144, 160], [160, 161], [161, 144], [145, 161], [161, 162], [162, 145], [146, 162], [162, 163], [163, 146], [147, 163], [163, 164], [164, 147], [148, 164], [164, 165], [165, 148], [149, 165], [165, 166], [166, 149], [150, 166], [166, 167], [167, 150], [151, 167], [167, 168], [168, 151], [152, 168], [168, 169], [169, 152], [153, 169], [169, 170], [170, 153], [154, 170], [170, 171], [171, 154], [155, 171], [171, 172], [172, 155], [156, 172], [172, 173], [173, 156], [157, 173], [173, 174], [174, 157], [158, 174], [174, 175], [175, 158], [160, 176], [176, 177], [177, 160], [161, 177], [177, 178], [178, 161], [162, 178], [178, 179], [179, 162], [163, 179], [179, 180], [180, 163], [164, 180], [180, 181], [181, 164], [165, 181], [181, 182], [182, 165], [166, 182], [182, 183], [183, 166], [167, 183], [183, 184], [184, 167], [168, 184], [184, 185], [185, 168], [169, 185], [185, 186], [186, 169], [170, 186], [186, 187], [187, 170], [171, 187], [187, 188], [188, 171], [172, 188], [188, 189], [189, 172], [173, 189], [189, 190], [190, 173], [174, 190], [190, 191], [191, 174], [176, 192], [192, 193], [193, 176], [177, 193], [193, 194], [194, 177], [178, 194], [194, 195], [195, 178], [179, 195], [195, 196], [196, 179], [180, 196], [196, 197], [197, 180], [181, 197], [197, 198], [198, 181], [182, 198], [198, 199], [199, 182], [183, 199], [199, 200], [200, 183], [184, 200], [200, 201], [201, 184], [185, 201], [201, 202], [202, 185], [186, 202], [202, 203], [203, 186], [187, 203], [203, 204], [204, 187], [188, 204], [204, 205], [205, 188], [189, 205], [205, 206], [206, 189], [190, 206], [206, 207], [207, 190], [192, 208], [208, 209], [209, 192], [193, 209], [209, 210], [210, 193], [194, 210], [210, 211], [211, 194], [195, 211], [211, 212], [212, 195], [196, 212], [212, 213], [213, 196], [197, 213], [213, 214], [214, 197], [198, 214], [214, 215], [215, 198], [199, 215], [215, 216], [216, 199], [200, 216], [216, 217], [217, 200], [201, 217], [217, 218], [218, 201], [202, 218], [218, 219], [219, 202], [203, 219], [219, 220], [220, 203], [204, 220], [220, 221], [221, 204], [205, 221], [221, 222], [222, 205], [206, 222], [222, 223], [223, 206], [208, 224], [224, 225], [225, 208], [209, 225], [225, 226], [226, 209], [210, 226], [226, 227], [227, 210], [211, 227], [227, 228], [228, 211], [212, 228], [228, 229], [229, 212], [213, 229], [229, 230], [230, 213], [214, 230], [230, 231], [231, 214], [215, 231], [231, 232], [232, 215], [216, 232], [232, 233], [233, 216], [217, 233], [233, 234], [234, 217], [218, 234], [234, 235], [235, 218], [219, 235], [235, 236], [236, 219], [220, 236], [236, 237], [237, 220], [221, 237], [237, 238], [238, 221], [222, 238], [238, 239], [239, 222], [224, 240], [240, 241], [241, 224], [225, 241], [241, 242], [242, 225], [226, 242], [242, 243], [243, 226], [227, 243], [243, 244], [244, 227], [228, 244], [244, 245], [245, 228], [229, 245], [245, 246], [246, 229], [230, 246], [246, 247], [247, 230], [231, 247], [247, 248], [248, 231], [232, 248], [248, 249], [249, 232], [233, 249], [249, 250], [250, 233], [234, 250], [250, 251], [251, 234], [235, 251], [251, 252], [252, 235], [236, 252], [252, 253], [253, 236], [237, 253], [253, 254], [254, 237], [238, 254], [254, 255], [255, 238]];

init();