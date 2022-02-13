var OriginTitle = document.title;
var titleTime;
document.addEventListener('visibilitychange', function () {
    if (document.hidden) {
        $('[rel="icon"]').attr('href', "https://i.loli.net/2020/12/20/BZhvzONd8lgoFAI.png");
        document.title = 'ヾ(❀╹◡╹)ﾉ~请别走';
        clearTimeout(titleTime);
    }
    else {
        $('[rel="icon"]').attr('href', "https://i.loli.net/2020/12/20/BZhvzONd8lgoFAI.png");
        document.title = '（*＾ワ＾*）❤你' + OriginTitle;
        titleTime = setTimeout(function () {
            document.title = OriginTitle;
        }, 2000);
    }
});