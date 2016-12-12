charterAutoGallery = (function(){
var _charterGalleryCount = 0;

var createGallery = function(){
    var charterVideoUrls = [];
var createGallery = function(){};
    createGallery.videoGallery = function(videoUrls, charterPosterUrl){
        createGallery.newGallery();
        createGallery.setVideoUrls(videoUrls);
        renderGallery.videoGallery(charterVideoUrls, charterPosterUrl);
    };
    createGallery.setVideoUrls = function(videoUrls){
        var _videoUrls = Array.from(videoUrls);
      _videoUrls = _videoUrls.join("");
      var charterGalleryUrls = _videoUrls.split(' ');
      for (i = 0; i < charterGalleryUrls.length; i++) {
        charterVideoUrls.push(charterGalleryUrls[i]);
      }
    };
    createGallery.newGallery = function(){
        charterVideoUrls = [];
    return charterVideoUrls;
    
    };
    return createGallery;
};
var renderGallery = function(){
    renderGallery = function(){};
    renderGallery.videoGallery = function(charterVideoUrls, charterPosterUrl){
        _charterGalleryCount++;
        var galleryId = 'cA_gallery' + _charterGalleryCount;
        renderGallery.writeDependencies();
        renderGallery.renderGrid(galleryId);//renders grid to append items
        renderGallery.renderItems(galleryId,charterVideoUrls,charterPosterUrl);
    };
    renderGallery.writeDependencies = function(){
        //video-js.css
var charter_videojs_style = document.createElement('script');
charter_videojs_style.type = 'text/css';
charter_videojs_style.rel = 'stylesheet';
charter_videojs_style.href = 'http://vjs.zencdn.net/5.0.0/video-js.css';

///video-js.js
var charter_videojs_script = document.createElement('script');
charter_videojs_script.type = 'text/javascript';
charter_videojs_script.src = 'http://vjs.zencdn.net/5.0.0/video.js';
// tools_cmtracker.js
var charter_tools_cmtracker = document.createElement('script');
charter_tools_cmtracker.type = 'text/javascript';
charter_tools_cmtracker.src = 'http://charterauto.tv/js/tools/CMTracker.min.js';
//tools_videojs.cm
var charter_tools_videojscm = document.createElement('script');
charter_tools_videojscm.type = 'text/javascript';
charter_tools_videojscm.src = 'http://charterauto.tv/js/tools/videojs.cm.min.js';

//premiumContentLibary video-ga.js
var charter_tools_videoga = document.createElement('script');
charter_tools_videoga.type = 'text/javascript';
charter_tools_videoga.src = 'http://charterauto.tv/js/tools/premiumContentLibrary/video-ga.js';

//Google Analytics
var charter_tracking_gAload = document.createElement('script');
var charter_tracking_gAload_node = document.createTextNode('var _0xe9d5=["\x6F\x6E\x63\x6F\x6E\x74\x65\x78\x74\x6D\x65\x6E\x75","\x73\x63\x70\x6C\x75\x73\x2D\x70\x6C\x61\x79\x65\x72","\x67\x65\x74\x45\x6C\x65\x6D\x65\x6E\x74\x42\x79\x49\x64"];document[_0xe9d5[2]](_0xe9d5[1])[_0xe9d5[0]]=function (){return false;} (function(i,s,o,g,r,a,m){i["GoogleAnalyticsObject"]=r;i[r]=i[r]||function(){(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)})(window,document,"script","//www.google-analytics.com/analytics.js","ga");');

//Write links
document.getElementsByTagName('head')[0].appendChild(charter_tracking_gAload).appendChild(charter_tracking_gAload_node);
document.getElementsByTagName('head')[0].appendChild(charter_videojs_style);
document.getElementsByTagName('head')[0].appendChild(charter_videojs_script);
document.getElementsByTagName('head')[0].appendChild(charter_tools_cmtracker);
document.getElementsByTagName('head')[0].appendChild(charter_tools_videojscm);
document.getElementsByTagName('head')[0].appendChild(charter_tools_videoga);
        
    };
    renderGallery.renderGrid = function(galleryId){
        var newGallery = '<div id="' + galleryId + '" class="cA_grid"></div>';
      $(".cdk_charterAutoTv").append(newGallery);
      //console.log('grid rendered');
        
    };
    renderGallery.renderItems = function(galleryId, charterVideoUrls, charterPosterUrl){
        for (i = 0; i < charterVideoUrls.length; i++) {
        var galleryItemUrl = charterVideoUrls[i];
        var galleryItemIndex = [i];
        renderGallery.newVideoItem(galleryItemUrl, galleryItemIndex, galleryId, charterPosterUrl);
      }
    };
    renderGallery.newVideoItem = function(videoUrl, videoIndex, galleryId, charterPosterUrl){
        var videoId = videoUrl;
      var videoIndex = videoIndex;
      var galleryId = galleryId;
      var charterPosterUrl = charterPosterUrl;
      var charterAutoMixin = '<script>window.myPlayer = videojs(".scplus-player-' + videoIndex + '"); window.videoTitle = "Getting+Financing+With+Bad+Credit+Or+No+Credit+";</scr' + 'ipt><script type="text/javascript" src="//charterauto.tv/js/tools/premiumContentLibrary/video-ga.js" charset="utf-8"></scr'+'ipt>';
      var gAnalytics = "<script>ga('create', 'UA-48046390-94', 'auto', {'name': 'scplusTracker'});ga('scplusTracker.require', 'displayfeatures');ga('scplusTracker.send', 'pageview');</scr" + "ipt>";
      var videoTemplate = '<div class="charterAutoVideo">' + charterAutoMixin + gAnalytics + '<video oncontextmenu="return false;" id="scplus-player-' + videoIndex + '" data-src="http://charterauto.tv/external/play/h/' + videoId + '/t/w/" class="scplus-player-' + videoIndex + ' video-js vjs-default-skin" controls="" preload="none" width="520" height="380" poster="http://video.charterauto.tv/'+charterPosterUrl+'" data-setup="{}"><source src="http://charterauto.tv/external/play/h/' + videoId + '/t/w/" type="video/mp4"></video></div>';
      var galleryWrapper = $('#' + galleryId);
      galleryWrapper.append(videoTemplate);
      console.log('items rendered');
        
    };
    return renderGallery();
    
};



return{
    createGallery: createGallery(),
    renderGallery: renderGallery()

};
})();


