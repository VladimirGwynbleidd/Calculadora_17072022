
var pN_PORC_ANUAL_SALDO;
var pSalarioBaseCotizacionMensual;
var pFechaNacimiento;
var pEdad;
var pEdadRetiro;
var pSaldoActualAfore;
var nSemanasCotizadas;
var pDensidadCotizacion;
var pGenero = 0;
var pRendimiento;
var pComisionAfore;
var pAportacion;
var pFechaCorte;
var PMG = 2601;
var PME = 0;
var sParametros_Calculo;
var sResultados_Calculo;



function LeerFormulario() {

    sParametros_Calculo = "";
    sResultados_Calculo = "";

    pFechaNacimiento = document.getElementById('txtFechaNacimiento').value;
    pEdadRetiro = document.getElementById('txtEdadRetiro').value;
    nSemanasCotizadas = document.getElementById('txtAniosCotizados').value;


    var psSaldoActualAfore = document.getElementById('txtSaldoActualAfore').value;
    psSaldoActualAfore = psSaldoActualAfore.replace("$", "");
    psSaldoActualAfore = psSaldoActualAfore.replace(",", "");
    pSaldoActualAfore = psSaldoActualAfore;

    // Se elimina obtencion de campo y se coloca 80
    //var psDensidadCotizacion = document.getElementById('txtDensidadCotizacion').value;
    //psDensidadCotizacion = psDensidadCotizacion.replace("%", "");
    //pDensidadCotizacion = psDensidadCotizacion / 100;
    pDensidadCotizacion = 0.8;



    if (document.getElementById('chkMujer').checked) {
        pGenero = 1; document.getElementById('imgGenero').src = "imagenes/mujer.gif";

        // Se egrega la seccion de Negativa de Pension
        pGenero = 1; document.getElementById('imgGeneroNP').src = "imagenes/mujer.gif";
    }

    if (document.getElementById('chkHombre').checked) {
        pGenero = 0; document.getElementById('imgGenero').src = "imagenes/hombre.gif";

        // Se egrega la seccion de Negativa de Pension
        pGenero = 0; document.getElementById('imgGeneroNP').src = "imagenes/hombre.gif";
    }



    var psSalarioBaseCotizacionMensual = document.getElementById('txtSalarioBaseCotizacion').value;
    psSalarioBaseCotizacionMensual = psSalarioBaseCotizacionMensual.replace("$", "");
    psSalarioBaseCotizacionMensual = psSalarioBaseCotizacionMensual.replace(",", "");
    pSalarioBaseCotizacionMensual = psSalarioBaseCotizacionMensual;




    var psRendimiento = document.getElementById('txtRendimientoReralAntesComisiones').value;
    psRendimiento = psRendimiento.replace("%", "");
    psRendimiento = psRendimiento.replace(" ", "");
    pRendimiento = psRendimiento / 100;



    var psComisionAfore = document.getElementById('txtComisionAfore').value;
    psComisionAfore = psComisionAfore.replace("%", "");
    psComisionAfore = psComisionAfore.replace(" ", "");
    pComisionAfore = psComisionAfore / 100;



    pAportacion = 6.50 / 100;

    pEdad = document.getElementById('txtEdad').value;

    sParametros_Calculo = pFechaNacimiento + '|' + pEdadRetiro + '|' + nSemanasCotizadas + '|' + pSaldoActualAfore + '|' + pDensidadCotizacion + '|' + pGenero + '|' + pSalarioBaseCotizacionMensual + '|' + pRendimiento + '|' + pComisionAfore + '|' + pAportacion + '|' + pEdad;


    document.getElementById('lblSalarioBaseCotizacionMensual').innerHTML = document.getElementById('txtSalarioBaseCotizacion').value;

    document.getElementById('lblEdad').innerHTML = pEdad;
    document.getElementById('lblEdadRetiro').innerHTML = pEdadRetiro;
    document.getElementById('lblRendimientoRealAntesComisiones').innerHTML = document.getElementById('txtRendimientoReralAntesComisiones').value;;
    document.getElementById('lblAniosCotizados').innerHTML = nSemanasCotizadas;
    document.getElementById('lblSaldoActualAfore').innerHTML = document.getElementById('txtSaldoActualAfore').value;
    // Se coloca fija 80%
    //document.getElementById('lblDensidadCotizacion').innerHTML = document.getElementById('txtDensidadCotizacion').value;
    document.getElementById('lblDensidadCotizacion').innerHTML = '80%';


    // Se agrega la seccion de Negativa de Pension
    document.getElementById('lblSalarioBaseCotizacionMensualNP').innerHTML = document.getElementById('txtSalarioBaseCotizacion').value;
    document.getElementById('lblEdadNP').innerHTML = pEdad;
    document.getElementById('lblEdadRetiroNP').innerHTML = pEdadRetiro;
    document.getElementById('lblRendimientoRealAntesComisionesNP').innerHTML = document.getElementById('txtRendimientoReralAntesComisiones').value;;
    document.getElementById('lblAniosCotizadosNP').innerHTML = nSemanasCotizadas;
    document.getElementById('lblSaldoActualAforeNP').innerHTML = document.getElementById('txtSaldoActualAfore').value;
    document.getElementById('lblDensidadCotizacionNP').innerHTML = '80%';
    //document.getElementById('lblDensidadCotizacionNP').innerHTML = document.getElementById('txtDensidadCotizacion').value;

}



