﻿var quotes = [
    ["Martin Fowler","Any fool can write code that a computer can understand. Good programmers write code that humans can understand."],
    ["Steve McConnel", "Good code is its own best documentation. As you're about to add a comment, ask yourself, \"How can I improve the code so that this comment isn't needed?\""],
    ["Steve McConnel", "It's okay to figure out murder mysteries, but you shouldn't need to figure out code. You should be able to read it."],
    ["Paul Graham", "When you catch bugs early, you also get fewer compound bugs. Compound bugs are two separate bugs that interact: you trip going downstairs, and when you reach for the handrail it comes off in your hand."],
    ["Jakob Nielsen", "Usability rules the Web. Simply stated, if the customer can’t find a product, then he or she will not buy it."],
    ["Robert Stuberg", "The trouble with so many of us is that we underestimate the power of simplicity."],
    ["Paul Heckel", "Because every person knows what he likes, every person thinks he is an expert on user interfaces."],
    ["Jakob Nielsen", "A bad website is like a grumpy sales person."],
    ["Eugene Sheely", "When you have a game like platform where knowledge is applied, knowledge becomes a resource. The more you know, the better you are at the game."],
    ["Yu Kai Chou", "Gamification is design that places the most emphasis on the human in the process. In essence, it is human-focused design."]
];

$(document).ready(function () {
    $('.hex').each(function () {
        animationHover(this, 'bounceIn');
    });
});

function animationHover(element, animation) {
    element = $(element);
    element.hover(
      function () {
          element.addClass('animated ' + animation);
      },
      function () {
          //wait for animation to finish before removing classes
          window.setTimeout(function () {
              element.removeClass('animated ' + animation);
          }, 1000);
      }
    );
};

function randomQuote() {

}