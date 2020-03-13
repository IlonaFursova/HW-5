function loader (l) {
     console.clear();
     console.log(l.dots[l.counter]);
l.counter++;
if (l.counter == l.dots.length) {
    l.counter = 0;
}
}
setInterval(loader, 1000, {dots : ['^', '˃', '̬˅', '˂', '✁', '✃', '↟', '↠', '↡', '↞'], counter: 0});