function GetComisionAforeClave() {
    var mySelectedIndex = $("#cboAfore").val();

    PageMethods.GetComisionAfore(mySelectedIndex, OnGetComisionAfore);
}
function OnGetComisionAfore(result) {

    document.getElementById('txtComisionAfore').value = result;

    //GetComisionesAforeClave();

    var sComisiones = document.getElementById('hddLugarComision').value.split('|');
    var mySelectedIndex = $("#cboAfore").val();

    //alert(mySelectedIndex);
    //alert(sComisiones);

    for (var i = 1; i < sComisiones.length; i++) {

        //alert(sComisiones[i]);
        if (mySelectedIndex == sComisiones[i]) {
            //alert('numero: ' + i);
            document.getElementById('boldStuff').innerHTML = i;
            //alert(document.getElementById('boldStuff').value);
            //document.getElementById('lblLugarComision').innerHTML = "La comisión es el cobro que te hace la AFORE por administrar los recursos de tu cuenta AFORE. Actualmente estás en la AFORE No. " + i + "de 11 que hay en el mercado. A menor comisión mayor pensión. Da clic aquí para que conozcas la comisión que cobran las demás AFORE (aparece cuadro de comisiones)";
            //$(document).ready(function () {
            //    $('#descripcion').html(i);
            //});
        }
    }
}


function GetComisionesAforeClave() {

    //alert('carga');
   // PageMethods.GetComisionesAfore(1, OnGetComisionesAfore);
}
function OnGetComisionesAfore(result) {

    //alert('regreso');
    //alert(result);


  //  document.getElementById('hddLugarComision').value = result;

    //alert(document.getElementById('hddLugarComision').value);

    //var sComisiones = result.split('|');
    //var mySelectedIndex = $("#cboAfore").val();

    //alert(mySelectedIndex);
    //alert(sComisiones);

    //for (var i = 1; i < sComisiones.length; i++) {

    //    alert(sComisiones[i]);
    //    if (mySelectedIndex == sComisiones[i])
    //    {

    //    }
    //}


}

//function GetResultadoCalculo() {
//    LeerFormulario();

//    PageMethods.GetCalculo(sParametros_Calculo, OnGetResultadoCalculo);
//}
//function OnGetResultadoCalculo(resultado) {



//}

function GetResultadoCalculoPrueba() {

    $("#cboAfore").blur();
    $("#txtSalarioBaseCotizacion").blur();
    $("#txtSaldoActualAfore").blur();

    var mensaje = ValidaFechaNacimiento();

    if (mensaje.length > 0) {
        $("#txtFechaNacimiento").blur();
    }   


    if (document.getElementById('txtComisionAfore').value != "") {
        LeerFormulario();
        
        PageMethods.GetCalculo(sParametros_Calculo, OnGetResultadoCalculoPrueba);
    }

}

