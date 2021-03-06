var Handlebars = require("handlebars/runtime");  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['style'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "@media print {\n  body {\n    -webkit-print-color-adjust: exact;\n  }\n  .checkBox {\n    -webkit-print-color-adjust: exact;\n  }\n  .page {\n    height: 278mm;\n    position: relative;\n    width: 217mm;\n    font-family: 'Verdana';\n    display: block;\n    background: #fff;\n  }\n}\nhtml,\nbody {\n  background-color: #fff;\n  margin: 0px;\n}\n.page {\n  position: relative;\n  width: 217mm;\n  height: 278mm;\n  font-family: 'Verdana';\n  display: block;\n  background: #fff;\n}\n.row {\n  height: 5mm;\n  width: 217mm;\n}\n.heading {\n  position: relative;\n  height: 5mm;\n  width: 217mm;\n  background: #a95346;\n  font-weight: bold;\n  text-align: center;\n  letter-spacing: 0.1mm;\n  color: #a95346;\n}\n.whiteBox {\n  min-height: 5mm;\n  height: auto;\n  font-size: 3mm;\n  line-height: 2;\n  border-left: 1px solid #a95346;\n  border-bottom: 1px solid #a95346;\n  color: #000;\n  letter-spacing: 0.1mm;\n  float: left;\n  display: inline-block;\n  text-align: center;\n}\n.brownBox {\n  height: 5mm;\n  font-size: 3mm;\n  line-height: 2;\n  border-left: 1px solid #a95346;\n  border-bottom: 1px solid #a95346;\n  color: #a95346;\n  letter-spacing: 0.1mm;\n  float: left;\n  display: inline-block;\n  text-align: center;\n}\n.yellowBox {\n  height: 5mm;\n  font-size: 3mm;\n  line-height: 2;\n  border-left: 1px solid #a95346;\n  border-bottom: 1px solid #a95346;\n  color: #a95346;\n  letter-spacing: 0.1mm;\n  float: left;\n  display: inline-block;\n  text-align: center;\n  background-color: #fff19c;\n}\n.checkBox {\n  width: 2mm;\n  height: 2mm;\n  background-color: #fff;\n  position: relative;\n  display: inline-block;\n  box-shadow: 2px 2px #a95346;\n}\n.underLine {\n  height: 4mm;\n  width: 68mm;\n  position: relative;\n  display: inline-block;\n  float: left;\n}\n.highlight {\n  background-color: #fff19c;\n}\n";
},"useData":true});
templates['layouts/base'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper;

  return "        "
    + container.escapeExpression(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"title","hash":{},"data":data}) : helper)))
    + "\r\n";
},"3":function(container,depth0,helpers,partials,data) {
    return "        Open AP LIS Report\r\n";
},"5":function(container,depth0,helpers,partials,data) {
    return "";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<!doctype html>\r\n<html>\r\n  <head>\r\n    <title>\r\n"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.title : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data})) != null ? stack1 : "")
    + "    </title>\r\n    <style>\r\n"
    + ((stack1 = container.invokePartial(partials.style,depth0,{"name":"style","data":data,"indent":"      ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "    </style>\r\n  <body>\r\n    <div class=\"page\">\r\n"
    + ((stack1 = container.invokePartial(partials["content-block"],depth0,{"name":"content-block","fn":container.program(5, data, 0),"inverse":container.noop,"data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "    </div>\r\n  </body>\r\n</html>\r\n";
},"usePartial":true,"useData":true});
templates['partials/amendment'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "  <div class=\"whiteBox\" style=\"width: 215.5mm; border: solid .75mm black; border-top: solid .375mm black; padding: .25mm;\">\r\n    <div class=\"whiteBox\" style=\"width: 214.5mm; border: solid .25mm black;\">\r\n      <div class=\"whiteBox\" style=\"width: 200mm; border: none; font-size: 3.5mm; line-height: 2; text-align: left; padding-left: 5mm; font-weight: bold;\">"
    + alias4(((helper = (helper = helpers.amendment_date_time || (depth0 != null ? depth0.amendment_date_time : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"amendment_date_time","hash":{},"data":data}) : helper)))
    + "</div>\r\n      <div class=\"whiteBox\" style=\"width: 200mm; border: none; font-size: 3.5mm; line-height: 2; text-align: left; padding-left: 5mm;\">"
    + alias4(((helper = (helper = helpers.amendment_text || (depth0 != null ? depth0.amendment_text : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"amendment_text","hash":{},"data":data}) : helper)))
    + "</div>\r\n      <div class=\"whiteBox\" style=\"width: 95mm; border: none;\"></div>\r\n      <div class=\"whiteBox\" style=\"width: 107mm; border: none; font-size: 3.5mm; line-height: 2; text-align: center;\">"
    + alias4(((helper = (helper = helpers.amendment_signature || (depth0 != null ? depth0.amendment_signature : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"amendment_signature","hash":{},"data":data}) : helper)))
    + "</div>\r\n      <div class=\"whiteBox\" style=\"width: 95mm; border: none;\"></div>\r\n      <div class=\"whiteBox\" style=\"width: 107mm; border: none; font-size: 2.5mm; line-height: 1; text-align: center; padding-left: 1mm;\">"
    + alias4(((helper = (helper = helpers.signature_title || (depth0 != null ? depth0.signature_title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"signature_title","hash":{},"data":data}) : helper)))
    + "</div>\r\n    </div>\r\n  </div>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.content : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"useData":true});
templates['partials/cancer-case-study'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper;

  return "  <div class=\"whiteBox\" style=\"width: 217mm; border: none;\">\r\n    <div class=\"whiteBox\" style=\"width: 100mm; border: none; text-align: left; font-weight: bold; text-decoration: underline;\">Cancer Case Study</div>\r\n  </div>\r\n  <div class=\"whiteBox\" style=\"width: 217mm; border: none;\">\r\n    <div class=\"whiteBox\" style=\"width: 100mm; border: none; text-align: left; line-height: 1;\">"
    + container.escapeExpression(((helper = (helper = helpers.cancer_summary || (depth0 != null ? depth0.cancer_summary : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"cancer_summary","hash":{},"data":data}) : helper)))
    + "</div>\r\n  </div>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.content : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"useData":true});
templates['partials/clinical-information'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"whiteBox\" style=\"width: 217mm; border: none;\">\r\n  <div class=\"whiteBox\" style=\"width: 100mm; border: none; text-align: left; font-weight: bold; text-decoration: underline;\">Clinical Information</div>\r\n</div>\r\n<div class=\"whiteBox\" style=\"width: 217mm; border: none;\">\r\n  <div class=\"whiteBox\" style=\"width: 217mm; border: none; text-align: left; line-height: 1;\">"
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.accessionOrder : depth0)) != null ? stack1.clinicalHistory : stack1), depth0))
    + "</div>\r\n</div>\r\n";
},"useData":true});
templates['partials/footer'] = template({"1":function(container,depth0,helpers,partials,data) {
    return "    <div class=\"brownBox\" style=\"width: 65mm; height: 3mm; border: none; text-align: left; font-size: 3mm; text-align: right;\">"
    + container.escapeExpression(container.lambda(depth0, depth0))
    + "</div>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

  return "<div class=\"whiteBox\" style=\"width: 217.25mm; height: 32mm; border: none; position: fixed;\">\r\n  <!--bottom portion of report-->\r\n  <div class=\"whiteBox\" style=\"width: 217mm; height: 3mm; border: none;\">\r\n    <div class=\"row\">\r\n      <div class=\"brownBox\" style=\"width: 100mm; border: none; text-align: left; font-size: 3mm; line-height: .75;\">Yellowstone Pathology Institute, Inc.</div>\r\n    </div>\r\n  </div>\r\n  <div class=\"whiteBox\" style=\"width: 74mm; height: 28mm; border: none; font-family: candara;\">\r\n    <div class=\"brownBox\" style=\"width: 74mm; height: 3mm; font-weight: bold; border: none; text-align: left; font-size: 3mm; line-height: .75; border-bottom: solid .5mm;\">Billings</div>\r\n    <div class=\"whiteBox\" style=\"width: 65mm; height: 3mm; border: none; text-align: left; font-size: 3mm;\">"
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.addresses : depth0)) != null ? stack1["0"] : stack1)) != null ? stack1.addressline1 : stack1), depth0))
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.addresses : depth0)) != null ? stack1["0"] : stack1)) != null ? stack1.addressline2 : stack1), depth0))
    + "</div>\r\n    <div class=\"whiteBox\" style=\"width: 65mm; height: 3mm; border: none; text-align: left; font-size: 3mm;\">"
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.addresses : depth0)) != null ? stack1["0"] : stack1)) != null ? stack1.city : stack1), depth0))
    + ", "
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.addresses : depth0)) != null ? stack1["0"] : stack1)) != null ? stack1.state : stack1), depth0))
    + " "
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.addresses : depth0)) != null ? stack1["0"] : stack1)) != null ? stack1.zip : stack1), depth0))
    + "</div>\r\n    <div class=\"whiteBox\" style=\"width: 70mm; height: 3mm; border: none; text-align: left; font-size: 3mm;\"></div>\r\n    <div class=\"whiteBox\" style=\"width: 70mm; height: 3mm; border: none; text-align: left; font-size: 3mm;\">phone: <span style=\"font-weight: bold;\"> "
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.addresses : depth0)) != null ? stack1["0"] : stack1)) != null ? stack1.phone : stack1), depth0))
    + "</span>  fax:<span style=\"font-weight: bold;\"> "
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.addresses : depth0)) != null ? stack1["0"] : stack1)) != null ? stack1.fax : stack1), depth0))
    + "</span></div>\r\n    <div class=\"whiteBox\" style=\"width: 65mm; height: 3mm; border: none; text-align: left; font-size: 3mm;\">toll-free: <span style=\"font-weight: bold;\">"
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.addresses : depth0)) != null ? stack1["0"] : stack1)) != null ? stack1.tollfree : stack1), depth0))
    + "</span></div>\r\n  </div>\r\n  <div class=\"whiteBox\" style=\"width: 74mm; height: 28mm; border: none; font-family: candara;\">\r\n    <div class=\"brownBox\" style=\"width: 74mm; height: 3mm; font-weight: bold; border: none; text-align: left; font-size: 3mm; line-height: .75; border-bottom: solid .5mm;\">Cody</div>\r\n    <div class=\"whiteBox\" style=\"width: 74mm; height: 3mm; border: none; text-align: left; font-size: 3mm;\">"
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.addresses : depth0)) != null ? stack1["1"] : stack1)) != null ? stack1.addressline1 : stack1), depth0))
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.addresses : depth0)) != null ? stack1["1"] : stack1)) != null ? stack1.addressline2 : stack1), depth0))
    + "</div>\r\n    <div class=\"whiteBox\" style=\"width: 74mm; height: 3mm; border: none; text-align: left; font-size: 3mm;\">"
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.addresses : depth0)) != null ? stack1["1"] : stack1)) != null ? stack1.city : stack1), depth0))
    + ", "
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.addresses : depth0)) != null ? stack1["1"] : stack1)) != null ? stack1.state : stack1), depth0))
    + " "
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.addresses : depth0)) != null ? stack1["1"] : stack1)) != null ? stack1.zip : stack1), depth0))
    + "</div>\r\n    <div class=\"whiteBox\" style=\"width: 70mm; height: 3mm; border: none; text-align: left; font-size: 3mm;\"></div>\r\n    <div class=\"whiteBox\" style=\"width: 74mm; height: 3mm; border: none; text-align: left; font-size: 3mm;\">phone: <span style=\"font-weight: bold;\">"
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.addresses : depth0)) != null ? stack1["1"] : stack1)) != null ? stack1.phone : stack1), depth0))
    + "</span> fax: <span style=\"font-weight: bold;\">"
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.addresses : depth0)) != null ? stack1["1"] : stack1)) != null ? stack1.fax : stack1), depth0))
    + "</span></div>\r\n    <div class=\"whiteBox\" style=\"width: 74mm; height: 3mm; border: none; text-align: left; font-size: 3mm;\">toll-free <span style=\"font-weight: bold;\">"
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.addresses : depth0)) != null ? stack1["1"] : stack1)) != null ? stack1.tollfree : stack1), depth0))
    + "</span></div>\r\n  </div>\r\n  <div class=\"whiteBox\" style=\"width: 67mm; height: 28mm; border: none; font-family: candara;\">\r\n    <div class=\"brownBox\" style=\"width: 67mm; height: 3mm; border: none; text-align: left; font-size: 3mm; line-height: .75; text-align: right; border-bottom: solid .5mm;\">YellowstonePathology.com</div>\r\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.pathologist : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "  </div>\r\n</div>\r\n";
},"useData":true});
templates['partials/header'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<!--header section of page-->\r\n<div class=\"whiteBox\" style=\"width: 217mm; height: 35mm; border: none;\">\r\n  <div class=\"whiteBox\" style=\"width: 105mm; border: none; padding-left: 1mm; height: 30mm; text-align: left;\">\r\n    <img src=\"data:image/png;base64,"
    + alias4(((helper = (helper = helpers.logoImage || (depth0 != null ? depth0.logoImage : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"logoImage","hash":{},"data":data}) : helper)))
    + "\" height=\"115mm\" width=\"775mm\">\r\n  </div>\r\n  <div class=\"whiteBox\" style=\"width: 108.5mm; border: none; height: 30mm; text-align: left;\">\r\n    <div class=\"brownBox\" style=\"width: 100mm; border: none; font-size: 5mm; font-weight: bold; line-height: 2; text-align: right; padding-left: 1mm;\">"
    + alias4(((helper = (helper = helpers.report_type || (depth0 != null ? depth0.report_type : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"report_type","hash":{},"data":data}) : helper)))
    + "</div>\r\n    <div class=\"brownBox\" style=\"width: 100mm; border: none; font-size: 4mm; line-height: 3; text-align: right;\">"
    + alias4(((helper = (helper = helpers.amendment_title || (depth0 != null ? depth0.amendment_title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"amendment_title","hash":{},"data":data}) : helper)))
    + "</div>\r\n    <div class=\"whiteBox\" style= \"width: 100mm; border: none; font-size: 4mm; line-height: 2; text-align: right;\"></div>\r\n    <div class=\"whiteBox\" style=\"width: 70mm; border: none; font-size: 4mm; line-height: 2; text-align: right;\">YPI Report #:</div>\r\n    <div class=\"whiteBox\" style=\"width: 30mm; border: none; font-size: 4mm; line-height: 2; text-align: left;\">"
    + alias4(container.lambda(((stack1 = (depth0 != null ? depth0.panelSetOrder : depth0)) != null ? stack1.reportNo : stack1), depth0))
    + "</div>\r\n    <div class=\"whiteBox\" style=\"width: 70mm; border: none; font-size: 4mm; line-height: 2; text-align: right;\">Client Report #:</div>\r\n    <div class=\"whiteBox\" style=\"width: 25mm; border: none; font-size: 4mm; line-height: 2; text-align: right;\">"
    + alias4(((helper = (helper = helpers.client_rpt_no || (depth0 != null ? depth0.client_rpt_no : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"client_rpt_no","hash":{},"data":data}) : helper)))
    + "</div>\r\n  </div>\r\n</div>\r\n";
},"useData":true});
templates['partials/interpretation'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<div class=\"whiteBox\" style=\"color: black; width: 217mm; border: none;\">\r\n  <div class=\"whiteBox\" style=\"color: black; width: 100mm; border: none; text-align: left; font-weight: bold; text-decoration: underline;\">Interpretation</div>\r\n</div>\r\n<div class=\"whiteBox\" style=\"color: black; width: 217mm; border: none;\">\r\n  <div class=\"whiteBox\" style=\"color: black; width: 100mm; border: none; text-align: left; line-height: 1;\">"
    + container.escapeExpression(((helper = (helper = helpers.report_interpretation || (depth0 != null ? depth0.report_interpretation : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"report_interpretation","hash":{},"data":data}) : helper)))
    + "</div>\r\n</div>\r\n";
},"useData":true});
templates['partials/intraoperative-consult'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "  <div class=\"whiteBox\" style=\"width: 217mm; border: none;\">\r\n    <div class=\"whiteBox\" style=\"width: 100mm; border: none; text-align: left; font-weight: bold; text-decoration: underline;\">Intraoperative consultation header</div>\r\n  </div>\r\n  <div class=\"whiteBox\" style=\"width: 217mm; border: none;\">\r\n    <div class=\"whiteBox\" style=\"width: 100mm; border: none; text-align: left; line-height: 1;\">"
    + alias4(((helper = (helper = helpers.intraoperative_consultation_specimen || (depth0 != null ? depth0.intraoperative_consultation_specimen : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"intraoperative_consultation_specimen","hash":{},"data":data}) : helper)))
    + "</div>\r\n  </div>\r\n  <div class=\"whiteBox\" style=\"width: 217mm; border: none;\">\r\n    <div class=\"whiteBox\" style=\"width: 100mm; border: none; text-align: left; line-height: 1; padding-left: 5mm;\">"
    + alias4(((helper = (helper = helpers.intraoperative_consultation_text || (depth0 != null ? depth0.intraoperative_consultation_text : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"intraoperative_consultation_text","hash":{},"data":data}) : helper)))
    + "</div>\r\n  </div>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.content : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"useData":true});
templates['partials/microscopic-description'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "      <div class=\"whiteBox\" style=\"width: 217mm; border: none; text-align: left; line-height: 1;\">"
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.panelSetOrder : depth0)) != null ? stack1.microscopicX : stack1), depth0))
    + "</div>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"whiteBox\" style=\"width: 217mm; border: none;\">\r\n  <div class=\"whiteBox\" style=\"width: 217mm; border: none;\">\r\n    <div class=\"whiteBox\" style=\"width: 100mm; border: none; text-align: left; font-weight: bold; text-decoration: underline;\">Microscopic Description</div>\r\n  </div>\r\n  <div class=\"whiteBox\" style=\"width: 217mm; border: none;\">\r\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? depth0.accessionOrder : depth0)) != null ? stack1.panelSetOrders : stack1),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "  </div>\r\n</div>\r\n";
},"useData":true});
templates['partials/patient-information'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=container.lambda, alias2=container.escapeExpression, alias3=depth0 != null ? depth0 : (container.nullContext || {}), alias4=helpers.helperMissing, alias5="function";

  return "<div class=\"whiteBox\" style=\"width: 217.1mm; border: none;\">\r\n  <div class=\"whiteBox\" style=\"width: 20mm; height: 6mm; border: none; font-size: 3.6mm; line-height: 2; text-align: left; padding-left: 1mm;\">Patient:</div>\r\n  <div class=\"whiteBox\" style=\"width: 80mm; height: 6mm; border: none; font-size: 6mm; font-weight: bold; line-height: 1.25; text-align: left;\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.accessionOrder : depth0)) != null ? stack1.pLastName : stack1), depth0))
    + ", "
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.accessionOrder : depth0)) != null ? stack1.pFirstName : stack1), depth0))
    + " "
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.accessionOrder : depth0)) != null ? stack1.pMiddleInitial : stack1), depth0))
    + "</div>\r\n  <div class=\"whiteBox\" style=\"width: 86mm; height: 6mm; border: none; font-size: 3.6mm; line-height: 2; text-align: left;\">(DOB: "
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.accessionOrder : depth0)) != null ? stack1.pBirthdate : stack1), depth0))
    + ")</div>\r\n  <div class=\"whiteBox\" style=\"width: 128mm; height: 6mm; border: none;\"></div>\r\n  <div class=\"whiteBox\" style=\"width: 46mm; height: 6mm; border: none; line-height: 1.75; text-align: right; font-size: 4mm;\">Report Date:</div>\r\n  <div class=\"whiteBox\" style=\"width: 40mm; height: 6mm; border: none; font-size: 3.6mm; line-height: 2; text-align: left; padding-left: 1mm;\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.accessionOrder : depth0)) != null ? stack1.finalizedDate : stack1), depth0))
    + "</div>\r\n  <div class=\"whiteBox\" style=\"width: 19.5mm; height: 6mm; border: none; font-size: 3.6mm; line-height: 2; text-align: left; padding-left: 1mm;\">Provider:</div>\r\n  <div class=\"whiteBox\" style=\"width: 107mm; height: 6mm; border: none; font-size: 3.6mm; line-height: 2; text-align: left;\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.accessionOrder : depth0)) != null ? stack1.physicianName : stack1), depth0))
    + "</div>\r\n  <div class=\"whiteBox\" style=\"width: 46mm; height: 6mm; border: none; font-size: 3.6mm; line-height: 1.75; text-align: right; font-size: 4mm;\">Accessioned:</div>\r\n  <div class=\"whiteBox\" style=\"width: 40mm; height: 6mm; border: none; font-size: 3.6mm; line-height: 2; text-align: left; padding-left: 1mm;\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.accessionOrder : depth0)) != null ? stack1.accessionDate : stack1), depth0))
    + "</div>\r\n  <div class=\"whiteBox\" style=\"width: 20.5mm; height: 6mm; border: none;\"></div>\r\n  <div class=\"whiteBox\" style=\"width: 107mm; height: 6mm; border: none; font-size: 3.6mm; line-height: 2; text-align: left;\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.accessionOrder : depth0)) != null ? stack1.clientName : stack1), depth0))
    + "</div>\r\n  <div class=\"whiteBox\" style=\"width: 46mm; height: 6mm; border: none; line-height: 1.75; text-align: right; font-size: 4mm;\">Date of Service:</div>\r\n  <div class=\"whiteBox\" style=\"width: 40mm; height: 6mm; border: none; font-size: 3.6mm; line-height: 2; text-align: left; padding-left: 1mm;\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.accessionOrder : depth0)) != null ? stack1.collectionDate : stack1), depth0))
    + "</div>\r\n  <div class=\"whiteBox\" style=\"width: 128mm; height: 6mm; border: none;\"></div>\r\n  <div class=\"whiteBox\" style=\"width: 46mm; height: 6mm; border: none; line-height: 1.75; text-align: right; font-size: 4mm;\">Client MRN:</div>\r\n  <div class=\"whiteBox\" style=\"width: 40mm; height: 6mm; border: none; font-size: 3.6mm; line-height: 2; text-align: left; padding-left: 1mm;\">"
    + alias2(((helper = (helper = helpers.client_mrn_no || (depth0 != null ? depth0.client_mrn_no : depth0)) != null ? helper : alias4),(typeof helper === alias5 ? helper.call(alias3,{"name":"client_mrn_no","hash":{},"data":data}) : helper)))
    + "</div>\r\n  <div class=\"whiteBox\" style=\"width: 13.5mm; height: 6mm; border: none;\"></div>\r\n  <div class=\"whiteBox\" style=\"width: 114mm; height: 6mm; border: none; font-size: 3.6mm; line-height: 2; text-align: left; padding-bottom: 1mm;\">Full distribution list is provided at the end of the report</div>\r\n  <div class=\"whiteBox\" style=\"width: 46mm; height: 6mm; border: none; line-height: 1.75; text-align: right; font-size: 4mm; padding-bottom: 1mm;\">Client Account No:</div>\r\n  <div class=\"whiteBox\" style=\"width: 40mm; height: 6mm; border: none; font-size: 3.6mm; line-height: 2; text-align: left; padding-left: 1mm; padding-bottom: 1mm;\">"
    + alias2(((helper = (helper = helpers.client_account_no || (depth0 != null ? depth0.client_account_no : depth0)) != null ? helper : alias4),(typeof helper === alias5 ? helper.call(alias3,{"name":"client_account_no","hash":{},"data":data}) : helper)))
    + "</div>\r\n</div>\r\n";
},"useData":true});
templates['partials/references'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<div class=\"whiteBox\" style=\"color: black; width: 217mm; border: none;\">\r\n  <div class=\"whiteBox\" style=\"color: black; width: 100mm; border: none; text-align: left; font-weight: bold; text-decoration: underline;\">References</div>\r\n</div>\r\n<div class=\"whiteBox\" style=\"color: black; width: 217mm; border: none;\">\r\n  <div class=\"whiteBox\" style=\"color: black; width: 100mm; border: none; text-align: left; line-height: 1;\">"
    + container.escapeExpression(((helper = (helper = helpers.report_references || (depth0 != null ? depth0.report_references : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"report_references","hash":{},"data":data}) : helper)))
    + "</div>\r\n</div>\r\n";
},"useData":true});
templates['partials/report-distribution'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

  return "  <div class=\"whiteBox\" style=\"color: black; width: 217mm; border: none;\">\r\n    <div class=\"whiteBox\" style=\"color: black; width: 10mm; border: none; text-align: left; line-height: 1;\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.testOrderReportDistribution : depth0)) != null ? stack1.distributionType : stack1), depth0))
    + "</div>\r\n    <div class=\"whiteBox\" style=\"color: black; width: 50mm; border: none; text-align: left; line-height: 1;\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.testOrderReportDistribution : depth0)) != null ? stack1.clientName : stack1), depth0))
    + "</div>\r\n    <div class=\"whiteBox\" style=\"color: black; width: 50mm; border: none; text-align: left; line-height: 1;\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.testOrderReportDistribution : depth0)) != null ? stack1.physicianName : stack1), depth0))
    + "</div>\r\n    <div class=\"whiteBox\" style=\"color: black; width: 107mm; border: none; text-align: left; line-height: 1;\"></div>\r\n  </div>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"whiteBox\" style=\"color: black; width: 217mm; border: none; position: relative;\">\r\n  <div class=\"whiteBox\" style=\"color: black; width: 100mm; border: none; text-align: left; font-weight: bold; text-decoration: underline;\">Report Distribution</div>\r\n</div>\r\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? depth0.panelSetOrder : depth0)) != null ? stack1.testOrderReportDistributions : stack1),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"useData":true});
templates['partials/report-method'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<div class=\"whiteBox\" style=\"color: black; width: 217mm; border: none;\">\r\n  <div class=\"whiteBox\" style=\"color: black; width: 100mm; border: none; text-align: left; font-weight: bold; text-decoration: underline;\">Method</div>\r\n</div>\r\n<div class=\"whiteBox\" style=\"color: black; width: 217mm; border: none;\">\r\n  <div class=\"whiteBox\" style=\"color: black; width: 100mm; border: none; text-align: left; line-height: 1;\">"
    + container.escapeExpression(((helper = (helper = helpers.report_method || (depth0 != null ? depth0.report_method : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"report_method","hash":{},"data":data}) : helper)))
    + "</div>\r\n</div>\r\n";
},"useData":true});
templates['partials/specimen-description'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

  return "  <div class=\"whiteBox\" style=\"color: black; width: 5mm; border: none; text-align: left; line-height: 1;\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.specimenOrder : depth0)) != null ? stack1.specimenNumber : stack1), depth0))
    + ".)</div>\r\n    <div class=\"whiteBox\" style=\"color: black; width: 104mm; border: none; text-align: left; line-height: 1;\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.specimenOrder : depth0)) != null ? stack1.description : stack1), depth0))
    + "</div>\r\n    <div class=\"whiteBox\" style=\"color: black; width: 104mm; border: none; text-align: left; line-height: 1;\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.specimenOrder : depth0)) != null ? stack1.collectionDate : stack1), depth0))
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.specimenOrder : depth0)) != null ? stack1.collectionTime : stack1), depth0))
    + "</div>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"whiteBox\" style=\"color: black; width: 216mm; border: none;\">\r\n  <div class=\"whiteBox\" style=\"color: black; width: 100mm; border: none; text-align: left; font-weight: bold; text-decoration: underline;\">Specimen Description</div>\r\n  <div class=\"whiteBox\" style=\"color: black; width: 100mm; border: none; text-align: left; font-weight: bold; text-decoration: underline;\">Collection Date/Time</div>\r\n</div>\r\n<div class=\"whiteBox\" style=\"color: black; width: 217mm; border: none;\">\r\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? depth0.accessionOrder : depth0)) != null ? stack1.specimenOrders : stack1),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</div>\r\n";
},"useData":true});
templates['partials/ypi-reports'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<div class=\"whiteBox\" style=\"color: black; width: 217mm; border: none;\">\r\n  <div class=\"whiteBox\" style=\"color: black; width: 100mm; border: none; text-align: left; font-weight: bold; text-decoration: underline;\">Other Yellowstone Pathology Institute Reports</div>\r\n</div>\r\n<div class=\"whiteBox\" style=\"color: black; width: 217mm; border: none;\">\r\n  <div class=\"whiteBox\" style=\"color: black; width: 100mm; border: none; text-align: left; line-height: 1;\">"
    + container.escapeExpression(((helper = (helper = helpers.other_ypi_cases || (depth0 != null ? depth0.other_ypi_cases : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"other_ypi_cases","hash":{},"data":data}) : helper)))
    + "</div>\r\n</div>\r\n";
},"useData":true});
templates['documents/surgical/ancillary-studies'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=container.lambda, alias2=container.escapeExpression, alias3=depth0 != null ? depth0 : (container.nullContext || {}), alias4=helpers.helperMissing, alias5="function";

  return "    <div class=\"whiteBox\" style=\"width: 9mm; border: none; text-align: right; font-weight: bold;\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.specimenOrder : depth0)) != null ? stack1.specimenNumber : stack1), depth0))
    + ".</div>\r\n    <div class=\"whiteBox\" style=\"width: 205mm; border: none; text-align: left; padding-left: 1mm; font-weight: bold;;\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.specimenOrder : depth0)) != null ? stack1.description : stack1), depth0))
    + "</div>\r\n    <div class=\"whiteBox\" style=\"width: 217mm; border: none;\">\r\n      <div class=\"whiteBox\" style=\"width: 100mm; border: none; text-align: left; line-height: 1; font-weight: bold; text-decoration: underline; padding-left: 4.5mm;\">Immunohistochemistry(single)</div>\r\n    </div>\r\n    <div class=\"whiteBox\" style=\"width: 217mm; border: none;\">\r\n      <div class=\"whiteBox\" style=\"width: 100mm; border: none; text-align: left; line-height: 1; font-weight: bold; text-decoration: underline; padding-left: 4.5mm;\">Immunohistochemistry(dual)</div>\r\n    </div>\r\n    <div class=\"whiteBox\" style=\"width: 217mm; border: none;\">\r\n      <div class=\"whiteBox\" style=\"width: 100mm; border: none; text-align: left; line-height: 1; font-weight: bold; text-decoration: underline; padding-left: 4.5mm;\">Cytochemical</div>\r\n    </div>\r\n    <div class=\"whiteBox\" style=\"width: 217mm; border: none;\">\r\n      <div class=\"whiteBox\" style=\"width: 62mm; border: none;\">\r\n        <div class=\"whiteBox\" style=\"width: 60mm; border: none; text-align: left; line-height: 1; font-weight: bold; text-decoration: underline; padding-left: 10mm;\">Test</div>\r\n          <div class=\"whiteBox\" style=\"width: 60mm; border: none; text-align: left; line-height: 1; padding-left: 10mm;\">"
    + alias2(((helper = (helper = helpers.stain_description || (depth0 != null ? depth0.stain_description : depth0)) != null ? helper : alias4),(typeof helper === alias5 ? helper.call(alias3,{"name":"stain_description","hash":{},"data":data}) : helper)))
    + "</div>\r\n      </div>\r\n      <div class=\"whiteBox\" style=\"width: 16mm; border: none;\">\r\n        <div class=\"whiteBox\" style=\"width: 15mm; border: none; text-align: center; line-height: 1; font-weight: bold; text-decoration: underline; padding-right: 5mm;\">Block</div>\r\n"
    + ((stack1 = helpers.each.call(alias3,((stack1 = (depth0 != null ? depth0.specimenOrder : depth0)) != null ? stack1.aliquotOrders : stack1),{"name":"each","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "      </div>\r\n      <div class=\"whiteBox\" style=\"width: 104mm; border: none;\">\r\n        <div class=\"whiteBox\" style=\"width: 30mm; border: none; text-align: left; line-height: 1; font-weight: bold; text-decoration: underline; padding-left: 15mm;\">Result</div>\r\n          <div class=\"whiteBox\" style=\"width: 30mm; border: none; text-align: left; line-height: 1; padding-left: 4.5mm;\">"
    + alias2(((helper = (helper = helpers.stain_result || (depth0 != null ? depth0.stain_result : depth0)) != null ? helper : alias4),(typeof helper === alias5 ? helper.call(alias3,{"name":"stain_result","hash":{},"data":data}) : helper)))
    + "</div>\r\n      </div>\r\n    </div>\r\n";
},"2":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "          <div class=\"whiteBox\" style=\"width: 15mm; border: none; text-align: center; line-height: 1;;\">"
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.aliquotOrder : depth0)) != null ? stack1.label : stack1), depth0))
    + "</div>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "<div class=\"whiteBox\" style=\"width: 217mm; border: none; position: relative;\">\r\n  <div class=\"whiteBox\" style=\"width: 100mm; border: none; text-align: left; font-weight: bold; text-decoration: underline;\">Ancillary Studies</div>\r\n</div>\r\n<div class=\"whiteBox\" style=\"width: 217mm; border: none;\">\r\n  <div class=\"whiteBox\" style=\"width: 100mm; border: none; text-align: left; line-height: 1;\">"
    + container.escapeExpression(((helper = (helper = helpers.ancillary_studies_comment || (depth0 != null ? depth0.ancillary_studies_comment : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"ancillary_studies_comment","hash":{},"data":data}) : helper)))
    + "</div>\r\n</div>\r\n<div class=\"whiteBox\" style=\"width: 217mm; border: none;\">\r\n"
    + ((stack1 = helpers.each.call(alias1,((stack1 = (depth0 != null ? depth0.accessionOrder : depth0)) != null ? stack1.specimenOrders : stack1),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</div>\r\n";
},"useData":true});
templates['documents/surgical/gross-description'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<div class=\"whiteBox\" style=\"width: 217mm; border: none;\">\r\n  <div class=\"whiteBox\" style=\"width: 217mm; border: none;\">\r\n    <div class=\"whiteBox\" style=\"width: 100mm; border: none; text-align: left; font-weight: bold; text-decoration: underline;\">Gross Description</div>\r\n  </div>\r\n  <div class=\"whiteBox\" style=\"width: 217mm; border: none;\">\r\n    <div class=\"whiteBox\" style=\"width: 100mm; border: none; text-align: left; line-height: 1;\">"
    + container.escapeExpression(((helper = (helper = helpers.gross_description || (depth0 != null ? depth0.gross_description : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"gross_description","hash":{},"data":data}) : helper)))
    + "</div>\r\n  </div>\r\n</div>\r\n";
},"useData":true});
templates['documents/surgical/page'] = template({"1":function(container,depth0,helpers,partials,data,blockParams,depths) {
    return "";
},"2":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = container.invokePartial(partials["partials/header"],depth0,{"name":"partials/header","data":data,"indent":"    ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + ((stack1 = container.invokePartial(partials["partials/patient-information"],depth0,{"name":"partials/patient-information","data":data,"indent":"    ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + ((stack1 = container.invokePartial(partials["documents/surgical/surgical-diagnosis"],depth0,{"name":"documents/surgical/surgical-diagnosis","data":data,"indent":"    ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + ((stack1 = container.invokePartial(partials["partials/amendment"],depth0,{"name":"partials/amendment","data":data,"indent":"    ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + ((stack1 = container.invokePartial(partials["partials/cancer-case-study"],depth0,{"name":"partials/cancer-case-study","data":data,"indent":"    ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + ((stack1 = container.invokePartial(partials["partials/microscopic-description"],depth0,{"name":"partials/microscopic-description","data":data,"indent":"    ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + ((stack1 = container.invokePartial(partials["partials/specimen-description"],depth0,{"name":"partials/specimen-description","data":data,"indent":"    ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + ((stack1 = container.invokePartial(partials["partials/clinical-information"],depth0,{"name":"partials/clinical-information","data":data,"indent":"    ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + ((stack1 = container.invokePartial(partials["documents/surgical/ancillary-studies"],depth0,{"name":"documents/surgical/ancillary-studies","data":data,"indent":"    ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + ((stack1 = container.invokePartial(partials["partials/intraoperative-consult"],depth0,{"name":"partials/intraoperative-consult","data":data,"indent":"    ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + ((stack1 = container.invokePartial(partials["documents/surgical/gross-description"],depth0,{"name":"documents/surgical/gross-description","data":data,"indent":"    ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + ((stack1 = container.invokePartial(partials["partials/report-distribution"],depth0,{"name":"partials/report-distribution","data":data,"indent":"    ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + ((stack1 = container.invokePartial(partials["partials/footer"],depth0,{"name":"partials/footer","data":data,"indent":"    ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return ((stack1 = container.invokePartial(partials["layouts/base"],depth0,{"name":"layouts/base","hash":{"title":"Surgical"},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
},"1_d":  function(fn, props, container, depth0, data, blockParams, depths) {

  var decorators = container.decorators;

  fn = decorators.inline(fn,props,container,{"name":"inline","hash":{},"fn":container.program(2, data, 0, blockParams, depths),"inverse":container.noop,"args":["content-block"],"data":data}) || fn;
  return fn;
  }

,"useDecorators":true,"usePartial":true,"useData":true,"useDepths":true});
templates['documents/surgical/surgical-diagnosis'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=container.lambda, alias2=container.escapeExpression;

  return "      <div class=\"whiteBox\" style=\"width: 21mm; border: none; font-size: 3.5mm; line-height: 1; text-align: center; font-weight: bold;\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.specimenOrder : depth0)) != null ? stack1.specimenNumber : stack1), depth0))
    + ":</div>\r\n      <div class=\"whiteBox\" style=\"width: 190mm; border: none; font-size: 3.5mm; line-height: 1; text-align: left; padding-left: 1mm; font-weight: bold;\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.specimenOrder : depth0)) != null ? stack1.description : stack1), depth0))
    + "</div>\r\n      <div class=\"whiteBox\" style=\"width: 21mm; border: none;\"></div>\r\n      <div class=\"whiteBox\" style=\"width: 190mm; border: none; font-size: 3.5mm; line-height: 1; text-align: left; padding-left: 1mm;\">"
    + alias2(((helper = (helper = helpers.diagnosis || (depth0 != null ? depth0.diagnosis : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"diagnosis","hash":{},"data":data}) : helper)))
    + "</div>\r\n";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "      <div class=\"whiteBox\" style=\"width: 214mm; border: none;\"></div>\r\n      <div class=\"whiteBox\" style=\"width: 30mm; border: none; font-size: 3.5mm; line-height: 1; text-align: left; padding-left: 1mm; font-weight: bold;\">Comment:</div>\r\n      <div class=\"whiteBox\" style=\"width: 180mm; border: none; font-size: 3.5mm; line-height: 1; text-align: left; padding-left: 1mm;\">"
    + alias4(((helper = (helper = helpers.report_comment || (depth0 != null ? depth0.report_comment : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"report_comment","hash":{},"data":data}) : helper)))
    + "</div>\r\n      <div class=\"whiteBox\" style=\"width: 105mm; border: none;\"></div>\r\n      <div class=\"whiteBox\" style=\"width: 107mm; border: none; font-size: 3.5mm; line-height: 1; text-align: center;\">"
    + alias4(((helper = (helper = helpers.pathologist_signature || (depth0 != null ? depth0.pathologist_signature : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"pathologist_signature","hash":{},"data":data}) : helper)))
    + "</div>\r\n      <div class=\"whiteBox\" style=\"width: 105mm; border: none;\"></div>\r\n      <div class=\"whiteBox\" style=\"width: 107mm; border: none; font-size: 2.5mm; text-align: center;\">*** E-signed "
    + alias4(container.lambda(((stack1 = (depth0 != null ? depth0.accessionOrder : depth0)) != null ? stack1.finalizedDate : stack1), depth0))
    + " ***</div>\r\n      <div class=\"whiteBox\" style=\"width: 214mm; border: none;\"></div>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "<!--middle area with outlines-->\r\n<div class=\"whiteBox\" style=\"width: 215.5mm; border: solid .75mm black; border-bottom: solid .375mm black; padding: .25mm; position: relative;\">\r\n  <div class=\"whiteBox\" style=\"width: 214.5mm; border: solid .25mm black;\">\r\n    <div class=\"whiteBox\" style=\"width: 214mm; border: none; font-size: 3.5mm; line-height: 1.5; text-align: left; padding-left: 1mm; font-weight: bold;\">Diagnosis:</div>\r\n    <div class=\"whiteBox\" style=\"width: 214mm; border: none;\"></div>\r\n"
    + ((stack1 = helpers.each.call(alias1,((stack1 = (depth0 != null ? depth0.accessionOrder : depth0)) != null ? stack1.specimenOrders : stack1),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.content : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "  </div>\r\n</div>\r\n";
},"useData":true});
