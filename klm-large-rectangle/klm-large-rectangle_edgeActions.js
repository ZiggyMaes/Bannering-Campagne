/***********************
* Adobe Edge Animate Composition Actions
*
* Edit this file with caution, being careful to preserve 
* function signatures and comments starting with 'Edge' to maintain the 
* ability to interact with these actions from within Adobe Edge Animate
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // aliases for commonly used Edge classes

   //Edge symbol: 'stage'
   (function(symbolName) {
      
      
      Symbol.bindElementAction(compId, symbolName, "${Stage}", "click", function(sym, e) {
         // insert code for mouse click here
         // Navigate to a new URL in a new window
         // (replace "_blank" with appropriate target attribute)
         window.open("http://www.klm.com/", "_blank");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${bg_music}", "mouseover", function(sym, e) {
         // insert code to be run when the mouse hovers over the object
         // Play an audio track 
         
         // Set the volume of an audio track to 20% 
         sym.$("bg_music")[0].volume = 0.2;

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${sym_passengers}", "mouseout", function(sym, e) {
         // insert code to be run when the mouse is moved off the object
         // Set a toggle to turn mute on or off 
         sym.$("bg_music")[0].volume = 0.0;

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'striving_world'
   (function(symbolName) {   
   
   })("striving_world");
   //Edge symbol end:'striving_world'

   //=========================================================
   
   //Edge symbol: 'sym_bringingworld'
   (function(symbolName) {   
   
   })("sym_bringingworld");
   //Edge symbol end:'sym_bringingworld'

   //=========================================================
   
   //Edge symbol: 'sym_passengers'
   (function(symbolName) {   
   
   })("sym_passengers");
   //Edge symbol end:'sym_passengers'

   //=========================================================
   
   //Edge symbol: 'sym_efficient'
   (function(symbolName) {   
   
   })("sym_efficient");
   //Edge symbol end:'sym_efficient'

   //=========================================================
   
   //Edge symbol: 'text_innovation'
   (function(symbolName) {   
   
   })("text_innovation");
   //Edge symbol end:'text_innovation'

   //=========================================================
   
   //Edge symbol: 'text_care'
   (function(symbolName) {   
   
   })("text_care");
   //Edge symbol end:'text_care'

   //=========================================================
   
   //Edge symbol: 'text_together'
   (function(symbolName) {   
   
   })("text_together");
   //Edge symbol end:'text_together'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "klm-large-rectangle");