function GetResultadoCalculoPruebaMobil(Parametros) {      

    PageMethods.GetCalculo(Parametros, OnGetResultadoCalculoPrueba);
    
}

function OnGetResultadoCalculoPrueba(resultado) {
   
    $("#DVResultadoAV").empty();
    $("#DVDatosTePareceSuficiente").removeClass("panelOculto").addClass("panelVisible");
    $("#DVResultadoPMT_2").removeClass("panelOculto").addClass("panelVisible");
   
    
    var iPMG = "$2,601.00 *";  
    var iPorcientoPMG = (2601.00 / pSalarioBaseCotizacionMensual) * 100;
    var iPorcientoPMG = iPorcientoPMG.toFixed(2) + "%";

    

    var listaResultadoN1 = resultado.split('&');
   
    if (listaResultadoN1[0] != "NP") {

        if (listaResultadoN1.length != 2) {

            var listaResultadoN2 = listaResultadoN1[0].split('|');
            document.getElementById('lblSaldoAcumulado').innerHTML = listaResultadoN2[0];
            document.getElementById('lblPensionMensualEstimada').innerHTML = listaResultadoN2[1];
            document.getElementById('lblP2PME').innerHTML = listaResultadoN2[1];
            document.getElementById('lblPorcentajePensionMensual').innerHTML = listaResultadoN2[2];

            if (listaResultadoN1[2] == "0") {


                $("#DVContenedorCalculadora").removeClass("panelVisible").addClass("panelOculto");
                $("#DVContenedorResultado").removeClass("panelOculto").addClass("panelVisible");

                $("#lblPMG").removeClass("panelOculto").addClass("panelVisible");
                //document.getElementById("lblPMG").style.display = "inline";

                document.getElementById('lblPensionMensualEstimada').innerText = iPMG;
                document.getElementById('lblP2PME').innerText = iPMG;
                document.getElementById('lblPorcentajePensionMensual').innerText = iPorcientoPMG;


                $("#DVGraficaContenedor").removeClass("panelVisible").addClass("panelOculto");
              

                $("#DVDatosTePareceSuficiente").removeClass("panelVisible").addClass("panelOculto");
                $("#DVResultadoPMT_2").removeClass("panelVisible").addClass("panelOculto");
            

                $(document).ready(function () {
                    $("#DVResultadoAV").empty();
                });
            }
            else {

                var TRmax = document.getElementById('lblPorcentajePensionMensual').innerText;

                $("#lblPMG").removeClass("panelVisible").addClass("panelOculto");
               

                var listaResultadoN3 = listaResultadoN1[1].split('|');

                var stringtable = "";
                for (var i = 1; i < listaResultadoN3.length; i++) {


                    var listaresultadocuadro = listaResultadoN3[i].split('*');

                    var orale = listaresultadocuadro[2].indexOf("-");
                
                    if (orale != 0) {
                        stringtable = stringtable + "<tr><td>" + listaresultadocuadro[0] + "</td><td>" + listaresultadocuadro[2] + "</td></tr>";
                    }


                }
                
                TRmax = TRmax.replace("%", "");
                TRmax = TRmax.replace(",", "");
                TRmax = TRmax.replace(" ", "");

 

                if (parseFloat(TRmax) > 100) {
                    $("#DVGraficaContenedor").removeClass("panelVisible").addClass("panelOculto");
                    $("#DVDatosTePareceSuficiente").removeClass("panelVisible").addClass("panelOculto");
                    $("#DVResultadoPMT_2").removeClass("panelVisible").addClass("panelOculto");
                }
                else {
                    $("#DVGraficaContenedor").removeClass("panelOculto").addClass("panelVisible");
                    $("#DVDatosTePareceSuficiente").removeClass("panelOculto").addClass("panelVisible");
                    $("#DVResultadoPMT_2").removeClass("panelOculto").addClass("panelVisible");
                  
                    $(document).ready(function () {
                        $("#DVResultadoAV").empty();
                        $("#DVResultadoAV").append("<table id='tblTablaResultado'><tr><th>¿De cuánto quieres tu pensión?</th><th>Tendrías que ahorrar adicionalmente al mes</th></tr>" + stringtable + "</table>");

                    });
                }



                Grafica(listaResultadoN1[3], listaResultadoN1[4], listaResultadoN1[5]);

                $("#DVContenedorCalculadora").removeClass("panelVisible").addClass("panelOculto");
                $("#DVContenedorResultado").removeClass("panelOculto").addClass("panelVisible");
            }


            var pFechaNacimiento = document.getElementById('txtFechaNacimiento').value;
            var valoresfecha = pFechaNacimiento.split('/');

            var fechaGeneracion = new Date(1983, 7, 2, 0, 0, 0, 0);
            var fechaNacimiento = new Date(parseInt(valoresfecha[2]), parseInt(valoresfecha[1]), parseInt(valoresfecha[0]), 0, 0, 0, 0);
            if (fechaNacimiento <= fechaGeneracion) {
            
                $('#aGeneracionTransicion').trigger('click');
            }


        }
        else {
         
            $('#lMensajeError').text(listaResultadoN1[1]);
        
            $("#aMensajeError").click();

        }

    }
    else { // Seccion de Negativa de Pension
        
        $("#DVContenedorCalculadora").removeClass("panelVisible").addClass("panelOculto");
        $("#DVContenedorResultadoNP").removeClass("panelOculto").addClass("panelVisible");


        var listaResultadoN2 = listaResultadoN1[1].split('|');
       // document.getElementById('lblSaldoAcumuladoNP').innerHTML = listaResultadoN2[0];

        //Construccion de Encabezado de tabla

        var encabezadoTabla = "<table id='tblTablaResultadoNP'><tr><th colspan='2'class='InformacionTabla'>Ahorro voluntario mensual</th><th colspan='3' class='InformacionTabla'>Saldo acumulado a la fecha de retiro</th></tr>";
        //encabezadoTabla += "<tr><th class='RegistrostablaNP'>% del Salario</th><th class='RegistrostablaNP'>expresado en pesos</th><th class='RegistrostablaNP'>Por ahorro voluntario</th><th class='RegistrostablaNP'>Por ahorro obligatorio</th><th class='RegistrostablaNP'>Total ahorrado al momento del retiro<sup>1/</sup></th></tr>";
        
        encabezadoTabla += "<tr><td colspan='5' class='RegistrostablaNP' style='padding-top: 0px; padding-bottom: 0px;'><img src='imagenes/encabezado_mejora_NP.gif' ></td></tr>";
       
        var cuerpoTabla = "";
        var finTabla = "</table>";


        //Se inicia en el 1 ya que lo anterior son los valores comunes del calculo
        for (var i = 3; i < listaResultadoN1.length; i++) {
            
            var listaresultadocuadro = listaResultadoN1[i].split('|');

            cuerpoTabla += "<tr>";

            for (var ir = 0; ir < listaresultadocuadro.length; ir++) {
                switch (ir)
                {
                    case 0:
                        cuerpoTabla += "<td style='width:97px;'>" + listaresultadocuadro[ir] + "</td>";
                        break;
                    case 1:
                        cuerpoTabla += "<td style='width:153px;'>" + listaresultadocuadro[ir] + "</td>";
                        break;
                    case 2:
                        cuerpoTabla += "<td style='width:163px;'>" + listaresultadocuadro[ir] + "</td>";
                        break;
                    case 3:
                        cuerpoTabla += "<td style='width:170px;'>" + listaresultadocuadro[ir] + "</td>";
                        break;
                    case 4:
                        cuerpoTabla += "<td style='width:287px;'>" + listaresultadocuadro[ir] + "</td>";
                        break;
                    default:
                        cuerpoTabla += "<td>" + listaresultadocuadro[ir] + "</td>";
                        break;
                }
                

                    //cuerpoTabla += "<td>" + listaresultadocuadro[ir] + "</td>";

            }

            cuerpoTabla += "</tr>";

        }


        $(document).ready(function () {
            $("#DVResultadoAVNP").empty();
            $("#DVResultadoAVNP").append(encabezadoTabla + cuerpoTabla + finTabla);

        });

    }
    



    function Grafica(tabla1, tabla2, tabla3) {
        var listaGral2 = tabla2.split('|');
        var lista2 = [];
        var i = 1;
        var contMin = 1;
        for (i = 1; i < listaGral2.length; i++) {
            lista2[i] = listaGral2[i];
            if (parseFloat(listaGral2[i].replace('$', '')) < 0) {
                contMin = i + 1;
            }
        }

        var listaGral1 = tabla1.split('|');
        var lista1 = [];
        i = 1;
        for (i = 1; i < listaGral1.length; i++) {
            lista1[i] = listaGral1[i];
        }

        var listaGral3 = tabla3.split('|');
        var lista3 = [];
        i = 1;
        for (i = 1; i < listaGral3.length; i++) {
            lista3[i] = listaGral3[i];
        }

        var listaGral = tabla3.split('|');
        var lista = [];
        i = 1;
        for (i = 1; i < listaGral.length; i++) {
            lista[i] = listaGral[i];
        }


        var valMap = lista2;//[90, 110, 125, 140, 160, 225, 250];

        $("#amount2").val(valMap[contMin]);

        var valMap = lista1;//[90, 110, 125, 140, 160, 225, 250];
        //$("#amount1").val(valMap[1]);

        $("#slider1").slider({
            range: "min",
            min: 1,
            max: valMap.length - 1,
            value: contMin,
            slide: function (event, ui) {
                if (parseFloat(lista2[ui.value].replace('$', '')) >= 0) {
                    $("#amount1").val(lista1[ui.value]);
                    $("#txtPensionFlotante").val(lista1[ui.value]);
                    $("#amount2").val(lista2[ui.value]);
                    $("#amount3").val(lista3[ui.value]);

                    BarraProgreso();
                }
                else {
                    return false;
                }
            }
        });

        $("#amount1").val(valMap[contMin]);
        $("#txtPensionFlotante").val(valMap[contMin]);


        var valMap = lista3;//[0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

        $("#amount3").val(valMap[contMin]);
        BarraProgreso();

        var valMap = lista;//[0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

        $("#amount4").val(valMap[contMin]);

    }

    function BarraProgreso() {
       
        var porcent = parseInt($("#amount3").val());
        switch (porcent) {
            case 10:
                $("#barraGraficaProgreso").removeClass("barraGraficaProgreso20 barraGraficaProgreso30 barraGraficaProgreso40 barraGraficaProgreso50 barraGraficaProgreso60 barraGraficaProgreso70 barraGraficaProgreso80 barraGraficaProgreso90 barraGraficaProgreso100").addClass("barraGraficaProgreso10");
                $("#imgIndicadorTasa").removeClass(" indicadorBarra20 indicadorBarra30 indicadorBarra40 indicadorBarra50 indicadorBarra60 indicadorBarra70 indicadorBarra80 indicadorBarra90 indicadorBarra100").addClass("indicadorBarra10");
                break;
            case 20:
                $("#barraGraficaProgreso").removeClass("barraGraficaProgreso10 barraGraficaProgreso30 barraGraficaProgreso40 barraGraficaProgreso50 barraGraficaProgreso60 barraGraficaProgreso70 barraGraficaProgreso80 barraGraficaProgreso90 barraGraficaProgreso100").addClass("barraGraficaProgreso20");
                $("#imgIndicadorTasa").removeClass(" indicadorBarra10 indicadorBarra30 indicadorBarra40 indicadorBarra50 indicadorBarra60 indicadorBarra70 indicadorBarra80 indicadorBarra90 indicadorBarra100").addClass("indicadorBarra20");
                break;
            case 30:
                $("#barraGraficaProgreso").removeClass("barraGraficaProgreso40 barraGraficaProgreso50 barraGraficaProgreso60 barraGraficaProgreso70 barraGraficaProgreso80 barraGraficaProgreso90 barraGraficaProgreso100").addClass("barraGraficaProgreso30");
                $("#imgIndicadorTasa").removeClass("indicadorBarra40 indicadorBarra50 indicadorBarra60 indicadorBarra70 indicadorBarra80 indicadorBarra90 indicadorBarra100").addClass("indicadorBarra30");
                break;
            case 40:
                $("#barraGraficaProgreso").removeClass("barraGraficaProgreso30 barraGraficaProgreso50 barraGraficaProgreso60 barraGraficaProgreso70 barraGraficaProgreso80 barraGraficaProgreso90 barraGraficaProgreso100").addClass("barraGraficaProgreso40");
                $("#imgIndicadorTasa").removeClass("indicadorBarra30 indicadorBarra50 indicadorBarra60 indicadorBarra70 indicadorBarra80 indicadorBarra90 indicadorBarra100").addClass("indicadorBarra40");
                break;
            case 50:
                $("#barraGraficaProgreso").removeClass("barraGraficaProgreso30 barraGraficaProgreso40 barraGraficaProgreso60 barraGraficaProgreso70 barraGraficaProgreso80 barraGraficaProgreso90 barraGraficaProgreso100").addClass("barraGraficaProgreso50");
                $("#imgIndicadorTasa").removeClass("indicadorBarra30 indicadorBarra40 indicadorBarra60 indicadorBarra70 indicadorBarra80 indicadorBarra90 indicadorBarra100").addClass("indicadorBarra50");
                break;
            case 60:
                $("#barraGraficaProgreso").removeClass("barraGraficaProgreso30 barraGraficaProgreso40 barraGraficaProgreso50 barraGraficaProgreso70 barraGraficaProgreso80 barraGraficaProgreso90 barraGraficaProgreso100").addClass("barraGraficaProgreso60");
                $("#imgIndicadorTasa").removeClass("indicadorBarra30 indicadorBarra40 indicadorBarra50 indicadorBarra70 indicadorBarra80 indicadorBarra90 indicadorBarra100").addClass("indicadorBarra60");
                break;
            case 70:
                $("#barraGraficaProgreso").removeClass("barraGraficaProgreso30 barraGraficaProgreso40 barraGraficaProgreso50 barraGraficaProgreso60 barraGraficaProgreso80 barraGraficaProgreso90 barraGraficaProgreso100").addClass("barraGraficaProgreso70");
                $("#imgIndicadorTasa").removeClass("indicadorBarra30 indicadorBarra40 indicadorBarra50 indicadorBarra60 indicadorBarra80 indicadorBarra90 indicadorBarra100").addClass("indicadorBarra70");
                break;
            case 80:
                $("#barraGraficaProgreso").removeClass("barraGraficaProgreso30 barraGraficaProgreso40 barraGraficaProgreso50 barraGraficaProgreso60 barraGraficaProgreso70 barraGraficaProgreso90 barraGraficaProgreso100").addClass("barraGraficaProgreso80");
                $("#imgIndicadorTasa").removeClass("indicadorBarra30 indicadorBarra40 indicadorBarra50 indicadorBarra60 indicadorBarra70 indicadorBarra90 indicadorBarra100").addClass("indicadorBarra80");
                break;
            case 90:
                $("#barraGraficaProgreso").removeClass("barraGraficaProgreso30 barraGraficaProgreso40 barraGraficaProgreso50 barraGraficaProgreso60 barraGraficaProgreso70 barraGraficaProgreso80 barraGraficaProgreso100").addClass("barraGraficaProgreso90");
                $("#imgIndicadorTasa").removeClass("indicadorBarra30 indicadorBarra40 indicadorBarra50 indicadorBarra60 indicadorBarra70 indicadorBarra80 indicadorBarra100").addClass("indicadorBarra90");
                break;
            case 100:
                $("#barraGraficaProgreso").removeClass("barraGraficaProgreso30 barraGraficaProgreso40 barraGraficaProgreso50 barraGraficaProgreso60 barraGraficaProgreso70 barraGraficaProgreso80 barraGraficaProgreso90").addClass("barraGraficaProgreso100");
                $("#imgIndicadorTasa").removeClass("indicadorBarra30 indicadorBarra40 indicadorBarra50 indicadorBarra60 indicadorBarra70 indicadorBarra80 indicadorBarra90").addClass("indicadorBarra100");
                break;
        }

    }

    $('#cargando').hide();

}