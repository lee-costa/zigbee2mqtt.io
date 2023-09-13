"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[85781],{932536:(e,t,o)=>{o.r(t),o.d(t,{data:()=>i});const i=JSON.parse('{"key":"v-e69c2fb6","path":"/devices/ZB-Sm.html","title":"TuYa ZB-Sm control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"TuYa ZB-Sm control via MQTT","description":"Integrate your TuYa ZB-Sm via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2022-07-01T08:15:09.000Z"},"excerpt":"","headers":[{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Cover","slug":"cover","link":"#cover","children":[]},{"level":3,"title":"Goto positon (enum)","slug":"goto-positon-enum","link":"#goto-positon-enum","children":[]},{"level":3,"title":"Motor state (enum)","slug":"motor-state-enum","link":"#motor-state-enum","children":[]},{"level":3,"title":"Active power (numeric)","slug":"active-power-numeric","link":"#active-power-numeric","children":[]},{"level":3,"title":"Cycle count (numeric)","slug":"cycle-count-numeric","link":"#cycle-count-numeric","children":[]},{"level":3,"title":"Cycle time (numeric)","slug":"cycle-time-numeric","link":"#cycle-time-numeric","children":[]},{"level":3,"title":"Top limit (enum)","slug":"top-limit-enum","link":"#top-limit-enum","children":[]},{"level":3,"title":"Bottom limit (enum)","slug":"bottom-limit-enum","link":"#bottom-limit-enum","children":[]},{"level":3,"title":"Favorite position (numeric)","slug":"favorite-position-numeric","link":"#favorite-position-numeric","children":[]},{"level":3,"title":"Reverse direction (binary)","slug":"reverse-direction-binary","link":"#reverse-direction-binary","children":[]},{"level":3,"title":"Motor type (text)","slug":"motor-type-text","link":"#motor-type-text","children":[]},{"level":3,"title":"Report (enum)","slug":"report-enum","link":"#report-enum","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1694626990000},"filePathRelative":"devices/ZB-Sm.md"}')},784112:(e,t,o)=>{o.r(t),o.d(t,{default:()=>p});var i=o(166252);const a=(0,i._)("h1",{id:"tuya-zb-sm",tabindex:"-1"},[(0,i._)("a",{class:"header-anchor",href:"#tuya-zb-sm","aria-hidden":"true"},"#"),(0,i.Uk)(" TuYa ZB-Sm")],-1),d=(0,i._)("thead",null,[(0,i._)("tr",null,[(0,i._)("th"),(0,i._)("th")])],-1),c=(0,i._)("tr",null,[(0,i._)("td",null,"Model"),(0,i._)("td",null,"ZB-Sm")],-1),r=(0,i._)("td",null,"Vendor",-1),n=(0,i._)("tr",null,[(0,i._)("td",null,"Description"),(0,i._)("td",null,"Tubular motor")],-1),l=(0,i._)("tr",null,[(0,i._)("td",null,"Exposes"),(0,i._)("td",null,"cover (state, position), goto_positon, motor_state, active_power, cycle_count, cycle_time, top_limit, bottom_limit, favorite_position, reverse_direction, motor_type, report, linkquality")],-1),s=(0,i._)("tr",null,[(0,i._)("td",null,"Picture"),(0,i._)("td",null,[(0,i._)("img",{src:"https://www.zigbee2mqtt.io/images/devices/ZB-Sm.jpg",alt:"TuYa ZB-Sm"})])],-1),u=(0,i.uE)('<h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="cover" tabindex="-1"><a class="header-anchor" href="#cover" aria-hidden="true">#</a> Cover</h3><p>The current state of this cover is in the published state under the <code>state</code> property (value is <code>OPEN</code> or <code>CLOSE</code>). To control this cover publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state&quot;: &quot;OPEN&quot;}</code>, <code>{&quot;state&quot;: &quot;CLOSE&quot;}</code>, <code>{&quot;state&quot;: &quot;STOP&quot;}</code>. It&#39;s not possible to read (<code>/get</code>) this value. To change the position publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;position&quot;: VALUE}</code> where <code>VALUE</code> is a number between <code>0</code> and <code>100</code>.</p><h3 id="goto-positon-enum" tabindex="-1"><a class="header-anchor" href="#goto-positon-enum" aria-hidden="true">#</a> Goto positon (enum)</h3><p>Value will <strong>not</strong> be published in the state. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;goto_positon&quot;: NEW_VALUE}</code>. The possible values are: <code>25</code>, <code>50</code>, <code>75</code>, <code>FAVORITE</code>.</p><h3 id="motor-state-enum" tabindex="-1"><a class="header-anchor" href="#motor-state-enum" aria-hidden="true">#</a> Motor state (enum)</h3><p>Value can be found in the published state on the <code>motor_state</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>OPENING</code>, <code>CLOSING</code>, <code>STOPPED</code>.</p><h3 id="active-power-numeric" tabindex="-1"><a class="header-anchor" href="#active-power-numeric" aria-hidden="true">#</a> Active power (numeric)</h3><p>Active power. Value can be found in the published state on the <code>active_power</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>mWt</code>.</p><h3 id="cycle-count-numeric" tabindex="-1"><a class="header-anchor" href="#cycle-count-numeric" aria-hidden="true">#</a> Cycle count (numeric)</h3><p>Cycle count. Value can be found in the published state on the <code>cycle_count</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value.</p><h3 id="cycle-time-numeric" tabindex="-1"><a class="header-anchor" href="#cycle-time-numeric" aria-hidden="true">#</a> Cycle time (numeric)</h3><p>Cycle time. Value can be found in the published state on the <code>cycle_time</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>ms</code>.</p><h3 id="top-limit-enum" tabindex="-1"><a class="header-anchor" href="#top-limit-enum" aria-hidden="true">#</a> Top limit (enum)</h3><p>Setup or clear top limit. Value can be found in the published state on the <code>top_limit</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;top_limit&quot;: NEW_VALUE}</code>. The possible values are: <code>SET</code>, <code>CLEAR</code>.</p><h3 id="bottom-limit-enum" tabindex="-1"><a class="header-anchor" href="#bottom-limit-enum" aria-hidden="true">#</a> Bottom limit (enum)</h3><p>Setup or clear bottom limit. Value can be found in the published state on the <code>bottom_limit</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;bottom_limit&quot;: NEW_VALUE}</code>. The possible values are: <code>SET</code>, <code>CLEAR</code>.</p><h3 id="favorite-position-numeric" tabindex="-1"><a class="header-anchor" href="#favorite-position-numeric" aria-hidden="true">#</a> Favorite position (numeric)</h3><p>Favorite position of this cover. Value can be found in the published state on the <code>favorite_position</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;favorite_position&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>100</code>.</p><h3 id="reverse-direction-binary" tabindex="-1"><a class="header-anchor" href="#reverse-direction-binary" aria-hidden="true">#</a> Reverse direction (binary)</h3><p>Inverts the cover direction. Value can be found in the published state on the <code>reverse_direction</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;reverse_direction&quot;: NEW_VALUE}</code>. If value equals <code>true</code> reverse direction is ON, if <code>false</code> OFF.</p><h3 id="motor-type-text" tabindex="-1"><a class="header-anchor" href="#motor-type-text" aria-hidden="true">#</a> Motor type (text)</h3><p>Value can be found in the published state on the <code>motor_type</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value.</p><h3 id="report-enum" tabindex="-1"><a class="header-anchor" href="#report-enum" aria-hidden="true">#</a> Report (enum)</h3><p>Value will <strong>not</strong> be published in the state. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;report&quot;: NEW_VALUE}</code>. The possible values are: ``.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',27),h={},p=(0,o(983744).Z)(h,[["render",function(e,t){const o=(0,i.up)("RouterLink");return(0,i.wg)(),(0,i.iD)("div",null,[(0,i.kq)(" !!!! "),(0,i.kq)(" ATTENTION: This file is auto-generated through docgen! "),(0,i.kq)(' You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". '),(0,i.kq)(' Do not use h1 or h2 heading within "## Notes"-Section. '),(0,i.kq)(" !!!! "),a,(0,i._)("table",null,[d,(0,i._)("tbody",null,[c,(0,i._)("tr",null,[r,(0,i._)("td",null,[(0,i.Wm)(o,{to:"/supported-devices/#v=TuYa"},{default:(0,i.w5)((()=>[(0,i.Uk)("TuYa")])),_:1})])]),n,l,s])]),(0,i.kq)(' Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. '),(0,i.kq)(" Notes END: Do not edit below this line "),u])}]])}}]);