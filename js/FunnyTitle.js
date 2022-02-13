var OriginTitle = document.title;
var titleTime;
document.addEventListener('visibilitychange', function () {
    if (document.hidden) {
        $('[rel="icon"]').attr('href', "https://s2.loli.net/2022/02/13/6wfNMdVZR4XpPmi.png");
        document.title = 'ヾ(❀╹◡╹)ﾉ~请别走';
        clearTimeout(titleTime);
    }
    else {
        $('[rel="icon"]').attr('href', "https://s2.loli.net/2022/02/13/6wfNMdVZR4XpPmi.png");
        document.title = '（*＾ワ＾*）❤' + OriginTitle;
        titleTime = setTimeout(function () {
            document.title = OriginTitle;
        }, 2000);
    }
});