var d = document.getElementById("dibujo");
var lienzo = d.getContext("2d");
var linea = 30;
var l = 0;
var yf, xi, yi , xf, lxf, lyf; 

while(l < linea)
{
    xi = 10 * l;
    yi = 10 * (l + 1);
    xf = 10 * l;
    yf = 10 * (l + 1);
    l = l + 1;
    lxf = 300 - xf;
    lyf = 300 - yf;
    dibujarlinea(0, yi, xf, 300, "blue");
    dibujarlinea(xi, 0, 300, yf, "blue");
    dibujarlinea(300, yi, lxf, 300, "blue");
    dibujarlinea(0, lyf, yf, 0, "blue");



}



function dibujarlinea (x1, y1, x2, y2, color)
{
lienzo.beginPath();
lienzo.strokeStyle = (color);
lienzo.moveTo(x1, y1);
lienzo.lineTo(x2, y2);
lienzo.stroke();
lienzo.closePath();
}