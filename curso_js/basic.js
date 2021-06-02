var usuario = prompt("Cual es tu peso crack?");
var peso = parseInt(usuario);
var planeta = parseInt (prompt("Que planeta eliges?\n 1 es Marte\n 2 es Jupiter " ));
var g_marte = (2.6);
var g_jupiter = (24.8);
var g_tierra = (9.8);
var peso_final ;
var texto_final;
if (planeta == 1)
{
   peso_final = peso * g_marte / g_tierra;
   peso_final = peso_final.toFixed(2)
   texto_final = ("Tu peso en Marte es: <strong>" + peso_final + " kilitos </strong>");
}
else if (planeta == 2)
{
    peso_final = peso * g_jupiter / g_tierra;
    peso_final = peso_final.toFixed(2)
    texto_final = ("Tu peso en Jupiter es: <strong>" + peso_final + " Kilitos </strong>");
}
else
{
    texto_final = (" <strong> Tu poto </strong>");
}
document.write (texto_final);