
  var vertices[20][3]; /* 20 vertices with x, y, z coordinate */
  var Pi = 3.141592653589793238462643383279502884197;

  var phiaa = 52.62263590; /* the two phi angles needed for generation */
  var phibb = 10.81231754;

  r = 1.0; /* any radius in which the polyhedron is inscribed */
  phia = Pi*phiaa/180.0; /* 4 sets of five points each */
  phib = Pi*phibb/180.0;
  phic = Pi*(-phibb)/180.0;
  phid = Pi*(-phiaa)/180.0;
  the72 = Pi*72.0/180;
  theb = the72/2.0; /* pairs of layers offset 36 degrees */
  the = 0.0;
  for(i=0; i<5; i++)
  {
    vertices[i][0]=r*cos(the)*cos(phia);
    vertices[i][1]=r*sin(the)*cos(phia);
    vertices[i][2]=r*sin(phia);
    the = the+the72;
  }
  the=0.0;
  for(i=5; i<10; i++)
  {
    vertices[i][0]=r*cos(the)*cos(phib);
    vertices[i][1]=r*sin(the)*cos(phib);
    vertices[i][2]=r*sin(phib);
    the = the+the72;
  }
  the = theb;
  for(i=10; i<15; i++)
  {
    vertices[i][0]=r*cos(the)*cos(phic);
    vertices[i][1]=r*sin(the)*cos(phic);
    vertices[i][2]=r*sin(phic);
    the = the+the72;
  }
  the=theb;
  for(i=15; i<20; i++)
  {
    vertices[i][0]=r*cos(the)*cos(phid);
    vertices[i][1]=r*sin(the)*cos(phid);
    vertices[i][2]=r*sin(phid);
    the = the+the72;
  }