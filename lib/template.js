var Handlebars = require("handlebars");module.exports = Handlebars.template({"1":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, options, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, buffer = 
  "    <test-suite type=\"Assembly\" name=\""
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data,"loc":{"start":{"line":4,"column":38},"end":{"line":4,"column":46}}}) : helper)))
    + "\" start-time=\""
    + alias4(((helper = (helper = helpers.startTime || (depth0 != null ? depth0.startTime : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"startTime","hash":{},"data":data,"loc":{"start":{"line":4,"column":60},"end":{"line":4,"column":73}}}) : helper)))
    + "\" end-time=\""
    + alias4(((helper = (helper = helpers.endTime || (depth0 != null ? depth0.endTime : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"endTime","hash":{},"data":data,"loc":{"start":{"line":4,"column":85},"end":{"line":4,"column":96}}}) : helper)))
    + "\">\n";
  stack1 = ((helper = (helper = helpers.testCases || (depth0 != null ? depth0.testCases : depth0)) != null ? helper : alias2),(options={"name":"testCases","hash":{},"fn":container.program(2, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":5,"column":8},"end":{"line":27,"column":22}}}),(typeof helper === alias3 ? helper.call(alias1,options) : helper));
  if (!helpers.testCases) { stack1 = container.hooks.blockHelperMissing.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  return buffer + "    </test-suite>\n";
},"2":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "        <test-case name=\""
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data,"loc":{"start":{"line":6,"column":25},"end":{"line":6,"column":33}}}) : helper)))
    + "\" fullname=\""
    + alias4(container.lambda((depths[1] != null ? depths[1].name : depths[1]), depth0))
    + " - "
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data,"loc":{"start":{"line":6,"column":59},"end":{"line":6,"column":67}}}) : helper)))
    + "\" result=\""
    + alias4(((helper = (helper = helpers.result || (depth0 != null ? depth0.result : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"result","hash":{},"data":data,"loc":{"start":{"line":6,"column":77},"end":{"line":6,"column":87}}}) : helper)))
    + "\" duration=\""
    + alias4(((helper = (helper = helpers.duration || (depth0 != null ? depth0.duration : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"duration","hash":{},"data":data,"loc":{"start":{"line":6,"column":99},"end":{"line":6,"column":111}}}) : helper)))
    + "\">\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.hasFailureData : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":7,"column":12},"end":{"line":16,"column":19}}})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.testRunInfo : depth0)) != null ? stack1.screenshots : stack1),{"name":"if","hash":{},"fn":container.program(5, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":17,"column":12},"end":{"line":25,"column":19}}})) != null ? stack1 : "")
    + "        </test-case>\n";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function";

  return "            <failure>\n                <message>\n                    <![CDATA["
    + ((stack1 = ((helper = (helper = helpers.errorMessage || (depth0 != null ? depth0.errorMessage : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"errorMessage","hash":{},"data":data,"loc":{"start":{"line":10,"column":29},"end":{"line":10,"column":47}}}) : helper))) != null ? stack1 : "")
    + "]]>\n                </message>\n                <stack-trace>\n                    <![CDATA["
    + ((stack1 = ((helper = (helper = helpers.formattedErrorMessage || (depth0 != null ? depth0.formattedErrorMessage : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"formattedErrorMessage","hash":{},"data":data,"loc":{"start":{"line":13,"column":29},"end":{"line":13,"column":56}}}) : helper))) != null ? stack1 : "")
    + "]]>\n                </stack-trace>\n            </failure>\n";
},"5":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "            <attachments>\n"
    + ((stack1 = container.hooks.blockHelperMissing.call(depth0,container.lambda(((stack1 = (depth0 != null ? depth0.testRunInfo : depth0)) != null ? stack1.screenshots : stack1), depth0),{"name":"testRunInfo.screenshots","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":19,"column":16},"end":{"line":23,"column":44}}})) != null ? stack1 : "")
    + "            </attachments>\n";
},"6":function(container,depth0,helpers,partials,data) {
    var helper;

  return "                <attachment>\n                    <filePath>"
    + container.escapeExpression(((helper = (helper = helpers.screenshotPath || (depth0 != null ? depth0.screenshotPath : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"screenshotPath","hash":{},"data":data,"loc":{"start":{"line":21,"column":30},"end":{"line":21,"column":48}}}) : helper)))
    + "</filePath>\n                </attachment>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, options, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, buffer = 
  "<?xml version=\"1.0\" encoding=\"UTF-8\" ?>\n<test-run id=\"2\" name=\"TestCafe Tests\" start-time=\""
    + alias4(((helper = (helper = helpers.startTime || (depth0 != null ? depth0.startTime : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"startTime","hash":{},"data":data,"loc":{"start":{"line":2,"column":51},"end":{"line":2,"column":64}}}) : helper)))
    + "\" end-time=\""
    + alias4(((helper = (helper = helpers.endTime || (depth0 != null ? depth0.endTime : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"endTime","hash":{},"data":data,"loc":{"start":{"line":2,"column":76},"end":{"line":2,"column":87}}}) : helper)))
    + "\">\n";
  stack1 = ((helper = (helper = helpers.fixtures || (depth0 != null ? depth0.fixtures : depth0)) != null ? helper : alias2),(options={"name":"fixtures","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":3,"column":4},"end":{"line":29,"column":17}}}),(typeof helper === alias3 ? helper.call(alias1,options) : helper));
  if (!helpers.fixtures) { stack1 = container.hooks.blockHelperMissing.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  return buffer + "</test-run>";
},"useData":true,"useDepths":true});