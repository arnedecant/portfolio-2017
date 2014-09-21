var quotes = [
    ["Martin Fowler", "Any fool can write code that a computer can understand. Good programmers write code that humans can understand."],
    ["Steve McConnel", "Good code is its own best documentation. As you're about to add a comment, ask yourself, \"How can I improve the code so that this comment isn't needed?\""],
    ["Steve McConnel", "It's okay to figure out murder mysteries, but you shouldn't need to figure out code. You should be able to read it."],
    ["Paul Graham", "When you catch bugs early, you also get fewer compound bugs. Compound bugs are two separate bugs that interact: you trip going downstairs and when you reach for the handrail it comes off in your hand."],
    ["Jakob Nielsen", "Usability rules the Web. Simply stated, if the customer can’t find a product, then he or she will not buy it."],
    ["Robert Stuberg", "The trouble with so many of us is that we underestimate the power of simplicity."],
    ["Paul Heckel", "Because every person knows what he likes, every person thinks he is an expert on user interfaces."],
    ["Jakob Nielsen", "A bad website is like a grumpy sales person."],
    ["Eugene Sheely", "When you have a game like platform where knowledge is applied, knowledge becomes a resource. The more you know, the better you are at the game."],
    ["Yu Kai Chou", "Gamification is design that places the most emphasis on the human in the process. In essence, it is human-focused design."]
];

var css = "";
var quote = "";
var firstcss = "";
var secondcss = "";
var thirdcss = "";

//205 per hex

$(document).ready(function () {
    $(".showcase .hex").each(function () {
        animationHover(this, 'bounceIn');
    });

    var initAmount = Math.ceil($(window).width() / 205) + 5;
    var initLines = Math.ceil($(window).height() / 205) + 5;
    
    //alert($(window).width() + " " + $(window).height());
    //alert(initAmount + " " + initLines);

    if ($(window).width() > 1270) {
        generateHexes(initLines, initAmount);
        window.setInterval(bubbleHex, 50);
    }

    $(".callout .vert-text .container").append(quote());
    
});

function bubbleHex() {
    var random = Math.floor(Math.random() * 1000);

    var $hex = $(".hexbg .hex");
    var $currenthex = $hex.eq(random % $hex.length);

    //$newclass = randomColor();
    //if ($currenthex.hasClass("primary")) { $currenthex.removeClass("primary"); $currenthex.addClass($newclass); }
    //if ($currenthex.hasClass("secondary")) { $currenthex.removeClass("secondary"); $currenthex.addClass($newclass); }
    //if ($currenthex.hasClass("tertiary")) { $currenthex.removeClass("tertiary"); $currenthex.addClass($newclass); }

    $currenthex.addClass("animated bounceIn");
    
    window.setTimeout(function () {
        $currenthex.removeClass("animated bounceIn");
    }, 1000);
}

function animationHover(element, animation) {
    element = $(element);
    element.hover(
      function () {
          element.addClass("animated " + animation);
      },
      function () {
          //wait for animation to finish before removing classes
          window.setTimeout(function () {
              element.removeClass("animated " + animation);
          }, 1000);
      }
    );
}

function randomQuote() {
    //test
}

var color = function () {
    css = randomColor();

    if (css != thirdcss) {
        firstcss = css;
        secondcss = firstcss;
        thirdcss = secondcss;

        return css;
    } else {
        css = color();
    }

    return css;
}

function randomColor() {
    var random = Math.floor(Math.random() * 3 + 1);
    var css = "";

    switch (random) {
        case 1:
            css = "primary";
            break;
        case 2:
            css = "secondary";
            break;
        case 3:
            css = "tertiary";
            break;
    }

    return css;
}

function generateHexes(amountlines, amounthexes) {

    var html = "";

    html += "<div class='list-hex-grid list-inline-block clearfix'>";

    for (i = 0; i < amountlines; i++) {
        if (i % 2 == 0) {
            html += addHexLine(amounthexes);
        } else {
            html += addHexLine(amounthexes - 1);
        }
    }

    html += "</div>";

    $(".hexbg").append(html);
}

function addHexLine(amounthexes) {
    var html = "";

    for (j = 0; j < amounthexes; j++) {
        html += "<div class='hex grid-3 " + color() + "'>";
        html += "<a href='#'>";
        html += "<div class='hex-1'><span class='after'></span></div>";
        html += "<div class='hex-2'><span class='after'></span></div>";
        html += "<span class='after'></span>";
        html += "</a>";
        html += "</div>";
    }

    html += "<br class='mq-wide' />";

    return html;
}

var quote = function(){
    var random = Math.floor(Math.random() * quotes.length);
    var html = "";

    html += "<blockquote>";
    html += quotes[random][1];
    html += "<cite>";
    html += quotes[random][0]
    html += "</cite></blockquote>"

    return html;
}