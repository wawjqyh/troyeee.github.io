var main = {
    content: "#content",
    sidebar: "#sidebar",
    backTop: "#back_to_top",
    loading: "#loading",
    error: "#error",

    saveProgress: true, // 保存阅读进度

    sidebarFile: "sidebar.md"
};

(function ($) {
    var menu = [];

    main.init = function () {
        initialize();

        initEvent();
    };

    function initEvent() {
        $("#index").on("click", function (e) {
            e.stopPropagation();
            $("#sidebar").css("left", "0");
        });

        $("#nav").on("click", function (e) {
            e.stopPropagation();
            $("#content-toc").css("right", "0");
        });

        $("#container").on("click", function () {
            if ($("body").width() < 600) {
                $("#sidebar").css("left", "-65%");
                $("#content-toc").css("right", "-65%");
            }
        })
    }

    /**
     * @desc 初始化
     */
    function initialize() {
        //侧边栏
        initSidebar();

        //回到顶部
        initBackTop();

        /*页面路由，根据hash值跳转页面*/
        router();

        $(window).on('hashchange', router);
    }

    /**
     * @desc 配置侧边栏
     */
    function initSidebar() {
        $.ajax({
            url: main.sidebarFile,
            type: "get",
            dataType: "text",
            success: function (data) {
                /*使用marked将markdown文件转html*/
                $(main.sidebar).html(marked(data));

                // 初始化内容数组
                var menuOL = $(main.sidebar + ' ol');
                menuOL.attr('start', 1);

                //配置侧边栏链接
                menuOL.find('li a').map(function () {
                    menu.push(this.href.slice(this.href.indexOf('#')));
                });
            }
        });
    }

    /**
     * 获取当前hash
     * @description 分导航和页面锚点
     * @param {string} hash 要解析的hash，默认取当前页面的hash，如： nav#类目 => {nav:nav, anchor:类目}
     * @return {Object} {nav: 导航, anchor: 页面锚点}
     */
    var getHash = function (hash) {
        hash = hash || window.location.hash.substr(1);

        if (!hash) {
            return {
                nav: '',
                anchor: ''
            }
        }

        hash = hash.split('#');
        return {
            nav: hash[0],
            anchor: decodeURIComponent(hash[1] || '')
        }
    };

    /**
     * @desc 配置回到顶部按钮
     */
    function initBackTop() {
        $(main.backTop).show();
        $(main.backTop).on('click', main.goTop);
    }

    /**
     * @desc 回到顶部
     * @param e
     */
    main.goTop = function (e) {
        if (e) {
            e.preventDefault();
        }

        $('html, body').animate({
            scrollTop: 0
        }, 200);

        history.pushState(null, null, '#' + location.hash.split('#')[1]);
    };

    /**
     * @desc 跳转到页面某一章节
     * @param sectionId
     */
    function goSection(sectionId) {
        $('html, body').animate({
            scrollTop: ($('#' + sectionId).offset().top)
        }, 300);
    }

    function replaceSymbols(text) {
        // replace symbols with underscore
        return text
            .replace(/, /g, ',')
            .replace(/[&\/\\#,.+=$~%'":*?<>{}\ \]\[]/g, "-")
            .replace(/[()]/g, '');
    }

    /**
     * @desc 创建页内的目录
     * @param li_tag
     * @param header_level
     */
    function liCreateLinkage(li_tag, header_level) {
        var html_safe_tag = replaceSymbols(li_tag.text());

        var curName = location.hash.split('#')[1] || main.index;

        li_tag.attr('data-src', html_safe_tag);
        li_tag.addClass("link");

        if (header_level === "3") {
            li_tag.addClass("toc-h3");
        }

        li_tag.click(function (e) {
            e.preventDefault();

            var eleId = main.content + " h" + header_level + "." + li_tag.attr("data-src");
            var header = $(eleId);

            $('html, body').animate({
                scrollTop: header.offset().top
            }, 200);

            //点击锚点，给相关的标题加改变颜色的动画
            var original_color = header.css("color");

            header.animate({color: "#4682BE"}, 500, function () {
                $(this).animate({color: original_color}, 2500);
            });

            history.pushState(null, null, '#' + curName + '#' + li_tag.attr('data-src'));
        });
    }

    /**
     * @desc 给页面内的标题创建锚点，鼠标移上会出现两个提示
     */
    function createPageAnchors() {
        var title = $("#content").find("h2,h3");
        var curName = location.hash.split('#')[1] || main.index;

        //给所有标题加锚点
        title.map(function () {
            var content = $(this).text();

            $(this).addClass(replaceSymbols(content));
            this.id = replaceSymbols(content);

            $(this).hover(function () {
                $(this).html(content +
                    '<a href="#' + curName +
                    '#' +
                    replaceSymbols(content) +
                    '" class="section-link"> §</a> <a href="#' +
                    curName + '" onclick="main.goTop()">⇧</a>');
            }, function () {
                $(this).html(content);
            });

            $(this).on('click', 'a.section-link', function (event) {
                event.preventDefault();
                history.pushState(null, null, '#' + curName + '#' + replaceSymbols(content));
                goSection(replaceSymbols(content));
            });
        });

        //创建目录
        var ul_tag = $('<ul></ul>')
            .addClass('content-toc')
            .attr('id', 'content-toc');

        $("#sidebarRight").html(ul_tag);


        var li_tag;
        var hType;

        for (var j = 0; j < title.length; j++) {
            hType = title[j].tagName.split("")[1];
            li_tag = $('<li></li>').html('<a href="#' + curName + '#' + title.eq(j).text() + '">' + title.eq(j).text() + '</a>');

            ul_tag.append(li_tag);

            liCreateLinkage(li_tag, hType);
        }
    }

    /**
     * @desc 改变图片的url，使图片正常显示
     */
    function normalizePaths() {
        // images
        $(main.content + " img").map(function () {
            var src = $(this).attr("src").replace("./", "");
            if ($(this).attr("src").slice(0, 4) !== "http") {
                var pathname = location.pathname.substr(0, location.pathname.length - 1);
                var url = location.hash.replace("#", "");

                // split and extract base dir
                url = url.split("/");
                var base_dir = url.slice(0, url.length - 1).toString();

                // normalize the path (i.e. make it absolute)
                $(this).attr("src", pathname + base_dir + "/" + src);
            }
        });
    }

    function showError() {
        console.log("SHOW ERORR!");
        $(main.error).show();
    }

    function showLoading() {
        var timer = null;

        $(main.loading).show();
        $(main.loading).html('');  // clear content

        // infinite loop until clearInterval() is called on loading
        timer = setInterval(function () {
            $(main.loading).fadeIn(1000).fadeOut(1000);
        }, 2000);

        return timer;
    }

    /**
     * @desc 加载页面
     */
    function router() {
        var path = location.hash.replace(/#([^#]*)(#.*)?/, './$1');

        var hashArr = location.hash.split('#');
        var sectionId;

        if (hashArr.length > 2 && !(/^comment-/.test(hashArr[2]))) {
            sectionId = hashArr[2];
        }

        if (path === "" && !main.index) {
            return;
        }

        if (path === "" && main.index)
            path = main.index + ".md";
        else
            path = path + ".md";

        // 取消scroll事件的监听函数
        // 防止改变下面的变量perc的值
        $(window).off('scroll');

        // otherwise get the markdown and render it
        //var loading = showLoading();

        $.get(path, function (data) {
            $(main.error).hide();
            $(main.content).html(marked(data));

            //normalizePaths();
            createPageAnchors();

            // 完成代码高亮
            $(main.content + ' code').map(function () {
                Prism.highlightElement(this);
            });

            var perc = main.saveProgress ? store.get('page-progress') || 0 : 0;

            if (sectionId) {
                $('html, body').animate({
                    scrollTop: ($('#' + decodeURI(sectionId)).offset().top)
                }, 300);
            } else {
                if (location.hash !== '' || Boolean(perc)) {
                    if (!Boolean(perc)) {
                        $('html, body')
                            .animate({
                                scrollTop: ($(main.content).offset().top + 10)
                            }, 300)
                            .animate({
                                scrollTop: ($(main.content).offset().top)
                            }, 300);
                    } else {
                        $('html, body').animate({
                            scrollTop: ($('body').height() - $(window).height()) * perc
                        }, 200);
                    }
                }
            }

            if (location.hash === '' || '#' + getHash().nav === menu[0]) {
                $('#pageup').css('display', 'none');
            } else {
                $('#pageup').css('display', 'inline-block');
            }

            if ('#' + getHash().nav === menu[(menu.length - 1)]) {
                $('#pagedown').css('display', 'none');
            } else {
                $('#pagedown').css('display', 'inline-block');
            }
        }).fail(function () {
            showError();
        }).always(function () {
            //clearInterval(loading);
            $(main.loading).hide();
        });
    }
})(jQuery);