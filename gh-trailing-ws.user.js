var lines = document.getElementsByClassName('blob-code-inner');
for(var i=0; i<lines.length; i++) {
    var line = lines[i];
    var lastChild = line.childNodes[line.childNodes.length-1];
    var childCount = line.childNodes.length;
    if(childCount > 1 && lastChild.nodeType == lastChild.TEXT_NODE && /^\s+$/.test(lastChild.textContent)) {
        var span = document.createElement('span');
        span.className = 'x';
        span.style.backgroundColor = 'red';
        span.innerText = lastChild.textContent;
        line.insertBefore(span, lastChild);
        line.removeChild(lastChild);
    }
}
