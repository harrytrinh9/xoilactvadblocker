var app;

$(document).ready(function(){
    app =  $('#app');

    closeOpeningModal();
    removeTopAdsBanner();
    removeFootBanner();
    skipVideoAds();
})


function removeTopAdsBanner(){
    //lặp cho đến khi thấy quảng cáo thì remove nó
    var i1 = setInterval(() => {
        
        var topAdsBanner = $(app).find('.container.mt-1.d-none.d-lg-block');
        if(topAdsBanner.length > 0){
            $(topAdsBanner).remove();
            clearInterval(i1);
            console.log('Xoilac TV ads blocker: top ads removed')
        }
    }, 500)
}


function closeOpeningModal(){
    var i1 = setInterval(()=>{
        var openningModal = $(app).find('#overlay');
        var closeModalBtn = $(openningModal).find('button');
        if(closeModalBtn.length > 0){
            closeModalBtn.click();
            clearInterval(i1);
            console.log('Xoilac TV ads blocker: opening modal closed')
        }
    }, 500)
}

function removeFootBanner(){
    var i1 = setInterval(() => {
        var footBanner = $(app).find('#quangcaopc');
        if(footBanner.length > 0){
            $(footBanner).remove();
            clearInterval(i1);
            console.log('Xoilac TV ads blocker: removed footbanner')
        }
    }, 500)
}

function skipVideoAds(){
    var i1 = setInterval(() => {
        var iframe = $(app).find('iframe');
        console.log('iframe count', iframe.length);
        // for (let i = 0; i < iframe.length; i++) {
            
        //     // console.log(iframe[i].contentWindow);
        //     console.log($(iframe[i]).contents().find('html'));

        //     // var frameContents = $(iframe[i]);
        //     // console.log(frameContents.contents());
        //     // var skipBtn = $(frameContents).find('.buttonSkipAds.skipAdsButton')
        //     // console.log(skipBtn);
        // }
        // iframe[0].remove();
        // iframe[2].remove();
        // iframe[3].remove();
        // var playeriFrame = iframe[0];
        // console.log(playeriFrame);
        // var skipBtn = $(playeriFrame).contents().find('.buttonSkipAds.skipAdsButton')
        // console.log(skipBtn);
    }, 500)
}